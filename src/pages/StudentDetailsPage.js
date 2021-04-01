import { Fragment, useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import { deleteStudent, getStudentDetails } from "../actions/studentActions";
import DeleteConfirmPopup from "../components/DeleteConfirmPopup";
import Backdrop from "../components/Backdrop";
import overflowToggler from "../utils/OverflowToggler";
import { GrEdit } from "react-icons/all";

const StudentDetailsPage = () => {
  const [details, setDetails] = useState([]);
  const [showDeletePopup, setShowDeletePopup] = useState(false);
  const [showEditPopup, setShowEditPopup] = useState(false);
  const params = useParams();
  const history = useHistory();

  useEffect(() => {
    getStudentDetails(params.studentId).then((data) => {
      setDetails(data ? Object.entries(data) : []);
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
          <div
            key={i}
            style={{
              display: "flex",
              flexDirection: "row",
            }}
          >
            <p style={{ fontSize: "15px" }}>
              {detail[0]}:{detail[1]}
            </p>
            <button className="edit--field-btn">
              <GrEdit />
            </button>
          </div>
        );
      })}
      <section className="control-buttons">
        <button onClick={() => toggleModal(setShowEditPopup)}>Edit</button>
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

      {showEditPopup ? (
        <Fragment>
          <Backdrop toggle={() => toggleModal(setShowEditPopup)} />
        </Fragment>
      ) : null}
    </Fragment>
  );
};

export default StudentDetailsPage;
