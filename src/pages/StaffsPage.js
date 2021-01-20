import { Tooltip } from "@material-ui/core";
import { MdEdit } from "react-icons/all";
import Filters from "../components/Filters";

const StaffsPage = () => {
  const sortedStudents = [
    { id: 1, name: "Rinku", role: "Science Teacher" },
    { id: 2, name: "Sandip", role: "Math Teacher" },
  ];

  return (
    <div className="page">
      <h4>Staffs</h4>
      <Filters />
      <table className="table">
        <thead>
          <th>S.N~{sortedStudents.length}</th>
          <th>Name</th>
          <th>Role</th>
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
                <td>{student.role}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default StaffsPage;
