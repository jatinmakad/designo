import React from "react";
import App_design from "../Data/App-design";
import Header from "../component/Header";
import Footer from "../component/Footer";
import Comp2 from "../component/Comp2";
import Comp3 from "../component/Comp3";
import { NavLink } from "react-router-dom";

function AppDesign() {
  return (
    <>
      <div className="design">
        <Header />
        <div className="des_main">
          <div className="des_banner">
            <h1>App Design</h1>
            <p>
              Our mobile designs bring intuitive digital solutions to your
              customers right at their fingertips.
            </p>
          </div>
          <div className="des">
            {App_design.map((e) => {
              return (
                <div className="main_container">
                  <img src={e.src} alt="" />
                  <div className="main_container_text">
                    <h1>{e.name}</h1>
                    <p>{e.dis}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="component">
          <NavLink to="/graphic">
            <Comp2 />
          </NavLink>
          <NavLink to="/webdesign">
            <Comp3 />
          </NavLink>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default AppDesign;
