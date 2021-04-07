import "../styles/Loader.css";

const Loader = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "400px",
      }}
    >
      <div className="loader"></div>
    </div>
  );
};

export default Loader;
