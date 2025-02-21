"use client"; // Necesario porque usa estado y eventos en Next.js (App Router)

import { useState } from "react";
import { X, Menu } from "lucide-react"; // Asegúrate de instalar Lucide para los iconos
import Link from "next/link"; // Usa Link en lugar de <a> para optimizar navegación

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full z-50 px-6 md:px-24 flex justify-between items-center md:h-20 h-12">

          {/* Logo */}
          <div className="w-auto flex flex-row h-full place-items-center">
            <img src="/images/Logo.png" alt="Keidot Logo" className="h-5 md:h-8 mr-2" />
            <span className="tracking-tight font-semibold text-[var(--defaultWhite)] text-sm md:text-lg">
              Keidot
            </span>
          </div>

          {/* Opciones de la navbar */}
          <ul className="hidden md:flex justify-center gap-14 capitalize text-white">
            <li className="navOpt">
              <Link href="/" className="font-medium text-sm">Inicio</Link>
            </li>
            <li className="navOpt">
              <Link href="/about" className="font-medium text-sm">Servicios</Link>
            </li>
            <li className="navOpt">
              <Link href="/contact" className="font-medium text-sm">Acerca de</Link>
            </li>
            <li className="navOpt">
              <Link href="/help" className="font-medium text-sm">Ayuda</Link>
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
              <li><Link href="/contact" className="text-white py-2">Acerca de</Link></li>
              <li><Link href="/help" className="text-white py-2">Ayuda</Link></li>
            </ul>
          )}
        </nav>
  );
}