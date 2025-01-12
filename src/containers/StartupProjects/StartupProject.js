import React, {useContext, useState} from "react";
import "./StartupProjects.scss";
import {bigProjects} from "../../portfolio";
import {Fade} from "react-reveal";
import StyleContext from "../../contexts/StyleContext";

export default function StartupProject() {
  const {isDark} = useContext(StyleContext);
  const [openStates, setOpenStates] = useState(
    Array(bigProjects.projects.length).fill(false)
  );

  function openUrlInNewTab(url) {
    if (!url) {
      return;
    }
    var win = window.open(url, "_blank");
    win.focus();
  }

  const toggleCollapse = (index) => {
    setOpenStates((prevStates) => {
      const updatedStates = [...prevStates];
      updatedStates[index] = !updatedStates[index];
      return updatedStates;
    });
  };

  if (!bigProjects.display) {
    return null;
  }

  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main" id="projects">
        <div>
          <h1 className="skills-heading">{bigProjects.title}</h1>
          <p
            className={
              isDark
                ? "dark-mode project-subtitle"
                : "subTitle project-subtitle"
            }
          >
            {bigProjects.subtitle}
          </p>

          <div className="projects-container">
            {bigProjects.projects.map((project, index) => (
              <div key={index} className="collapsible-container">
                {/* Collapsible Header */}
                <div
                  className={
                    isDark
                      ? "dark-mode collapsible-header"
                      : "collapsible-header"
                  }
                  onClick={() => toggleCollapse(index)}
                >
                  <h5
                    className={isDark ? "dark-mode card-title" : "card-title"}
                  >
                    {project.projectName || `Project ${index + 1}`}
                  </h5>
                  <span className="collapsible-icon">
                    {openStates[index] ? "-" : "+"}
                  </span>
                </div>

                {/* Collapsible Content */}
                {openStates[index] && (
                  <div
                    className={
                      isDark
                        ? "dark-mode collapsible-content"
                        : "collapsible-content"
                    }
                  >
                    {project.image && (
                      <div className="project-image">
                        <img
                          src={project.image}
                          alt={project.projectName}
                          className="card-image"
                        />
                      </div>
                    )}
                    <ul
                      className={
                        isDark
                          ? "dark-mode project-bullet-list"
                          : "project-bullet-list"
                      }
                    >
                      {project.projectDesc.map((desc, i) => (
                        <li key={i}>{desc}</li>
                      ))}
                    </ul>
                    {project.skills && (
                      <div className="skills-section">
                        <h6 className={isDark ? "dark-mode skills-title" : "skills-title"}>
                          Skills Used:
                        </h6>
                        <ul
                          className={
                            isDark
                              ? "dark-mode skills-list"
                              : "skills-list"
                          }
                        >
                          {project.skills.map((skill, i) => (
                            <li key={i} className="skill-item">
                              {skill}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                    {project.footerLink && (
                      <div className="project-card-footer">
                        {project.footerLink.map((link, i) => (
                          <span
                            key={i}
                            className={
                              isDark
                                ? "dark-mode project-tag"
                                : "project-tag"
                            }
                            onClick={() => openUrlInNewTab(link.url)}
                          >
                            {link.name}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </Fade>
  );

}
