const backdropStyles = {
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  height: "100vh",
  background: "rgba(0,0,0,0.8)",
  zIndex: "2",
};

const Backdrop = ({ toggle }) => {
  return <div style={backdropStyles} onClick={toggle}></div>;
};

export default Backdrop;
