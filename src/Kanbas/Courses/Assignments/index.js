import React, { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  addAssignment,
  deleteAssignment,
  updateAssignment,
  setAssignment,
  setAssignments,
} from "./assignmentReducer";
import {
  FaPlus,
  FaEllipsisV,
  FaGripVertical,
  FaFileAlt,
  FaCheckCircle,
} from "react-icons/fa";
import { BiSolidDownArrow } from "react-icons/bi";
import "../../index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import * as client from "./client";

function Assignments() {
  const { courseId } = useParams();
  const assignments = useSelector(
    (state) => state.assignmentReducer.assignments
  );
  // const assignment = useSelector((state) => state.assignmentReducer.assignment);
  const dispatch = useDispatch();

  const newAssignment = {
    title: "New Assignment",
    course: courseId,
    due: "2023-10-17",
    points: 100,
    description: "New Description",
  };

  const [assignmentToDelete, setAssignmentToDelete] = useState(undefined);

  const navigate = useNavigate();

  const addNewAssignment = () => {
    dispatch(setAssignment(newAssignment));
    navigate(`/Kanbas/Courses/${courseId}/Assignments/Create New Assignment`);
  };

  const editAssignment = (assignment) => {
    dispatch(setAssignment(assignment));
    navigate(`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`);
  };

  const handleAssignmentDelete = () => {
    if (assignmentToDelete) {
      client.deleteAssignment(assignmentToDelete).then(() => {
        dispatch(deleteAssignment(assignmentToDelete));
      });
    }
  };

  const courseAssignments = assignments.filter(
    (assignment) => assignment.course === courseId
  );

  useEffect(() => {
    client.findAssignmentsForCourse(courseId).then((assignments) => {
      dispatch(setAssignments(assignments));
    });
  }, [courseId, dispatch]);

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
                <button
                  //to={`/Kanbas/Courses/${courseId}/Assignments/Create New Assignment`}
                  onClick={addNewAssignment}
                  type="button"
                  className="btn btn-danger btn-sm border s-inline-flex align-items-center ms-1"
                >
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
                <div
                  onClick={() => {
                    editAssignment(assignment);
                  }}
                  type="button"
                  className="list-group-item list-group-item-action"
                  //to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}
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
                        &nbsp;| <b>Due</b> {assignment.due} at 11:59pm |{" "}
                        {assignment.points} pts
                      </div>
                    </div>
                    <div className="d-flex">
                      {/* <FaCheckCircle className="wd-fg-color-green wd-course-module-list-icon" />
                      <FaEllipsisV className="wd-fg-color-grey wd-course-module-list-icon ms-1" /> */}
                      <button
                        className="btn btn-sm btn-danger"
                        data-bs-toggle="modal"
                        data-bs-target="#deleteAssignmentModal"
                        onClick={(e) => {
                          e.stopPropagation();
                          setAssignmentToDelete(assignment);
                        }}
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              ))}

              {/* Modal */}
              <div
                class="modal fade"
                id="deleteAssignmentModal"
                tabindex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <div class="modal-dialog">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h1 class="modal-title fs-5" id="exampleModalLabel">
                        Confirm Removal
                      </h1>
                      <button
                        type="button"
                        class="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div class="modal-body">
                      Are you sure you want to remove
                      {assignmentToDelete && <b> {assignmentToDelete.title}</b>}
                      ?
                    </div>
                    <div class="modal-footer">
                      <button
                        type="button"
                        class="btn btn-secondary"
                        data-bs-dismiss="modal"
                      >
                        Cancel
                      </button>
                      <button
                        type="button"
                        class="btn btn-primary"
                        data-bs-dismiss="modal"
                        // onClick={() => {
                        //   if (assignmentToDelete) {
                        //     dispatch(deleteAssignment(assignmentToDelete));
                        //   }
                        // }}
                        onClick={handleAssignmentDelete}
                      >
                        OK
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Assignments;
