import useInView from "../hooks/useInView"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub, faLinkedin, faWhatsapp } from "@fortawesome/free-brands-svg-icons"
import { Mail } from "lucide-react"

const contactLinks = [
  {
    name: "Email",
    icon: null,
    isLucide: true,
    href: "mailto:agustinmontero@email.com",
    label: "agustinmontero@email.com",
    color: "hover:border-red-400 hover:text-red-400",
  },
  {
    name: "LinkedIn",
    icon: faLinkedin,
    isLucide: false,
    href: "https://linkedin.com/in/agustinmontero",
    label: "linkedin.com/in/agustinmontero",
    color: "hover:border-blue-400 hover:text-blue-400",
  },
  {
    name: "WhatsApp",
    icon: faWhatsapp,
    isLucide: false,
    href: "https://wa.me/5493810000000",
    label: "+54 9 381 000-0000",
    color: "hover:border-green-400 hover:text-green-400",
  },
  {
    name: "GitHub",
    icon: faGithub,
    isLucide: false,
    href: "https://github.com/agustinmontero",
    label: "github.com/agustinmontero",
    color: "hover:border-gray-400 hover:text-gray-400",
  },
]

export default function Contact() {
  const [ref, isInView] = useInView({ threshold: 0.2 })

  return (
    <section
      id="contact"
      className="contact flex justify-center items-center px-4 py-20"
      style={{ backgroundColor: 'var(--bg-color)' }}
    >
      <div
        ref={ref}
        className={`w-full max-w-xl text-center space-y-10 transition-all duration-700 ${
          isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="space-y-3">
          <h2 className="nombre-dev text-3xl sm:text-4xl font-bold m-0">Contact</h2>
          <p className="text-gray-400 text-base">
            ¿Tenés un proyecto en mente?{" "}
            <span className="text-white">Hablemos.</span>
          </p>
        </div>

        <div className="flex flex-col gap-4">
          {contactLinks.map((link, i) => (
            <a
              key={i}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-4 px-6 py-4 rounded-2xl border border-gray-700 text-gray-400 bg-[#0d1117] transition-all duration-300 ${link.color}`}
            >
              <span className="flex-shrink-0">
                {link.isLucide ? (
                  <Mail size={24} />
                ) : (
                  <FontAwesomeIcon icon={link.icon} size="lg" />
                )}
              </span>
              <span className="text-sm font-mono">{link.label}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
