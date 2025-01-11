import React from "react";
import "./SoftwareSkill.scss";
import { skillsSection } from "../../portfolio";

export default function SoftwareSkill() {
  return (
    <div>
      <div className="software-skills-main-div">
        {skillsSection.skillCategories.map((category, i) => (
          <div key={i} className="skill-category">
            <h3>{category.category}</h3>
            <ul className="dev-icons">
              {category.skills.map((skill, j) => (
                <li key={j} className="software-skill-inline" name={skill.skillName}>
                  <i className={skill.fontAwesomeClassname}></i>
                  <p>{skill.skillName}</p>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
