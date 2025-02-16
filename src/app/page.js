export default function Home() {
  return (
    // contenedor principal
    <div className="flex flex-col min-h-screen bg-white text-gray-900">
      {/* barra de navegacion principal */}
      <nav className="bg-white text-white py-5 px-24 flex flex-row justify-between border-b">
        {/* contenedor de logo */}
        <div className="w-auto">
        <h1 className="tracking-tight font-semibold text-[var(--highlight)] text-lg">Keidot</h1>
        </div>
        {/* opciones de la nav bar */}
        <ul id="navOptions" className="flex justify-center gap-14 w-auto capitalize text-[var(--foreground)]">
          <li className="navOpt">
            <a href="/" className="font-medium text-sm">inicio</a>
          </li>
          <li className="navOpt">
            <a href="/about" className="font-medium text-sm">servicios</a>
          </li>
          <li className="navOpt">
            <a href="/contact" className="font-medium text-sm">acerca de</a>
          </li>
          <li className="navOpt">
            <a href="/contact" className="font-medium text-sm">ayuda</a>
          </li>
        </ul>
      </nav>

      {/* cuerpo principal */}
      <main className="flex-grow flex flex-col items-center justify-center p-12">
        <h1 className="text-4xl font-semibold">Contrata un jardinero</h1>
        <p className="text-lg text-gray-600 mt-4">este es un subtitulo.</p>
        <a 
          href="/about"
          className="btn mt-6 px-6 py-2 bg-[var(--primary)] border-b text-white rounded-full font-medium text-base"
        >
          Solicitar
        </a>
      </main>

      {/* footer */}
      <footer className="bg-blue-600 text-white text-center p-4">
        <p>&copy; 2025 Keidot. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}
