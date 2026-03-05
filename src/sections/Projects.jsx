import useInView from "../hooks/useInView"

const projects = [
  {
    name: "Task Manager",
    description: "Aplicación web de gestión de tareas.",
    techs: ["React", "CSS"],
    demo: "#",
    code: "#",
    image: "/screenshots/task-manager.png",
  },
  {
    name: "Data Wallet",
    description: "Cartera de ahorro creada con React.",
    techs: ["React", "JavaScript"],
    demo: "#",
    code: "#",
    image: "/screenshots/data-wallet.png",
  },
  {
    name: "BankSimulator",
    description: "Simulador de actividades bancarias con JavaScript.",
    techs: ["JavaScript", "HTML", "CSS"],
    demo: "#",
    code: "#",
    image: "/screenshots/banksimulator.png",
  },
  {
    name: "CatWiki",
    description: "Buscador de razas de gatos realizado con HTML y CSS.",
    techs: ["HTML", "CSS"],
    demo: "#",
    code: "#",
    image: "/screenshots/catwiki.png",
  },
  {
    name: "SMDA",
    description: "Página web creada con HTML y CSS.",
    techs: ["HTML", "CSS"],
    demo: "#",
    code: "#",
    image: "/screenshots/smda.png",
  },
]

function ProjectCard({ project, index }) {
  const [ref, isInView] = useInView({ threshold: 0.15 })

  return (
    <div
      ref={ref}
      className={`project-card flex flex-col sm:flex-row gap-4 sm:gap-6 p-4 sm:p-5 rounded-2xl border border-gray-700 bg-[#0d1117] transition-all duration-700 delay-${index * 100}
        ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
    >
      {/* Screenshot */}
      <div className="flex-shrink-0 w-full sm:w-36 h-40 sm:h-28 rounded-lg overflow-hidden border border-gray-700 bg-gray-900">
        <img
          src={project.image}
          alt={project.name}
          className="w-full h-full object-cover object-top"
          onError={(e) => { e.target.style.display = "none" }}
        />
      </div>

      {/* Info */}
      <div className="flex flex-col justify-between flex-1">
        <div>
          <h3 className="nombre-dev text-xl font-bold text-white mb-1">{project.name}</h3>
          <p className="text-gray-400 text-sm leading-relaxed mb-2">{project.description}</p>
          <div className="flex flex-wrap gap-2">
            {project.techs.map((tech) => (
              <span key={tech} className="text-xs px-2 py-0.5 rounded-full border border-cyan-500 text-cyan-400">
                {tech}
              </span>
            ))}
          </div>
        </div>
        <div className="flex gap-3 mt-3">
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-1.5 rounded-full border border-cyan-500 text-cyan-400 text-sm hover:bg-cyan-500 hover:text-black transition-all duration-300"
          >
            Demo
          </a>
          <a
            href={project.code}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-1.5 rounded-full border border-gray-500 text-gray-400 text-sm hover:bg-gray-500 hover:text-black transition-all duration-300"
          >
            Código
          </a>
        </div>
      </div>
    </div>
  )
}

export default function Projects() {
  const [ref, isInView] = useInView({ threshold: 0.1 })

  return (
    <section
      id="projects"
      className="projects flex justify-center items-center px-4 sm:px-6 py-16 sm:py-20"
    >
      <div className="w-full max-w-2xl space-y-6">
        <div
          ref={ref}
          className={`text-center mb-10 transition-all duration-700 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <h2 className="nombre-dev text-3xl sm:text-4xl font-bold m-0">Projects</h2>
        </div>

        {projects.map((project, i) => (
          <ProjectCard key={project.name} project={project} index={i} />
        ))}
      </div>
    </section>
  )
}
