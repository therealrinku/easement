import { GiHamburgerMenu } from "react-icons/all";
import "./Topbar.css";

const Topbar = ({ toggleSidebar, sideBarIsClosed }) => {
  return (
    <div
      className="topbar"
      style={sideBarIsClosed ? { left: "0", width: "100%" } : null}
    >
      <section>
        <button onClick={toggleSidebar}>
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
