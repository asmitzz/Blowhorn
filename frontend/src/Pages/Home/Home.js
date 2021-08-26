import React from "react";
import Navbar from "../../shared/Navbar/Navbar";
import Section1 from "./components/Section1/Section1";
import Section2 from "./components/Section2/Section2";

const Home = () => {
    return (
        <React.Fragment>
          <Navbar/>
          <Section1/>
          <Section2/>
        </React.Fragment>
    );
};

export default Home;
