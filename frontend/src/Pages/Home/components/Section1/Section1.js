import { Link } from "react-router-dom"
import "./Section1.css";

const Section1 = () => {
    return (
        <section className="section-1">
            <h1 className="heading">Start Crafting Your <span>Next Great Idea</span></h1>
            <div className="content">
              <p>Simplifying the creation of landing pages, blog pages,</p>
              <p>application pages and so much more!</p>
            </div>
            <div>
              <button className="primary-btn">Purchase Now</button>
            </div>
            <Link className="primary-link" to="/">Learn More</Link>
        </section>
    );
};

export default Section1;
