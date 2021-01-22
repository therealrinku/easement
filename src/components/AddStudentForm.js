import { useState } from "react";
import addPerson from "../functions/addData";

const AddStudentForm = () => {
  const [name, setName] = useState("");
  const [CLASS, setClass] = useState("");
  const [rollNo, setRollNo] = useState("");

  const AddStudent = (e) => {
    e.preventDefault();
    addPerson("test", "students", { name, class: CLASS, rollNo });
  };

  return (
    <form className="new--form" onSubmit={AddStudent}>
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

      <label htmlFor="rollno">Rollno</label>
      <input
        type="number"
        id="rollno"
        value={rollNo}
        onChange={(e) => setRollNo(e.target.value)}
      />

      <button>Submit</button>
    </form>
  );
};

export default AddStudentForm;
