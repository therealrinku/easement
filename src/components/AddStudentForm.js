import { useState } from "react";

const AddStudentForm = () => {
  const [name, setName] = useState("");
  const [CLASS, setClass] = useState("");
  const [rollNo, setRollNo] = useState("");

  return (
    <form className="new--form">
      <label htmlFor="name">Student Name</label>
      <input
        type="text"
        id="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <label htmlFor="class">Class</label>
      <input
        type="text"
        id="class"
        value={CLASS}
        onChange={(e) => setClass(e.target.value)}
      />

      <label htmlFor="number">Rollno</label>
      <input
        type="text"
        id="rollno"
        value={rollNo}
        onChange={(e) => setRollNo(e.target.value)}
      />

      <button>Submit</button>
    </form>
  );
};

export default AddStudentForm;
