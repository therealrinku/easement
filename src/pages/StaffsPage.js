import { Tooltip } from "@material-ui/core";
import { useEffect, useState } from "react";
import { MdEdit } from "react-icons/all";
import Filters from "../components/Filters";
import db from "../firebase/db";

const StaffsPage = () => {
  const [staffs, setStaffs] = useState([]);

  useEffect(() => {
    db.collection("test")
      .doc("staffs")
      .onSnapshot((doc) => {
        setStaffs(doc.data().staffs);
      });
  }, []);

  return (
    <div className="page">
      <h4>Staffs</h4>
      <Filters />
      <table className="table">
        <thead>
          <th>S.N~{staffs.length}</th>
          <th>Name</th>
          <th>Role</th>
          <th>Salary</th>
        </thead>
        <tbody>
          {staffs.map((staff, i) => {
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
                  <p>{staff.name}</p>
                  <div>
                    <Tooltip title={`Edit ${staff.name}`}>
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
                <td>{staff.role}</td>
                <td>{staff.salary}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default StaffsPage;
