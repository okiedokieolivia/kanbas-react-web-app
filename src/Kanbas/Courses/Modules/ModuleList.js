import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  addModule,
  deleteModule,
  updateModule,
  setModule,
  setModules,
} from "./modulesReducer";
import { FaGripVertical } from "react-icons/fa";
import { BiSolidRightArrow } from "react-icons/bi";
import "../../index.css";
import "bootstrap/dist/css/bootstrap.min.css";
//import { findModulesForCourse, createModule } from "./client";
import * as client from "./client";

function ModuleList() {
  const modules = useSelector((state) => state.modulesReducer.modules);
  const module = useSelector((state) => state.modulesReducer.module);
  const dispatch = useDispatch();
  const { courseId } = useParams();

  const handleAddModule = () => {
    client.createModule(courseId, module).then((module) => {
      dispatch(addModule(module));
    });
  };

  const handleDeleteModule = (moduleId) => {
    client.deleteModule(moduleId).then((status) => {
      dispatch(deleteModule(moduleId));
    });
  };

  const handleUpdateModule = async () => {
    const status = await client.updateModule(module);
    dispatch(updateModule(module));
  };

  useEffect(() => {
    client.findModulesForCourse(courseId).then((modules) => {
      dispatch(setModules(modules));
    });
  }, [courseId, dispatch]);

  return (
    <>
      <div className="d-flex flex-column">
        <input
          className="form-control"
          value={module.name}
          onChange={(e) =>
            dispatch(setModule({ ...module, name: e.target.value }))
          }
        />
        <textarea
          className="form-control mt-1"
          value={module.description}
          onChange={(e) =>
            dispatch(setModule({ ...module, description: e.target.value }))
          }
        />
        <div className="d-inline-flex">
          <button
            className="btn btn-danger btn-sm mt-1"
            // onClick={() => dispatch(addModule({ ...module, course: courseId }))}
            onClick={handleAddModule}
          >
            Add
          </button>
          <button
            className="btn btn-success btn-sm mt-1 ms-1"
            //onClick={() => dispatch(updateModule(module))}
            onClick={handleUpdateModule}
          >
            Update
          </button>
        </div>
      </div>
      {/* Module Lists */}
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
              <div className="d-inline-flex">
                <button
                  className="btn btn-sm btn-danger"
                  //onClick={() => dispatch(deleteModule(module._id))}
                  onClick={() => handleDeleteModule(module._id)}
                >
                  Delete
                </button>
                <button
                  className="btn btn-sm btn-success ms-1"
                  onClick={() => dispatch(setModule(module))}
                >
                  Edit
                </button>
                {/* <FaCheckCircle className="wd-fg-color-green wd-course-module-icon" />
                <FaPlus className="wd-fg-color-grey wd-course-module-icon" />
                <FaEllipsisV className="wd-fg-color-grey wd-course-module-icon" /> */}
              </div>
            </div>
          ))}
      </div>
    </>
  );
}
export default ModuleList;
