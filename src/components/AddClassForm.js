import { useState } from "react";
import Alert from "./Alert";
import addData from "../functions/addData";

const AddClassForm = () => {
  const [msg, setMsg] = useState("");
  const [className, setClassName] = useState("");

  const AddClass = (e) => {
    e.preventDefault();

    if (className.trim() !== "") {
      addData("test", "classes", className).then((res) => {
        if (res === "done") setMsg(`Successfully added a new class.`);
        else setMsg(res);
      });
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
