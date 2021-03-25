import { useContext, useState } from "react";
import setData from "../functions/setData";
import Alert from "./Alert";
import Context from "../context/Context";
import { BiCaretDown } from "react-icons/all";

const AddStudentForm = () => {
  const [name, setName] = useState("");
  const [CLASS, setClass] = useState("");
  const [rollNo, setRollNo] = useState("");
  const [address, setAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [guardianName, setGuardianName] = useState("");

  const [msg, setMsg] = useState("");
  const [showClassOptions, setShowClassOptions] = useState(false);
  const { students, classes } = useContext(Context);

  const changeClass = (className) => {
    setClass(className);
    setShowClassOptions((prev) => !prev);
  };

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
            setData("test", "students", [
              ...students,
              { name, class: CLASS, rollNo },
            ]).then((res) => {
              if (res === "done") {
                setMsg("Succesfully created a new student.");
                setName("");
                setClass("");
                setRollNo("");
              } else {
                setMsg(res);
              }
            });
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
