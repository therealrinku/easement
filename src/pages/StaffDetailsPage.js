import { Fragment, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getStaffDetails } from "../actions/staffActions";
import DeleteConfirmPopup from "../components/DeleteConfirmPopup";
import Backdrop from "../components/Backdrop";
import overflowToggler from "../utils/OverflowToggler";

const StaffDetailsPage = () => {
  const [details, setDetails] = useState({});
  const [showDeletePopup, setShowDeletePopup] = useState(false);
  const params = useParams();

  useEffect(() => {
    getStaffDetails(params.staffId).then((data) => {
      setDetails(data);
    });
  }, [params.studentId]);

  const toggleModal = (modalFunc) => {
    overflowToggler();
    modalFunc((prev) => !prev);
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
        <button>Edit</button>
        <button onClick={() => toggleModal(setShowDeletePopup)}>Delete</button>
      </section>

      {showDeletePopup ? (
        <Fragment>
          <DeleteConfirmPopup
            toggle={() => toggleModal(setShowDeletePopup)}
            name={details.staffName}
          />
          <Backdrop />
        </Fragment>
      ) : null}
    </Fragment>
  );
};

export default StaffDetailsPage;
