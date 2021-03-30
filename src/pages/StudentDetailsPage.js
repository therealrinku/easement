import { Fragment, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import db from "../firebase/db";

const DetailsPage = () => {
  const [details, setDetails] = useState({});
  const params = useParams();
  console.log(params.studentId);

  useEffect(() => {
    db.collection("students")
      .doc(params.studentId)
      .get()
      .then((doc) => {
        setDetails(doc.data());
      });
  }, [params.studentId]);

  console.log(details);

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

export default DetailsPage;
