import "./project.css";
import Title from "../components/Title";
import { Projects } from "../constants.js";
import Tilt from "react-parallax-tilt";
import { Link } from "react-router-dom";
const Project = () => {
  return (
    <section id="project">
      <Title
        title="project"
        des="Innovative technologies and strategies designed to address specific business challenges or opportunities, enhancing efficiency, productivity, and competitiveness."
      />
      <div className="flex_box flex_box flex_wrap flex_gap">
        {Projects.map((item) => (
          <Tilt className="project_card">
            <div className="img">
              <img src={item.img} alt="project page" />
            </div>
            <div className="info">
              <h3>{item.name}</h3>
              <div className="project_tech flex_box flex_wrap ">
                {item.tech.map((item) => (
                  <ul>
                    <li>{item.name}</li>
                  </ul>
                ))}
              </div>

              <p>{item.dec}</p>
            </div>
            <div className="url">
              <Link to={item.link}>Go To Project</Link>
            </div>
          </Tilt>
        ))}
      </div>
    </section>
  );
};

export default Project;
