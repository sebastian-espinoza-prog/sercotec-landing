"use client";

import { useState, useEffect } from "react";

export default function AboutSection() {
  const [about, setAbout] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:3001/about")
      .then((res) => res.json())
      .then((data) => {
        setAbout(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  return (
    <section id="nosotros" className="py-20 px-8">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        <div>
          <h2 className="text-3xl font-bold text-[#1a3a6b] mb-4">Quiénes somos</h2>
          
          {loading ? (
            <p className="text-gray-400">Cargando información...</p>
          ) : (
            about?.paragraphs.map((p, i) => (
              <p key={i} className="text-gray-500 mb-4">{p}</p>
            ))
          )}

          <a href="/contacto" className="bg-[#1a3a6b] text-white px-6 py-3 rounded-lg font-bold inline-block hover:bg-[#14306a]">
            Contáctanos
          </a>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="bg-white rounded-2xl p-6 shadow-md text-center border-t-4 border-[#c8a951]">
            <span className="text-4xl font-extrabold text-[#1a3a6b] block">+3.200</span>
            <span className="text-gray-500 text-sm">Empresas atendidas</span>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-md text-center border-t-4 border-[#c8a951]">
            <span className="text-4xl font-extrabold text-[#1a3a6b] block">+200</span>
            <span className="text-gray-500 text-sm">Talleres al año</span>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-md text-center border-t-4 border-[#c8a951]">
            <span className="text-4xl font-extrabold text-[#1a3a6b] block">10+</span>
            <span className="text-gray-500 text-sm">Años de experiencia</span>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-md text-center border-t-4 border-[#c8a951]">
            <span className="text-4xl font-extrabold text-[#1a3a6b] block">100%</span>
            <span className="text-gray-500 text-sm">Servicio gratuito</span>
          </div>
        </div>

      </div>
    </section>
  )
}