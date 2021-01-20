import { GiHamburgerMenu } from "react-icons/all";

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
        <p>Hamburger School Pte</p>
      </section>
    </div>
  );
};

export default Topbar;
