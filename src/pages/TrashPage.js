import { Tooltip } from "@material-ui/core";
import { MdDelete } from "react-icons/all";
import Filters from "../components/Filters";

const TrashPage = () => {
  const sortedStudents = [
    { id: 1, name: "rinku", class: 1, rollNo: 2 },
    { id: 1, name: "olivia", class: 1, rollNo: 3 },
  ];

  return (
    <div className="page">
      <h4>Trash</h4>
      <Filters />
      <table className="table">
        <thead>
          <th>S.N~{sortedStudents.length}</th>
          <th>Name</th>
          <th>Class</th>
          <th>Roll no</th>
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
                    <Tooltip title={`Delete ${student.name}`}>
                      <button
                        style={{
                          border: "none",
                          background: "none",
                          outline: "none",
                        }}
                      >
                        <MdDelete />
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

export default TrashPage;
