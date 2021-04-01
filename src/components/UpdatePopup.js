import { useState } from "react";
import "../styles/UpdatePopup.css";

const UpdatePopup = ({ personName, propertyName, propertyValue, toggle }) => {
  const [val, setVal] = useState(propertyValue);
  return (
    <div className="update--popup">
      <h4>Edit {personName}</h4>
      <form>
        <label htmlFor="property-value">{propertyName}</label>
        <input
          type="text"
          value={val}
          onChange={(e) => setVal(e.target.value)}
        />
        <button type="submit">Update</button>
        <button type="button" onClick={toggle}>
          Cancel
        </button>
      </form>
    </div>
  );
};

export default UpdatePopup;
