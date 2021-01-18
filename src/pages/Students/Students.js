import { Tooltip } from "@material-ui/core";
import { MdEdit } from "react-icons/all";
import "./Students.css";

const Students = () => {
  const sortedStudents = [
    { id: 1, name: "rinku", class: 1, rollNo: 10 },
    { id: 1, name: "olivia", class: 1, rollNo: 11 },
  ];

  return (
    <div className="students--page">
      <h4>Students</h4>
      <table className="table">
        <thead>
          <th>S.N~{sortedStudents.length}</th>
          <th>Name</th>
          <th>Class</th>
          <th>RollNo</th>
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
                <td>{student.rollNo}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Students;
