import { useState } from "react";
import "./App.css";
import Education from "./Education";
import PersonalInformation from "./PersonalInformation";
import Profile from "./Profile";
import WorkExperience from "./WorkExperience";
import Skills from "./Skills";
export default function App() {
  const [personalInfo, setPersonalInfo] = useState({
    name: "Michael Perry",
    job: "Web Developer Contractor",
    email: "m.perry@email.com",
    location: "Miami, FL",
    phone: "123456-7890",
    linkedIn: "LinkedIn",
  });

  const [enteredProfile, setEnteredProfile] = useState(
    "Experienced Web Developer Contractor with a strong background in front-end and back-end development. Proficient in HTML, CSS,JavaScript, React, and Node.js, with expertise in building responsive, high-performance websites and web applications.Skilled in REST APIs, database management (MongoDB, PostgreSQL),and cloud deployment. Adept at collaborating with clients to translate business needs into functional solutions while ensuring scalability, security, and modern UI/UX design. Passionate about clean code, best practices, and continuous learning. Available for short-term and long-term projects."
  );

  const [enteredWorkExps, setEnteredWorkExps] = useState([
    {
      company: "Quantum Networks",
      role: "Web Designer",
      "start-date": "2017-02-05",
      "end-date": "2019-02-15",
      tasks: [
        "Staffed custom APIs with Node.js to support real-time chat, increasing average user engagement from 3.4 to 5.2 minutes.",
        "Revamped testing pipelines with Jest, slashing pre-launch errors by 63% and accelerating deployment.",
        "Harnessed React Hooks to evaluate competitor designs, implementing features that amplified customer retention rates by 19.3%.",
        "Established Git workflows for collaborative projects, slashing versioning errors to fewer than 3 per sprint.",
      ],
    },
    {
      company: "Quantum Networks",
      role: "Web Designer",
      "start-date": "2017-02-05",
      "end-date": "2019-02-15",
      tasks: [
        "Staffed custom APIs with Node.js to support real-time chat, increasing average user engagement from 3.4 to 5.2 minutes.",
        "Revamped testing pipelines with Jest, slashing pre-launch errors by 63% and accelerating deployment.",
        "Harnessed React Hooks to evaluate competitor designs, implementing features that amplified customer retention rates by 19.3%.",
        "Established Git workflows for collaborative projects, slashing versioning errors to fewer than 3 per sprint.",
      ],
    },
    {
      company: "Quantum Networks",
      role: "Web Designer",
      "start-date": "2017-02-05",
      "end-date": "2019-02-15",
      tasks: [
        "Staffed custom APIs with Node.js to support real-time chat, increasing average user engagement from 3.4 to 5.2 minutes.",
        "Revamped testing pipelines with Jest, slashing pre-launch errors by 63% and accelerating deployment.",
        "Harnessed React Hooks to evaluate competitor designs, implementing features that amplified customer retention rates by 19.3%.",
        "Established Git workflows for collaborative projects, slashing versioning errors to fewer than 3 per sprint.",
      ],
    },
  ]);

  const [enteredEducation, setEnteredEducation] = useState([
    {
      institution: "Full Sail University",
      degree: "Associate of Science, Web Design & Development",
      ["start-date-edu"]: "2013-02-17",
      ["end-date-edu"]: "2017-02-13",
      ["description-edu"]: "Winter Park, FL",
    },
    {
      institution: "Full Sail University",
      degree: "Associate of Science, Web Design & Development",
      ["start-date-edu"]: "2013-02-17",
      ["end-date-edu"]: "2017-02-13",
      ["description-edu"]: "Winter Park, FL",
    },
  ]);

  const [enteredSkill, setEnteredSkill] = useState([
    "React",
    "Node.js",
    "MongoDB",
    "Git",
  ]);

  const [editingWorkExpIndex, setEditingWorkExpIndex] = useState(null);
  const [editingEducationIndex, setEditingEducationIndex] = useState(null);

  function handlePersonalInfoChange(identifier, value) {
    setPersonalInfo((prevState) => ({
      ...prevState,
      [identifier]: value,
    }));
  }

  function handleProfileChange(value) {
    setEnteredProfile(value);
  }

  function handleAddWorkExperience(newExperience) {
    if (editingWorkExpIndex !== null) {
      setEnteredWorkExps((prevWorkExp) =>
        prevWorkExp.map((exp, i) =>
          i === editingWorkExpIndex ? newExperience : exp
        )
      );
      //resetting editing index
      setEditingWorkExpIndex(null);
    } else {
      setEnteredWorkExps((prevWorkExp) => [...prevWorkExp, newExperience]);
    }
  }

  function handleAddEducation(newEducation) {
    if (editingEducationIndex !== null) {
      setEnteredEducation((prevEducation) =>
        prevEducation.map((edu, i) =>
          i === editingEducationIndex ? newEducation : edu
        )
      );
      setEditingEducationIndex(null);
    } else {
      setEnteredEducation((prevEducation) => [...prevEducation, newEducation]);
    }
  }

  function handleAddSkill(newSkill) {
    setEnteredSkill((prevSkill) => [...prevSkill, newSkill]);
  }

  function handleEditWorkExperience(index) {
    setEditingWorkExpIndex(index);
  }

  function handleEditEducation(index) {
    setEditingEducationIndex(index);
  }

  function handleDeleteWorkExperience(index) {
    setEnteredWorkExps((prevWorkExp) =>
      prevWorkExp.filter((_, i) => i !== index)
    );
  }

  function handleDeleteEducation(index) {
    setEnteredEducation((prevEducation) =>
      prevEducation.filter((_, i) => i !== index)
    );
  }

  function handleDeleteSkill(index) {
    setEnteredSkill((prevSkill) => prevSkill.filter((_, i) => i !== index));
  }

  return (
    <>
      <div className="resume-builder-container">
        <div className="form-section">
          <PersonalInformation
            personalInfo={personalInfo}
            onPersonalInfoChange={handlePersonalInfoChange}
          />
          <Profile
            profile={enteredProfile}
            onProfileChange={handleProfileChange}
          />
          <WorkExperience
            onAddWorkExperience={handleAddWorkExperience}
            onDeleteWorkExp={handleDeleteWorkExperience}
            onEditWorkExp={handleEditWorkExperience}
            editingIndex={editingWorkExpIndex}
            workExperiences={enteredWorkExps}
          />
          <Education
            onAddNewEducation={handleAddEducation}
            onDeleteEducation={handleDeleteEducation}
            editingIndex={editingEducationIndex}
            education={enteredEducation}
          />
          <Skills
            onAddSkill={handleAddSkill}
            onDeleteSkill={handleDeleteSkill}
          />
        </div>

        <div className="resume-preview">
          <h1>Resume Preview</h1>
          <div className="resume-content">
            <header className="resume-header">
              <h1>{personalInfo.name}</h1>
              <h2>{personalInfo.job}</h2>
              <p>
                Email:{" "}
                <a href={`mailto:${personalInfo.job}`}>{personalInfo.email}</a>
              </p>
              <p>Phone: {personalInfo.phone}</p>
              <p>Location: {personalInfo.location}</p>
              <p>
                LinkedIn: <a href="#">{personalInfo.linkedIn}</a>
              </p>
            </header>

            <section className="profile-summary">
              <h2>Profile Summary</h2>
              <article>{enteredProfile}</article>
            </section>

            <section className="resume-work-experience">
              <h2>Work Experience</h2>
              {enteredWorkExps.map((experience, index) => (
                <article key={index} className="work-experience-item">
                  <h3>{`${experience.company}-${experience.role} ${experience["start-date"]}    ${experience["end-date"]}`}</h3>
                  <ul>
                    {experience.tasks.map((task, taskIndex) => (
                      <li key={taskIndex}>{task}</li>
                    ))}
                  </ul>
                  <button
                    className="delete-button"
                    onClick={() => handleEditWorkExperience(index)}
                  >
                    {editingWorkExpIndex !== null ? "🡄 Editing" : "Edit"}
                  </button>
                  <button
                    className="delete-button"
                    onClick={() => handleDeleteWorkExperience(index)}
                  >
                    Delete
                  </button>
                </article>
              ))}
            </section>

            <section className="resume-education">
              <h2>Education</h2>
              {enteredEducation.map((education, index) => (
                <article className="education-item" key={index}>
                  <h3>{`${education.institution} - ${education.degree}`}</h3>
                  <p>{`${education["start-date-edu"]} - ${education["end-date-edu"]}`}</p>
                  <p>{education["description-edu"]}</p>
                  <button
                    className="delete-button"
                    onClick={() => handleEditEducation(index)}
                  >
                    {editingEducationIndex !== null ? "🡄 Editing" : "Edit"}
                  </button>
                  <button
                    className="delete-button"
                    onClick={() => handleDeleteEducation(index)}
                  >
                    Delete
                  </button>
                </article>
              ))}
            </section>

            <section className="resume-skills">
              <h2>Skills</h2>
              <ul>
                {enteredSkill.map((skill, index) => (
                  <li key={index}>
                    {skill}
                    <button
                      className="delete-button"
                      onClick={() => handleDeleteSkill(index)}
                    >
                      Delete
                    </button>
                  </li>
                ))}
              </ul>
            </section>
          </div>
        </div>
      </div>
      <footer>
        <p>Made by alonso-dev</p>
        <div className="coffee-cup"></div>
      </footer>
    </>
  );
}
