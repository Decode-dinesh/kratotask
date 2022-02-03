import React from "react";
import Chart from "../chart/Chart";
import "./analytics.css";

export default function Analytics() {


  return (
    <>
      <div className="analytics">
        <div className="analyticsTitle">Sales Revenue</div>
        <div className="anaylticsItem">
          <span className="badge bg-secondary rounded-circle">
            <i className="fas fa-percentage"></i>
          </span>
          <div className="analyticsList">
            <div className="fw-bold">230K</div>
            <span className="analyticsSub">Sales</span>
          </div>
        </div>

        <div className="anaylticsItem">
          <span className="badge bg-secondary rounded-circle">
            <i className="far fa-user"></i>
          </span>
          <div className="analyticsList">
            <div className="fw-bold">8.549K</div>
            <span className="analyticsSub">Customers</span>
          </div>
        </div>

        <div className="anaylticsItem">
          <span className="badge bg-secondary rounded-circle">
            <i className="fas fa-columns"></i>
          </span>
          <div className="analyticsList">
            <div className="fw-bold">1,423K</div>
            <span className="analyticsSub">Products</span>
          </div>
        </div>

        <div className="anaylticsItem">
          <span className="badge bg-secondary rounded-circle">
            <i className="fas fa-chart-pie"></i>
          </span>
          <div className="analyticsList">
            <div className="fw-bold">$9745</div>
            <span className="analyticsSub">Revenue</span>
          </div>
        </div>

        <div className="analyticsTitle">Statistics</div>
          <Chart />
      
      </div>
     
    </>
  );
}
