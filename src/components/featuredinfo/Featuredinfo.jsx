import React from "react";
import "./Featuredinfo.css";

export default function Featuredinfo() {
  return (
    <>
    <div className="container">
      <div className="row">
        <div className="col-sm">
        <div className="featuredItem item1">
          <div className="details">
            <div className="featuredMoneyContainer">
            <span className="featuredTitle">Sales</span>
            </div>
            <span className="featuredSub">Total Sales Today</span>
            <div className="featuredMoneyContainer">
            <span className="featuredMoney">$500</span>
            </div>

          </div>

            <div className="progressContainer">
            <span className="featuredMoneyRate">
              <i className="featuredIcon-negative fas fa-arrow-down"></i>
            </span>
            <span>55%</span>
          </div>
         

            </div>
        </div>
        <div className="col-sm">
        <div className="featuredItem item2">
        <div className="details">
            <div className="featuredMoneyContainer">
            <span className="featuredTitle">Profit</span>
            </div>
            <span className="featuredSub">per day ratio</span>
            <div className="featuredMoneyContainer">
            <span className="featuredMoney">$150</span>
            </div>

          </div>

            <div className="progressContainer">
            <span className="featuredMoneyRate">
              <i className="featuredIcon fas fa-arrow-up"></i>
            </span>
            <span>30%</span>
          </div>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-sm">
        <div className="featuredItem item3">
        <div className="details">
            <div className="featuredMoneyContainer">
            <span className="featuredTitle">Orders</span>
            </div>
            <span className="featuredSub">Total Orders Today</span>
            <div className="featuredMoneyContainer">
            <span className="featuredMoney">1000</span>
            </div>

          </div>

            <div className="progressContainer">
            <span className="featuredMoneyRate">
              <i className="featuredIcon fas fa-arrow-up"></i>
            </span>
            <span>80%</span>
          </div>
          </div>
        </div>
        <div className="col-sm">
        <div className="featuredItem item4">
        <div className="details">
            <div className="featuredMoneyContainer">
            <span className="featuredTitle">Visits</span>
            </div>
            <span className="featuredSub">Total Visit Today</span>
            <div className="featuredMoneyContainer">
            <span className="featuredMoney">400</span>
            </div>

          </div>

            <div className="progressContainer">
            <span className="featuredMoneyRate">
              <i className="featuredIcon fas fa-arrow-up"></i>
            </span>
            <span>70%</span>
          </div>
          </div>
        </div>
      </div>
    </div>
     
    </>
  );
}
