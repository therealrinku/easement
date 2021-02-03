import { AiOutlineDelete } from "react-icons/ai";
import { GrEdit } from "react-icons/gr";
import { Tooltip } from "@material-ui/core";
import Backdrop from "../components/Backdrop";
import DeleteConfirmPopup from "../components/DeleteConfirmPopup";
import { Fragment, useState } from "react";

const UserView = ({ radioValue, name, CLASS, role, rollNo, deletePerson }) => {
  const [showDeleteConfirmPopup, setShowDeleteConfirmPopup] = useState(false);

  const toggleModal = () => {
    if (document.body.style.overflow === "hidden") {
      document.body.style.overflow = "auto";
    } else {
      document.body.style.overflow = "hidden";
    }

    setShowDeleteConfirmPopup((prev) => !prev);
  };

  return (
    <Fragment>
      <div className="user">
        <b>{name}</b>
        <p>
          {radioValue === "student" ? "Class:" : "Role:"}
          {CLASS || role}
        </p>
        <p style={radioValue !== "student" ? { display: "none" } : null}>
          Rollno:{rollNo}
        </p>

        <Tooltip title={`Edit ${name}`} arrow>
          <button>
            <GrEdit />
          </button>
        </Tooltip>

        <Tooltip title={`Delete ${name}`} arrow>
          <button onClick={toggleModal}>
            <AiOutlineDelete />
          </button>
        </Tooltip>

        {showDeleteConfirmPopup ? (
          <Fragment>
            <Backdrop show={showDeleteConfirmPopup} toggle={toggleModal} />
            <DeleteConfirmPopup
              name={name}
              Delete={deletePerson}
              toggle={toggleModal}
            />
          </Fragment>
        ) : null}
      </div>
    </Fragment>
  );
};

export default UserView;
