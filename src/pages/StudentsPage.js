import { useContext, useState } from "react";
import Filters from "../components/Filters";
import Context from "../context/Context";

const StudentsPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const { students } = useContext(Context);

  const filteredStudents = students.filter((student) => {
    return student.name
      .toLowerCase()
      .includes(searchQuery.trim().toLowerCase());
  });

  return (
    <div className="page">
      <h4>Students</h4>
      <Filters searchQuery={searchQuery} setSearchQuery={setSearchQuery} />

      <table className="table">
        <thead>
          <tr>
            <th>S.N~{filteredStudents.length}</th>
            <th>Name</th>
            <th>Class</th>
            <th>RollNo</th>
          </tr>
        </thead>

        <tbody>
          {filteredStudents.map((student, i) => {
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
                  <p>{student.name}</p>
                </td>
                <td>{student.class}</td>
                <td>{student.rollNo}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default StudentsPage;
