import { useContext, useState } from "react";
import Alert from "./Alert";
import setData from "../actions/setData";
import Context from "../context/Context";

const AddClassForm = () => {
  const [msg, setMsg] = useState("");
  const [className, setClassName] = useState("");
  const { classes } = useContext(Context);

  const AddClass = (e) => {
    e.preventDefault();

    if (className.trim() !== "") {
      if (classes.findIndex((cls) => cls === className) < 0) {
        setData("test", "classes", [...classes, className]).then((res) => {
          if (res === "done") {
            setClassName("");
            setMsg(`Successfully created a new class.`);
          } else setMsg(res);
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
