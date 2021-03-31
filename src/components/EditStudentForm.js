//resuing add student form for updating student
import AddStudentForm from "./AddStudentForm";

const EditStudentForm = (props) => {
  const Update = (e) => {
    e.preventDefault();
  };

  return (
    <div className="edit--form">
      <h4>Edit {props.studentName}</h4>
      <AddStudentForm {...props} Update={Update} />
      <button className="cancel-btn" onClick={props.toggle}>
        Cancel
      </button>
    </div>
  );
};

export default EditStudentForm;
