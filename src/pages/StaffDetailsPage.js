import { Fragment, useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import { deleteStaff, getStaffDetails } from "../actions/staffActions";
import DeleteConfirmPopup from "../components/DeleteConfirmPopup";
import Backdrop from "../components/Backdrop";
import overflowToggler from "../utils/OverflowToggler";
import AddStaffForm from "../components/AddStaffForm";

const StaffDetailsPage = () => {
  const [details, setDetails] = useState({});
  const [showDeletePopup, setShowDeletePopup] = useState(false);
  const [showEditPopup, setShowEditPopup] = useState(false);
  const params = useParams();
  const history = useHistory();

  useEffect(() => {
    getStaffDetails(params.staffId).then((data) => {
      setDetails(data);
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
      <p>Name: {details.staffName}</p>
      <p>Role: {details.staffRole}</p>
      <p>Salary: {details.staffSalary}</p>
      <p>Address: {details.staffAddress}</p>
      <p>Contact Number: {details.staffContactNumber}</p>
      <section className="control-buttons">
        <button onClick={() => toggleModal(setShowEditPopup)}>Edit</button>
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

      {showEditPopup ? (
        <Fragment>
          <AddStaffForm
            {...details}
            toggle={() => toggleModal(setShowEditPopup)}
            Update={true}
          />
          <Backdrop toggle={() => toggleModal(setShowEditPopup)} />
        </Fragment>
      ) : null}
    </Fragment>
  );
};

export default StaffDetailsPage;
