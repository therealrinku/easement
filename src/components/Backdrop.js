const backdropStyles = {
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  height: "100vh",
  background: "rgba(0,0,0,0.1)",
  zIndex: "2",
};

const Backdrop = ({ show, toggle }) => {
  return (
    <div
      style={show ? backdropStyles : { display: "none" }}
      onClick={toggle}
    ></div>
  );
};

export default Backdrop;
