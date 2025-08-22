import "./styles/skills.css";
import useInView from "./useInView"; // <- your provided hook

const skillsSet = [
  { "Web Development": ["express", "react", "node", "python-flask", "django"] },
  { "APIs & Realtime updates": ["rest-api", "web-rtc", "web-sockets"] },
  { "Programming & Scripting": ["java", "python", "js"] },
  { "App Development": ["reactNative", "expo"] },
  { "Databases": ["mongoDb", "firebase-firestore", "sql"] },
  { "Tools & Platforms": ["git", "github", "aws", "gcp"] }
];

const Skills = () => {
  return (
    <div id="skills" className="skillsSectionContainer">
      <h2>
        <span>SKILLS</span> gained
      </h2>
      <div className="skillsContainer">
        {skillsSet.map((skillSet, skillSetIndex) => {
          const skillSetName = Object.keys(skillSet)[0];
          const skillSetArray = skillSet[skillSetName];
          const [ref, visible] = useInView(0.2);
          const delay = `${0.2 + skillSetIndex * 0.15}s`;

          return (
            <div
              ref={ref}
              key={skillSetName.replace(/\s/g, "")}
              className={`skillContainer fade-in-up ${visible ? "animate" : ""}`}
              style={{ animationDelay: delay }}
            >
              <p className="skillHeading">{skillSetName}</p>
              {skillSetArray.map((skillName, index) => (
                <div className="skill" key={index}>
                  <img
                    loading="lazy"
                    src={`/images/skills/${skillName}.png`}
                    alt={skillName}
                  />
                  <p>{skillName.toUpperCase()}</p>
                </div>
              ))}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Skills;
