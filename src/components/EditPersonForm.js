import { Fragment, useContext, useState } from "react";
import Context from "../context/Context";
import setData from "../functions/setData";
import Alert from "./Alert";

const EditPersonForm = ({
  isStaff,
  toggle,
  Name,
  Class,
  Role,
  RollNo,
  Salary,
  index,
}) => {
  const [NAME, setName] = useState(Name);
  const [CLASS, setClass] = useState(Class);
  const [role, setRole] = useState(Role);
  const [rollNo, setRollNo] = useState(RollNo);
  const [salary, setSalary] = useState(Salary);
  const [msg, setMsg] = useState("");
  const { students, staffs } = useContext(Context);

  const Update = (e, index) => {
    e.preventDefault();

    if (!isStaff) {
      if (NAME.trim().length >= 3 && NAME.trim().length <= 60) {
        if (CLASS !== "") {
          if (rollNo > 0) {
            if (
              students.findIndex(
                (student) =>
                  student.class === CLASS && student.rollNo === rollNo
              ) < 0 ||
              rollNo === RollNo
            ) {
              const updatedStudents = [...students];
              updatedStudents[index] = {
                name: NAME,
                rollNo: rollNo,
                class: CLASS,
              };

              setData("test", "students", updatedStudents);
              toggle();

              setMsg("Succesfully created a new student.");
              setName("");
              setClass("");
              setRollNo("");
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
    } else {
      if (NAME.trim().length >= 3 && NAME.trim().length <= 60) {
        if (role.trim().length >= 3 && role.trim().length <= 50) {
          if (salary > 0 && salary !== "") {
            const updatedStaffs = [...staffs];
            updatedStaffs[index] = { name: NAME, role: role, salary: salary };

            setData("test", "staffs", updatedStaffs);
            toggle();

            setMsg("Succesfully created a new staff.");
            setName("");
            setRole("");
            setSalary("");
          } else {
            setMsg("Salary cannot be empty or 0.");
          }
        } else {
          setMsg("Role must be between 3 and 50 characters.");
        }
      } else {
        setMsg("Name must be between 3 and 60 characters.");
      }
    }

    setTimeout(() => {
      setMsg("");
    }, 4000);
  };

  return (
    <Fragment>
      {msg ? <Alert msg={msg} /> : null}

      {isStaff ? (
        <form className="edit--form" onSubmit={(e) => Update(e, index)}>
          <h4>Edit {Name}</h4>
          <label htmlFor="name">Staff Name</label>
          <input
            type="text"
            id="name"
            value={NAME}
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

          <button>Update</button>
          <button onClick={toggle} type="button">
            Cancel
          </button>
        </form>
      ) : (
        <form className="edit--form" onSubmit={(e) => Update(e, index)}>
          <h4>Edit {Name}</h4>
          <label htmlFor="name">Student Name</label>
          <input
            type="text"
            id="name"
            value={NAME}
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

          <button>Update</button>
          <button onClick={toggle} type="button">
            Cancel
          </button>
        </form>
      )}
    </Fragment>
  );
};

export default EditPersonForm;
