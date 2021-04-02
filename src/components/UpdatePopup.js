import { useState, useContext } from "react";
import { updateStudent } from "../actions/studentActions";
import { updateStaff } from "../actions/staffActions";
import Context from "../context/Context";
import "../styles/UpdatePopup.css";

const UpdatePopup = ({
  personId,
  propertyName,
  propertyValue,
  toggle,
  isStaff,
}) => {
  const [val, setVal] = useState(propertyValue);
  const { setMessage } = useContext(Context);

  const updateConfirm = (e) => {
    e.preventDefault();
    if (val.trim().length > 0) {
      if (!isStaff) {
        updateStudent(personId, { [propertyName]: val });
      } else {
        updateStaff(personId, { [propertyName]: val });
      }
      toggle();
    } else {
      setMessage("Input field cannot be empty.");
    }

    setTimeout(() => setMessage(""), 3000);
  };

  return (
    <div className="update--popup">
      <h4>Edit {propertyName}</h4>
      <form onSubmit={updateConfirm}>
        <input
          type={
            propertyName.includes("Number") || propertyName.includes("RollNo")
              ? "number"
              : "text"
          }
          value={val}
          onChange={(e) => setVal(e.target.value)}
        />
        <br />
        <button type="submit" className="submit--btn">
          Update
        </button>
        <button type="button" className="cancel--btn" onClick={toggle}>
          Cancel
        </button>
      </form>
    </div>
  );
};

export default UpdatePopup;
