export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white text-gray-900">
      {/* NAVBAR */}
      <nav className="bg-white text-white py-6 px-24 flex flex-row justify-between border-b">
        <div className="bg-purple-400  w-auto">
        <h1 className="tracking-normal font-medium text-[var(--foreground)]">Keidot</h1>

        </div>
        <ul className="flex justify-center gap-14 w-auto capitalize">
          <li>
            <a href="/" className="hover:underline font-light text-sm">inicio</a>
          </li>
          <li>
            <a href="/about" className="hover:underline font-light text-sm">servicios</a>
          </li>
          <li>
            <a href="/contact" className="hover:underline font-light text-sm">acerca de</a>
          </li>
          <li>
            <a href="/contact" className="hover:underline font-light text-sm">ayuda</a>
          </li>
        </ul>
      </nav>

      {/* CUERPO PRINCIPAL */}
      <main className="flex-grow flex flex-col items-center justify-center p-12">
        <h1 className="text-4xl font-bold text-gray-800">Bienvenido a mi página</h1>
        <p className="text-lg text-gray-600 mt-4">Esta es una página básica en Next.js.</p>
        <a 
          href="/about"
          className="mt-6 px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700 transition"
        >
          Ir a la página "About"
        </a>
      </main>

      {/* FOOTER */}
      <footer className="bg-blue-600 text-white text-center p-4">
        <p>&copy; 2025 Mi Sitio Web. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}
