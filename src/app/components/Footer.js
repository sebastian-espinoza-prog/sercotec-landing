"use client";

export default function Footer() {
  return (
    <footer className="bg-[#1a3a6b] text-white mt-20">
      <div className="max-w-6xl mx-auto px-8 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        <div>
          <p className="font-bold text-lg mb-2">Centro de Negocios Santiago</p>
          <p className="text-white/70 text-sm">SERCOTEC – Apoyando el crecimiento de tu empresa</p>
        </div>

        <div>
          <p className="font-bold mb-3">Contacto</p>
          <p className="text-white/70 text-sm mb-1">📍 Manuel Rodríguez Sur 749, Santiago</p>
          <p className="text-white/70 text-sm mb-1">🚇 Metro Toesca</p>
          <a href="mailto:centro.santiago@centrossercotec.cl" className="text-[#c8a951] text-sm">
            ✉️ centro.santiago@centrossercotec.cl
          </a>
        </div>

        <div>
          <p className="font-bold mb-3">Redes sociales</p>
          <a 
            href="https://www.facebook.com/centrodnsantiago" 
            target="_blank"
            className="text-[#c8a951] text-sm"
          >
            Facebook
          </a>
        </div>

      </div>

      <div className="border-t border-white/20 text-center py-4 text-white/50 text-sm">
        © {new Date().getFullYear()} Centro de Negocios Santiago – SERCOTEC
      </div>
    </footer>
  )
}