import "./navbar.scss";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline"
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import ListOutlinedIcon from "@mui/icons-material/ListOutlined";

const Navbar = () => {
  var dateObj = new Date()
    .toUTCString()
    .split(" ")
    .slice(0, 4)
    .join(" ");
  var time = new Date()
;
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="items left-items">
          <div className="item">
            <ListOutlinedIcon className="icon" />
          </div>
          <div className="item">Good Morning!</div>
          <div className="item">
            {dateObj}
            &nbsp;&nbsp;
            {time.toLocaleString("en-US", {
              hour: "numeric",
              minute: "numeric",
              hour12: true,
            })}
          </div>
        </div>

        <div className="items right-items">
          <div className="item">
            <HelpOutlineIcon className="icon" />
          </div>
          <div className="item">
            <NotificationsNoneOutlinedIcon className="icon" />
            <div className="counter">9</div>
          </div>
          <div className="item">
            <strong>Moaz Gad</strong>
          </div>
          <div className="item">
            <img
              src="https://images.pexels.com/photos/941693/pexels-photo-941693.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
              className="avatar"
            />
          </div>
        </div>
      </div>
    </div>
  )
};

export default Navbar;
