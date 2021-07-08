import React from "react";
import "./Design.css";
import Web from "../Data/Web";
import Header from "../component/Header";
import Footer from "../component/Footer";
import Comp1 from "../component/Comp1";
import Comp2 from "../component/Comp2";
import {NavLink} from "react-router-dom";

function Webdesign() {
  return (
    <>
      <div className="design">
        <Header />
        <div className="des_main">
          <div className="des_banner">
            <h1>Web Design</h1>
            <p>
              We build websites that serve as powerful marketing tools and bring
              memorable brand experiences.
            </p>
          </div>
          <div className="des">
            {Web.map((e) => {
              return (
                <div className="main_container">
                  <img src={e.src} alt="" />
                  <div className="main_container_text">
                    <h1>{e.name}</h1>
                    <p>{e.dic}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="component">
     <NavLink to="/appdesign">
     <Comp1/>
     </NavLink>
      
        <NavLink to="/graphic">
        <Comp2/>
        </NavLink>
       
        </div>
       
      </div>

      <Footer />
    </>
  );
}

export default Webdesign;
