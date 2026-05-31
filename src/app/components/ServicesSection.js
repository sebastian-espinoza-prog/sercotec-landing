"use client";

import { useState, useEffect } from "react";
import ServiceCard from "./ServiceCard";

export default function ServicesSection() {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:3001/services")
      .then((res) => res.json())
      .then((data) => {
        setServices(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  return (
    <section id="servicios" className="py-20 px-8 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-[#1a3a6b] mb-2">Nuestros servicios</h2>
        <p className="text-gray-500 mb-10">
          Ofrecemos acompañamiento integral para fortalecer tu negocio en cada etapa.
        </p>

        {loading ? (
          <p className="text-gray-400">Cargando servicios...</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <ServiceCard
                key={service.id}
                image={service.image}
                title={service.title}
                description={service.description}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  )
}