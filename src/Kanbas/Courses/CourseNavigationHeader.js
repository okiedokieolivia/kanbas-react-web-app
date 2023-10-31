import React from "react";
import {
  FaBars,
  FaGlasses,
  FaUserCircle,
  FaTachometerAlt,
  FaBook,
  FaInbox,
  FaCalendarAlt,
  FaClock,
  FaTv,
  FaSignOutAlt,
  FaQuestionCircle,
  FaHome,
  FaVectorSquare,
  FaPlug,
  FaFileAlt,
  FaRocket,
  FaAddressBook,
  FaUserFriends,
  FaCommentDots,
  FaBullhorn,
  FaFolder,
  FaClipboardList,
  FaBullseye,
  FaCircle,
  FaCog,
} from "react-icons/fa";
import { BiMenu } from "react-icons/bi";
import { useParams, Link, useLocation } from "react-router-dom";
import { links } from "./consts";
import "../index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

export default function CourseNavigationHeader({ courses }) {
  const { courseId } = useParams();
  const { pathname } = useLocation();
  const decodedPathname = decodeURIComponent(pathname);
  const segments = decodedPathname.split("/");

  const course = courses.find((course) => course._id === courseId);
  const courseSection = links.find((link) => decodedPathname.includes(link));
  const assignmentId =
    courseSection === "Assignments" && segments.length >= 6
      ? segments[5]
      : undefined;

  const mainNavLinks = [
    "Dashboard",
    "Account",
    "Courses",
    "Calendar",
    "Inbox",
    "Studio",
    "Commons",
    "History",
    "Help",
  ];
  const mainNavLinkToIconMap = {
    Account: (
      <FaUserCircle className="kanbas-navigation-sm-icon wd-fg-color-grey me-2 ms-3" />
    ),
    Dashboard: <FaTachometerAlt className="kanbas-navigation-sm-icon me-2" />,
    Courses: <FaBook className="kanbas-navigation-sm-icon me-2 ms-3" />,
    Calendar: <FaCalendarAlt className="kanbas-navigation-sm-icon me-2" />,
    Inbox: <FaInbox className="kanbas-navigation-sm-icon me-2" />,
    History: <FaClock className="kanbas-navigation-sm-icon me-2 ms-3" />,
    Studio: <FaTv className="kanbas-navigation-sm-icon me-2" />,
    Commons: <FaSignOutAlt className="kanbas-navigation-sm-icon me-2" />,
    Help: <FaQuestionCircle className="kanbas-navigation-sm-icon me-2 ms-3" />,
  };
  const linkToIconMap = {
    Settings: <FaCog />,
    "Progress Reports (EAB Navigate)": <FaPlug />,
    Syllabus: <FaClipboardList />,
    Collaborations: <FaCircle />,
    Outcomes: <FaBullseye />,
    Rubrics: <FaClipboardList />,
    Files: <FaFolder />,
    Pages: <FaFileAlt />,
    Announcements: <FaBullhorn />,
    Discussions: <FaCommentDots />,
    "Panopto Video": <FaPlug />,
    People: <FaUserFriends />,
    Grades: <FaAddressBook />,
    Quizzes: <FaRocket />,
    Assignments: <FaFileAlt />,
    "Zoom Meetings": <FaPlug />,
    Piazza: <FaPlug />,
    Modules: <FaVectorSquare />,
    Home: <FaHome />,
  };

  return (
    <>
      <div className="wd-main-page-header d-none d-md-block">
        <div className="d-flex justify-content-between align-items-center">
          <nav
            style={{ "--bs-breadcrumb-divider": "'>'" }}
            aria-label="breadcrumb"
          >
            <ol className="breadcrumb d-inline-flex align-items-center">
              <li className="breadcrumb-item">
                <Link
                  to={`/Kanbas/Courses/${courseId}/Home`}
                  className="wd-fg-color-red"
                >
                  <FaBars className="wd-main-page-header-bar-icon" />
                  {`${course.number} ${course.name}`}
                </Link>
              </li>
              <li
                className={`breadcrumb-item ${
                  assignmentId == null && "active"
                }`}
                aria-current="page"
              >
                {/* {courseSection} */}
                <Link
                  to={`/Kanbas/Courses/${courseId}/Assignments`}
                  className={`${assignmentId != null && "wd-fg-color-red"}`}
                >
                  {courseSection}
                </Link>
              </li>
              {assignmentId && (
                <li className="breadcrumb-item active">{assignmentId}</li>
              )}
            </ol>
          </nav>

          <button className="btn btn-light btn-sm border">
            <FaGlasses className="wd-fg-color-grey me-2" />
            Student View
          </button>
        </div>
        <hr />
      </div>

      <div className="wd-main-page-header-sm d-md-none wd-bg-color-black wd-flex-row-container">
        <button
          className="btn fas fa-bars wd-fg-color-white"
          data-bs-toggle="offcanvas"
          data-bs-target="#kanbas-navigation-sm"
        >
          <BiMenu
            className="wd-fg-color-white"
            style={{ fontSize: "1.2rem" }}
          />
        </button>
        <div className="wd-fg-color-white wd-center-wrapper wd-vertical-display">
          <div>
            {course.number} {course.name}
          </div>
          <div>{courseSection}</div>
        </div>
        <button
          className="btn wd-main-page-header-toggle-icon wd-fg-color-white"
          data-bs-toggle="collapse"
          data-bs-target="#sub-navigation-sm"
        ></button>
      </div>

      <div
        className="offcanvas offcanvas-start"
        tabindex="-1"
        aria-labelledby="offcanvasExampleLabel"
        id="kanbas-navigation-sm"
      >
        <div className="offcanvas-header d-flex justify-content-end">
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body">
          <ul className="list-unstyled">
            {mainNavLinks.map((link, index) => (
              <li key={index}>
                <Link to={`/Kanbas/${link}`}>
                  {mainNavLinkToIconMap[link]}
                  {link}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="collapse" id="sub-navigation-sm">
        <ul className="list-unstyled d-md-none ps-2">
          {links.map((link, index) => (
            <li key={index}>
              <Link to={`/Kanbas/Courses/${courseId}/${link}`}>
                <div className="d-flex">
                  <div className="wd-icon-container">{linkToIconMap[link]}</div>
                  {link}
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
