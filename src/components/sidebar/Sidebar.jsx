import React from "react";
import "./sidebar.css";

export default function Sidebar() {
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul className="sidebarList">
              <a href="/">
                <li className="sidebarListItem">
                  <i className="fas fa-home"></i>
                  <span className="sidenavList">Home</span>
                </li>
              </a>
              <a href="/projects">
                <li className="sidebarListItem">
                  <i className="fas fa-trophy"></i>
                  <span className="sidenavList">projects</span>
                </li>
              </a>
              <a href="/Bilings">
                <li className="sidebarListItem">
                  <i className="fas fa-file-invoice"></i>
                  <span className="sidenavList">Billings</span>
                </li>
              </a>

              <a href="/teammembers">
                <li className="sidebarListItem">
                  <i className="fas fa-users"></i>
                  <span className="sidenavList">Team Members</span>
                </li>
              </a>

              <a href="/stats">
                <li className="sidebarListItem">
                  <i className="sidebarIcon fas fa-chart-line"></i>
                  <span className="sidenavList">stats</span>
                </li>
              </a>

              <a href="/settings">
                <li className="sidebarListItem">
                  <i className="fas fa-cog"></i>
                  <span className="sidenavList">Settings</span>
                </li>
              </a>
            </ul>
          </div>
        </div>
      </nav>

      {/* <div className="sidebar">
        <div className="sidebarWrapper">
          <div className="sidebarMenu">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <i className="fas fa-bars"></i>
            </button> 
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <ul className="sidebarList">
                <a href="/">
                  <li className="sidebarListItem">
                    <i className="fas fa-home"></i>
                    <span className="sidenavList">Home</span>
                  </li>
                </a>
                <a href="/projects">
                  <li className="sidebarListItem">
                    <i className="fas fa-trophy"></i>
                    <span className="sidenavList">projects</span>
                  </li>
                </a>
                <a href="/Bilings">
                  <li className="sidebarListItem">
                    <i className="fas fa-file-invoice"></i>
                    <span className="sidenavList">Billings</span>
                  </li>
                </a>

                <a href="/teammembers">
                  <li className="sidebarListItem">
                    <i className="fas fa-users"></i>
                    <span className="sidenavList">Team Members</span>
                  </li>
                </a>

                <a href="/stats">
                  <li className="sidebarListItem">
                    <i className="sidebarIcon fas fa-chart-line"></i>
                    <span className="sidenavList">stats</span>
                  </li>
                </a>

                <a href="/settings">
                  <li className="sidebarListItem">
                    <i className="fas fa-cog"></i>
                    <span className="sidenavList">Settings</span>
                  </li>
                </a>
              </ul>
             </div> 
          </div>
        </div>
      </div> */}
    </>
  );
}
