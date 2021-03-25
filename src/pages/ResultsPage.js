import { Tooltip } from "@material-ui/core";
import { Fragment } from "react";
import { MdEdit } from "react-icons/all";
import Filters from "../components/Filters";

const ResultsPage = () => {
  const sortedStudents = [
    { id: 1, name: "rinku", class: 1, grade: "A+" },
    { id: 1, name: "olivia", class: 1, grade: "B-" },
  ];

  return (
    <Fragment>
      <h4>Results</h4>
      <Filters />
      <table className="table">
        <thead>
          <th>S.N~{sortedStudents.length}</th>
          <th>Name</th>
          <th>Class</th>
          <th>Grade</th>
        </thead>
        <tbody>
          {sortedStudents.map((student, i) => {
            return (
              <tr key={student.id}>
                <td>{i + 1}</td>
                <td
                  style={{
                    display: "flex",
                    alignItems: "center",
                    border: "none",
                  }}
                >
                  <p>{student.name}</p>
                  <div>
                    <Tooltip title={`Edit ${student.name}`}>
                      <button
                        style={{
                          border: "none",
                          background: "none",
                          outline: "none",
                        }}
                      >
                        <MdEdit />
                      </button>
                    </Tooltip>
                  </div>
                </td>
                <td>{student.class}</td>
                <td>{student.grade}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </Fragment>
  );
};

export default ResultsPage;
