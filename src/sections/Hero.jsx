import React from "react";
import "./hero.css";
import "../utility.css";
import { FaPaperclip } from "react-icons/fa";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { Link } from "react-router-dom";
import CanvasModel from "../components/CanvasModel";

const Hero = () => {
  const [text] = useTypewriter({
    words: ["Web Developer", "Game Developer", "3D Artist"],
    loop: true,
    typeSpeed: 100,
    deleteSpeed: 60,
    delaySpeed: 1500,
  });

  return (
    <section className="hero flex_box justify_between align_center">
      <div className="hero_left">
        <h2>
          Hello,
          <br /> I'm <span>{text}</span>
          <Cursor cursorStyle="_" />
        </h2>
        <p>
          I craft immersive digital experiences across web, gaming, and software
          platforms. With a passion for clean code and creative design, I bridge
          the gap between functionality and visual storytelling. Whether it's
          building robust web applications, developing engaging games,
          engineering software solutions, or bringing 3D models to life—I'm all
          about turning ideas into reality.
        </p>
        <div className="flex_box">
          <button className="flex_box align_center">
            <Link
              to="https://drive.google.com/file/d/1zm0amp2dWrkFaf3UE40gisJ2coDeN3j8/view?usp=sharing"
              target="_blank"
            >
              Download CV <FaPaperclip style={{ marginLeft: "8px" }} />
            </Link>
          </button>
          <button className="mx-16">Contact</button>
          <div className="hire">
            <Link to="">Hire Me</Link>
          </div>
        </div>
      </div>
      <div className="hero_right">
        <CanvasModel/>
      </div>
    </section>
  );
};

export default Hero;
