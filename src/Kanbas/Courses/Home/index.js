import React from "react";
import ModuleList from "../Modules/ModuleList";
import {
  FaEllipsisV,
  FaCheckCircle,
  FaPlus,
  FaFileImport,
  FaSignOutAlt,
  FaBullseye,
  FaChartBar,
  FaBullhorn,
  FaBell,
} from "react-icons/fa";
import "../../index.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Home() {
  return (
    <div className="container wd-content-container">
      <div className="row">
        <div className="wd-course-content col-12 col-lg-9">
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

        <div className="col-lg-3 d-none d-lg-block">
          <div className="wd-vertical-display wd-course-right-sidebar">
            <button className="btn btn-light btn-sm border text-start d-inline-flex align-items-center">
              <FaFileImport className="ms-1 me-1" />
              Import Existing Content
            </button>
            <button className="btn btn-light btn-sm border text-start d-inline-flex align-items-center">
              <FaSignOutAlt className="ms-1 me-1" />
              Import from Commons
            </button>
            <button className="btn btn-light btn-sm border text-start d-inline-flex align-items-center">
              <FaBullseye className="ms-1 me-1" />
              Choose Home Page
            </button>
            <button className="btn btn-light btn-sm border text-start d-inline-flex align-items-center">
              <FaChartBar className="ms-1 me-1" />
              View Course Stream
            </button>
            <button className="btn btn-light btn-sm border text-start d-inline-flex align-items-center">
              <FaBullhorn className="ms-1 me-1" />
              New Announcement
            </button>
            <button className="btn btn-light btn-sm border text-start d-inline-flex align-items-center">
              <FaChartBar className="ms-1 me-1" />
              New Analytics
            </button>
            <button className="btn btn-light btn-sm border text-start d-inline-flex align-items-center">
              <FaBell className="ms-1 me-1" />
              View Course Navigation
            </button>
          </div>

          <br />
          <b>To Do</b>
          <hr />

          <div>
            <span className="wd-course-module-link wd-truncate-text">
              <div class="badge bg-danger rounded-pill me-1">1</div>
              Grade A1 - ENV + HTML
            </span>
            <br />
            <span class="wd-fg-color-grey ps-4 wd-course-module-link-description wd-truncate-text">
              100 points • Sep 18 at 11:59pm
            </span>
          </div>

          <div>
            <span className="wd-course-module-link wd-truncate-text">
              <div class="badge bg-danger rounded-pill me-1">1</div>
              Grade A2 - CSS + BOOTSTRAP
            </span>
            <br />
            <span class="wd-fg-color-grey ps-4 wd-course-module-link-description wd-truncate-text">
              100 points • Oct 2 at 11:59pm
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
