import { useContext, useEffect, useState } from "react";
import Filters from "../components/Filters";
import UserView from "../components/UserView";
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

  useEffect(() => {
    document.body.style.overflow = "auto";
  }, []);

  const deletePerson = () => {};

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
            <UserView
              key={i}
              name={person.name}
              CLASS={person.class}
              rollNo={person.rollNo}
              radioValue={radioValue}
              role={person.role}
              deletePerson={deletePerson}
            />
          );
        })}
      </div>
    </div>
  );
};

export default EditOrDeletePage;
