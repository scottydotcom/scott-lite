import React from "react";
import "./experienceStyles.css";

const ExperienceSection = ({ isActive }) => {
  const experiences = [
    {
      year: 2024,
      title: "Data Analyst",
      company: "LinkedIn",
      description: "Optimized scripts, streamlined data pipelines, and engineered standarized project frameworks.",
    },
    {
      year: 2024,
      title: "Frontend Freelance",
      company: " Code With Craig",
      description: "Refine instructors website by redesigning interface and enhance usibility.",
    },
    {
      year: 2021,
      title: "SWE Fellow",
      company: "General Assembly",
      description: "Guided code reviews, resolved tickets, and applied analytical debugging to fix issues.",
    },
  ];

  return (
    <section className={`card-section ${isActive ? "is-active" : ""}`} id="experience">
      <div className="card-content">
        <h3 className="description-title">WORK EXPERIENCE</h3>
        <div className="experience-timeline">
          {experiences.map((experience, index) => (
            <div key={experience.year} className="experience-date" data-year={experience.year}>
              <div className="experience-title">
                {experience.title} at <span>{experience.company}</span>
              </div>
              <div className="experience-description">{experience.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
