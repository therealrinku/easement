import { Fragment, useState } from "react";
import { GrEdit } from "react-icons/all";
import Backdrop from "../components/Backdrop";
import overflowToggler from "../utils/OverflowToggler";
import UpdatePopup from "./UpdatePopup";

const Detail = ({
  personId,
  propertyName,
  propertyValue,
  showEditButtons,
  isStaff,
}) => {
  const [showUpdatePopup, setShowUpdatePopup] = useState(false);

  const toggleUpdatePopup = () => {
    overflowToggler();
    setShowUpdatePopup((prev) => !prev);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        marginBottom: "-15px",
        alignItems: "center",
      }}
    >
      <p style={{ fontSize: "14px" }}>{propertyName}</p>
      <p
        style={{
          fontSize: "14px",
          marginLeft: "5px",
          background: "whitesmoke",
          padding: "4px",
          borderRadius: "5px",
        }}
      >
        {propertyValue}
      </p>
      {showEditButtons ? (
        <button className="edit--field-btn" onClick={toggleUpdatePopup}>
          <GrEdit />
        </button>
      ) : null}

      {showUpdatePopup ? (
        <Fragment>
          <Backdrop toggle={toggleUpdatePopup} />
          <UpdatePopup
            isStaff={isStaff}
            propertyName={propertyName}
            propertyValue={propertyValue}
            toggle={toggleUpdatePopup}
            personId={personId}
          />
        </Fragment>
      ) : null}
    </div>
  );
};

export default Detail;
