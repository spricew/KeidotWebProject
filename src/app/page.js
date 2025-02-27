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
import Footer from "../../components/footer";

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

        <nav className={`w-full z-50 px-6 md:px-24 flex justify-between items-center md:h-20 h-12`}>

          {/* Logo */}
          <div className="w-auto flex flex-row h-full place-items-center">
            <a href="/" className="flex flex-row items-center">
              <img src="/images/Logo.png" alt="Keidot Logo" className="h-5 md:h-8 mr-2" />
              <span className="tracking-tight font-medium text-[var(--defaultWhite)] text-sm md:text-lg">
                Keidot
              </span>
            </a>

          </div>

          {/* Opciones de la navbar */}
          <ul className="hidden md:flex justify-center gap-14 capitalize text-white">
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
              <li><Link href="/contact" className="text-white py-2">Acerca de</Link></li>
              <li><Link href="/HelpPage" className="text-white py-2">Ayuda</Link></li>
            </ul>
          )}
        </nav>

        {/* cuerpo principal */}
        <main className="flex-grow flex flex-col items-center justify-center relative bottom-24">

          {/* texto de bienvenida animado */}
          <BlurText
            text="Bienvenido a Keidot!"
            delay={200}
            animateBy="words"
            direction="top"
            className="z-10 md:text-5xl text-2xl block tracking-tighter font-medium text-[var(--defaultWhite)] -mb-4" />

          <ShinyText text="Sin negociaciones confusas, sin llamadas interminables. Solo una solución rápida y directa"
            speed={3}
            className="text-lg md:text-lg text-[var(--defaultWhite)] text-center z-10 my-4" />


          <div className="flex flex-row">
            <Link
              href="/DownloadPage"
              className="mr-3 z-10 btn gap-1 px-6 py-2 bg-[var(--primary)] border-[var(--highlight)] text-[var(--defaultWhite)] rounded-full font-medium text-base flex items-center"
            >
              Obtén Keidot<ChevronRight className="text-inherit" size={24} />
            </Link>

            <Link
              href="/Details"
              className="z-10 gap-1 px-6 py-2 bg-[var(--surface)] border-[var(--highlight)] 
             text-[var(--primary)] rounded-full font-medium text-base flex items-center btnInv"
            >
              Sobre Keidot
              <ChevronRight className="text-inherit" size={24} />
            </Link>

          </div>


        </main>
      </section>


      {/* seccion de descarga */}
      <section className="w-full h-auto md:px-24 px-4 pt-20 flex flex-col items-center">

        <div className="flex flex-row justify-between w-full relative bottom-36 h-auto">

          <StarBorder
            as="container"
            className="p-6 rounded-xl w-full"
            color="var(--primaryContainer)"
            speed="5s"
          >
            <h3 className="font-medium text-left">Keidot hace que cuidar tu jardín sea sencillo. Conecta con expertos, renta herramientas y mantén tu jardín perfecto todo el año.</h3>
          </StarBorder>

          <StarBorder
            as="container"
            className="p-6 rounded-xl w-full mx-4 h-full"
            color="var(--primaryContainer)"
            speed="5s"
          >
            <h3 className="font-medium text-left">Tu jardín siempre está en las mejores manos. Encuentra servicios profesionales de jardinería y todo lo que necesitas al alcance de un clic.</h3>
          </StarBorder>

          <StarBorder
            as="container"
            className="p-6 rounded-xl w-full starcontainer h-full"
            color="var(--primaryContainer)"
            speed="5s"
          >
            <h3 className="font-medium text-left h-21">Keidot es tu aliado en el cuidado del jardín. Accede a servicios personalizados, renta de herramientas, limpieza de patio y más, todo desde tu teléfono.</h3>
          </StarBorder>

        </div>

        {/*subtitulo*/}
        <div className="flex flex-col w-full mb-16 h-auto items-center justify-center -mt-10">

          <div className="w-full flex justify-center items-center">
            <h2 className="gradText mr-1 text-3xl font-semibold tracking-tighter -mb-2">Con Keidot</h2>
          </div>

          {/* texto rotante */}
          <RotatingText
            texts={['Corta tu césped', 'Limpia tu patio', 'Compra plantas', 'Decora tu jardín', 'Explora otros servicios']}
            mainClassName="justify-center w-auto p-2 rounded-md text-[var(--primary)]"
            staggerFrom={"last"}
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-120%" }}
            staggerDuration={0.022}
            splitLevelClassName="overflow-hidden"
            transition={{ type: "spring", damping: 24, stiffness: 300 }}
            rotationInterval={3200}
            elementLevelClassName="text-3xl font-semibold tracking-tighter"
          />

          <img src="images/DownloadBtn.png" className="h-9 mt-5" />

        </div>

      </section>


      {/* seccion de preguntas */}
      <section className="w-full h-auto md:px-24 px-4 mt-4 py-6 flex flex-col items-center bg-[var(--surface)]">

        <span className="md:text-2xl text-2xl mb-4 tracking-tighter font-medium text-[var(--primary)]">¿Tienes alguna pregunta?</span>
        <span className="md:text-lg text-2xl tracking-tighter font-normal text-[var(--primary)]">Estamos para ayudarte en keidot@gmail.com</span>
      </section>

      {/* footer */}
      <Footer /> {/* Footer reutilizable */}
    </div>
  );
}
