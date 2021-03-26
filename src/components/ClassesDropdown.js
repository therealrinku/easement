import "../styles/ClassesDropdown.css";

const ClassesDropdown = ({ classes, updateClassName }) => {
  return (
    <section className="classes--dropdown">
      {classes.map((c, i) => {
        return (
          <button
            key={i}
            onClick={() => updateClassName(c.className)}
            type="button"
          >
            {c.className}
          </button>
        );
      })}
    </section>
  );
};

export default ClassesDropdown;
