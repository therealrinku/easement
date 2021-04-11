import { useContext, useState } from "react";
import { connect } from "react-redux";
import Context from "../context/Context";
import * as classActions from "../redux/class/classActions";

const AddClassForm = ({ classes, ADD_CLASS }) => {
  const [className, setClassName] = useState("");
  const { setMessage } = useContext(Context);

  const AddClass = (e) => {
    e.preventDefault();

    if (className.trim() !== "") {
      //checking if same class name exists
      if (classes.findIndex((cls) => cls.className.toLowerCase() === className.toLowerCase()) < 0) {
        ADD_CLASS({ className, linkedUsername: "test" });
        setClassName("");
      } else {
        setMessage({ text: `${className} already exists.` });
      }
    } else {
      setMessage({ text: "Class Name cannot be empty." });
    }
  };

  return (
    <form className="new--form" onSubmit={AddClass}>
      <label htmlFor="name">Class Name</label>
      <input type="text" id="name" value={className} onChange={(e) => setClassName(e.target.value)} />
      <button className="submit--btn">Submit</button>
    </form>
  );
};

const mapStateToProps = (state) => {
  return {
    classes: state.classes.classes,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    ADD_CLASS: (data) => dispatch(classActions.ADD_CLASS(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddClassForm);
