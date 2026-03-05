import { useState, useEffect } from 'react'
import { ChevronUp } from 'lucide-react'

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      // Mostrar botón cuando se ha hecho scroll más de 300px
      if (window.scrollY > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', toggleVisibility)
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  if (!isVisible) return null

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-6 right-6 z-50 p-3 rounded-full bg-cyan-400 text-black shadow-lg hover:bg-cyan-300 transition-all duration-300 hover:scale-110"
      aria-label="Volver arriba"
      style={{
        backgroundColor: 'var(--primary-color-boton)',
        boxShadow: '0 0 15px rgba(0, 240, 255, 0.4)'
      }}
    >
      <ChevronUp size={24} />
    </button>
  )
}
