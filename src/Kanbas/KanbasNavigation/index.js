import { Link, useLocation } from "react-router-dom";
import {
  FaUserCircle,
  FaBook,
  FaTachometerAlt,
  FaCalendarAlt,
  FaInbox,
  FaClock,
  FaTv,
  FaSignOutAlt,
  FaQuestionCircle,
} from "react-icons/fa";
import "../index.css";
import "bootstrap/dist/css/bootstrap.min.css";

function KanbasNavigation() {
  const links = [
    "Account",
    "Dashboard",
    "Courses",
    "Calendar",
    "Inbox",
    "History",
    "Studio",
    "Commons",
    "Help",
  ];

  const linkToIconMap = {
    Account: (
      <FaUserCircle className="wd-kanbas-navigation-icon wd-white-icon" />
    ),
    Dashboard: <FaTachometerAlt className="wd-kanbas-navigation-icon" />,
    Courses: <FaBook className="wd-kanbas-navigation-icon" />,
    Calendar: <FaCalendarAlt className="wd-kanbas-navigation-icon" />,
    Inbox: <FaInbox className="wd-kanbas-navigation-icon" />,
    History: <FaClock className="wd-kanbas-navigation-icon" />,
    Studio: <FaTv className="wd-kanbas-navigation-icon" />,
    Commons: <FaSignOutAlt className="wd-kanbas-navigation-icon" />,
    Help: <FaQuestionCircle className="wd-kanbas-navigation-icon" />,
  };

  const { pathname } = useLocation();

  return (
    <div className="wd-kanbas-container">
      <div className="wd-bg-color-black d-none d-md-block">
        <ul className="wd-kanbas-navigation">
          <li>
            <img
              src={`${process.env.PUBLIC_URL}/images/NUlogo2.png`}
              alt="NU logo"
            />
          </li>

          {links.map((link, index) => (
            <li
              key={index}
              className={`${pathname.includes(link) && "wd-active"}`}
            >
              <Link to={`/Kanbas/${link}`}>
                {linkToIconMap[link]} <br />
                {link}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
export default KanbasNavigation;
