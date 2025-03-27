"use client"; // Necesario porque usa estado y eventos en Next.js (App Router)

import { useState } from "react";
import { X, Menu } from "lucide-react"; // Asegúrate de instalar Lucide para los iconos
import Link from "next/link"; // Usa Link en lugar de <a> para optimizar navegación

export default function Navbar({ backgroundColor = "bg-black", textColor = "text-white" }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className={`w-full z-50 flex justify-between items-center px-6 px-24navBar h-12 ${backgroundColor} border-b`}>

      {/* Logo */}
      <div className="w-auto flex flex-row h-full place-items-center">
        <a href="/" className="flex flex-row items-center">
          <img src="/images/Logo.png" alt="Keidot Logo" className="h-5 md:h-8 mr-2" />
          <span className={`tracking-tight font-semibold text-sm md:text-lg ${textColor}`}>
            Keidot
          </span>
        </a>

      </div>

      {/* Opciones de la navbar */}
      <ul className={`hidden md:flex justify-center gap-14 capitalize text--[var(--foreground)]`}>
        <li className="navOpt">
          <Link href="/" className="font-medium text-sm">Inicio</Link>
        </li>
        <li className="navOpt">
          <Link href="/ServicesPage" className="font-medium text-sm">Servicios</Link>
        </li>
        <li className="navOpt">
          <Link href="/AboutPage" className="font-medium text-sm">Acerca de</Link>
        </li>
        <li className="navOpt">
          <Link href="/HelpPage" className="font-medium text-sm">Ayuda</Link>
        </li>
      </ul>

      {/* Botón de menú hamburguesa en móvil */}
      <button className="md:hidden text-white" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
        {menuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Menú desplegable en móvil */}
      {menuOpen && (
        <ul className="absolute top-12 left-0 w-full bg-gray-800 flex flex-col items-center py-4 z-50 md:hidden">
          <li><Link href="/" className="text-white py-2">Inicio</Link></li>
          <li><Link href="/about" className="text-white py-2">Servicios</Link></li>
          <li><Link href="/AboutPage" className="text-white py-2">Acerca de</Link></li>
          <li><Link href="/help" className="text-white py-2">Ayuda</Link></li>
        </ul>
      )}
    </nav>
  );
}