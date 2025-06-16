import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import perfil from "../assets/perfil.jpg";

export default function Hero() {
  return (
    <section className="hero flex justify-center items-center min-h-screen   ">
      <div className="bg-hero text-center">
        <div className="flex flex-col items-center gap-3 z-2 ">
          <div className="flex flex-col items-center gap-5">
            <div className="container-card">
              <figure className="figure">
                <img className="" src={perfil} alt="foto agustin" />
              </figure>
            </div>

            <div className="flex justify-center gap-6 text-4xl   ">
              <a className=" cursor-pointer">
                <FontAwesomeIcon icon={faGithub} />
              </a>
              <a className=" cursor-pointer">
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
              <a className=" cursor-pointer">
                <FontAwesomeIcon icon={faWhatsapp} />
              </a>
            </div>
          </div>

          <h1 className="nombre-dev">Agustín Montero</h1>
          <h2 className="subtitulo">DESARROLLADOR WEB FULL-STACK</h2>
          <p className="descripcion">
            Soy un desarrollador web argentino con experiencia en la creación de
            sitios web adaptables que se ajustan a tus necesidades y diseños.
          </p>
          <a href="/cv" className="btn-primary mt-4 inline-block">
            Contactame
          </a>
        </div>
      </div>
    </section>
  );
}
