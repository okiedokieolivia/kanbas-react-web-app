import React from "react";
import { useParams, Link, useLocation } from "react-router-dom";
import { links } from "./consts";
import "../index.css";
import "bootstrap/dist/css/bootstrap.min.css";

function CourseNavigation() {
  const { courseId } = useParams();
  const { pathname } = useLocation();
  const decodedPathname = decodeURIComponent(pathname);

  return (
    <ul className="wd-sidebar-navigation d-none d-md-block">
      {links.map((link, index) => (
        <li
          key={index}
          className={`${decodedPathname.includes(link) && "wd-active"}`}
        >
          <Link to={`/Kanbas/Courses/${courseId}/${link}`}>{link}</Link>
        </li>
      ))}
    </ul>
  );
}

export default CourseNavigation;
