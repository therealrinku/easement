import { MdDone, VscError } from "react-icons/all";

const Alert = ({ msg }) => {
  return (
    <div className="alert">
      <section>
        {msg.includes("created") ? <MdDone /> : <VscError />}
        <p>{msg}</p>
      </section>
    </div>
  );
};

export default Alert;
