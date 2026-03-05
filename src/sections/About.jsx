import useInView from "../hooks/useInView"

export default function About() {
  const [ref, isInView] = useInView({ threshold: 0.2 })

  return (
    <section
      id="about"
      className="about flex justify-center items-center px-2 py-20"
      ref={ref}
    >
      <div className={`text-center max-w-3xl space-y-6 transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <h2 className="nombre-dev text-3xl sm:text-4xl font-bold m-0">
          Sobre mí
        </h2>
        <h3 className="subtitulo">¿Quién soy?</h3>
        <p className="text-base leading-relaxed text-gray-300">
          Soy <b className="text-white">Agustín Montero</b>, desarrollador web full-stack.
          Empecé en esto por curiosidad y, con el tiempo, se convirtió en algo que disfruto hacer todos los días.
          Me gusta construir cosas útiles y ver cómo las ideas toman forma en la pantalla.
          <br /><br />
          Antes de dedicarme a la programación, pasé por otros trabajos que me ayudaron a desarrollar
          habilidades como la adaptabilidad, la organización y la comunicación. Hoy eso me sirve mucho
          para trabajar mejor en equipo, entender lo que necesita un cliente o un proyecto,
          y traducirlo en algo concreto y funcional.
          <br /><br />
          No me considero un experto en todo, pero sí soy alguien que aprende rápido, se involucra
          y busca mejorar constantemente. Me interesa seguir creciendo, sumando experiencia
          y aportando valor en cada proyecto en los que participe.
        </p>
      </div>
    </section>
  );
}