import { useContext, useState } from "react";
import Filters from "../components/Filters";
import Context from "../context/Context";

const StaffsPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const { staffs } = useContext(Context);
  const filteredStaffs = staffs.filter((staff) => {
    return staff.name.toLowerCase().includes(searchQuery.trim().toLowerCase());
  });

  return (
    <div className="page">
      <h4>Staffs</h4>
      <Filters searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <table className="table">
        <thead>
          <tr>
            <th>S.N~{filteredStaffs.length}</th>
            <th>Name</th>
            <th>Role</th>
            <th>Salary</th>
          </tr>
        </thead>

        <tbody>
          {filteredStaffs.map((staff, i) => {
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
