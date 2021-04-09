import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import GoBack from "./GoBack";
import Alert from "./Alert";
import { useState, useContext } from "react";
import Context from "../context/Context";

const Layout = ({ children }) => {
  const [showSidebar, setShowSidebar] = useState(true);
  const { message } = useContext(Context);

  return (
    <div className="app">
      {message ? <Alert message={message} /> : null}
      <Sidebar hideSidebar={!showSidebar} />
      <Topbar toggleSidebar={() => setShowSidebar((prev) => !prev)} sideBarIsClosed={!showSidebar} />
      <div className="page" style={showSidebar ? { marginLeft: "17.5%" } : null}>
        <GoBack />
        {children}
      </div>
    </div>
  );
};

export default Layout;
