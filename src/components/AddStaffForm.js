import { useContext, useState } from "react";
import Context from "../context/Context";
import { addStaff } from "../actions/staffActions";
import Alert from "./Alert";

const AddStaffForm = () => {
  const [staffName, setStaffName] = useState("");
  const [staffRole, setStaffRole] = useState("");
  const [staffSalary, setStaffSalary] = useState("");
  const [staffAddress, setStaffAddress] = useState("");
  const [staffContactNumber, setStaffContactNumber] = useState("");
  const [msg, setMsg] = useState("");
  const { staffs } = useContext(Context);

  const AddStaff = (e) => {
    e.preventDefault();
    //checking data is valid or not
    const formDataLengthIsValid = {
      staffName: staffName.trim().length > 0,
      staffRole: staffRole.trim().length > 0,
      staffSalary: staffSalary.trim().length > 0,
    };

    let formIsValid = true;
    for (let e in formDataLengthIsValid) {
      formIsValid = formIsValid && formDataLengthIsValid[e];
    }

    if (formIsValid) {
      addStaff({
        "Staff Name": staffName,
        "Staff Role": staffRole,
        "Staff Salary": staffSalary,
        "Staff Contact Number": staffContactNumber,
        "Staff Address": staffAddress,
        linkedUsername: "test",
      }).then((res) => {
        setMsg(res);
        if (res.includes("created")) {
          //clearing state
          setStaffName("");
          setStaffRole("");
          setStaffSalary("");
          setStaffContactNumber("");
          setStaffAddress("");
        }
      });
    } else {
      setMsg("Any input field cannot be empty.");
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
        value={staffName}
        onChange={(e) => setStaffName(e.target.value)}
      />

      <label htmlFor="role">Role</label>
      <input
        type="text"
        id="role"
        value={staffRole}
        onChange={(e) => setStaffRole(e.target.value)}
      />

      <label htmlFor="salary">Salary</label>
      <input
        type="number"
        id="salary"
        value={staffSalary}
        onChange={(e) => setStaffSalary(e.target.value)}
      />

      <label htmlFor="address">Address</label>
      <input
        type="text"
        id="address"
        value={staffAddress}
        onChange={(e) => setStaffAddress(e.target.value)}
      />

      <label htmlFor="contact">Contact Number</label>
      <input
        type="number"
        id="contact"
        value={staffContactNumber}
        onChange={(e) => setStaffContactNumber(e.target.value)}
      />

      <button className="submit--btn">Submit</button>
    </form>
  );
};

export default AddStaffForm;
