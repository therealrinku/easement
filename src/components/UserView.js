import { AiOutlineDelete } from "react-icons/ai";
import { GrEdit } from "react-icons/gr";
import { Tooltip } from "@material-ui/core";
import Backdrop from "../components/Backdrop";
import DeleteConfirmPopup from "../components/DeleteConfirmPopup";
import { Fragment, useState } from "react";
import EditPersonForm from "./EditPersonForm";

const UserView = ({
  radioValue,
  name,
  CLASS,
  role,
  salary,
  index,
  rollNo,
  deletePerson,
}) => {
  const [showDeleteConfirmPopup, setShowDeleteConfirmPopup] = useState(false);
  const [showEditForm, setShowEditForm] = useState(false);

  const toggleEditForm = () => {
    setShowEditForm((prev) => !prev);
    if (document.body.style.overflow === "hidden") {
      document.body.style.overflow = "auto";
    } else {
      document.body.style.overflow = "hidden";
    }
  };

  const toggleModal = () => {
    if (document.body.style.overflow === "hidden") {
      document.body.style.overflow = "auto";
    } else {
      document.body.style.overflow = "hidden";
    }

    setShowDeleteConfirmPopup((prev) => !prev);
  };

  const Delete = (index) => {
    toggleModal();
    deletePerson(index);
  };

  return (
    <Fragment>
      {showEditForm ? (
        <Fragment>
          <Backdrop show={showEditForm} toggle={toggleEditForm} />
          <EditPersonForm
            isStaff={radioValue === "staff" ? true : false}
            toggle={toggleEditForm}
            Name={name}
            Class={CLASS}
            RollNo={rollNo}
            Role={role}
            Salary={salary}
            index={index}
          />
        </Fragment>
      ) : (
        <div className="user">
          <b>{name}</b>
          <p style={radioValue==="class"?{display:"none"}:null}>
            {radioValue === "student" ? "Class:" : "Role:"}
            {CLASS || role}
          </p>
          <p style={radioValue !== "student" ? { display: "none" } : null}>
            Rollno:{rollNo}
          </p>

          <Tooltip title={`Edit ${name}`} arrow>
            <button onClick={toggleEditForm}>
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
                Delete={() => Delete(index)}
                toggle={toggleModal}
              />
            </Fragment>
          ) : null}
        </div>
      )}
    </Fragment>
  );
};

export default UserView;
