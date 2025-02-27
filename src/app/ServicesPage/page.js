import Link from "next/link";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/footer";
import { ChevronRight } from "lucide-react";

export default function Services() {

  return (
    <div className="flex flex-col min-h-screen bg-[var(--surface)]">

      {/* navbar customizada */}
      <Navbar backgroundColor="bg-white" textColor="text-[var(--highlight)]" />

      {/* banner */}
      <section className="relative h-60 flex flex-col bg-[url('/images/bannerServices.jpg')] bg-cover bg-center bg-no-repeat justify-center items-center">
        {/* Capa negra con sombra */}
        <div className="absolute inset-0 bg-black/70"></div>

        <h1 className="relative text-3xl text-[var(--defaultWhite)] tracking-tight">
          Descubre nuestros servicios
        </h1>
      </section>

      {/* Contenido principal que ocupa el espacio restante */}
      <main className="flex-grow md:px-24 px-4 py-12">

        {/* Tarjetas de servicios */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Corte de césped */}
          <div className="max-w-[18em] rounded-2xl overflow-hidden shadow-lg bg-[var(--defaultWhite)] flex flex-col">
            <img
              className="w-full h-48 object-cover"
              src="/images/ServiceCorte.jpg"
              alt="Corte de césped"
            />
            <div className="p-6 flex flex-col flex-grow">
              <h2 className="text-xl font-medium text-[var(--foreground)] tracking-tight">Corte de césped</h2>
              <p className="text-[var(--foreground)] text-sm tracking-tight mt-2">
                Embellece tu jardín con nuestros servicios de poda, mantenimiento y diseño paisajístico.
              </p>
              <div className="mt-auto">
                <Link
                  href="/"
                  className="w-full flex items-center justify-center gap-2 bg-[var(--primary)] text-[var(--defaultWhite)] font-medium py-2 px-4 rounded-lg tracking-tight"
                >
                  Más información
                  <ChevronRight size={24} className="text-inherit"/>
                </Link>
              </div>
            </div>
          </div>

          {/* Renta de maquinaria */}
          <div className="max-w-[18em] rounded-2xl overflow-hidden shadow-lg bg-[var(--defaultWhite)] flex flex-col">
            <img
              className="w-full h-48 object-cover"
              src="/images/Maquinaria.jpg"
              alt="Renta de maquinaria"
            />
            <div className="p-6 flex flex-col flex-grow">
              <h2 className="text-xl font-medium text-[var(--foreground)] tracking-tight">Renta de maquinaria</h2>
              <p className="text-[var(--foreground)] text-sm tracking-tight mt-2">
                Si prefieres hacer el trabajo tú mismo, ofrecemos alquiler de maquinaria especializada para el corte de césped.
              </p>
              <div className="mt-auto">
                <Link
                  href="/"
                  className="w-full flex items-center justify-center gap-2 bg-[var(--primary)] text-[var(--defaultWhite)] font-medium py-2 px-4 rounded-lg tracking-tight"
                >
                  Más información
                  <ChevronRight size={24} className="text-inherit"/>
                </Link>
              </div>
            </div>
          </div>

          {/* Limpieza de jardín */}
          <div className="max-w-[18em] rounded-2xl overflow-hidden shadow-lg bg-[var(--defaultWhite)] flex flex-col">
            <img
              className="w-full h-48 object-cover"
              src="/images/limpieza.jpg"
              alt="Limpieza de jardín"
            />
            <div className="p-6 flex flex-col flex-grow">
              <h2 className="text-xl font-medium text-[var(--foreground)] tracking-tight">Limpieza de jardín</h2>
              <p className="text-[var(--foreground)] text-sm tracking-tight mt-2">
                Mantén tu jardín limpio y ordenado con nuestros servicios de recolección de hojas, ramas y otros residuos.
              </p>
              <div className="mt-auto">
                <Link
                  href="/"
                  className="w-full flex items-center justify-center gap-2 bg-[var(--primary)] text-[var(--defaultWhite)] font-medium py-2 px-4 rounded-lg tracking-tight"
                >
                  Más información
                  <ChevronRight size={24} className="text-inherit"/>
                </Link>
              </div>
            </div>
          </div>

          {/* Decoración de jardín */}
          <div className="max-w-[18em] rounded-2xl overflow-hidden shadow-lg bg-[var(--defaultWhite)] flex flex-col">
            <img
              className="w-full h-48 object-cover"
              src="/images/decoracion.jpg"
              alt="Decoración de jardín"
            />
            <div className="p-6 flex flex-col flex-grow">
              <h2 className="text-xl font-medium text-[var(--foreground)] tracking-tight">Decoración de jardín</h2>
              <p className="text-[var(--foreground)] text-sm tracking-tight mt-2">
                Transforma tu espacio exterior con nuestra ayuda en la decoración y diseño de jardines personalizados.
              </p>
              <div className="mt-auto">
                <Link
                  href="/"
                  className="w-full flex items-center justify-center gap-2 bg-[var(--primary)] text-[var(--defaultWhite)] font-medium py-2 px-4 rounded-lg tracking-tight"
                >
                  Más información
                  <ChevronRight size={24} className="text-inherit"/>
                </Link>
              </div>
            </div>
          </div>

          {/* Venta de plantas */}
          <div className="max-w-[18em] rounded-2xl overflow-hidden shadow-lg bg-[var(--defaultWhite)] flex flex-col">
            <img
              className="w-full h-48 object-cover"
              src="/images/ventaPlantas.jpg"
              alt="Venta de plantas"
            />
            <div className="p-6 flex flex-col flex-grow">
              <h2 className="text-xl font-medium text-[var(--foreground)] tracking-tight">Venta de plantas</h2>
              <p className="text-[var(--foreground)] text-sm tracking-tight mt-2">
                Encuentra una gran variedad de plantas para embellecer tu jardín. ¡Tenemos lo que necesitas!
              </p>
              <div className="mt-auto">
                <Link
                  href="/"
                  className="w-full flex items-center justify-center gap-2 bg-[var(--primary)] text-[var(--defaultWhite)] font-medium py-2 px-4 rounded-lg tracking-tight"
                >
                  Más información
                  <ChevronRight size={24} className="text-inherit"/>
                </Link>
              </div>
            </div>
          </div>

          {/* Poda de árboles */}
          <div className="max-w-[18em] rounded-2xl overflow-hidden shadow-lg bg-[var(--defaultWhite)] flex flex-col">
            <img
              className="w-full h-48 object-cover"
              src="/images/podaArboles.jpg"
              alt="Poda de árboles"
            />
            <div className="p-6 flex flex-col flex-grow">
              <h2 className="text-xl font-medium text-[var(--foreground)] tracking-tight">Poda de árboles</h2>
              <p className="text-[var(--foreground)] text-sm tracking-tight mt-2">
                Servicios especializados en la poda de árboles de diferentes tamaños y tipos.
              </p>
              <div className="mt-auto">
                <Link
                  href="/"
                  className="w-full flex items-center justify-center gap-2 bg-[var(--primary)] text-[var(--defaultWhite)] font-medium py-2 px-4 rounded-lg tracking-tight"
                >
                  Más información
                  <ChevronRight size={24} className="text-inherit"/>
                </Link>
              </div>
            </div>
          </div>

        </div>
        
      </main>

      {/* Footer siempre en la parte inferior */}
      <Footer></Footer>
    </div>
  );
}
