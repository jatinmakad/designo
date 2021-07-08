import React from 'react';
import Header from "../component/Header";
import Footer from "../component/Footer";
import Graphic from "../Data/Graphic";
import Comp1 from "../component/Comp1";
import Comp3 from "../component/Comp3";
import { NavLink } from 'react-router-dom';

function GraphicDesign() {
    return (
        <>
        <div className="design">
          <Header />
          <div className="des_main">
            <div className="des_banner">
              <h1>Graphic Design</h1>
              <p>We deliver eye-catching branding materials that are tailored to meet your business objectives.</p>
            </div>
          <div className="des">
            {Graphic.map((e) => {
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
       <NavLink to="/webdesign">
       <Comp3/>
       </NavLink>
      
        </div>
        </div>
        <Footer />
      </>
    )
}

export default GraphicDesign;
