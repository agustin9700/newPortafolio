import Skillcomp from "../components/Skillcomp";
import { faHtml5, faCss3Alt, faJs, faReact,faNodeJs,faGitAlt,faGithub,faFigma} from "@fortawesome/free-brands-svg-icons";

export default function Skills() {
  return (
    <section className="skills  flex flex-col items-center justify-start text-white scroll-mt-24 px-2 py-20 ">
      <h2 className="text-4xl font-extrabold mb-10 text-cyan-400 tracking-wide">
        Skills
      </h2>

      <div className="flex flex-wrap justify-center gap-6 px-4 max-w-5xl">
  <Skillcomp icon={faHtml5} color="#e34c26" text="HTML" />
  <Skillcomp icon={faCss3Alt} color="#264de4" text="CSS" />
  <Skillcomp icon={faJs} color="#f0db4f" text="JavaScript" />
  <Skillcomp icon={faReact} color="#61dafb" text="React" />
  <Skillcomp icon={faNodeJs} color="#3c873a" text="Node.js" />
  <Skillcomp icon={faGitAlt} color="#f1502f" text="Git" />
  <Skillcomp icon={faGithub} color="#ffffff" text="GitHub" />
  <Skillcomp icon={faFigma} color="#f24e1e" text="Figma" />
</div>

    </section>
  );
}
