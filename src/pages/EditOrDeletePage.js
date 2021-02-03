import { useContext, useState } from "react";
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

      <table className="table">
        <thead>
          <tr>
            <th>S.N~{filteredPeople.length}</th>
            <th>Name</th>
            <th style={radioValue !== "student" ? { display: "none" } : null}>
              Class
            </th>
            <th>{radioValue === "student" ? "RollNo" : "Role"}</th>
          </tr>
        </thead>

        <tbody>
          {filteredPeople.map((person, i) => {
            return (
              <tr key={i}>
                <td>{i + 1}</td>
                <td
                  style={{
                    display: "flex",
                    alignItems: "center",
                    border: "none",
                  }}
                >
                  <p>{person.name}</p>
                </td>
                <td
                  style={radioValue !== "student" ? { display: "none" } : null}
                >
                  {person.class}
                </td>
                <td>{person.rollNo || person.role}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default EditOrDeletePage;
