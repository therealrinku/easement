import { useState } from "react";
import db from "../firebase/db";
import firebase from "firebase/app";

const AddStaffForm = () => {
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [salary, setSalary] = useState("");

  const AddStaff = (e) => {
    e.preventDefault();

    db.collection("test")
      .doc("staffs")
      .update({
        staffs: firebase.firestore.FieldValue.arrayUnion({
          name,
          role,
          salary,
        }),
      })
      .then(() => {
        setName("");
        setRole("");
        setSalary("");
      });
  };

  return (
    <form className="new--form" onSubmit={AddStaff}>
      <label htmlFor="name">Staff Name</label>
      <input
        type="text"
        id="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <label htmlFor="role">Role</label>
      <input
        type="text"
        id="role"
        value={role}
        onChange={(e) => setRole(e.target.value)}
      />

      <label htmlFor="salary">Salary</label>
      <input
        type="number"
        id="salary"
        value={salary}
        onChange={(e) => setSalary(e.target.value)}
      />

      <button>Submit</button>
    </form>
  );
};

export default AddStaffForm;
