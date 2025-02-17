//hacer que el navegador del usuario sea el que renderize los elementos
"use client";

// librerias
import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react"; // Íconos para menú
import BlurText from "../../components/blurText";
import ShinyText from "../../components/ShinyText";
import { ChevronRight } from "lucide-react";
import RotatingText from "../../components/rotatingText";
import StarBorder from "../../components/starBorder";

export default function Home() {
  // inicializacion de metodos
  const [menuOpen, setMenuOpen] = useState(false);
  

  return (
    // contenedor principal
    <div className="flex flex-col min-h-screen">

      {/* seccion de binevenida */}
      <section className="h-[calc(100vh+150px)] flex flex-col bg-[url('/images/bgBanner.jpeg')] bg-cover bg-center bg-no-repeat">

        {/* Capa oscura encima de la imagen */}
        <div className="absolute inset-0 bg-black/60 h-[calc(100vh+150px)]"></div>


        {/* barra de navegacion principal */}
        <nav className="relative z-50 px-6 md:px-24 flex justify-between items-center md:h-20 h-12">

          {/* contenedor de logo */}
          <div className="w-auto flex flex-row h-full place-items-center">
          <img src="/images/Logo.png" alt="Keidot Logo" className="h-5 md:h-8 mr-2" id="mainNavLogo"/>
          <span className="tracking-tight font-semibold text-[var(--defaultWhite)] text-sm md:text-lg">Keidot</span>
          </div>

          {/* opciones de la nav bar */}
          <ul id="navOptions" className="hidden md:flex justify-center gap-14 capitalize text-white">

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
            className="md:hidden text-white" 
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

        </nav>

        {/* Menú desplegable en móvil */}
          {menuOpen && (
            <ul className="md:hidden flex flex-col items-center gap-4 py-4 bg-[var(--surface)]">
              <li><Link href="/" className="font-medium text-sm">Inicio</Link></li>
              <li><Link href="/about" className="font-medium text-sm">Servicios</Link></li>
              <li><Link href="/contact" className="font-medium text-sm">Acerca de</Link></li>
              <li><Link href="/help" className="font-medium text-sm">Ayuda</Link></li>
            </ul>
        )}


        {/* cuerpo principal */}
        <main className="flex-grow flex flex-col items-center justify-center relative bottom-24">

          {/* texto de bienvenida animado */}
          <BlurText
          text="Bienvenido a Keidot!"
          delay={200}
          animateBy="words"
          direction="top"
          className="z-10 md:text-5xl text-2xl block tracking-tighter font-medium text-[var(--defaultWhite)] -mb-4"/>

          <ShinyText text="Sin negociaciones confusas, sin llamadas interminables. Solo una solución rápida y directa"
          speed={3}
          className="text-lg md:text-lg text-[var(--defaultWhite)] text-center z-10 my-4"/>

          <a 
            href="/about"
            className="z-10 btn px-6 py-2 bg-[var(--primary)] border-[var(--highlight)] text-[var(--defaultWhite)] rounded-full font-medium text-base flex items-center gap-2"
          >
            Descubrir <ChevronRight size={24} color="white"/>
          </a>

        </main>
      </section>

      {/* seccion de descarga */}
      <section className="w-full h-auto md:px-24 px-4 py-20 flex flex-col items-center">

        <div className="flex flex-row justify-between w-full relative bottom-36 ">
        
        <StarBorder
          as="container"
          className="p-6 rounded-xl w-full"
          color="var(--primaryContainer)"
          speed="5s"
        >
          <h3 className="font-medium text-left">Cuida y transforma tu jardín de manera fácil y rápida. Encuentra expertos en jardinería, renta herramientas y más, todo desde nuestra app.</h3>
        </StarBorder>  

        <StarBorder
          as="container"
          className="p-6 rounded-xl w-full mx-4"
          color="var(--primaryContainer)"
          speed="5s"
        >
          <h3 className="font-medium text-left">Cuida y transforma tu jardín de manera fácil y rápida. Encuentra expertos en jardinería, renta herramientas y más, todo desde nuestra app.</h3>
        </StarBorder>  

        <StarBorder
          as="container"
          className="p-6 rounded-xl w-full"
          color="var(--primaryContainer)" 
          speed="5s"
        >
          <h3 className="font-medium text-left">Cuida y transforma tu jardín de manera fácil y rápida. Encuentra expertos en jardinería, renta herramientas y más, todo desde nuestra app.</h3>
        </StarBorder>  


       
        </div>

            
        

      </section>

      {/* footer */}
      <footer className="bg-[var(--darkThemed)] p-4 mt-auto w-full">
        <p className="text-[var(--defaultWhite)] text-xs md:text-xs">&copy; 2025 Keidot. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}
