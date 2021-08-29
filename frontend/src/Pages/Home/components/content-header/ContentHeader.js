import { Link } from "react-router-dom"
import "./ContentHeader.css";

const ContentHeader = () => {
    return (
        <section className="content-header">
            <h1 className="heading">Start Crafting Your <span>Next Great Idea</span></h1>
            <div className="content">
              <p>Simplifying the creation of landing pages, blog pages,</p>
              <p>application pages and so much more!</p>
            </div>
            <div style={{position:"relative"}}>
              <div className="badge">only $15/mo</div>
              <button className="primary-btn purchase-btn">Purchase Now</button>
            </div>
            <Link className="primary-link" style={{marginTop:"0.3rem"}} to="/">Learn More</Link>
        </section>
    );
};

export default ContentHeader;
