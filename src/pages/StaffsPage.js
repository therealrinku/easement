import { useContext, useState, Fragment } from "react";
import { Link } from "react-router-dom";
import Filters from "../components/Filters";
import Context from "../context/Context";

const StaffsPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const { staffs } = useContext(Context);
  const filteredStaffs = staffs.filter((staff) => {
    return staff.Name.toLowerCase().includes(searchQuery.trim().toLowerCase());
  });

  return (
    <Fragment>
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
                  <Link to={`/staff/details/${staff.id}`} className="link">
                    {staff.Name}
                  </Link>
                </td>
                <td>{staff.Role}</td>
                <td>{staff.Salary}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </Fragment>
  );
};

export default StaffsPage;
