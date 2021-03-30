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
      <p>Name: {details.studentName}</p>
      <p>Class: {details.studentClassName}</p>
      <p>Roll no: {details.studentRollNo}</p>
      <p>Address: {details.studentAddress}</p>
      <p>Guardian Name: {details.studentGuardianName}</p>
      <p>Contact Number: {details.studentPhoneNumber}</p>
      <section className="control-buttons">
        <button>Edit</button>
        <button>Delete</button>
      </section>
    </Fragment>
  );
};

export default StudentDetailsPage;
