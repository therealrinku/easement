import { Fragment, useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import { deleteStudent } from "../actions/studentActions";
import DeleteConfirmPopup from "../components/DeleteConfirmPopup";
import Backdrop from "../components/Backdrop";
import overflowToggler from "../utils/OverflowToggler";
import Detail from "../components/Detail";
import db from "../firebase/db";

const StudentDetailsPage = () => {
  const [details, setDetails] = useState([]);
  const [showDeletePopup, setShowDeletePopup] = useState(false);
  const [showEditButtons, setShowEditButtons] = useState(false);
  const params = useParams();
  const history = useHistory();

  useEffect(() => {
    db.collection("students")
      .doc(params.studentId)
      .onSnapshot((doc) => {
        const data = doc.data() ? Object.entries(doc.data()) : [];
        const filteredData = [];
        for (let e in data) {
          //push every entries except linked username property
          if (data[e][0] !== "linkedUsername") {
            filteredData.push(data[e]);
          }
        }
        setDetails(filteredData);
      });
  }, [params.studentId]);

  const toggleModal = (modalFunc) => {
    overflowToggler();
    modalFunc((prev) => !prev);
  };

  const deleteStudentConfirm = () => {
    overflowToggler();
    deleteStudent(params.studentId).then((res) => {
      if (res === "done") {
        history.goBack();
      }
    });
  };

  return (
    <Fragment>
      <h4>Student Details</h4>
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
        <button onClick={() => setShowEditButtons((prev) => !prev)}>
          Edit
        </button>
        <button onClick={() => toggleModal(setShowDeletePopup)}>Delete</button>
      </section>

      {showDeletePopup ? (
        <Fragment>
          <DeleteConfirmPopup
            toggle={() => toggleModal(setShowDeletePopup)}
            name={details.studentName}
            Delete={deleteStudentConfirm}
          />
          <Backdrop toggle={() => toggleModal(setShowDeletePopup)} />
        </Fragment>
      ) : null}
    </Fragment>
  );
};

export default StudentDetailsPage;
