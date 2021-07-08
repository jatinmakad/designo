import React from "react";
import "./App.css";
import Home from "./pages/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Contact from "./pages/Contact";
import Loc from "./pages/Loc";
import Company from "./pages/Company";
import "bootstrap/dist/css/bootstrap.min.css";
import Webdesign from "./Design/Webdesign";
import AppDesign from "./Design/AppDesign";
import GraphicDesign from "./Design/GraphicDesign";
import Fade from 'react-reveal/Fade';

function App() {
  
  return (
    <div className="app"  onUpdate={() => window.scrollTo(0, 0)}>
      <Fade bottom>
      <Router>
        <Switch>
          <Route path="/company">
            <Company />
          </Route>
          <Route path="/location">
            <Loc />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/webdesign">
            <Webdesign />
          </Route>
          <Route path="/graphic">
            <GraphicDesign />
          </Route>
          <Route path="/appdesign">
            <AppDesign />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
      </Fade>
     
    </div>
  );
}

export default App;
