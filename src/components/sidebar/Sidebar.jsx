import "./sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import { Link } from "react-router-dom";
import logo from "../../assets/renoLogo.png"
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined"
import { useState } from "react";
const Sidebar = () => {
   const [searchTerm, setSearchTerm] = useState("")
  
  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="logo">
            <img src={logo} alt="logo" />{" "}
          </span>
        </Link>
        <div className="search">
          <input
            type="text"
            placeholder="Quick access"
            value={searchTerm}
            
          />
          <SearchOutlinedIcon />
        </div>
      </div>

      <div className="center">
        <ul>
          <li>
            <DashboardIcon className="icon" />
            <span>Dashboard</span>
          </li>
          <p className="title">SETTINGS</p>
          <li>
            <span>ATM SETTINGS</span>
          </li>
          <li>
            <span>Business Setup</span>
          </li>

          <p className="title">User Mangement</p>
          <Link to="/users/" style={{ textDecoration: "none" }}>
            <li>
              <span>Users</span>
            </li>
          </Link>
          <li>
            <span>Profiles</span>
          </li>
          <li>
            <span>Groups</span>
          </li>

          <p className="title">License Mangement</p>
        </ul>
      </div>
    </div>
  )
};

export default Sidebar;
