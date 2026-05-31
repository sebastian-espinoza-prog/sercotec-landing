"use client";

export default function HeroSection() {
  return (
    <section className="bg-gradient-to-br from-[#1a3a6b] to-[#0f2548] text-white py-20 px-8 text-center">
      <span className="bg-[#c8a951] text-[#1a3a6b] px-4 py-1 rounded-full text-sm font-bold">
        Centro de Negocios Santiago
      </span>

      <h1 className="text-4xl font-extrabold mt-6 mb-4">
        Impulsamos el crecimiento de tu empresa
      </h1>

      <p className="text-lg opacity-85 max-w-xl mx-auto mb-8">
        Acompañamos a micro, pequeñas y medianas empresas con asesoría,
        capacitación y redes de apoyo completamente gratuitas.
      </p>

      <div className="flex gap-4 justify-center flex-wrap">
        <a href="#servicios" className="bg-[#c8a951] text-[#1a3a6b] px-6 py-3 rounded-lg font-bold">
          Ver servicios
        </a>
        <a href="/contacto" className="border-2 border-white/50 text-white px-6 py-3 rounded-lg font-bold">
          Contáctanos
        </a>
      </div>
    </section>
  )
}