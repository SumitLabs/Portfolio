import "./service.css";
import Title from "../components/Title";
import { FaUnity } from "react-icons/fa";
import { MdOutlineWeb } from "react-icons/md";
import { SiBlender } from "react-icons/si";

const Service = () => {
  return (
    <section id="service">
      <Title
        title="services"
        des="Innovative technologies and strategies designed to address specific business challenges or opportunities, enhancing efficiency, productivity, and competitiveness."
      />
      <div className="service_section flex_box align_center justify_between">
        <div className="left_service_section">
          <ul className="service_list">
            <li>Web Development</li>
            <li>Game Development</li>
            <li>3D Art in Blender</li>
          </ul>
        </div>
        <div className="right_service_section">
          <div className="service_panel flex_box flex_gap flex_wrap align_center justify_center">
            <div className="service_card">
              <span>
                <MdOutlineWeb />
              </span>
              <h4>Web developer</h4>
              <p>Developing mordern website</p>
            </div>
            <div className="service_card">
              <span>
                <FaUnity />
              </span>
              <h4>Game Development</h4>
                <p>Developing Games</p>
            </div>
            <div className="service_card">
              <span>
                <SiBlender />
              </span>
              <h4>3D Art in Blender</h4>
              <p>Developing Games</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Service;
