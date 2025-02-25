//hacer que el navegador del usuario sea el que renderize los elementos
"use client";

// librerias
import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react"; // Íconos para menú
import Navbar from "../../../components/Navbar";



export default function Details() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="flex flex-col min-h-screen bg-[var(--surface)]">
      <Navbar backgroundColor="bg-white" textColor="text-[var(--highlight)]"></Navbar>

      <section className="md:px-24 px-4">

      </section>
      <h1 className="text-4xl font-bold text-[var(--primary)]">Descubre Keidot</h1>
      <p className="mt-4 text-lg text-gray-700">Aquí encontrarás toda la información sobre nuestros servicios.</p>
      <a href="/" className="mt-6 text-[var(--highlight)] underline">Volver al inicio</a>
    </div>
  );
}
