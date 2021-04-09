import { useState, useContext } from "react";
import { updateStaff } from "../actions/staffActions";
import Context from "../context/Context";
import { MdClear } from "react-icons/all";
import * as studentActions from "../redux/student/studentActions";
import * as staffActions from "../redux/staff/staffActions";
import { connect } from "react-redux";
import "../styles/UpdatePopup.css";

const UpdatePopup = ({ personId, propertyName, propertyValue, toggle, isStaff, UPDATE_STUDENT, UPDATE_STAFF }) => {
  const [val, setVal] = useState(propertyValue);
  const { setMessage } = useContext(Context);

  const updateConfirm = (e) => {
    e.preventDefault();
    if (val.trim().length > 0) {
      if (!isStaff) {
        UPDATE_STUDENT(personId, propertyName, val);
      } else {
        UPDATE_STAFF(personId, propertyName, val);
      }
      toggle();
    } else {
      setMessage("Input field cannot be empty.");
    }
  };

  return (
    <div className="update--popup">
      <h4>Edit {propertyName}</h4>
      <form onSubmit={updateConfirm}>
        <input
          type={propertyName.includes("Number") || propertyName.includes("RollNo") ? "number" : "text"}
          value={val}
          onChange={(e) => setVal(e.target.value)}
        />
        <br />
        <button type="submit" className="submit--btn">
          Update
        </button>
        <button type="button" className="cancel--btn" onClick={toggle}>
          <MdClear />
        </button>
      </form>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    UPDATE_STUDENT: (id, propName, propVal) => dispatch(studentActions.EDIT_STUDENT(id, propName, propVal)),
    UPDATE_STAFF: (id, propName, propVal) => dispatch(staffActions.EDIT_STAFF(id, propName, propVal)),
  };
};

export default connect(null, mapDispatchToProps)(UpdatePopup);
