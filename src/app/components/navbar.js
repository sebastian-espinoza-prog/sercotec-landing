// Componente Navbar - rama feature/navbar
"use client";

export default function Navbar() {
  return (
    <header className="bg-[#1a3a6b] px-8 py-4 flex justify-between items-center sticky top-0 z-50">
      <a href="/">
        <img 
            src="https://sitios.sercotec.cl/centros-de-negocios/wp-content/uploads/sites/4/2021/11/cropped-logo-cdn-2021.png"
            alt="Logo Ceentro de Negocios SERCOTEC Santiago"
            className="h-12 w-auto bg-white rounded-lg p-1"
        />
      </a>
      <nav className="flex gap-6 items-center">
        <a href="/#nosotros" className="text-white/80 hover:text-white text-sm">Nosotros</a>
        <a href="/#servicios" className="text-white/80 hover:text-white text-sm">Servicios</a>
        <a href="/#testimonios" className="text-white/80 hover:text-white text-sm">Testimonios</a>
        <a href="/#faq" className="text-white/80 hover:text-white text-sm">FAQ</a>
        <a href="/contacto" className="bg-[#c8a951] text-[#1a3a6b] px-4 py-2 rounded-lg font-bold text-sm">
          Contáctanos
        </a>
      </nav>
    </header>
  )
}