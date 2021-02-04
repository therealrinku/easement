import { useContext, useState } from "react";
import Context from "../context/Context";
import setData from "../functions/setData";
import Alert from "./Alert";

const AddStaffForm = () => {
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [salary, setSalary] = useState("");
  const [msg, setMsg] = useState("");
  const { staffs } = useContext(Context);

  const AddStaff = (e) => {
    e.preventDefault();

    if (name.trim().length >= 3 && name.trim().length <= 60) {
      if (role.trim().length >= 3 && role.trim().length <= 50) {
        if (salary > 0 && salary !== "") {
          setData("test", "staffs", [...staffs, { name, role, salary }]).then(
            (res) => {
              if (res === "done") {
                setMsg("Succesfully created a new staff.");
                setName("");
                setRole("");
                setSalary("");
              } else {
                setMsg(res);
              }
            }
          );
        } else {
          setMsg("Salary cannot be empty or 0.");
        }
      } else {
        setMsg("Role must be between 3 and 50 characters.");
      }
    } else {
      setMsg("Name must be between 3 and 60 characters.");
    }

    setTimeout(() => {
      setMsg("");
    }, 4000);
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

      <button className="submit--btn">Submit</button>
    </form>
  );
};

export default AddStaffForm;
