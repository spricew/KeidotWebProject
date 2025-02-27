import Navbar from "../../../components/Navbar";
import Footer from "../../../components/footer";
import 'animate.css';

export default function HelpPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[var(--surface)] overflow-hidden">

      <div className="h-screen flex flex-col items-center">
        {/* Navbar customizada */}
        <Navbar backgroundColor="bg-white" textColor="text-[var(--highlight)]" />

        {/* Contenido principal */}
        <main className="flex-grow flex flex-col justify-center md:px-24 px-4">

          {/* Título principal */}
          <div className="flex justify-center max-w-screen mb-8 animate__animated animate__fadeInRight w-full">
            <h1 className="text-3xl font-medium text-center text-[var(--foreground)] tracking-tighter w-[15em]">
              Centro de <span className="font-semibold text-3xl">Ayuda</span>.
            </h1>
          </div>

          {/* Descripción */}
          <div className="max-w-2xl mx-auto text-center animate__animated animate__fadeInUp">
            <p className="text-[var(--foreground)] text-lg leading-relaxed">
              Estamos aquí para ayudarte. Encuentra respuestas a tus preguntas más frecuentes o contacta directamente con nuestro equipo de soporte.
            </p>
          </div>

          {/* Sección de preguntas frecuentes */}
          <div className="mt-16 max-w-4xl mx-auto animate__animated animate__fadeInUp">
            <h2 className="text-2xl font-medium text-[var(--foreground)] mb-8">Preguntas frecuentes</h2>

            {/* Pregunta 1 */}
            <div className="mb-6">
              <h3 className="text-xl font-medium text-[var(--foreground)]">¿Cómo puedo crear una cuenta?</h3>
              <p className="text-sm text-[var(--foreground)] mt-2">
                Para crear una cuenta, haz clic en el botón "Registrarse" en la esquina superior derecha de la página y sigue las instrucciones.
              </p>
            </div>

            {/* Pregunta 2 */}
            <div className="mb-6">
              <h3 className="text-xl font-medium text-[var(--foreground)]">¿Cómo restablezco mi contraseña?</h3>
              <p className="text-sm text-[var(--foreground)] mt-2">
                Ve a la página de inicio de sesión y haz clic en "¿Olvidaste tu contraseña?". Ingresa tu correo electrónico y sigue las instrucciones.
              </p>
            </div>

            {/* Pregunta 3 */}
            <div className="mb-6">
              <h3 className="text-xl font-medium text-[var(--foreground)]">¿Cómo contacto al soporte técnico?</h3>
              <p className="text-sm text-[var(--foreground)] mt-2">
                Puedes contactarnos a través del formulario de contacto en la sección "Soporte" o enviarnos un correo a soporte@tudominio.com.
              </p>
            </div>
          </div>

          {/* Sección de contacto */}
          <div className="mt-16 max-w-4xl mx-auto animate__animated animate__fadeInUp">
            <h2 className="text-2xl font-medium text-[var(--foreground)] mb-8">Contacto</h2>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-[var(--foreground)]">
                  Nombre
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="mt-1 block w-full px-4 py-2 bg-[var(--surface)] border border-[var(--foreground)] rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[var(--highlight)]"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-[var(--foreground)]">
                  Correo electrónico
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="mt-1 block w-full px-4 py-2 bg-[var(--surface)] border border-[var(--foreground)] rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[var(--highlight)]"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-[var(--foreground)]">
                  Mensaje
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  className="mt-1 block w-full px-4 py-2 bg-[var(--surface)] border border-[var(--foreground)] rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[var(--highlight)]"
                  required
                ></textarea>
              </div>

              <div>
                <button
                  type="submit"
                  className="w-full px-4 py-2 bg-[var(--highlight)] text-white font-medium rounded-md hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[var(--highlight)]"
                >
                  Enviar mensaje
                </button>
              </div>
            </form>
          </div>

        </main>
      </div>

      {/* Footer siempre en la parte inferior */}
      <Footer />
    </div>
  );
}