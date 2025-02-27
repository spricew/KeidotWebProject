import Navbar from "../../../components/Navbar";
import Footer from "../../../components/footer";
import 'animate.css';

export default function AboutUs() {
  return (
    <div className="flex flex-col min-h-screen bg-[var(--surface)] overflow-hidden">

      <div className="h-screen flex flex-col items-center">
        {/* Navbar customizada */}
        <Navbar backgroundColor="bg-white" textColor="text-[var(--highlight)]" />

        {/* Contenido principal */}
        <main className="flex-grow flex flex-col justify-center md:px-24 px-4">

          <div className="flex justify-center max-w-screen mb-10 animate__animated animate__fadeInRight">
            <h1 className="text-3xl font-medium text-center text-[var(--foreground)] tracking-tighter w-[15em]">
              Conoce a nuestros <span className="font-semibold text-3xl">desarrolladores</span>.
            </h1>
          </div>


          {/* Sección de equipo */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">

            {/* Heyder - Frontend Web Developer & Designer */}
            <div className="flex flex-col items-center text-center rounded-2xl animate__animated animate__fadeInUp">
              <img
                className="w-32 h-32 object-cover rounded-full mb-4"
                src="https://www.ecartelera.com/images/sets/21300/21347.jpg"
                alt="Heyder"
              />
              <h3 className="text-xl font-medium text-[var(--foreground)]">Heyder Ix Medina</h3>
              <p className="text-sm font-medium text-[var(--highlight)] mt-2">Frontend Web Developer & Designer</p>
              <p className="text-[0.8em] text-[var(--foreground)] tracking-tight mt-2">
                Nuestro genio creativo y el encargado de darle vida a la interfaz. Asegura que la experiencia del usuario sea intuitiva y atractiva.
              </p>
            </div>

            {/* Diego - Backend */}
            <div className="flex flex-col items-center text-center rounded-2xl animate__animated animate__fadeInUp">
              <img
                className="w-32 h-32 object-cover rounded-full mb-4"
                src="https://p2.trrsf.com/image/fget/cf/774/0/images.terra.com/2021/03/02/michael-james-shaw-blood-and-treasure.jpg"
                alt="Diego"
              />
              <h3 className="text-xl font-medium text-[var(--foreground)]">Diego Sánchez Ek</h3>
              <p className="text-sm font-medium text-[var(--highlight)] mt-2">Backend Developer</p>
              <p className="text-[0.8em] text-[var(--foreground)] tracking-tight mt-2">
                Con su experiencia en servidores, bases de datos y APIs, asegura que todo funcione a la perfección desde el lado del servidor.
              </p>
            </div>


            {/* Luis - Rol de Luis */}
            <div className="flex flex-col items-center text-center rounded-2xl animate__animated animate__fadeInUp">
              <img
                className="w-32 h-32 object-cover rounded-full mb-4"
                src="https://gcdn.emol.cl/celebridades/files/2011/07/ryan-reynolds.jpg"
                alt="Luis"
              />
              <h3 className="text-xl font-medium text-[var(--foreground)]">Luis Ek Pech</h3>
              <p className="text-sm font-medium text-[var(--highlight)] mt-2">Web Designer</p>
              <p className="text-[0.8em] text-[var(--foreground)] tracking-tight mt-2">
                Luis es el motor de nuestro equipo, aportando sus habilidades y visión para mejorar constantemente nuestros proyectos.
              </p>
            </div>

          </div>

        </main>
      </div>


      {/* Footer siempre en la parte inferior */}
      <Footer />
    </div>
  );
}
