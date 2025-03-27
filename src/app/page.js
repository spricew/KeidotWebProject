//hacer que el navegador del usuario sea el que renderize los elementos
"use client";

// librerias
import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react"; // Íconos para menú
import BlurText from "../../components/blurText";
import ShinyText from "../../components/ShinyText";
import { ChevronRight, ChevronDown } from "lucide-react";
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


      <section className="w-full h-auto bg-primary-100/50 py-18 px-32">
            <h2 className="text-4xl tracking-tighter text-primary-900 font-medium mb-16">Tu satisfacción está <span className="font-semibold text-4xl text-primary-700">garantizada</span>.</h2>
            <div className="flex flex-row justify-between">
                <div className="w-96">
                    <h3 className="text-[1.3rem] tracking-tighter font-medium text-primary-700 mb-5">Seguridad Avanzada</h3>
                    <p className="text-sm tracking-tight w-[17rem] text-primary-950">Tu inversión está protegida con los más altos estándares de seguridad. Garantizamos procesos seguros, contratos verificados y transacciones transparentes para que compres con total confianza.</p>
                </div>

                <div className="w-96">
                    <h3 className="text-[1.3rem] tracking-tighter font-medium text-primary-700 mb-5">Confianza y Transparencia</h3>
                    <p className="text-sm tracking-tight w-[17rem] text-primary-950">Sin costos ocultos ni sorpresas. Te ofrecemos información clara y asesoramiento honesto en cada paso, asegurándonos de que tomes la mejor decisión para tu futuro.</p>
                </div>

                <div className="w-96">
                    <h3 className="text-[1.3rem] tracking-tighter font-medium text-primary-700 mb-5">Atención Personalizada</h3>
                    <p className="text-sm tracking-tight w-[17rem] text-primary-950">Cada cliente es único, y así es nuestro servicio. Te acompañamos en todo el proceso, brindándote asesoría experta y opciones que se ajusten a tus necesidades y sueños.</p>
                </div>
            </div>
        </section>

      {/* seccion de preguntas */}
      <section className="h-fit w-full py-16 px-32 bg-defaultWhite">
            <h2 className="text-4xl tracking-tight font-medium text-primary-900 mb-10">
                Preguntas frecuentes
            </h2>

            <div className="w-full divide-y divide-neutral-200">

                {/* Pregunta 1 */}
                <div className="py-8">
                    <details className="group">
                        <summary className="flex cursor-pointer list-none items-center justify-between font-medium text-primary-800">
                            <span>¿Cuáles son las formas de pago aceptadas?</span>
                            <ChevronDown className="transition-transform group-open:rotate-180" size={24} strokeWidth={2} />
                        </summary>
                        <p className="group-open:animate-fadeIn mt-3 text-neutral-600">
                            Aceptamos transferencias bancarias, tarjetas de crédito/débito y pagos en efectivo en nuestra oficina.
                        </p>
                    </details>
                </div>

                {/* Pregunta 2 */}
                <div className="py-8">
                    <details className="group">
                        <summary className="flex cursor-pointer list-none items-center justify-between font-medium text-primary-800">
                            <span>¿Puedo obtener un reembolso?</span>
                            <ChevronDown className="transition-transform group-open:rotate-180" size={24} strokeWidth={2} />
                        </summary>
                        <p className="group-open:animate-fadeIn mt-3 text-neutral-600">
                            Ofrecemos reembolsos dentro de los primeros 30 días. Después de ese período, cada caso se evalúa individualmente.
                        </p>
                    </details>
                </div>

                {/* Pregunta 3 */}
                <div className="py-8">
                    <details className="group">
                        <summary className="flex cursor-pointer list-none items-center justify-between font-medium text-primary-800">
                            <span>¿Cómo cancelo mi suscripción?</span>
                            <ChevronDown className="transition-transform group-open:rotate-180" size={24} strokeWidth={2} />
                        </summary>
                        <p className="group-open:animate-fadeIn mt-3 text-neutral-600">
                            Puedes cancelar tu suscripción desde la configuración de tu cuenta en cualquier momento.
                        </p>
                    </details>
                </div>

            </div>

            <Link
                href={"/"}
                className={`flex flex-row w-fit items-center mt-9 text-xl font-medium tracking-tight text-primary-800
        transition duration-300 ease-out hover:scale-105`}>
                ver más preguntas <ChevronRight size={24} strokeWidth={2.6} className="ml-1 " />
            </Link>

            <div className="flex flex-col justify-center items-center h-80 w-full bg-defaultWhite">
                <h3 className="text-2xl mb-4 font-medium text-defaultBlack">¿Tienes más preguntas?</h3>
                <p className="text-base w-[36rem] text-center">Si necesitas más información o tienes alguna duda, estamos aquí para ayudarte.
                    No dudes en ponerte en contacto con nuestro equipo y con gusto resolveremos todas tus inquietudes.</p>
                <Link href={"/"} className={`flex items-center w-auto py-2 px-4 mt-6 font-normal tracking-tight text-defaultWhite bg-defaultBlack rounded-lg
                     transition duration-300 ease-out hover:bg-defaultBlack/90 hover:scale-105`}>
                    Contáctanos
                    <ChevronRight size={23} className="text-inherit ml-1" strokeWidth={2.2} />
                </Link>
            </div>
        </section>

        <footer className="bg-[var(--darkThemed)] px-4 py-8 w-full">
      <div className="flex flex-row justify-evenly ">
          <div className="w-auto h-auto">
            <span className="font-medium tracking-tight text-base  text-[var(--highlight)]">Soporte</span>
            <div className="flex flex-col mt-2">
              <a href="/" className="text-xs text-[var(--defaultWhite)]">FAQ</a>
              <a href="/" className="text-xs text-[var(--defaultWhite)]">Centro de ayuda</a>
              <a href="/" className="text-xs text-[var(--defaultWhite)]">Contáctanos</a>
            </div>

          </div>

          <div className="w-auto h-auto">
            <span className="font-medium tracking-tight text-base  text-[var(--highlight)]">Recursos</span>
            <div className="flex flex-col mt-2">
              <a href="/" className="text-xs text-[var(--defaultWhite)]">Términos y condiciones</a>
              <a href="/" className="text-xs text-[var(--defaultWhite)]">Política de privacidad</a>
              <a href="/" className="text-xs text-[var(--defaultWhite)]">Plítica de cookies</a>
            </div>

          </div>

          <div className="w-auto h-auto">
            <span className="font-medium tracking-tight text-base  text-[var(--highlight)]">Compañía</span>
            <div className="flex flex-col mt-2">
              <Link href="/AboutPage" className="text-xs text-[var(--defaultWhite)]">Acerca de nosotros</Link>
              <Link href="/Details" className="text-xs text-[var(--defaultWhite)]">Acerca de Keidot</Link>
              <Link href="/ServicesPage" className="text-xs text-[var(--defaultWhite)]">Todos los servicios</Link>

            </div>

          </div>

          <div className="w-auto h-auto">
            <span className="font-medium tracking-tight text-base text-[var(--highlight)]">Descarga la app</span>
            <div className="flex flex-col mt-2 items-center">
              <img src="/images/QR.png" alt="Keidot Logo" className="mr-5" id="qrCode" />
            </div>

          </div>
        </div>

        {/* linea divisora */}
        <div className="border-t border-[var(--highlight)] opacity-50 mx-8 my-8"></div>

        {/* marca */}
        <div className=" flex flex-row w-full px-20">
          <img src="/images/KeidotIcon.png" alt="Keidot Logo" className="h-5 mr-5 mt-2"/>
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
