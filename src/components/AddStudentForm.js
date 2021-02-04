import { useContext, useState } from "react";
import addPerson from "../functions/addData";
import Alert from "./Alert";
import Context from "../context/Context";

const AddStudentForm = () => {
  const [name, setName] = useState("");
  const [CLASS, setClass] = useState("");
  const [rollNo, setRollNo] = useState("");
  const [msg, setMsg] = useState("");
  const { students } = useContext(Context);

  const AddStudent = (e) => {
    e.preventDefault();

    if (name.trim().length >= 3 && name.trim().length <= 60) {
      if (CLASS !== "") {
        if (rollNo > 0) {
          if (
            students.findIndex(
              (student) => student.class === CLASS && student.rollNo === rollNo
            ) < 0
          ) {
            addPerson("test", "students", { name, class: CLASS, rollNo }).then(
              (res) => {
                if (res === "done") {
                  setMsg("Succesfully created a new student.");
                  setName("");
                  setClass("");
                  setRollNo("");
                } else {
                  setMsg(res);
                }
              }
            );
          } else {
            setMsg(`Rollno ${rollNo} already taken in class ${CLASS}.`);
          }
        } else {
          setMsg("Rollno cannot be empty or below 1.");
        }
      } else {
        setMsg("Class cannot be empty.");
      }
    } else {
      setMsg("Name must be between 3 and 60 charcters.");
    }

    setTimeout(() => {
      setMsg("");
    }, 4000);
  };

  return (
    <form className="new--form" onSubmit={AddStudent}>
      {msg ? <Alert msg={msg} /> : null}
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

      <button className="submit--btn">Submit</button>
    </form>
  );
};

export default AddStudentForm;
