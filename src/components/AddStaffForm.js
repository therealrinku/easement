import { useState } from "react";

const AddStaffForm = () => {
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [salary, setSalary] = useState("");

  return (
    <form className="new--form">
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
