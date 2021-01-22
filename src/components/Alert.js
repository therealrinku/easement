import { MdDone, VscError } from "react-icons/all";

const Alert = ({ msg }) => {
  return (
    <div className="alert">
      <section style={msg.includes("Succesfully") ? { display: "none" } : null}>
        <MdDone />
        <p>Successfully done!</p>
      </section>

      <section
        style={!msg.includes("Succesfully") ? { display: "none" } : null}
      >
        <VscError />
        <p>{msg}</p>
      </section>
    </div>
  );
};

export default Alert;
