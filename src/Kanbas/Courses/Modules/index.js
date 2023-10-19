import ModuleList from "./ModuleList";
import { FaEllipsisV, FaCheckCircle, FaPlus } from "react-icons/fa";
import "../../index.css";
import "bootstrap/dist/css/bootstrap.min.css";

function Modules() {
  return (
    <div className="container wd-content-container">
      <div className="row">
        <div className="wd-course-content col-12">
          <div className="wd-vertical-display">
            {/* the horizontal list of buttons floating at the end  */}
            <div>
              <div className="float-end">
                <button className="btn btn-light btn-sm border">
                  Collapse All
                </button>
                <button className="btn btn-light btn-sm border ms-1">
                  View Progress
                </button>
                <button className="btn btn-light btn-sm dropdown-toggle border d-inline-flex align-items-center ms-1">
                  <FaCheckCircle className="wd-fg-color-green me-1" />
                  Publish All
                </button>
                <button className="btn btn-danger btn-sm d-inline-flex align-items-center ms-1">
                  <FaPlus className="wd-fg-color-white me-1" />
                  Module
                </button>
                <button className="btn btn-light btn-sm border ms-1">
                  <FaEllipsisV />
                </button>
              </div>
            </div>

            <hr />

            <ModuleList />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Modules;
