import { GrEdit } from "react-icons/all";

const Detail = ({ propertyName, propertyValue }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
      }}
    >
      <p style={{ fontSize: "15px" }}>{propertyName + ":" + propertyValue}</p>
      <button className="edit--field-btn">
        <GrEdit />
      </button>
    </div>
  );
};

export default Detail;
