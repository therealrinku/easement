import { Tooltip } from "@material-ui/core";
import { useContext, useState } from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { GrEdit } from "react-icons/gr";
import Filters from "../components/Filters";
import Context from "../context/Context";

const EditOrDeletePage = () => {
  const [radioValue, setRadioValue] = useState("student");
  const [searchQuery, setSearchQuery] = useState("");
  const { students, staffs } = useContext(Context);

  const filteredPeople = (radioValue === "student" ? students : staffs).filter(
    (person) => {
      return person.name
        .toLowerCase()
        .includes(searchQuery.trim().toLowerCase());
    }
  );

  return (
    <div className="page">
      <h4>Edit/Delete</h4>
      <input
        type="radio"
        name="type"
        value="staff"
        onChange={(e) => setRadioValue(e.target.value)}
      />
      <span>Staff</span>
      <input
        type="radio"
        name="type"
        value="student"
        onChange={(e) => setRadioValue(e.target.value)}
        defaultChecked
        style={{ marginBottom: "20px" }}
      />
      <span>Student</span>
      <Filters
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        onlySearchBox={true}
      />

      <div className="users--view">
        {filteredPeople.map((person, i) => {
          return (
            <div className="user" key={i}>
              <b>{person.name}</b>
              <p>
                {radioValue === "student" ? "Class:" : "Role:"}
                {person.class || person.role}
              </p>
              <p style={radioValue !== "student" ? { display: "none" } : null}>
                Rollno:{person.rollNo}
              </p>

              <Tooltip title={`Edit ${person.name}`} arrow>
                <button>
                  <GrEdit />
                </button>
              </Tooltip>

              <Tooltip title={`Delete ${person.name}`} arrow>
                <button>
                  <AiOutlineDelete />
                </button>
              </Tooltip>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default EditOrDeletePage;
