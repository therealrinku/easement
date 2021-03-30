import { Fragment, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getStaffDetails } from "../actions/staffActions";

const StaffDetailsPage = () => {
  const [details, setDetails] = useState({});
  const params = useParams();

  useEffect(() => {
    getStaffDetails(params.staffId).then((data) => {
      setDetails(data);
    });
  }, [params.studentId]);

  return (
    <Fragment>
      <h4>Staff Details</h4>
      <img src="https://bit.ly/3m1Ny2x" className="avatar--image" />
      <p>Name: {details.staffName}</p>
      <p>Role: {details.staffRole}</p>
      <p>Salary: {details.staffSalary}</p>
      <p>Address: {details.staffAddress}</p>
      <p>Contact Number: {details.staffContactNumber}</p>
    </Fragment>
  );
};

export default StaffDetailsPage;
