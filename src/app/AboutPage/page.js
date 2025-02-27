import Navbar from "../../../components/Navbar";
import Footer from "../../../components/footer";

export default function AboutUs() {
  return (
    <div className="flex flex-col min-h-screen bg-[var(--surface)]">
      
      {/* Navbar customizada */}
      <Navbar backgroundColor="bg-white" textColor="text-[var(--highlight)]" />

      {/* Banner */}
      <section className="relative h-60 flex flex-col bg-[url('/images/bannerAboutUs.jpg')] bg-cover bg-center bg-no-repeat justify-center items-center">
        {/* Capa negra con sombra */}
        <div className="absolute inset-0 bg-black/70"></div>
        
        <h1 className="relative text-3xl text-[var(--defaultWhite)] tracking-tight">Acerca de nosotros</h1>
      </section>

      {/* Contenido principal */}
      <main className="flex-grow md:px-24 px-4 py-12">

        <h2 className="text-3xl font-semibold text-center text-[var(--foreground)] mb-8">
          Conoce a nuestro equipo
        </h2>

        {/* Sección de equipo */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          
          {/* Diego - Backend */}
          <div className="flex flex-col items-center text-center bg-[var(--defaultWhite)] p-6 rounded-2xl shadow-lg">
            <img
              className="w-32 h-32 object-cover rounded-full mb-4"
              src="/images/Diego.jpg"
              alt="Diego"
            />
            <h3 className="text-xl font-medium text-[var(--foreground)]">Diego</h3>
            <p className="text-sm text-[var(--foreground)] mt-2">Backend Developer</p>
            <p className="text-sm text-[var(--foreground)] mt-2">
              Diego es nuestro experto en el backend. Con su experiencia en servidores, bases de datos y APIs, asegura que todo funcione a la perfección desde el lado del servidor.
            </p>
          </div>

          {/* Heyder - Frontend Web Developer & Designer */}
          <div className="flex flex-col items-center text-center bg-[var(--defaultWhite)] p-6 rounded-2xl shadow-lg">
            <img
              className="w-32 h-32 object-cover rounded-full mb-4"
              src="/images/Heyder.jpg"
              alt="Heyder"
            />
            <h3 className="text-xl font-medium text-[var(--foreground)]">Heyder</h3>
            <p className="text-sm text-[var(--foreground)] mt-2">Frontend Web Developer & Designer</p>
            <p className="text-sm text-[var(--foreground)] mt-2">
              Heyder es nuestro genio creativo y el encargado de darle vida a la interfaz. Con su habilidad en diseño y desarrollo frontend, asegura que la experiencia del usuario sea intuitiva y atractiva.
            </p>
          </div>

          {/* Luis - Rol de Luis */}
          <div className="flex flex-col items-center text-center bg-[var(--defaultWhite)] p-6 rounded-2xl shadow-lg">
            <img
              className="w-32 h-32 object-cover rounded-full mb-4"
              src="/images/Luis.jpg"
              alt="Luis"
            />
            <h3 className="text-xl font-medium text-[var(--foreground)]">Luis</h3>
            <p className="text-sm text-[var(--foreground)] mt-2">Web Designer</p>
            <p className="text-sm text-[var(--foreground)] mt-2">
              Luis es el motor de nuestro equipo, aportando sus habilidades y visión para mejorar constantemente nuestros proyectos. 
            </p>
          </div>

        </div>

      </main>

      {/* Footer siempre en la parte inferior */}
      <Footer />
    </div>
  );
}
