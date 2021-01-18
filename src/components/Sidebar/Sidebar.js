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

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h4>Easement</h4>

      <NavLink to="/" activeClassName="nav--active">
        <VscHome />
        <p>Home</p>
      </NavLink>

      <NavLink to="/search" activeClassName="nav--active">
        <HiOutlineSearch />
        <p>Quick Search</p>
      </NavLink>

      <NavLink to="/new" activeClassName="nav--active">
        <MdAdd />
        <p>New</p>
      </NavLink>

      <NavLink to="/staffs" activeClassName="nav--active">
        <RiAdminLine />
        <p>Staffs</p>
      </NavLink>

      <NavLink to="/students" activeClassName="nav--active">
        <FiUsers />
        <p>Students</p>
      </NavLink>

      <NavLink to="/fees" activeClassName="nav--active">
        <MdAttachMoney />
        <p>Fees</p>
      </NavLink>

      <NavLink to="/results" activeClassName="nav--active">
        <MdShowChart />
        <p>Results</p>
      </NavLink>

      <NavLink to="/trash" activeClassName="nav--active">
        <AiOutlineDelete />
        <p>Trash</p>
      </NavLink>

      <NavLink to="/settings" activeClassName="nav--active">
        <BsGear />
        <p>Settings</p>
      </NavLink>
    </div>
  );
};

export default Sidebar;
