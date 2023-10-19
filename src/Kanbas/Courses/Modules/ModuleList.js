import React from "react";
import { useParams } from "react-router-dom";
import db from "../../Database";
import {
  FaCheckCircle,
  FaPlus,
  FaEllipsisV,
  FaGripVertical,
} from "react-icons/fa";
import { BiSolidRightArrow } from "react-icons/bi";
import "../../index.css";
import "bootstrap/dist/css/bootstrap.min.css";

function ModuleList() {
  const { courseId } = useParams();
  const modules = db.modules;

  return (
    <div className="list-group wd-course-module-list">
      {modules
        .filter((module) => module.course === courseId)
        .map((module, index) => (
          <div
            key={index}
            class="wd-course-module-list-item list-group-item list-group-item-secondary d-inline-flex align-items-center justify-content-between"
          >
            <div className="d-inline-flex align-items-center">
              <FaGripVertical className="wd-fg-color-grey" />
              <BiSolidRightArrow
                className="wd-fg-color-black ms-1 me-1"
                style={{ fontSize: "0.6rem" }}
              />
              <div>
                <b>{`${module.name}`}</b>
                <div className="wd-course-module-description">{`${module.description}`}</div>
              </div>
            </div>
            <div>
              <FaCheckCircle className="wd-fg-color-green wd-course-module-icon" />
              <FaPlus className="wd-fg-color-grey wd-course-module-icon" />
              <FaEllipsisV className="wd-fg-color-grey wd-course-module-icon" />
            </div>
          </div>
        ))}
    </div>
  );
}
export default ModuleList;
