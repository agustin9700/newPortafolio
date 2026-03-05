import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)

  const closeMenu = () => setIsOpen(false)

  const navLinks = [
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#projects', label: 'Projects' },
    { href: '#contact', label: 'Contact' },
  ]

  return (
    <nav className="navbarPf flex justify-between items-center py-6 px-4 md:px-16 w-full shadow-md">
      <a href="/" className="flex items-center text-3xl">
        <h2 className="m-0">
          <span className="text-white">&lt;</span>
          <span className="text-white">AM</span>
          <span className="logo-color">DEV</span>
          <span className="text-white">&gt;</span>
        </h2>
      </a>

      {/* Desktop Menu */}
      <ul className="hidden md:flex gap-10 text-white text-lg">
        {navLinks.map((link) => (
          <li key={link.href}>
            <a href={link.href} className="li-navbar">{link.label}</a>
          </li>
        ))}
      </ul>

      {/* Desktop CV Button */}
      <a href="/cv" className="hidden md:block boton-cv-navbar px-6 py-2">
        Download CV
      </a>

      {/* Mobile Hamburger Button */}
      <button 
        className="md:hidden text-white p-2" 
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${isOpen ? 'mobile-menu-open' : ''}`}>
        <ul className="flex flex-col items-center gap-8 text-white text-xl">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a 
                href={link.href} 
                className="li-navbar-mobile"
                onClick={closeMenu}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <a href="/cv" className="boton-cv-navbar-mobile mt-8 px-6 py-3">
          Download CV
        </a>
      </div>
    </nav>
  );
}
