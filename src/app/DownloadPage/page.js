//hacer que el navegador del usuario sea el que renderize los elementos
"use client";

// librerias
import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react"; // Íconos para menú
import Navbar from "../../../components/Navbar";
import BlurText from "../../../components/blurText";
import Footer from "../../../components/footer";

export default function Details() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="flex flex-col min-h-screen bg-[var(--surface)]">
      
      {/* navbar customizada */}
      <Navbar backgroundColor="bg-white" textColor="text-[var(--highlight)]" />

      {/* Contenido principal que ocupa el espacio restante */}
      <main className="flex-grow md:px-24 px-4 py-12">
        
      </main>

      {/* Footer siempre en la parte inferior */}
      <footer className="bg-[var(--darkThemed)] px-4 py-6 w-full">
        {/* marca */}
        <div className=" flex flex-row w-full px-20">
          <img src="/images/KeidotIcon.png" alt="Keidot Logo" className="h-5 md:h-5 mr-5" />
          <div className="flex flex-col">
            <p className="text-[var(--defaultWhite)] text-[0.65em]">
              &copy; 2025 Keidot. Todos los derechos reservados.
            </p>
            <p className="text-[var(--defaultWhite)] text-[0.55em] w-3/5">
              México Financiera S.A. de C.V. S.F.P. Manuel Avila Camacho 201 Piso 9, Col. Polanco I Sección, CP 11510, Alcaldía Miguel Hidalgo, Ciudad de México.
            </p>
          </div>
        </div>
      </footer>

    </div>
  );
}
