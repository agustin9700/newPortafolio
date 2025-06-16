export default function About() {
  return (
    <section className="about flex justify-center items-start min-h-screen">
      <div className="text-center max-w-3xl space-y-6">
        <h2 className="nombre-dev text-3xl sm:text-4xl font-bold m-0">
          Sobre mí
        </h2>
        <h3 className="subtitulo">¿Quién soy?</h3>
        <p className="text-base leading-relaxed text-gray-300">
          Soy <b className="text-white">Agustín Montero</b>, desarrollador web full-stack.  
          Empecé en esto por curiosidad y, con el tiempo, se convirtió en algo que disfruto hacer todos los días.  
          Me gusta construir cosas útiles y ver cómo las ideas toman forma en la pantalla.  
          <br /><br />
          Antes de dedicarme a la programación, pasé por otros trabajos que me ayudaron a desarrollar habilidades como la adaptabilidad, la organización y la comunicación. Hoy eso me sirve mucho para trabajar mejor en equipo, entender lo que necesita un cliente o un proyecto, y llevarlo a cabo de forma práctica.  
          <br /><br />
          No me considero un experto en todo, pero sí soy alguien que aprende rápido, se involucra y busca mejorar constantemente. Me interesa seguir creciendo, sumando experiencia y aportando valor en cada proyecto donde me toque estar.
        </p>
      </div>
    </section>
  );
}
