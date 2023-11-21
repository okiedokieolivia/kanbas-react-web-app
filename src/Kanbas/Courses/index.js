import { Navigate, Route, Routes, useParams } from "react-router-dom";
import CourseNavigation from "./CourseNavigation";
import CourseNavigationHeader from "./CourseNavigationHeader";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/AssignmentEditor";
import Grades from "./Grades";
import { useState, useEffect } from "react";
import axios from "axios";
import "../index.css";
import "bootstrap/dist/css/bootstrap.min.css";

function Courses() {
  const { courseId } = useParams();
  const [course, setCourse] = useState({});
  const API_BASE = process.env.REACT_APP_API_BASE;
  //const URL = "http://localhost:4000/api/courses";
  const URL = `${API_BASE}/api/courses`;

  const findCourseById = async (courseId) => {
    const response = await axios.get(`${URL}/${courseId}`);
    setCourse(response.data);
  };
  //const course = courses.find((course) => course._id === courseId);
  useEffect(() => {
    findCourseById(courseId);
  }, [courseId]);

  return (
    <div className="wd-main-page-container">
      <CourseNavigationHeader />

      <div className="wd-main-page-content">
        <CourseNavigation />
        <Routes>
          <Route path="/" element={<Navigate to="Home" />} />
          <Route path="Home" element={<Home />} />
          <Route path="Modules" element={<Modules />} />
          <Route path="Assignments" element={<Assignments />} />
          <Route
            path="Assignments/:assignmentId"
            element={<AssignmentEditor />}
          />
          <Route path="Grades" element={<Grades />} />
        </Routes>
      </div>
    </div>
  );
}

// function Courses({ courses }) {
//   const { courseId } = useParams();
//   const course = courses.find((course) => course._id === courseId);

//   return (
//     <div className="wd-main-page-container">
//       <CourseNavigationHeader courses={courses} />

//       <div className="wd-main-page-content">
//         <CourseNavigation />
//         <Routes>
//           <Route path="/" element={<Navigate to="Home" />} />
//           <Route path="Home" element={<Home />} />
//           <Route path="Modules" element={<Modules />} />
//           <Route path="Assignments" element={<Assignments />} />
//           <Route
//             path="Assignments/:assignmentId"
//             element={<AssignmentEditor />}
//           />
//           <Route path="Grades" element={<Grades />} />
//         </Routes>
//       </div>
//     </div>
//   );
// }

export default Courses;
