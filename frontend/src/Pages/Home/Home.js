import React from "react";
import Footer from "../../shared/Footer/Footer";
import Navbar from "../../shared/Navbar/Navbar";
import Blog from "./components/Blog/Blog";
import Features from "./components/Features/Features";
import Section1 from "./components/Section1/Section1";
import Section2 from "./components/Section2/Section2";
import Section3 from "./components/Section3/Section3";
import Team from "./components/Team/Team";

const Home = () => {
    return (
        <React.Fragment>
          <div className="App">
            <Navbar/>
            <Section1/>
            <Section2/>
            <Section3/>
            <Features/>
            <Team/>
          </div>
          <Blog/>
          <Footer/>
        </React.Fragment>
    );
};

export default Home;
