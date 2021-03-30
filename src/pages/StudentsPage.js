import { useContext, useState, Fragment } from "react";
import { Link } from "react-router-dom";
import Filters from "../components/Filters";
import Context from "../context/Context";

const StudentsPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const { students } = useContext(Context);

  const filteredStudents = students.filter((student) => {
    return student.studentName
      .toLowerCase()
      .includes(searchQuery.trim().toLowerCase());
  });

  return (
    <Fragment>
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
                  <Link
                    to={`/student/details/${student.id}`}
                    className="student-link"
                  >
                    {student.studentName}
                  </Link>
                </td>
                <td>{student.studentClassName}</td>
                <td>{student.studentRollNo}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </Fragment>
  );
};

export default StudentsPage;
