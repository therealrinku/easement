import { useState } from "react";
import addPerson from "../functions/addData";
import Alert from "./Alert";

const AddStaffForm = () => {
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [salary, setSalary] = useState("");
  const [msg, setMsg] = useState("");

  const AddStaff = (e) => {
    e.preventDefault();
    addPerson("test", "staffs", { name, role, salary }).then((res) => {
      if (res === "done") {
        setMsg("Succesfully created a new staff.");
        setName("");
        setRole("");
        setSalary("");
      } else {
        setMsg(res);
      }
    });

    setTimeout(() => {
      setMsg("");
    }, 3000);
  };

  return (
    <form className="new--form" onSubmit={AddStaff}>
      {msg ? <Alert msg={msg} /> : null}
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
