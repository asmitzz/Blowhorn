import { NavLink } from "react-router-dom"
import "./Navbar.css";

const Navbar = () => {
    return (
        <nav className="navbar">
           <h1 className="navbar-heading">nullBrains<span>.</span></h1>
           <ul className="nav-items">
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
           <ul className="nav-items">
               <li className="nav-item">
                   <NavLink className="nav-link" to="/signin">Sign In</NavLink>
               </li>
               <li className="nav-item">
                   <NavLink className="nav-link primary-btn" to="/signup">Sign Up</NavLink>
               </li>
           </ul>
        </nav>
    );
};

export default Navbar;
