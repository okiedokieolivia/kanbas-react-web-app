import React from "react";
import { Link, useParams } from "react-router-dom";
import {
  FaPlus,
  FaEllipsisV,
  FaGripVertical,
  FaFileAlt,
  FaCheckCircle,
} from "react-icons/fa";
import { BiSolidDownArrow } from "react-icons/bi";
import db from "../../Database";
import "../../index.css";
import "bootstrap/dist/css/bootstrap.min.css";

function Assignments() {
  const { courseId } = useParams();
  const assignments = db.assignments;
  const courseAssignments = assignments.filter(
    (assignment) => assignment.course === courseId
  );
  return (
    <div className="container wd-content-container">
      <div className="row">
        <div className="wd-course-content col-12">
          <div className="wd-vertical-display">
            <div>
              <input
                type="text"
                className="form-control form-control-sm float-start w-25"
                placeholder="Search for Assignment"
              />
              <div className="float-end">
                <button className="btn btn-light btn-sm border d-inline-flex align-items-center ms-1">
                  <FaPlus className="wd-fg-color-grey me-1" />
                  Group
                </button>
                <button className="btn btn-danger btn-sm border s-inline-flex align-items-center ms-1">
                  <FaPlus className="wd-fg-color-white me-1" />
                  Assignment
                </button>
                <button className="btn btn-light btn-sm border ms-1">
                  {/* <i className="fas fa-ellipsis-v"></i> */}
                  <FaEllipsisV />
                </button>
              </div>
            </div>

            <hr />

            {/* Assignments */}
            <div className="list-group wd-course-module-list">
              <div className="list-group-item list-group-item-secondary d-inline-flex align-items-center justify-content-between">
                <div className="d-flex align-items-center">
                  <FaGripVertical className="wd-fg-color-grey" />
                  <BiSolidDownArrow
                    className="wd-fg-color-black ms-1 me-1"
                    style={{ fontSize: "0.6rem" }}
                  />
                  <b>Assignments</b>
                </div>
                <div className="float-end d-flex align-items-center">
                  <div className="rounded-pill wd-rounded-pill">
                    40% of Total
                  </div>
                  <FaPlus className="wd-fg-color-grey wd-course-module-icon" />
                  <FaEllipsisV className="wd-fg-color-grey wd-course-module-icon" />
                </div>
              </div>

              {courseAssignments.map((assignment) => (
                <Link
                  type="button"
                  className="list-group-item list-group-item-action"
                  to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}
                >
                  <div className="d-flex align-items-center">
                    <div className="d-flex">
                      <FaGripVertical className="wd-fg-color-grey" />
                      <FaFileAlt className="wd-fg-color-green ms-3" />
                    </div>
                    <div className="wd-flex-grow-1 ms-3">
                      <b>{assignment.title}</b>
                      <div className="wd-course-module-link-description wd-fg-color-dark-grey">
                        <span className="wd-fg-color-red">
                          Multiple Modules
                        </span>
                        &nbsp;| <b>Due</b> {assignment.due} 2023 at 11:59pm |{" "}
                        {assignment.points} pts
                      </div>
                    </div>
                    <div className="d-flex">
                      <FaCheckCircle className="wd-fg-color-green wd-course-module-list-icon" />
                      <FaEllipsisV className="wd-fg-color-grey wd-course-module-list-icon ms-1" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Assignments;
