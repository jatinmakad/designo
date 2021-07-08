import React from "react";
import Header from "../component/Header";
import "./Home.css";
import Footer from "../component/Footer";
import Phone from "../assets/home/desktop/image-hero-phone.png";
import Im1 from "../assets/home/desktop/image-web-design-large.jpg";
import Im2 from "../assets/home/desktop/image-app-design.jpg";
import Im3 from "../assets/home/desktop/image-graphic-design.jpg";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import { NavLink } from "react-router-dom";
import HomeInfo from "../Data/HomeInfo";
import Fade from 'react-reveal/Fade';

function Home() {
  return (
    <>
    <Fade bottom>
      <div className="home">
        <Header />
        <div className="main_first">
          <div className="main_first_txt">
            <h1>Award-winning custom designs and digital branding solutions</h1>
            <p>
              With over 10 years in the industry, we are experienced in creating
              fully responsive websites, apps, and engaging brand experiences.
              Find out more about our services.
            </p>
            <button>Learn More</button>
          </div>
          <div className="main_img">
            <img src={Phone} alt="" />
          </div>
        </div>

        <div className="main_sec">
          <NavLink to="/webdesign">
            <div className="first">
              <img src={Im1} alt="" />
              <div className="first_txt">
                <h1>Web design</h1>
                <p>
                  view projects <ArrowForwardIosIcon />
                </p>
              </div>
            </div>
          </NavLink>

          <div className="sec">
            <NavLink to="/appdesign">
              <div className="sec_1">
                <img src={Im2} alt=""/>
                <div className="sec_txt">
                  <h1>app design</h1>
                  <p>
                    view projects <ArrowForwardIosIcon />
                  </p>
                </div>
              </div>
            </NavLink>
            <NavLink to="/graphic">
              <div className="sec_1">
                <img src={Im3} alt="" />
                <div className="sec_txt_2">
                  <h1>graphic design</h1>
                  <p>
                    view projects <ArrowForwardIosIcon />
                  </p>
                </div>
              </div>
            </NavLink>
          </div>
        </div>
        <div className="info">
          {
                  HomeInfo.map((e) =>{
                    return (
                      <div className="main_info">
                        <img src={e.src} alt="" />
                        <div className="main_info_text">
                          <h1>{e.name}</h1>
                          <p>{e.dis}</p>
                        </div>
                      </div>
                    )
                  })
          }
        </div>
      </div>
      <div className="fot">
        <Footer />
      </div>
      </Fade>
    </>
  );
}

export default Home;
