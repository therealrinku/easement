import { useEffect, useState, Fragment } from "react";
import { Link } from "react-router-dom";
import Filters from "../components/Filters";
import { connect } from "react-redux";
import * as studentActions from "../redux/student/studentActions";

const StudentsPage = ({ students, studentsLoaded, loading, LOAD_STUDENTS }) => {
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    if (!studentsLoaded) {
      LOAD_STUDENTS("test");
    }
  }, []);

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

const mapStateToProps = (state) => {
  return {
    students: state.students.students,
    studentsLoaded: state.students.students_loaded,
    loading: state.students.loading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    LOAD_STUDENTS: (username) =>
      dispatch(studentActions.LOAD_STUDENTS(username)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(StudentsPage);
