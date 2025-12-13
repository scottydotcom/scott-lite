import React from "react";

const SKillSection = ({ isActive }) => {
  const skills = [
    "JavaScript",
    "React",
    "SQL",
    "Python",
    "Excel"
  ];

  return (
    <section className={`card-section ${isActive ? "is-active" : ""}`} id="skill">
      <div className="card-content">
        <h3 className="description-title">SKILLS</h3>
        <div className="skills-timeline">
          {skills.map((skill, index) => (
            <div key={index} className="skill-item">
              <div className="skill-title">{skill}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SKillSection;