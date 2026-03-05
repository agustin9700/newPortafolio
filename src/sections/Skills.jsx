import Skillcomp from "../components/Skillcomp";
import { faHtml5, faCss3Alt, faJs, faReact, faNodeJs, faGitAlt, faGithub, faFigma } from "@fortawesome/free-brands-svg-icons";
import useInView from "../hooks/useInView";

export default function Skills() {
  const [ref, isInView] = useInView({ threshold: 0.1 })

  const skills = [
    { icon: faHtml5, color: "#e34c26", text: "HTML" },
    { icon: faCss3Alt, color: "#264de4", text: "CSS" },
    { icon: faJs, color: "#f0db4f", text: "JavaScript" },
    { icon: faReact, color: "#61dafb", text: "React" },
    { icon: faNodeJs, color: "#3c873a", text: "Node.js" },
    { icon: faGitAlt, color: "#f1502f", text: "Git" },
    { icon: faGithub, color: "#ffffff", text: "GitHub" },
    { icon: faFigma, color: "#f24e1e", text: "Figma" },
  ];

  return (
    <section id="skills" className="skills flex flex-col items-center justify-start text-white px-2 py-20" ref={ref}>
      <h2 className={`nombre-dev text-3xl sm:text-4xl font-bold mb-8 transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        Skills
      </h2>

      <div className={`flex flex-wrap justify-center gap-6 px-4 max-w-5xl transition-all duration-700 delay-100 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        {skills.map((skill, index) => (
          <div 
            key={skill.text}
            style={{ transitionDelay: `${index * 0.05}s` }}
            className={`transition-all duration-300 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
          >
            <Skillcomp icon={skill.icon} color={skill.color} text={skill.text} />
          </div>
        ))}
      </div>

    </section>
  );
}
