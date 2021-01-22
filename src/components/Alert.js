import { MdDone, VscError } from "react-icons/all";

const Alert = ({ error }) => {
  return (
    <div className="alert">
      <section style={error ? { display: "none" } : null}>
        <MdDone />
        <p>Successfully done!</p>
      </section>

      <section style={!error ? { display: "none" } : null}>
        <VscError />
        <p>{error}</p>
      </section>
    </div>
  );
};

export default Alert;
