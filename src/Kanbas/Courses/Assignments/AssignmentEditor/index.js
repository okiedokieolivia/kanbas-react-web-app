import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  addAssignment,
  deleteAssignment,
  updateAssignment,
  setAssignment,
} from "../assignmentReducer";
import { FaCircle, FaPlus, FaEllipsisV, FaCheckCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

function AssignmentEditor() {
  const { courseId, assignmentId } = useParams();
  const assignments = useSelector(
    (state) => state.assignmentReducer.assignments
  );
  const assignment = useSelector((state) => state.assignmentReducer.assignment);
  const dispatch = useDispatch();

  // const defaultAssignment = assignments.find(
  //   (assignment) => assignment._id === assignmentId
  // ) ?? {
  //   title: "New Assignment",
  //   course: courseId,
  //   due: "2023-10-17",
  //   points: 100,
  //   description: "New Description",
  // };

  const newAssignment = !assignments.some(
    (assignment) => assignment._id === assignmentId
  );
  // dispatch(setAssignment(defaultAssignment));
  // const assignment = useSelector((state) => state.assignmentReducer.assignment);
  // console.log("default assignment: ", defaultAssignment);
  // console.log("assignment: ", assignment);

  // const { courseId } = useParams();
  const navigate = useNavigate();
  const handleSave = () => {
    if (newAssignment) {
      dispatch(addAssignment(assignment));
    } else {
      dispatch(updateAssignment(assignment));
    }
    navigate(`/Kanbas/Courses/${courseId}/Assignments`);
  };
  const handleCancel = () => {
    navigate(`/Kanbas/Courses/${courseId}/Assignments`);
  };

  return (
    <div className="container wd-content-container">
      <div className="row">
        <div className="wd-course-content col-12">
          <div className="wd-vertical-display">
            {/* <!-- the horizontal list of buttons floating at the end --> */}
            <div>
              {newAssignment ? (
                <h4>New Assignment</h4>
              ) : (
                <div className="float-end d-inline-flex align-items-center">
                  <FaCheckCircle className="wd-fg-color-green me-1" />
                  <span className="wd-fg-color-green">Published</span>
                  <button className="btn btn-light btn-sm border ms-1">
                    <FaEllipsisV />
                  </button>
                </div>
              )}
            </div>

            <hr />

            {/* <!-- assignment edit form --> */}
            <div className="wd-assignment-edit-form">
              <div>
                <label htmlFor="assignment-name" className="form-label">
                  Assignment Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="assignment-name"
                  value={assignment.title}
                  onChange={(e) =>
                    dispatch(
                      setAssignment({ ...assignment, title: e.target.value })
                    )
                  }
                />
                <textarea
                  className="form-control mt-3"
                  id="assignment-description"
                  rows="4"
                  value={assignment.description}
                  onChange={(e) =>
                    dispatch(
                      setAssignment({
                        ...assignment,
                        description: e.target.value,
                      })
                    )
                  }
                >
                  {assignment.description}
                </textarea>
              </div>

              <div className="container">
                {/* <!-- points --> */}
                <div className="row mt-3">
                  <div className="col-3">
                    <label
                      htmlFor="points"
                      className="form-label text-end d-block"
                    >
                      Points
                    </label>
                  </div>
                  <div className="col-7">
                    <input
                      type="number"
                      id="points"
                      className="form-control"
                      value={assignment.points}
                      onChange={(e) =>
                        dispatch(
                          setAssignment({
                            ...assignment,
                            points: e.target.value,
                          })
                        )
                      }
                    />
                  </div>
                </div>
                {/* <!-- assignment group --> */}
                <div className="row mt-3">
                  <div className="col-3">
                    <label
                      htmlFor="assignment-group"
                      className="form-label text-end d-block"
                    >
                      Assignment Group
                    </label>
                  </div>
                  <div className="col-7">
                    <select id="assignment-group" className="form-select">
                      <option selected>ASSIGNMENTS</option>
                    </select>
                  </div>
                </div>
                {/* <!-- display grade as --> */}
                <div className="row mt-3">
                  <div className="col-3">
                    <label
                      htmlFor="display-grade-as"
                      className="form-label text-end d-block"
                    >
                      Display Grade as
                    </label>
                  </div>
                  <div className="col-7">
                    <select id="display-grade-as" className="form-select">
                      <option selected>Percentage</option>
                    </select>
                  </div>
                </div>
                {/* <!-- checkbox --> */}
                <div className="row mt-3 ps-3">
                  <div className="col-7 offset-3 form-check">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="assignment-grade-count"
                    />
                    <label
                      htmlFor="assignment-grade-count"
                      className="form-check-label"
                    >
                      Do not count this assignment towards the final grade
                    </label>
                  </div>
                </div>
                {/* <!-- submission type --> */}
                <div className="row mt-3">
                  <div className="col-3">
                    <label
                      htmlFor="submission-type"
                      className="form-label text-end d-block"
                    >
                      Submission Type
                    </label>
                  </div>
                  <div className="col-7 border wd-vertical-display p-3 rounded">
                    <select
                      id="submission-type-select"
                      className="form-select w-75"
                    >
                      <option selected>Online</option>
                    </select>
                    <br />
                    <b>Online Entry Options</b>
                    <div className="form-check">
                      <input
                        type="checkbox"
                        checked
                        className="form-check-input"
                        id="text-entry"
                      />
                      <label htmlFor="text-entry" className="form-check-label">
                        Text Entry
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        type="checkbox"
                        checked
                        className="form-check-input"
                        id="website-url"
                      />
                      <label htmlFor="website-url" className="form-check-label">
                        Website URL
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        type="checkbox"
                        checked
                        id="media-recordings"
                        className="form-check-input"
                      />
                      <label
                        htmlFor="media-recordings"
                        className="form-check-label"
                      >
                        Media Recordings
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        type="checkbox"
                        id="student-annotation"
                        className="form-check-input"
                      />
                      <label
                        htmlFor="student-annotation"
                        className="form-check-label"
                      >
                        Student Annotation
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        type="checkbox"
                        id="file-uploads"
                        className="form-check-input"
                      />
                      <label
                        htmlFor="file-uploads"
                        className="form-check-label"
                      >
                        File Uploads
                      </label>
                    </div>
                  </div>
                </div>
                {/* <!-- submission attempts --> */}
                <div className="row mt-3">
                  <div className="col-3">
                    <label className="form-label text-end d-block">
                      Submission Attempts
                    </label>
                  </div>
                  <div className="col-7 border wd-vertical-display p-3 rounded">
                    <label htmlFor="submission-attempts" className="form-label">
                      <b>Allowed Attempts</b>
                    </label>
                    <select
                      id="submission-attempts"
                      className="form-select w-75"
                    >
                      <option selected>Unlimited</option>
                    </select>
                  </div>
                </div>
                {/* <!-- plagiarism review --> */}
                <div className="row mt-3">
                  <div className="col-3">
                    <label className="form-label text-end d-block">
                      Plagiarism Review
                    </label>
                  </div>

                  <div className="col-7 border wd-vertical-display p-3 rounded">
                    <select className="form-select w-75">
                      <option selected>None</option>
                    </select>
                    <hr />
                    <label htmlFor="show-reports" className="form-label">
                      Show report to students
                    </label>
                    <select
                      id="show-reports"
                      className="form-select w-75"
                      disabled
                    >
                      <option selected>Immediately</option>
                    </select>
                  </div>
                </div>
                {/* <!-- group assignment --> */}
                <div className="row mt-3">
                  <div className="col-3">
                    <label className="form-label text-end d-block">
                      Group Assignment
                    </label>
                  </div>
                  <div className="col-7 border wd-vertical-display p-3 rounded">
                    <div className="form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="group-assignment"
                      />
                      <label
                        htmlFor="group-assignment"
                        className="form-check-label"
                      >
                        This is a Group Assignment
                      </label>
                    </div>
                  </div>
                </div>
                {/* <!-- Peer Reviews --> */}
                <div className="row mt-3">
                  <div className="col-3">
                    <label className="form-label text-end d-block">
                      Peer Reviews
                    </label>
                  </div>
                  <div className="col-7 border wd-vertical-display p-3 rounded">
                    <div className="form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="peer-reviews"
                      />
                      <label
                        htmlFor="peer-reviews"
                        className="form-check-label"
                      >
                        Require Peer Reviews
                      </label>
                    </div>
                  </div>
                </div>
                {/* <!-- assign --> */}
                <div className="row mt-3">
                  <div className="col-3">
                    <label className="form-label text-end d-block">
                      Assign
                    </label>
                  </div>
                  <div className="col-7 border wd-vertical-display p-3 rounded">
                    <label htmlFor="assign-to" className="form-label">
                      <b>Assign to</b>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="assign-to"
                    />
                    <label htmlFor="due" className="form-label mt-2">
                      <b>Due</b>
                    </label>
                    <input
                      type="date"
                      className="form-control"
                      id="due"
                      value={assignment.due}
                      onChange={(e) =>
                        dispatch(
                          setAssignment({
                            ...assignment,
                            due: e.target.value,
                          })
                        )
                      }
                    />
                    <div className="row justify-content-between mt-2">
                      <div className="col">
                        <label htmlFor="available-from" className="form-label">
                          <b>Available from</b>
                        </label>
                        <input
                          type="date"
                          id="available"
                          className="form-control"
                          value="2023-09-06"
                        />
                      </div>
                      <div className="col">
                        <label htmlFor="until" className="form-label">
                          <b>Until</b>
                        </label>
                        <input
                          type="date"
                          id="available"
                          className="form-control"
                          value="2023-09-06"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-7 offset-3 wd-no-padding">
                    <button className="btn btn-light border d-inline-flex align-items-center justify-content-center wd-block-button">
                      <FaPlus className="me-1" />
                      Add
                    </button>
                  </div>
                </div>
              </div>

              <hr />

              <div className="d-flex justify-content-between">
                <div className="form-check">
                  <input
                    type="checkbox"
                    id="notify-user"
                    className="form-check-input"
                  />
                  <label htmlFor="notify-user" className="form-check-label">
                    Notify users that this content has changed
                  </label>
                </div>

                <div className="d-flex">
                  <button
                    onClick={handleCancel}
                    className="btn btn-light border btn-sm"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleSave}
                    className="btn btn-danger btn-sm ms-1"
                  >
                    Save
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default AssignmentEditor;
