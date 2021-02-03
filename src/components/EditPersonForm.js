import { Fragment, useState } from "react";

const EditPersonForm = ({
  isStaff,
  confirmEdit,
  toggle,
  Name,
  Class,
  Role,
  RollNo,
  Salary,
}) => {
  const [NAME, setName] = useState(Name);
  const [CLASS, setClass] = useState(Class);
  const [role, setRole] = useState(Role);
  const [rollNo, setRollNo] = useState(RollNo);
  const [salary, setSalary] = useState(Salary);

  return (
    <Fragment>
      {isStaff ? (
        <form className="edit--form" onSubmit={confirmEdit}>
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
        <form className="edit--form" onSubmit={confirmEdit}>
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
