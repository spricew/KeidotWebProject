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
          <li>
            <a href="/" className="hover:underline font-medium text-sm">inicio</a>
          </li>
          <li>
            <a href="/about" className="hover:underline font-medium text-sm">servicios</a>
          </li>
          <li>
            <a href="/contact" className="hover:underline font-medium text-sm">acerca de</a>
          </li>
          <li>
            <a href="/contact" className="hover:underline font-medium text-sm">ayuda</a>
          </li>
        </ul>
      </nav>

      {/* cuerpo principal */}
      <main className="flex-grow flex flex-col items-center justify-center p-12">
        <h1 className="text-4xl font-bold text-gray-800">Contrata un jardnero</h1>
        <p className="text-lg text-gray-600 mt-4">assda.</p>
        <a 
          href="/about"
          className="mt-6 px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700 transition"
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
