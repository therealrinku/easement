import { FcCheckmark, FcCancel } from "react-icons/all";
import "../styles/Alert.css";

const Alert = ({ message }) => {
  return (
    <div className="alert">
      <section>
        {message.success ? <FcCheckmark /> : <FcCancel />}
        <p>{message.text}</p>
      </section>
    </div>
  );
};

export default Alert;
