import Link from "next/link";

export default function Footer() {
    return (
      <footer className="bg-[var(--darkThemed)] px-4 py-8 w-full">
      <div className="flex flex-row justify-evenly">
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
    );
  }
  