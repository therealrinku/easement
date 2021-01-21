import { Tooltip } from "@material-ui/core";
import { useContext } from "react";
import { MdEdit } from "react-icons/all";
import Filters from "../components/Filters";
import Context from "../context/Context";

const StudentsPage = () => {
  const { students } = useContext(Context);

  return (
    <div className="page">
      <h4>Students</h4>
      <Filters />

      <table className="table">
        <thead>
          <th>S.N~{students.length}</th>
          <th>Name</th>
          <th>Class</th>
          <th>RollNo</th>
        </thead>
        <tbody>
          {students.map((student, i) => {
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

export default StudentsPage;
