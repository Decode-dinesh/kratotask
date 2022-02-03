import React from "react";
import Sidebar from "../components/sidebar/Sidebar";
import Main from "../components/main/Main";
import Analytics from "../components/Analytics/Analytics";
import Featuredinfo from "../components/featuredinfo/Featuredinfo";

export default function Home() {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
            <Sidebar />
        </div>
        <div className="col-md-auto">
            <Main />
            <Featuredinfo />
        </div>
        <div className="col-sm">
            <Analytics />
        </div>
      </div>
      
    </div>
  );
}
