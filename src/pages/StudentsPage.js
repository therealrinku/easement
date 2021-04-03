import { useContext, useState, Fragment } from "react";
import { Link } from "react-router-dom";
import Filters from "../components/Filters";
import Context from "../context/Context";

const StudentsPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const { students } = useContext(Context);

  const filteredStudents = students.filter((student) => {
    return student.Name.toLowerCase().includes(
      searchQuery.trim().toLowerCase()
    );
  });

  return (
    <Fragment>
      {students.length > 0 ? (
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
                        className="link"
                      >
                        {student.Name}
                      </Link>
                    </td>
                    <td>{student.Class}</td>
                    <td>{student.RollNo}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </Fragment>
      ) : (
        <div style={{ display: "flex", alignItems: "center" }}>
          <h4>No any students added yet!</h4>
          <Link
            to="/new"
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
    </Fragment>
  );
};

export default StudentsPage;
