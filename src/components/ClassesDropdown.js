import "../styles/ClassesDropdown.css";
import { Link } from "react-router-dom";

const ClassesDropdown = ({ classes, updateClassName }) => {
  return (
    <section className="classes--dropdown">
      {classes.length > 0 ? (
        classes.map((c, i) => {
          return (
            <button
              key={i}
              onClick={() => updateClassName(c.className)}
              type="button"
            >
              {c.className}
            </button>
          );
        })
      ) : (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "12px",
            borderTop: "solid 1px rgba(0,0,0,0.2)",
          }}
        >
          <h4>No any class added yet!</h4>
          <Link
            to="/new?class=true"
            style={{
              color: "blue",
              textDecoration: "none",
              marginLeft: "5px",
            }}
          >
            Create Now
          </Link>
        </div>
      )}
    </section>
  );
};

export default ClassesDropdown;
