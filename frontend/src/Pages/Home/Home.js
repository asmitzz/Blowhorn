import React from "react";
import Navbar from "../../shared/Navbar/Navbar";
import Features from "./components/Features/Features";
import Section1 from "./components/Section1/Section1";
import Section2 from "./components/Section2/Section2";
import Section3 from "./components/Section3/Section3";

const Home = () => {
    return (
        <React.Fragment>
          <Navbar/>
          <Section1/>
          <Section2/>
          <Section3/>
          <Features/>
        </React.Fragment>
    );
};

export default Home;
