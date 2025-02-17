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

export default function Home() {
  // inicializacion de metodos
  const [menuOpen, setMenuOpen] = useState(false);
  

  return (
    // contenedor principal
    <div className="flex flex-col min-h-screen">

      {/* seccion de binevenida */}
      <section className="h-screen flex flex-col bg-[url('/images/bgBanner.jpeg')] bg-cover bg-center bg-no-repeat">
        {/* Capa oscura encima de la imagen */}
        <div className="absolute inset-0 bg-black/60"></div>


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
        <main className="flex-grow flex flex-col items-center justify-center relative bottom-10">

          {/* texto de bienvenida animado */}
          <BlurText
          text="Bienvenido a Keidot!"
          delay={200}
          animateBy="words"
          direction="top"
          className="z-10 md:text-5xl text-2xl block tracking-tighter font-medium text-[var(--defaultWhite)]"/>

          {/* <ShinyText text="Just some shiny sda!"/> */}


          <p className="text-lg md:text-lg text-[var(--defaultWhite)] mt-2 text-center z-10">Sin negociaciones confusas, sin llamadas interminables.<br/> Solo una solución rápida y directa</p>
          <a 
            href="/about"
            className="z-10 btn mt-6 px-6 py-2 bg-[var(--primary)] border-[var(--highlight)] text-[var(--defaultWhite)] rounded-full font-medium text-base flex items-center gap-2"
          >
            Descubrir <ChevronRight size={24} color="white" />
          </a>

        </main>
      </section>

      {/* seccion de descarga */}
      <section className="w-full h-auto md:px-24 px-4 py-20 flex flex-col items-center">

        {/*subtitulo*/}
        <div className="flex flex-row w-full mb-6 h-auto place-items-center">
          <h2 className="mr-2 text-3xl font-semibold tracking-tighter">Con Keidot</h2>

          {/* texto rotante */}
          <RotatingText
            texts={['Corta tu césped', 'Limpia tu patio', 'Compra plantas', 'Decora tu jardín']}
            mainClassName="bg-[var(--primary)] justify-center w-auto p-2 rounded-md"
            staggerFrom={"last"}
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-120%" }}
            staggerDuration={0.025}
            splitLevelClassName="overflow-hidden"
            transition={{ type: "spring", damping: 30, stiffness: 350 }}
            rotationInterval={3200}
            elementLevelClassName="text-white text-3xl font-medium tracking-tighter"
          />
        </div>

        <div className="flex flex-row justify-between w-full">
          
          <div className="p-6 bg-[var(--surface)] border rounded-lg w-80">
            <h3 className="font-medium">Cuida y transforma tu jardín de manera fácil y rápida. Encuentra expertos en jardinería, renta herramientas y más, todo desde nuestra app.</h3>
          </div>

          <div className="p-4 bg-[var(--surface)] border rounded-lg w-80">
            <h3 className="font-medium"></h3>
          </div>

          <div className="p-4 bg-[var(--surface)] border rounded-lg w-80">
            <h3 className="font-medium">Cuida y transforma tu jardín de manera fácil y rápida. Encuentra expertos en jardinería, renta herramientas y más, todo desde nuestra app.</h3>
          </div>
          
        </div>        
        

      </section>

      {/* footer */}
      <footer className="bg-[var(--darkThemed)] p-4 mt-auto w-full">
        <p className="text-[var(--defaultWhite)] text-xs md:text-xs">&copy; 2025 Keidot. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}
