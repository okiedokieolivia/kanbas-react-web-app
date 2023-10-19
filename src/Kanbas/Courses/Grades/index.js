import db from "../../Database";
import { useParams } from "react-router-dom";
import { FaCog, FaSearch, FaFilter } from "react-icons/fa";
import { BiSolidFileImport, BiSolidFileExport } from "react-icons/bi";

function Grades() {
  const { courseId } = useParams();
  const assignments = db.assignments.filter(
    (assignment) => assignment.course === courseId
  );
  const enrollments = db.enrollments.filter(
    (enrollment) => enrollment.course === courseId
  );

  return (
    <div className="container wd-content-container">
      <div className="row">
        <div className="wd-course-content col-12">
          <div className="wd-vertical-display">
            {/* <!-- the horizontal list of buttons floating at the end --> */}
            <div>
              <div className="float-end">
                <button className="btn btn-light btn-sm border d-inline-flex align-items-center">
                  <BiSolidFileImport
                    className="me-1 wd-fg-color-dark-grey"
                    style={{ fontSize: "1rem" }}
                  />
                  Import
                </button>
                <button className="btn btn-light btn-sm dropdown-toggle border d-inline-flex align-items-center ms-1">
                  <BiSolidFileExport
                    className="me-1 wd-fg-color-dark-grey"
                    style={{ fontSize: "1rem" }}
                  />
                  Export
                </button>
                <button className="btn btn-light btn-sm border ms-1">
                  <FaCog className="wd-fg-color-dark-grey" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row mt-2">
        <div className="col">
          <label htmlFor="student-names" className="form-label">
            <b>Student Names</b>
          </label>
          <div className="input-group">
            <label htmlFor="student-names" className="input-group-text">
              {/* <i className="fas fa-search"></i> */}
              <FaSearch />
            </label>
            <select id="student-names" className="form-select">
              <option selected disabled>
                {/* <i className="fas fa-search"></i> */}
                Search Students
              </option>
            </select>
          </div>
        </div>
        <div className="col">
          <label htmlFor="assignment-names" className="form-label">
            <b>Assignment Names</b>
          </label>
          <div className="input-group">
            <label htmlFor="assignment-names" className="input-group-text">
              {/* <i className="fas fa-search"></i> */}
              <FaSearch />
            </label>
            <select id="assignment-names" className="form-select">
              <option selected disabled>
                Search Assignments
              </option>
            </select>
          </div>
        </div>
      </div>

      <div className="row mt-3">
        <div className="col">
          <button className="btn btn-light border">
            <FaFilter className="wd-fg-color-dark-grey me-1" />
            Apply Filters
          </button>
        </div>
      </div>

      <div className="mt-3 table-responsive">
        <table className="table table-striped table-bordered wd-grades-table">
          <thead className="table-light">
            <tr>
              <th>Student Name</th>
              {assignments.map((assignment, index) => (
                <th key={index}>
                  {assignment.title}{" "}
                  <div className="wd-course-module-link-description">
                    Out of 100
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {enrollments.map((enrollment, index) => {
              const user = db.users.find(
                (user) => user._id === enrollment.user
              );
              const gradeList = db.grades.filter(
                (grade) =>
                  grade.user === user._id && enrollment.course === grade.course
              );
              return (
                <tr key={index}>
                  <td>
                    {user.firstName} {user.lastName}
                  </td>
                  {assignments.map((assignment, index) => {
                    const grade = gradeList.find(
                      (gradeItem) => gradeItem.assignment === assignment._id
                    );
                    return <td key={index}>{grade.grade}%</td>;
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
export default Grades;
