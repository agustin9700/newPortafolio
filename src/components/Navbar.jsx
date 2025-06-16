export default function Navbar() {
  return (
    <nav className="navbarPf flex justify-between items-center py-6 px-16 w-full shadow-md">
      <a href="/" className="flex items-center text-3xl">
        <h2 className="m-0">
          <span className="text-white">&lt;</span>
          <span className="text-white">AM</span>
          <span className="logo-color">DEV</span>
          <span className="text-white">&gt;</span>
        </h2>
      </a>

      <ul className="flex gap-10 text-white text-lg">
        <li><a href="#about" className="li-navbar">About</a></li>
        <li><a href="#skills" className="li-navbar">Skills</a></li>
        <li><a href="#projects" className="li-navbar">Projects</a></li>
        <li><a href="#contact" className="li-navbar">Contact</a></li>
      </ul>

      <a href="/cv" className="boton-cv-navbar px-6 py-2">
        Download CV
      </a>
    </nav>
  );
}
