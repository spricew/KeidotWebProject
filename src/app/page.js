"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react"; // Íconos para menú


export default function Home() {
  // inicializacion de metodos
  const [menuOpen, setMenuOpen] = useState(false);
  const handleAnimationComplete = () => {
    console.log('Animation completed!');
  };
  




  
  return (
    // contenedor principal
    <div className="flex flex-col min-h-screen bg-white text-gray-900">

      {/* barra de navegacion principal */}
      <nav className="bg-white py-5 px-8 md:px-24 flex justify-between items-center border-b h-16">

        {/* contenedor de logo */}
        <div className="w-auto flex flex-row h-full place-items-center">
        <img src="/images/Logo.png" alt="Keidot Logo" className="h-full mr-2" id="mainNavLogo"/>
        <span className="tracking-tight font-semibold text-[var(--highlight)] text-lg">Keidot</span>
        </div>

        {/* opciones de la nav bar */}
        <ul id="navOptions" className="hidden md:flex justify-center gap-14 capitalize text-[var(--foreground)]">

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

        {/* Botón de menú hamburguesa en móvil */}
        <button 
          className="md:hidden" 
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

      </nav>

      {/* Menú desplegable en móvil */}
        {menuOpen && (
          <ul className="md:hidden flex flex-col items-center gap-4 py-4 bg-gray-100">
            <li><Link href="/" className="font-medium text-sm">Inicio</Link></li>
            <li><Link href="/about" className="font-medium text-sm">Servicios</Link></li>
            <li><Link href="/contact" className="font-medium text-sm">Acerca de</Link></li>
            <li><Link href="/help" className="font-medium text-sm">Ayuda</Link></li>
          </ul>
      )}


      {/* cuerpo principal */}
      <main className="flex-grow flex flex-col items-center justify-center p-6 md:p-12">
      <BlurText
        text="Isn't this so cool?!"
        delay={150}
        animateBy="words"
        direction="top"
        onAnimationComplete={handleAnimationComplete}
        className="text-2xl mb-8"
      />
        <h1 className="text-3xl md:text-4xl font-semibold text-center">Contrata un jardinero</h1>
        <p className="text-lg md:text-lg text-gray-600 mt-4">este es un subtitulo.</p>
        <a 
          href="/about"
          className="btn mt-6 px-6 py-2 bg-[var(--primary)] border-b text-white rounded-full font-medium text-base"
        >
          Solicitar
        </a>
      </main>

      {/* footer */}
      <footer className="bg-[var(--darkThemed)] p-4 mt-auto w-full">
        <p className="text-[var(--defaultWhite)] text-xs md:text-xs">&copy; 2025 Keidot. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}
