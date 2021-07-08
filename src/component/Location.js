import React from 'react';
import "./Location.css";
import {NavLink} from "react-router-dom";
import Canada from "../assets/shared/desktop/illustration-canada.svg";
import Aus from "../assets/shared/desktop/illustration-australia.svg";
import Uk from "../assets/shared/desktop/illustration-united-kingdom.svg";

function Location() {
    return (
        <div className="location">
        
          <div className="loc_1">
              <img src={Canada} alt="" />
              <div className="loc_1_txt">
                  <h1>CANADA</h1>
                  <NavLink to="/location">
                  <button>See location</button>
                  </NavLink>
              </div>
            </div>
   
           
          
           <div className="loc_1">
                 <img src={Aus} alt="" />
                 <div className="loc_1_txt">
                  <h1>australia</h1>
                  <NavLink to="/location">

                  <button>See location</button>
                  </NavLink>
              </div>
              </div>
     
            
              
              <div className="loc_1">
                <img src={Uk} alt="" />
                <div className="loc_1_txt">
                  <h1>united kingdom</h1>
                  <NavLink to="/location">
                  <button>See location</button>
                  </NavLink>
                  
              </div>
                </div>
           
               
            
        </div>
    )
}

export default Location
