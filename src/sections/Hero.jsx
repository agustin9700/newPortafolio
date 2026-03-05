import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import perfil from "../assets/perfil.jpg";

export default function Hero() {
  return (
    <section id="hero" className="hero flex justify-center items-center min-h-screen px-2">
      <div className="bg-hero text-center">
        <div className="flex flex-col items-center gap-3 z-2">
          <div className="flex flex-col items-center gap-5">
            <div className="container-card animate-fade-in animate-delay-1">
              <figure className="figure">
                <img className="" src={perfil} alt="foto agustin" />
              </figure>
            </div>

            <div className="flex justify-center gap-6 text-4xl animate-fade-in animate-delay-2">
              <a className="social-link social-github" href="https://github.com" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faGithub} />
              </a>
              <a className="social-link social-linkedin" href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
              <a className="social-link social-whatsapp" href="https://wa.me/" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faWhatsapp} />
              </a>
            </div>
          </div>

          <h1 className="nombre-dev animate-fade-in animate-delay-2">Agustín Montero</h1>
          <h2 className="subtitulo animate-fade-in animate-delay-3">DESARROLLADOR WEB FULL-STACK</h2>
          <p className="descripcion animate-fade-in animate-delay-3">
            Soy un desarrollador web argentino con experiencia en la creación de
            sitios web adaptables que se ajustan a tus necesidades y diseños.
          </p>
          <a href="#contact" className="btn-primary mt-4 inline-block animate-fade-in animate-delay-4">
            Contactame
          </a>
        </div>
      </div>
    </section>
  );
}
