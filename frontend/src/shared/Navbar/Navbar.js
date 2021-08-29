import { useState } from "react";
import { NavLink } from "react-router-dom"
import "./Navbar.css";

const Navbar = () => {
    const [toggle,setToggle] = useState(false);

    const handleOptions = (e) => {
        if(e.target.tagName === "A"){
           setToggle(false)
        }
    }

    return (
        <nav className="navbar">
           <h1 className="navbar-heading">nullBrains<span>.</span></h1>
           <button className={`hamburger ${toggle ? "hamburger-active" : ""}`} onClick={() => setToggle(!toggle)}>
                   <span></span>
                   <span></span>
                   <span></span>
           </button>

           <ul className="nav-items">
              
               <li className="nav-item">
                   <NavLink end activeClassName="active" className="nav-link" to="/">Home</NavLink>
               </li>
               <li className="nav-item">
                   <a className="nav-link" href="#feature">Features</a>
               </li>
               <li className="nav-item">
                   <a className="nav-link" href="#blog">Blog</a>
               </li>
               <li className="nav-item">
                   <a className="nav-link" href="#footer">Contact</a>
               </li>
               <li className="nav-item">
                   <button className="search-btn"><i className="fa fa-search"></i></button>
               </li>
           </ul>
           <ul className="nav-items">
               <li className="nav-item">
                   <NavLink className="primary-link" to="/signin">Sign In</NavLink>
               </li>
               <li className="nav-item">
                   <NavLink className="nav-link primary-btn" to="/signup">Sign Up</NavLink>
               </li>
           </ul>

          {toggle && 
          <ul className="list" onClick={handleOptions}>
              {/* <button className="dismiss-btn" onClick={() => setToggle(false)}>X</button> */}
              <li className="nav-item">
                  <NavLink end activeClassName="active" className="nav-link" to="/">Home</NavLink>
              </li>
              <li className="nav-item">
                  <a className="nav-link" href="#feature">Features</a>
              </li>
              <li className="nav-item">
                  <a className="nav-link" href="#blog">Blog</a>
              </li>
              <li className="nav-item">
                  <a className="nav-link" href="#footer">Contact</a>
              </li>
              <li className="nav-item">
                  <button className="search-btn"><i className="fa fa-search"></i></button>
              </li>
              <div className="list-2">
              <li className="nav-item">
                  <NavLink className="primary-link" style={{marginRight:"0.8rem"}} to="/signin">Sign In</NavLink>
              </li>
              <li className="nav-item">
                  <NavLink className="nav-link primary-btn" to="/signup">Sign Up</NavLink>
              </li>
              </div>
          </ul>}

        </nav>
    );
};

export default Navbar;
