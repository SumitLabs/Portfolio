import './skills.css'
import Title from '../components/Title'
import { SkillsInfo } from '../constants.js'
import Tilt from 'react-parallax-tilt';
const Skills = () => {
  return (
    <div id='skills'>
      <Title 
        title="skills" 
        des="The Future belongs to those who learn more skills and combine them in creative ways." 
      />
       
      <div className="skills_section">
        <div className="skills_card flex_box flex_wrap ">
          {SkillsInfo.map((category) => (
             <Tilt className="skill_category">
            <div key={category.title}>
              <h3>{category.title}</h3>
              <div className="skill_items flex_box flex_gap flex_wrap justify_center ">
                {category.skills.map((skill) => (
                  <div className="skill_item flex_box align_center" key={skill.name}>
                    <img src={skill.logo} alt={skill.name} />
                    <span>{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
            </Tilt>

          
          ))}
        </div>
      </div>
      
    </div>
  )
}

export default Skills
