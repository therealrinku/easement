import { Fragment, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getStudentDetails } from "../actions/studentActions";

const StudentDetailsPage = () => {
  const [details, setDetails] = useState({});
  const params = useParams();

  useEffect(() => {
    getStudentDetails(params.studentId).then((data) => {
      setDetails(data);
    });
  }, [params.studentId]);

  return (
    <Fragment>
      <h4>Student Details</h4>
      <img src="https://bit.ly/3m1Ny2x" className="avatar--image" />
      <p>Student Name: {details.studentName}</p>
      <p>Student Class: {details.studentClassName}</p>
      <p>Student Roll no: {details.studentRollNo}</p>
      <p>Student Address: {details.studentAddress}</p>
      <p>Student Guardian Name: {details.studentGuardianName}</p>
      <p>Student Contact Number: {details.studentPhoneNumber}</p>
    </Fragment>
  );
};

export default StudentDetailsPage;
