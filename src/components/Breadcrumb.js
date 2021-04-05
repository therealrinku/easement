import "../styles/Breadcrumb.css";

const Breadcrumb = () => {
  return (
    <div className="breadcrumb">
      <p>
        <a href="#">Home</a> {">"} <a href="#">Students</a> {">"}{" "}
        <a hre="#">Ariana</a>
      </p>
    </div>
  );
};

export default Breadcrumb;
