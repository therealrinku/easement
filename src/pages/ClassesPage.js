import { Fragment, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import db from "../firebase/db";

const ClassesPage = () => {
  const [classes, setClasses] = useState([]);

  useEffect(() => {
    db.collection("classes")
      .where("linkedUsername", "==", "test")
      .onSnapshot((snap) => {
        const data = [];
        snap.docs.map((doc) => {
          data.push({ ...doc.data(), id: doc.id });
        });
        setClasses(data);
      });
  }, []);

  return (
    <Fragment>
      <h4>Classes List</h4>
      <div className="classes">
        {classes.map((cl) => {
          return <Link to={`/class/${cl.id}`}>{cl.className}</Link>;
        })}
      </div>
    </Fragment>
  );
};

export default ClassesPage;
