import { GiHamburgerMenu } from "react-icons/all";
import "./Topbar.css";

const Topbar = () => {
  return (
    <div className="topbar">
      <section>
        <button>
          <GiHamburgerMenu />
        </button>
      </section>

      <section>
        <p>testing atm</p>
      </section>
    </div>
  );
};

export default Topbar;
