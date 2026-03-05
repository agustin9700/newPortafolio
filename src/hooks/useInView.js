import { useEffect, useRef, useState } from 'react'

/**
 * Hook para detectar cuando un elemento es visible en el viewport
 * @param {Object} options - Opciones de IntersectionObserver
 * @returns {Array} - [ref, isInView]
 */
export default function useInView(options = {}) {
  const ref = useRef(null)
  const [isInView, setIsInView] = useState(false)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
          // Opcional: dejar de observar una vez que se mostró
          // observer.unobserve(element)
        }
      },
      {
        threshold: options.threshold || 0.1,
        rootMargin: options.rootMargin || '0px',
        ...options,
      }
    )

    observer.observe(element)

    return () => {
      observer.disconnect()
    }
  }, [options])

  return [ref, isInView]
}
