import { useState } from "react";
import { NavLink } from "react-router-dom"
import { useWindowSize } from "../../custom-hooks/useWindowSize";
import "./Navbar.css";

const Navbar = () => {
    const [toggle,setToggle] = useState(false);
    const { width } = useWindowSize();

    return (
        <nav className="navbar">
           <h1 className="navbar-heading">nullBrains<span>.</span></h1>
           { (!toggle && width < 768) &&<button className="hamburger" onClick={() => setToggle(true)}>
                   <span></span>
                   <span></span>
                   <span></span>
           </button>}
           { toggle && <button className="dismiss-btn" onClick={() => setToggle(false)}>X</button>}

           { (width > 768 || toggle) && <> <ul className="nav-items list-1">
              
               <li className="nav-item">
                   <NavLink end activeClassName="active" className="nav-link" to="/">Home</NavLink>
               </li>
               <li className="nav-item">
                   <NavLink end activeClassName="active" className="nav-link" to="/features">Features</NavLink>
               </li>
               <li className="nav-item">
                   <NavLink end activeClassName="active" className="nav-link" to="/blog">Blog</NavLink>
               </li>
               <li className="nav-item">
                   <NavLink end activeClassName="active" className="nav-link" to="/contact">Contact</NavLink>
               </li>
               <li className="nav-item">
                   <button className="search-btn"><i className="fa fa-search"></i></button>
               </li>
           </ul>
           <ul className="nav-items list-2">
               <li className="nav-item">
                   <NavLink className="nav-link" to="/signin">Sign In</NavLink>
               </li>
               <li className="nav-item">
                   <NavLink className="nav-link primary-btn" to="/signup">Sign Up</NavLink>
               </li>
           </ul></>}
        </nav>
    );
};

export default Navbar;
