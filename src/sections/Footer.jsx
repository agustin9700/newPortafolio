import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub, faLinkedin, faWhatsapp } from "@fortawesome/free-brands-svg-icons"

const socialLinks = [
  { icon: faGithub, href: "https://github.com/agustinmontero", label: "GitHub" },
  { icon: faLinkedin, href: "https://linkedin.com/in/agustinmontero", label: "LinkedIn" },
  { icon: faWhatsapp, href: "https://wa.me/5493810000000", label: "WhatsApp" },
]

export default function Footer() {
  return (
    <footer className="border-t border-gray-800 py-8 px-4" style={{ backgroundColor: 'var(--bg-color)' }}>
      <div className="max-w-xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        
        <span className="nombre-dev text-cyan-400 text-lg font-bold tracking-wider">
          {"<AMDEV>"}
        </span>

        <p className="text-gray-600 text-xs font-mono">
          © {new Date().getFullYear()} Agustín Montero
        </p>

        <div className="flex gap-5">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.label}
              className="text-gray-600 hover:text-cyan-400 transition-colors duration-300"
            >
              <FontAwesomeIcon icon={link.icon} size="lg" />
            </a>
          ))}
        </div>

      </div>
    </footer>
  )
}
