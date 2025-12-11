import React, { useState } from "react";
import AboutSection from "./AboutSection"; 
import ExperienceSection from "./ExperienceSection";
import SkillSection from "./SkillSection";

const Card = () => {
  const [activeSection, setActiveSection] = useState("#about");

  const handleButtonClick = (section) => {
    setActiveSection(section);
  };

  return (
    <article className={`card ${activeSection !== "#about" ? "is-active" : ""}`} data-state={activeSection}>
      {" "}
      <header className="card-header">
        <div
          className="card-banner"
          style={{
            backgroundImage: "url('https://i.pinimg.com/736x/73/88/59/73885953f9066949f890e6b0864566e6.jpg')",
          }}
        ></div>
        <img
          className="profile-picture"
          src="https://i.pinimg.com/736x/73/88/59/73885953f9066949f890e6b0864566e6.jpg"
          alt="avatar"
        />
        <h1 className="card-name">Scott</h1>
        <h2 className="position-name">Web Dev | Full Stack | Data Analyst & Engineer</h2>
      </header>
      <main className="card-main">
        <AboutSection isActive={activeSection === "#about"} />
        <ExperienceSection isActive={activeSection === "#experience"} />
        <SkillSection isActive={activeSection === "#skill"} />
        <div className="card-buttons">
          <button
            data-section="#about"
            className={activeSection === "#about" ? "is-active" : ""}
            onClick={() => handleButtonClick("#about")}
          >
            ABOUT
          </button>
          <button
            data-section="#experience"
            className={activeSection === "#experience" ? "is-active" : ""}
            onClick={() => handleButtonClick("#experience")}
          >
            EXPERIENCE
          </button>
          <button
            data-section="#skill"
            className={activeSection === "#skill" ? "is-active" : ""}
            onClick={() => handleButtonClick("#skilll")}
          >
            SKILLS
          </button>
        </div>
      </main>
    </article>
  );
};

export default Card;
