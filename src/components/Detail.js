import { GrEdit } from "react-icons/all";

const Detail = ({ propertyName, propertyValue, showEditButtons }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
      }}
    >
      <p style={{ fontSize: "15px" }}>{propertyName + ":" + propertyValue}</p>
      {showEditButtons ? (
        <button className="edit--field-btn">
          <GrEdit />
        </button>
      ) : null}
    </div>
  );
};

export default Detail;
