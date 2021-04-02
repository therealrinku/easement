import { useContext, useState } from "react";
import { addClass } from "../actions/classActions";
import Context from "../context/Context";

const AddClassForm = () => {
  const [className, setClassName] = useState("");
  const { classes, setMessage } = useContext(Context);

  const AddClass = (e) => {
    e.preventDefault();

    if (className.trim() !== "") {
      //checking if same class name exists
      if (classes.findIndex((cls) => cls === className) < 0) {
        addClass({ className, linkedUsername: "test" }).then((res) => {
          setMessage(res);
          if (res.includes("created")) {
            //clearing state
            setClassName("");
          }
        });
      } else {
        setMessage(`${className} already exists.`);
      }
    } else {
      setMessage("Class Name cannot be empty.");
    }

    setTimeout(() => {
      setMessage("");
    }, 4000);
  };

  return (
    <form className="new--form" onSubmit={AddClass}>
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
