import { Fragment, useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import { deleteStudent } from "../actions/studentActions";
import DeleteConfirmPopup from "../components/DeleteConfirmPopup";
import Backdrop from "../components/Backdrop";
import overflowToggler from "../utils/OverflowToggler";
import Detail from "../components/Detail";
import db from "../firebase/db";
import Loader from "../components/Loader";
import * as studentActions from "../redux/student/studentActions";
import { connect } from "react-redux";

const StudentDetailsPage = ({ DELETE_STUDENT }) => {
  const [details, setDetails] = useState([]);
  const [showDeletePopup, setShowDeletePopup] = useState(false);
  const [showEditButtons, setShowEditButtons] = useState(false);
  const [studentName, setStudentName] = useState("");
  const [loading, setLoading] = useState(true);
  const params = useParams();
  const history = useHistory();

  useEffect(() => {
    db.collection("students")
      .doc(params.studentId)
      .onSnapshot((doc) => {
        setStudentName(doc.data()?.Name);
        const data = doc.data() ? Object.entries(doc.data()) : [];
        const filteredData = [];
        for (let e in data) {
          //push every entries except linked username property
          if (data[e][0] !== "linkedUsername") {
            filteredData.push(data[e]);
          }
        }
        setDetails(filteredData);
        setLoading(false);
      });
  }, [params.studentId]);

  const toggleModal = (modalFunc) => {
    overflowToggler();
    modalFunc((prev) => !prev);
  };

  const deleteStudentConfirm = () => {
    overflowToggler();
    DELETE_STUDENT(params.studentId);
    history.goBack();
  };

  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <h4>{studentName} Details</h4>
          <img src="https://bit.ly/3m1Ny2x" className="avatar--image" />
          {/*dynamic data mapping*/}
          {details.map((detail, i) => {
            return (
              <Detail
                propertyName={detail[0]}
                propertyValue={detail[1]}
                key={i}
                showEditButtons={showEditButtons}
                personId={params.studentId}
              />
            );
          })}
          <section className="control-buttons">
            <button onClick={() => setShowEditButtons((prev) => !prev)}>Edit</button>
            <button onClick={() => toggleModal(setShowDeletePopup)}>Delete</button>
          </section>

          {showDeletePopup ? (
            <Fragment>
              <DeleteConfirmPopup
                toggle={() => toggleModal(setShowDeletePopup)}
                Delete={deleteStudentConfirm}
                Name={studentName}
              />
              <Backdrop toggle={() => toggleModal(setShowDeletePopup)} />
            </Fragment>
          ) : null}
        </Fragment>
      )}
    </Fragment>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    DELETE_STUDENT: (studentId) => dispatch(studentActions.DELETE_STUDENT(studentId)),
  };
};

export default connect(null, mapDispatchToProps)(StudentDetailsPage);
