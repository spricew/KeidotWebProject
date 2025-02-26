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

      {/* navbar customizada */}
      <Navbar backgroundColor="bg-white" textColor="text-[var(--highlight)]"></Navbar>

      <section className="md:px-24 px-4 py-12">
      <h1 id="mainDetailsTit" className="gradText text-4xl font-bold">Descubre Keidot...</h1>
      <p className="mt-4 text-lg text-gray-700">LUIS EKKKKKKKKKKKKKKKKKK.</p>
      <a href="/" className="mt-6 text-[var(--highlight)] underline">Volver al inicio</a> 
      </section>
      
    </div>
  );
}
