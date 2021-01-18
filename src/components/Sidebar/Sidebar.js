import "./Sidebar.css";

import {
  HiOutlineSearch,
  MdAdd,
  FiUsers,
  MdAttachMoney,
  MdShowChart,
  BsGear,
  VscHome,
  AiOutlineDelete,
  RiAdminLine,
} from "react-icons/all";
import { NavLink } from "react-router-dom";

const Sidebar = ({ hideSidebar }) => {
  return (
    <div className="sidebar" style={hideSidebar ? { display: "none" } : null}>
      <h4>Easement</h4>

      <NavLink to="/" exact activeClassName="nav--active">
        <VscHome />
        <p>Home</p>
      </NavLink>

      <NavLink to="/search" exact activeClassName="nav--active">
        <HiOutlineSearch />
        <p>Quick Search</p>
      </NavLink>

      <NavLink to="/new" exact activeClassName="nav--active">
        <MdAdd />
        <p>New</p>
      </NavLink>

      <NavLink to="/staffs" exact activeClassName="nav--active">
        <RiAdminLine />
        <p>Staffs</p>
      </NavLink>

      <NavLink to="/students" exact activeClassName="nav--active">
        <FiUsers />
        <p>Students</p>
      </NavLink>

      <NavLink to="/fees" exact activeClassName="nav--active">
        <MdAttachMoney />
        <p>Fees</p>
      </NavLink>

      <NavLink to="/results" exact activeClassName="nav--active">
        <MdShowChart />
        <p>Results</p>
      </NavLink>

      <NavLink to="/trash" exact activeClassName="nav--active">
        <AiOutlineDelete />
        <p>Trash</p>
      </NavLink>

      <NavLink to="/settings" exact activeClassName="nav--active">
        <BsGear />
        <p>Settings</p>
      </NavLink>
    </div>
  );
};

export default Sidebar;
