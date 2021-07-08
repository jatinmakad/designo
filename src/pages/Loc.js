import React from "react";
import "./Loc.css";
import Footer from "../component/Footer";
import Header from "../component/Header";
import Fade from 'react-reveal/Fade';
import Ca from "../assets/locations/desktop/image-map-australia.png";
import Au from "../assets/locations/desktop/image-map-australia.png";
import U from "../assets/locations/desktop/image-map-united-kingdom.png";

function Loc() {
  return (
    <>
    <Fade bottom>
    <div className="lo">
      <Header />
      <div className="lo_main">
        <div className="lo_1">
          <div className="lo_1_text">
            <h1>Canada</h1>
            <div className="lo_contact">
              <div className="lo_first">
                <h2>Designo Central Office</h2>
                <p>3886 Wellington Street</p>
                <p>Toronto, Ontario M9C 3J5</p>
              </div>
              <div className="lo_sec">
                <h2>Contact</h2>
                <p>P: +1 253-863-8967</p>
                <p>M: contact@designo.co</p>
              </div>
            </div>
          </div>
          <img src={Ca} alt="" />
        </div>

        <div className="lo_1">
          <img src={Au} alt="" />
          <div className="lo_1_text">
            <h1>Australia</h1>
            <div className="lo_contact">
              <div className="lo_first">
                <h2>Designo AU Office</h2>
                <p>19 Balonne Street</p>
                <p>New South Wales 2443</p>
              </div>
              <div className="lo_sec">
                <h2>Contact</h2>
                <p>P: (02) 6720 9092</p>
                <p>M: contact@designo.au</p>
              </div>
            </div>
          </div>
        </div>

        <div className="lo_1">
          <div className="lo_1_text">
            <h1>United Kingdom</h1>
            <div className="lo_contact">
              <div className="lo_first">
                <h2>Designo UK Office</h2>
                <p>13 Colorado Way</p>
                <p>Rhyd-y-fro SA8 9GA</p>
              </div>
              <div className="lo_sec">
                <h2>Contact</h2>
                <p>P: 078 3115 1400</p>
                <p>M: contact@designo.uk</p>
              </div>
            </div>
          </div>
          <img src={U} alt="" />
        </div>
      </div>
    
    </div>
    <Footer/>
    </Fade>
    </>
  );
}

export default Loc;
