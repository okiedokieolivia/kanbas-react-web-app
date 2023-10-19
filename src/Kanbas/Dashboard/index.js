import { Link } from "react-router-dom";
import { FaEllipsisV, FaRegClipboard } from "react-icons/fa";
import db from "../Database";
import "../index.css";
import "bootstrap/dist/css/bootstrap.min.css";

function Dashboard() {
  const courses = db.courses;
  return (
    <div className="wd-main-page-container">
      <h1 className="wd-weight-light-heading">Dashboard</h1>
      <hr />

      <div className="container wd-dashboard-content">
        <h3>Published Courses({courses.length})</h3>

        <hr />

        <div className="row row-cols-md-3 row-cols-lg-4 wd-dashboard-grid">
          {/* Courses card */}
          {courses.map((course) => (
            <div
              key={course._id}
              className="col"
              style={{ textDecoration: "none" }}
            >
              <div className="card wd-dashboard-course">
                <div className="wd-dashboard-course-background">
                  <FaEllipsisV className="float-end wd-fg-color-white me-2 mt-2" />
                </div>
                <div className="card-body">
                  <Link
                    to={`/Kanbas/Courses/${course._id}`}
                    style={{ textDecoration: "none" }}
                    className="wd-dashboard-course-info"
                  >
                    <div className="wd-dashboard-course-title wd-truncate-text">
                      {`${course.number} ${course.name}`}
                    </div>
                    <div className="wd-dashboard-course-number wd-truncate-text">
                      {`${course.number}.${course._id}`}
                    </div>
                    <div className="wd-dashboard-course-detail wd-truncate-text">
                      {`From ${course.startDate} to ${course.endDate}`}
                    </div>
                  </Link>
                  <FaRegClipboard className="wd-dashboard-course-icon" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default Dashboard;
