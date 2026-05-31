"use client"; 

import { useState, useEffect } from "react"; 


const testimonials = [
  {
    text: "Gracias al apoyo de SERCOTEC pude estructurar mi negocio y crecer un 40% en ventas en menos de un año.",
    author: "María González",
    role: "Dueña de Pastelería Dulce Hogar",
    avatar: "https://i.pravatar.cc/56?img=47"
  },
  {
    text: "Los talleres de marketing digital cambiaron cómo me relaciono con mis clientes. Hoy tengo ventas por internet.",
    author: "Carlos Ramírez",
    role: "Emprendedor – Tienda de ropa",
    avatar: "https://i.pravatar.cc/56?img=12"
  },
  {
    text: "El acompañamiento fue clave para superar la crisis. El equipo siempre estuvo disponible para ayudarme.",
    author: "Ana Torres",
    role: "Directora – Jardín Infantil Pequeños Genios",
    avatar: "https://i.pravatar.cc/56?img=32"
  }
]

export default function Carousel() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length); 
    }, 5000);
    return () => clearInterval(timer); 
  }, []);

  
  function prev() {
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  }

  function next() {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  }

  return (
    <div className="bg-[#1a3a6b] rounded-2xl p-10 text-white relative">

      <p className="text-lg italic opacity-90 mb-6">
        "{testimonials[current].text}"
      </p>

      <div className="flex items-center gap-4 mb-8">
        <img
          src={testimonials[current].avatar}
          alt={`Foto de ${testimonials[current].author}`}
          className="w-14 h-14 rounded-full border-2 border-[#c8a951]"
        />
        <div>
          <p className="font-bold">{testimonials[current].author}</p>
          <p className="text-[#c8a951] text-sm">{testimonials[current].role}</p>
        </div>
      </div>

      <div className="flex gap-3 justify-end">
        <button
          onClick={prev} 
          className="bg-white/20 border border-white/30 text-white w-10 h-10 rounded-full hover:bg-white/30"
          aria-label="Testimonio anterior" 
        >
          ←
        </button>
        <button
          onClick={next} 
          className="bg-white/20 border border-white/30 text-white w-10 h-10 rounded-full hover:bg-white/30"
          aria-label="Testimonio siguiente" 
        >
          →
        </button>
      </div>

      <div className="flex gap-2 mt-4">
        {testimonials.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)} 
            className={`w-3 h-3 rounded-full border border-white/50 ${
              i === current ? "bg-[#c8a951]" : "bg-transparent"
            }`}
            aria-label={`Ir al testimonio ${i + 1}`}
          />
        ))}
      </div>
    </div>
  )
}