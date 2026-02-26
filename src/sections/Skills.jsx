import useInView from '../hooks/useInView';

const skillsSet = [
  { "Web Development": ["express", "react", "node", "django"] },
  { "APIs & Realtime updates": ["rest-api", "web-rtc", "web-sockets"] },
  { "Programming & Scripting": ["java", "python", "js"] },
  { "App Development": ["reactNative", "expo"] },
  { "Databases": ["mongoDb", "sql"] },
  { "Tools & Platforms": ["git", "github", "azure"] }
];

const Skills = () => {
  return (
    <div id="skills" className="w-full overflow-hidden bg-primary pt-[7vh] max-[600px]:pt-[5vh] max-[426px]:px-0 max-[426px]:pb-4 max-[426px]:pt-1">
      <h2 className="mb-10 text-center font-anton text-5xl tracking-widest text-black max-[800px]:mb-8 max-[800px]:text-[2.2rem] max-[600px]:text-2xl max-[426px]:mb-4">
        <span className="text-secondary">SKILLS</span> gained
      </h2>
      <div className="flex flex-wrap justify-center gap-6 px-[5vw] max-[800px]:gap-4 max-[426px]:px-0">
        {skillsSet.map((skillSet, skillSetIndex) => {
          const skillSetName = Object.keys(skillSet)[0];
          const skillSetArray = skillSet[skillSetName];
          const [ref, visible] = useInView(0.2);
          const delay = `${skillSetIndex * 0.15}s`;

          return (
            <div
              ref={ref}
              key={skillSetName.replace(/\s/g, "")}
              className={`relative opacity-0 flex min-h-[220px] min-w-[260px] flex-wrap justify-center gap-4 rounded-3xl border-2 border-secondary bg-white p-4 pt-10 shadow-[0_2px_16px_0_rgba(49,59,172,0.07)] transition-shadow hover:shadow-[0_4px_24px_0_rgba(49,59,172,0.13)] max-[1200px]:gap-3 max-[1200px]:p-3 max-[1200px]:pt-8 max-[600px]:min-h-[120px] max-[600px]:min-w-[180px] max-[600px]:max-w-[90%] max-[426px]:p-2 max-[426px]:pt-6 ${
                visible ? "animate-fadeInUp" : ""
              }`}
              style={{ animationDelay: delay }}
            >
              <p className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap rounded-3xl bg-secondary px-3 py-2 text-[1.1rem] font-bold tracking-widest text-white max-[800px]:px-2.5 max-[800px]:py-1.5 max-[800px]:text-[0.9rem]">
                {skillSetName}
              </p>
              {skillSetArray.map((skillName, index) => (
                <div className="flex flex-col items-center" key={index}>
                  <img
                    loading="lazy"
                    src={`/images/skills/${skillName}.png`}
                    alt={skillName}
                    className="h-32 w-32 rounded-full bg-[#f5f5f5] object-cover shadow-[0_2px_8px_0_rgba(49,59,172,0.08)] max-[1200px]:h-24 max-[1200px]:w-24 max-[800px]:h-20 max-[800px]:w-20 max-[426px]:h-14 max-[426px]:w-14"
                  />
                  <p className="mt-2 text-center text-base font-medium tracking-widest text-secondary max-[426px]:max-w-min max-[426px]:text-[0.8rem]">
                    {skillName.toUpperCase()}
                  </p>
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
