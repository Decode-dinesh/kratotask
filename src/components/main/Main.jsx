import React from "react";
import "./main.css";

export default function Main() {
  return (
    <>
    <div className="container">
    <div className="row">
        <div className="col">
            <div className="search"><input type="text" className="form-control" placeholder="Search for stats" /> </div>
        </div>
    </div>
</div>
<div className="header">
  <div className="headerdetails">
      <h3 className="mainTitle">Hello David</h3>
      <span className="mainSub">Welcome Back!</span>
  </div>
    <div className="filterbutton">
      <button className="filter">filters <i class="fas fa-sliders-h"></i></button>
    </div>
</div>
    <div className="main">
      <div className="row">
        <div className="col-sm">
          <div className="mainItem">
            <div className="mainMoneyContainer">
            <span className="badge bg-secondary rounded-circle">
              <i className="far fa-eye icon"></i>
            </span>
              
            </div>
            <span className="mainSub">Views</span>
            <div className="mainMoneyContainer">
              <span className="mainMoney">500</span>
            </div>
            <span className="mainSub">per Day</span>
          </div>
        </div>
        <div className="col-sm">
          <div className="mainItem">
            <div className="mainMoneyContainer">
            <span className="badge bg-secondary rounded-circle">
            <i className="far fa-compass icon"></i>

            </span>
            </div>
            <span className="mainSub">Visits</span>
            <div className="mainMoneyContainer">
              <span className="mainMoney">2000</span>
            </div>
            <span className="mainSub">per minutes</span>
          </div>
        </div>
        <div className="col-sm">
          <div className="mainItem">
            <div className="mainMoneyContainer">
            <span className="badge bg-secondary rounded-circle">
              <i className="fas fa-store icon"></i>
            </span>
            </div>
            <span className="mainSub">Orders</span>
            <div className="mainMoneyContainer">
              <span className="mainMoney">5100</span>
            </div>
            <span className="mainSub">per Day</span>
          </div>
        </div>
      </div>

  
    </div>

    </>
  );
}
