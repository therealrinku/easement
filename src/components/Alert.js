import { FcCheckmark, FcCancel } from "react-icons/all";

const Alert = ({ msg }) => {
  return (
    <div className="alert">
      <section>
        {msg.includes("created") ? <FcCheckmark /> : <FcCancel />}
        <p>{msg}</p>
      </section>
    </div>
  );
};

export default Alert;
