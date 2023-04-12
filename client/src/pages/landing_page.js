import React from "react";
import { Navbar, Header } from "../containers";
import "./landing_page.css"
const Landing = () => {

  return (

<div className="App">
    <div className="gradient__bg">
      <Navbar />
      <Header />
    </div>
    {/* <Brand />
    <WhatGPT3 />
    <Features />
    <Possibility />
    <CTA />
    <Blog />
    <Footer /> */}
  </div>
  );
};

export default Landing;