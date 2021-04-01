import { Fragment, useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import { deleteStaff, getStaffDetails } from "../actions/staffActions";
import DeleteConfirmPopup from "../components/DeleteConfirmPopup";
import Backdrop from "../components/Backdrop";
import overflowToggler from "../utils/OverflowToggler";
import Detail from "../components/Detail";

const StaffDetailsPage = () => {
  const [details, setDetails] = useState([]);
  const [showDeletePopup, setShowDeletePopup] = useState(false);
  const [showEditButtons, setShowEditButtons] = useState(false);
  const params = useParams();
  const history = useHistory();

  useEffect(() => {
    getStaffDetails(params.staffId).then((data) => {
      setDetails(data ? Object.entries(data) : []);
    });
  }, [params.studentId]);

  const toggleModal = (modalFunc) => {
    overflowToggler();
    modalFunc((prev) => !prev);
  };

  const deleteStaffConfirm = () => {
    deleteStaff(params.staffId).then((res) => {
      if (res === "done") {
        history.goBack();
      }
    });
  };

  return (
    <Fragment>
      <h4>Staff Details</h4>
      <img src="https://bit.ly/3m1Ny2x" className="avatar--image" />
      {/*dynamic data mapping*/}
      {details.map((detail, i) => {
        return (
          <Detail
            propertyName={detail[0]}
            propertyValue={detail[1]}
            key={i}
            showEditButtons={showEditButtons}
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
            name={details.staffName}
            Delete={deleteStaffConfirm}
          />
          <Backdrop toggle={() => toggleModal(setShowDeletePopup)} />
        </Fragment>
      ) : null}
    </Fragment>
  );
};

export default StaffDetailsPage;
