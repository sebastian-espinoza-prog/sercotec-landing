"use client";

import Carousel from "./Carousel";

export default function TestimonialsSection() {
  return (
    <section id="testimonios" className="py-20 px-8">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-[#1a3a6b] mb-2">Lo que dicen nuestros clientes</h2>
        <p className="text-gray-500 mb-10">Empresas que han transformado su negocio con nuestro apoyo.</p>
        <Carousel />
      </div>
    </section>
  )
}