import React from "react";
import Footer from "../../shared/Footer/Footer";
import Navbar from "../../shared/Navbar/Navbar";
import Blog from "./components/Blog/Blog";
import Features from "./components/Features/Features";
import ContentHeader from "./components/content-header/ContentHeader";
import Companies from "./components/companies/Companies";
import Goals from "./components/goals/Goals";
import Team from "./components/Team/Team";

const Home = () => {
    return (
        <React.Fragment>
          <div className="App">
            <Navbar/>
            <ContentHeader/>
            <Companies/>
            <Goals/>
            <Features/>
            <Team/>
          </div>
          <Blog/>
          <Footer/>
        </React.Fragment>
    );
};

export default Home;
