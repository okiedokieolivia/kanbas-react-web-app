import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { FaEllipsisV } from "react-icons/fa";
import db from "../Database";
import "../index.css";
import "bootstrap/dist/css/bootstrap.min.css";

function Dashboard({
  courses,
  course,
  setCourse,
  addNewCourse,
  deleteCourse,
  updateCourse,
}) {
  // const [courses, setCourses] = useState(db.courses);
  // const [course, setCourse] = useState({
  //   name: "New Course",
  //   number: "New Number",
  //   startDate: "2023-09-10",
  //   endDate: "2023-12-15",
  // });

  // const addNewCourse = () => {
  //   setCourses([...courses, { ...course, _id: new Date().getTime() }]);
  // };

  // const deleteCourse = (courseId) => {
  //   setCourses(courses.filter((course) => course._id !== courseId));
  // };

  // const updateCourse = () => {
  //   setCourses(
  //     courses.map((c) => {
  //       if (c._id === course._id) {
  //         return course;
  //       } else {
  //         return c;
  //       }
  //     })
  //   );
  // };

  return (
    <div className="wd-main-page-container">
      <h1 className="wd-weight-light-heading">Dashboard</h1>
      <hr />

      <div className="container wd-dashboard-content">
        <h3>Published Courses({courses.length})</h3>

        <hr />

        <div className="d-inline-flex">
          <div className="ms-1">
            <label htmlFor="course-name">Course Name</label>
            <input
              id="course-name"
              value={course.name}
              className="form-control form-control-sm"
              onChange={(e) => setCourse({ ...course, name: e.target.value })}
            />
          </div>
          <div className="ms-1">
            <label htmlFor="course-number">Course Number</label>
            <input
              id="course-number"
              value={course.number}
              className="form-control form-control-sm"
              onChange={(e) => setCourse({ ...course, number: e.target.value })}
            />
          </div>
          <div className="ms-1">
            <label htmlFor="start-date">Start Date</label>
            <input
              id="start-date"
              type="date"
              value={course.startDate}
              className="form-control form-control-sm"
              onChange={(e) =>
                setCourse({ ...course, startDate: e.target.value })
              }
            />
          </div>
          <div className="ms-1">
            <label htmlFor="end-date">End Date</label>
            <input
              id="end-date"
              type="date"
              value={course.endDate}
              className="form-control form-control-sm"
              onChange={(e) =>
                setCourse({ ...course, endDate: e.target.value })
              }
            />
          </div>
          <div className="d-flex flex-column">
            <button
              className="btn btn-sm btn-danger ms-1 mt-auto"
              onClick={addNewCourse}
            >
              Add
            </button>
          </div>
          <div className="d-flex flex-column">
            <button
              className="btn btn-sm btn-light border ms-1 mt-auto"
              onClick={updateCourse}
            >
              Update
            </button>
          </div>
        </div>

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
                  {/* <FaRegClipboard className="wd-dashboard-course-icon" /> */}
                  <div className="float-end">
                    <button
                      className="btn btn-outline-primary wd-course-dashboard-button"
                      onClick={(event) => {
                        event.preventDefault();
                        setCourse(course);
                      }}
                    >
                      Edit
                    </button>
                    <button
                      className="btn btn-primary wd-course-dashboard-button ms-1"
                      onClick={(event) => {
                        event.preventDefault();
                        deleteCourse(course._id);
                      }}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// function Dashboard() {
//   const [courses, setCourses] = useState(db.courses);
//   const [course, setCourse] = useState({
//     name: "New Course",
//     number: "New Number",
//     startDate: "2023-09-10",
//     endDate: "2023-12-15",
//   });

//   const addNewCourse = () => {
//     setCourses([...courses, { ...course, _id: new Date().getTime() }]);
//   };

//   const deleteCourse = (courseId) => {
//     setCourses(courses.filter((course) => course._id !== courseId));
//   };

//   const updateCourse = () => {
//     setCourses(
//       courses.map((c) => {
//         if (c._id === course._id) {
//           return course;
//         } else {
//           return c;
//         }
//       })
//     );
//   };

//   return (
//     <div className="wd-main-page-container">
//       <h1 className="wd-weight-light-heading">Dashboard</h1>
//       <hr />

//       <div className="container wd-dashboard-content">
//         <h3>Published Courses({courses.length})</h3>

//         <hr />

//         <div className="d-inline-flex">
//           <div className="ms-1">
//             <label htmlFor="course-name">Course Name</label>
//             <input
//               id="course-name"
//               value={course.name}
//               className="form-control form-control-sm"
//               onChange={(e) => setCourse({ ...course, name: e.target.value })}
//             />
//           </div>
//           <div className="ms-1">
//             <label htmlFor="course-number">Course Number</label>
//             <input
//               id="course-number"
//               value={course.number}
//               className="form-control form-control-sm"
//               onChange={(e) => setCourse({ ...course, number: e.target.value })}
//             />
//           </div>
//           <div className="ms-1">
//             <label htmlFor="start-date">Start Date</label>
//             <input
//               id="start-date"
//               type="date"
//               value={course.startDate}
//               className="form-control form-control-sm"
//               onChange={(e) =>
//                 setCourse({ ...course, startDate: e.target.value })
//               }
//             />
//           </div>
//           <div className="ms-1">
//             <label htmlFor="end-date">End Date</label>
//             <input
//               id="end-date"
//               type="date"
//               value={course.endDate}
//               className="form-control form-control-sm"
//               onChange={(e) =>
//                 setCourse({ ...course, endDate: e.target.value })
//               }
//             />
//           </div>
//           <div className="d-flex flex-column">
//             <button
//               className="btn btn-sm btn-danger ms-1 mt-auto"
//               onClick={addNewCourse}
//             >
//               Add
//             </button>
//           </div>
//           <div className="d-flex flex-column">
//             <button
//               className="btn btn-sm btn-light border ms-1 mt-auto"
//               onClick={updateCourse}
//             >
//               Update
//             </button>
//           </div>
//         </div>

//         <div className="row row-cols-md-3 row-cols-lg-4 wd-dashboard-grid">
//           {/* Courses card */}
//           {courses.map((course) => (
//             <div
//               key={course._id}
//               className="col"
//               style={{ textDecoration: "none" }}
//             >
//               <div className="card wd-dashboard-course">
//                 <div className="wd-dashboard-course-background">
//                   <FaEllipsisV className="float-end wd-fg-color-white me-2 mt-2" />
//                 </div>
//                 <div className="card-body">
//                   <Link
//                     to={`/Kanbas/Courses/${course._id}`}
//                     style={{ textDecoration: "none" }}
//                     className="wd-dashboard-course-info"
//                   >
//                     <div className="wd-dashboard-course-title wd-truncate-text">
//                       {`${course.number} ${course.name}`}
//                     </div>
//                     <div className="wd-dashboard-course-number wd-truncate-text">
//                       {`${course.number}.${course._id}`}
//                     </div>
//                     <div className="wd-dashboard-course-detail wd-truncate-text">
//                       {`From ${course.startDate} to ${course.endDate}`}
//                     </div>
//                   </Link>
//                   {/* <FaRegClipboard className="wd-dashboard-course-icon" /> */}
//                   <div className="float-end">
//                     <button
//                       className="btn btn-outline-primary wd-course-dashboard-button"
//                       onClick={(event) => {
//                         event.preventDefault();
//                         setCourse(course);
//                       }}
//                     >
//                       Edit
//                     </button>
//                     <button
//                       className="btn btn-primary wd-course-dashboard-button ms-1"
//                       onClick={(event) => {
//                         event.preventDefault();
//                         deleteCourse(course._id);
//                       }}
//                     >
//                       Delete
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }
export default Dashboard;
