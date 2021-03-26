import { useContext, useState } from "react";
import Alert from "./Alert";
import { addClass } from "../actions/classActions";
import Context from "../context/Context";

const AddClassForm = () => {
  const [msg, setMsg] = useState("");
  const [className, setClassName] = useState("");
  const { classes } = useContext(Context);

  const AddClass = (e) => {
    e.preventDefault();

    if (className.trim() !== "") {
      //checking if same class name exists
      if (classes.findIndex((cls) => cls === className) < 0) {
        addClass({ className }).then((res) => {
          setMsg(res);
          if (res.includes("created")) {
            //clearing state
            setClassName("");
          }
        });
      } else {
        setMsg(`${className} already exists.`);
      }
    } else {
      setMsg("Class Name cannot be empty.");
    }

    setTimeout(() => {
      setMsg("");
    }, 4000);
  };

  return (
    <form className="new--form" onSubmit={AddClass}>
      {msg ? <Alert msg={msg} /> : null}
      <label htmlFor="name">Class Name</label>
      <input
        type="text"
        id="name"
        value={className}
        onChange={(e) => setClassName(e.target.value)}
      />
      <button className="submit--btn">Submit</button>
    </form>
  );
};

export default AddClassForm;
