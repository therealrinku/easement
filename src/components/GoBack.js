import "../styles/GoBack.css";
import { useHistory } from "react-router-dom";
import { RiArrowGoBackLine } from "react-icons/all";

const GoBack = () => {
  const history = useHistory();

  return (
    <button className="go--back" onClick={() => history.goBack()}>
      <RiArrowGoBackLine />
      <p>Go Back</p>
    </button>
  );
};

export default GoBack;
