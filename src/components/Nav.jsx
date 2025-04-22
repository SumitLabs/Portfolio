import React, { useState } from "react";
import "../utility.css";
import "./nav.css";
import { TiTimes, TiThMenu } from "react-icons/ti";
import { Link } from "react-router-dom";

const Nav = () => {
  const [mobile, setMobile] = useState(false);
  
  const toggleHamburger = () => {
    setMobile(!mobile);
  };

  return (
    <nav className="flex_box justify_between align_center">
      <div className="logo"><h3>Sumit Kumar Sharma</h3></div>
      <ul className={`flex_box flex_gap my-16 nav_links ${mobile ? 'active' : ''}`}>
        <li>
          <Link to="/" onClick={() => setMobile(false)}>Home</Link>
        </li>
        <li>
          <Link to="/" onClick={() => setMobile(false)}>Services</Link>
        </li>
        <li>
          <Link to="/" onClick={() => setMobile(false)}>Projects</Link>
        </li>
        <li>
          <Link to="/" onClick={() => setMobile(false)}>About</Link>
        </li>
        <li>
          <Link to="/" onClick={() => setMobile(false)}>Contact</Link>
        </li>
      </ul>
      <div className="flex_box">
        <button>Hire Me</button>
        <div className="hamburger" onClick={toggleHamburger}>
          {mobile ? <TiTimes /> : <TiThMenu />}
        </div>
      </div>
    </nav>
  );
};

export default Nav;
