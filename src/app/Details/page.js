//hacer que el navegador del usuario sea el que renderize los elementos
"use client";

// librerias
import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react"; // Íconos para menú
import Navbar from "../../../components/Navbar";
import BlurText from "../../../components/blurText";



export default function Details() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="flex flex-col min-h-screen bg-[var(--surface)]">

      {/* navbar customizada */}
      <Navbar backgroundColor="bg-white" textColor="text-[var(--highlight)]"></Navbar>

      <section className="md:px-24 px-4 py-12">
        <BlurText
          text="Descubre Keidot..."
          delay={200}
          animateBy="words"
          direction="top"
          id="mainDetailsTit"
          className="md:text-5xl text-2xl tracking-tighter font-medium -mb-3 text-[var(--primary)]" />
        <p className="mt-4 text-sm text-gray-700 w-4/6">Keidot es la plataforma ideal para conectar a clientes con trabajadores de jardinería de confianza. Ya sea que necesites un corte de césped, limpieza de jardín, decoración con plantas o la renta de herramientas especializadas, Keidot te ofrece un servicio rápido, seguro y eficiente.
          Nuestra aplicación facilita la búsqueda de jardineros disponibles cerca de ti, permitiéndote comparar precios, verificar reseñas y realizar pagos de manera segura. Descubre una nueva forma de cuidar tu espacio verde con Keidot.</p>
      </section>

    </div>
  );
}
