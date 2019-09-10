import React from "react";
import ResponsiveDrawer from "./Component/AppBar/AppBar";
import About from "./Component/About/About";
import Footer from "./Component/Footer/Footer";
import { Router } from "@reach/router";
import Home from "./Component/Home/Home";
import Team from "./Component/Team/Team";
import Achievements from "./Component/Achievements/Achievements";
export default function App() {
  return (
<div>
      <ResponsiveDrawer />
      <Router><Home path="/"/></Router>
      <Router><About path="about" /></Router>
    <Router><Team path="team"/></Router>
    <Router><Achievements path="achievements"/></Router>
    <Router><Footer path="contact"/></Router>
    </div>
  );
}
