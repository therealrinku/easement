import { useEffect, useState, Fragment } from "react";
import { Link } from "react-router-dom";
import Accessibility from "../components/Accessibility";
import * as staffActions from "../redux/staff/staffActions";
import { connect } from "react-redux";
import Loader from "../components/Loader";
import sorter from "../utils/Sorter";

const StaffsPage = ({ staffs, staffsLoaded, loading, LOAD_STAFFS }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchBy, setSearchBy] = useState("Name");
  const [sortBy, setSortBy] = useState("Name");

  useEffect(() => {
    if (!staffsLoaded) LOAD_STAFFS("test");
  }, []);

  const filteredStaffs = staffs.filter((staff) => {
    return staff[searchBy].toLowerCase().includes(searchQuery.trim().toLowerCase());
  });

  const sortedStaffs = sorter(filteredStaffs, sortBy);

  return (
    <Fragment>
      {loading || !staffsLoaded ? (
        <Loader />
      ) : staffs.length > 0 ? (
        <Fragment>
          <h4>Staffs</h4>
          <Accessibility
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            searchByOptions={["Name", "Role", "Salary"]}
            searchBy={searchBy}
            setSearchBy={setSearchBy}
            sortByOptions={["Name", "Role", "Salary"]}
            setSortBy={setSortBy}
            sortBy={sortBy}
          />
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
              {sortedStaffs.map((staff, i) => {
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
      ) : (
        <div style={{ display: "flex", alignItems: "center" }}>
          <h4>No any staffs added yet!</h4>
          <Link
            to="/new?staff=true"
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
    staffs: state.staffs.staffs,
    staffsLoaded: state.staffs.staffsLoaded,
    loading: state.staffs.loading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    LOAD_STAFFS: (username) => dispatch(staffActions.LOAD_STAFFS(username)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(StaffsPage);
