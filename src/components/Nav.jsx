import React, { useState, useEffect } from "react";
import "../utility.css";
import "./nav.css";
import { TiTimes, TiThMenu } from "react-icons/ti";
import { HashLink as Link } from "react-router-hash-link";

const Nav = () => {
  const [mobile, setMobile] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleHamburger = () => setMobile(!mobile);

  return (
    <nav className={`flex_box justify_between align_center ${scrolled ? "scrolled" : ""}`}>
      <div className="logo">
        <h3>
          <span>&lt;</span> Sumit Kumar Sharma <span>&nbsp;/&nbsp;&gt;</span>
        </h3>
      </div>
      <ul className={`flex_box flex_gap my-16 nav_links ${mobile ? "active" : ""}`}>
        <li><Link smooth to="#hero" onClick={() => setMobile(false)}>Home</Link></li>
        <li><Link smooth to="#skills" onClick={() => setMobile(false)}>Skills</Link></li>
        <li><Link smooth to="#service" onClick={() => setMobile(false)}>Services</Link></li>
        <li><Link smooth to="#project" onClick={() => setMobile(false)}>Projects</Link></li>
        {/* <li><Link smooth to="#about" onClick={() => setMobile(false)}>About</Link></li> */}
        <li><Link smooth to="#contact" onClick={() => setMobile(false)}>Contact</Link></li>
      </ul>
      <div className="flex_box">
        {/* <button className="hire_btn">Hire Me</button> */}
        <div className="hamburger" onClick={toggleHamburger}>
          {mobile ? <TiTimes /> : <TiThMenu />}
        </div>
      </div>
    </nav>
  );
};

export default Nav;
