import { useContext, useState } from "react";
import Alert from "./Alert";
import Context from "../context/Context";
import { BiCaretDown } from "react-icons/all";

const AddStudentForm = () => {
  const [name, setName] = useState("");
  const [CLASS, setClass] = useState("test");
  const [rollNo, setRollNo] = useState("");
  const [address, setAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [guardianName, setGuardianName] = useState("");

  const [msg, setMsg] = useState("");
  const [showClassOptions, setShowClassOptions] = useState(false);

  const AddStudent = (e) => {
    e.preventDefault();
    //checking data is valid or not
    const formDataLengthIsValid = {
      name: name.trim().length > 0,
      class: CLASS.trim().length > 0,
      rollNo: rollNo.trim().length > 0,
      guardianName: guardianName.trim().length > 0,
      phoneNumber: phoneNumber.trim().length > 0,
      address: address.trim().length > 0,
    };

    let formIsValid = true;
    for (let e in formDataLengthIsValid) {
      formIsValid = formIsValid && formDataLengthIsValid[e];
    }

    if (formIsValid) {
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
      <div className="classes--options">
        <button
          className="show--class-options-button"
          type="button"
          onClick={() => setShowClassOptions((prev) => !prev)}
          style={
            !showClassOptions
              ? {
                  borderBottomRightRadius: "5px",
                  borderBottomLeftRadius: "5px",
                }
              : null
          }
        >
          <p>{CLASS ? CLASS : "Select Class from here"}</p>
          <BiCaretDown />
        </button>

        {/*<section
          className="class--options"
          style={!showClassOptions ? { display: "none" } : null}
        >
          {classes.map((className, i) => {
            return (
              <button
                key={i}
                onClick={() => changeClass(className)}
                type="button"
              >
                {className}
              </button>
            );
          })}
        </section>*/}
      </div>

      <label htmlFor="rollno">Rollno</label>
      <input
        type="number"
        id="rollno"
        value={rollNo}
        onChange={(e) => setRollNo(e.target.value)}
      />

      <label htmlFor="guardian_name">Guardian Name</label>
      <input
        type="text"
        id="guardian_name"
        value={guardianName}
        onChange={(e) => setGuardianName(e.target.value)}
      />

      <label htmlFor="contact_number">Contact Number</label>
      <input
        type="number"
        id="contact_number"
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
      />

      <label htmlFor="address">Address</label>
      <input
        type="text"
        id="address"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
      />

      <button className="submit--btn">Submit</button>
    </form>
  );
};

export default AddStudentForm;
