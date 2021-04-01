import { useState } from "react";
import "../styles/UpdatePopup.css";

const UpdatePopup = ({ propertyName, propertyValue, toggle }) => {
  const [val, setVal] = useState(propertyValue);
  return (
    <div className="update--popup">
      <h4>Edit {propertyName}</h4>
      <form>
        <input
          type="text"
          value={val}
          onChange={(e) => setVal(e.target.value)}
        />
        <br />
        <button type="submit">Update</button>
        <button type="button" onClick={toggle}>
          Cancel
        </button>
      </form>
    </div>
  );
};

export default UpdatePopup;
