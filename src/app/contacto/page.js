"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";

function ContactForm() {
  const searchParams = useSearchParams();
  
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
    honeypot: ""
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const servicio = searchParams.get("servicio");
    if (servicio) {
      setForm((prev) => ({ ...prev, service: servicio }));
    }
  }, [searchParams]);

  function validate() {
    const newErrors = {};
    if (!form.name.trim()) newErrors.name = "El nombre es obligatorio";
    if (!form.email.trim()) newErrors.email = "El correo es obligatorio";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) newErrors.email = "Ingresa un correo válido";
    if (!form.service) newErrors.service = "Selecciona un servicio";
    if (!form.message.trim()) newErrors.message = "El mensaje es obligatorio";
    else if (form.message.trim().length < 10) newErrors.message = "Mínimo 10 caracteres";
    return newErrors;
  }

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (form.honeypot) return;
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="text-center">
        <div className="max-w-md mx-auto bg-green-50 border border-green-200 rounded-2xl p-10">
          <p className="text-4xl mb-4">✅</p>
          <h2 className="text-2xl font-bold text-green-700 mb-2">¡Mensaje enviado!</h2>
          <p className="text-gray-500 mb-6">Te contactaremos en menos de 48 horas hábiles.</p>
          <a href="/" className="bg-[#1a3a6b] text-white px-6 py-3 rounded-lg font-bold">
            Volver al inicio
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
      
      <div>
        <h1 className="text-3xl font-bold text-[#1a3a6b] mb-2">Contáctanos</h1>
        <p className="text-gray-500 mb-8">Un ejecutivo te contactará en menos de 48 horas hábiles.</p>

        <form onSubmit={handleSubmit} className="flex flex-col gap-5" noValidate>
          
          <div style={{ display: "none" }}>
            <input
              name="honeypot"
              value={form.honeypot}
              onChange={handleChange}
              tabIndex="-1"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label className="font-semibold text-[#1a3a6b] text-sm">Nombre completo *</label>
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              className={`border-2 rounded-lg px-4 py-3 text-sm ${errors.name ? "border-red-400" : "border-gray-200"} focus:outline-none focus:border-[#1a3a6b]`}
              placeholder="Tu nombre"
            />
            {errors.name && <span className="text-red-500 text-xs">{errors.name}</span>}
          </div>

          <div className="flex flex-col gap-1">
            <label className="font-semibold text-[#1a3a6b] text-sm">Correo electrónico *</label>
            <input
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              className={`border-2 rounded-lg px-4 py-3 text-sm ${errors.email ? "border-red-400" : "border-gray-200"} focus:outline-none focus:border-[#1a3a6b]`}
              placeholder="tucorreo@ejemplo.cl"
            />
            {errors.email && <span className="text-red-500 text-xs">{errors.email}</span>}
          </div>

          <div className="flex flex-col gap-1">
            <label className="font-semibold text-[#1a3a6b] text-sm">Teléfono</label>
            <input
              name="phone"
              type="tel"
              value={form.phone}
              onChange={handleChange}
              className="border-2 border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#1a3a6b]"
              placeholder="+56 9 XXXX XXXX"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label className="font-semibold text-[#1a3a6b] text-sm">Servicio de interés *</label>
            <select
              name="service"
              value={form.service}
              onChange={handleChange}
              className={`border-2 rounded-lg px-4 py-3 text-sm ${errors.service ? "border-red-400" : "border-gray-200"} focus:outline-none focus:border-[#1a3a6b]`}
            >
              <option value="">Selecciona un servicio…</option>
              <option>Acompañamiento preventivo</option>
              <option>Acompañamiento correctivo</option>
              <option>Talleres de capacitación</option>
              <option>Marketing digital</option>
              <option>Vinculación empresarial</option>
              <option>Innovación y digitalización</option>
              <option>Otro</option>
            </select>
            {errors.service && <span className="text-red-500 text-xs">{errors.service}</span>}
          </div>

          <div className="flex flex-col gap-1">
            <label className="font-semibold text-[#1a3a6b] text-sm">Mensaje *</label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              rows={5}
              className={`border-2 rounded-lg px-4 py-3 text-sm ${errors.message ? "border-red-400" : "border-gray-200"} focus:outline-none focus:border-[#1a3a6b]`}
              placeholder="Cuéntanos en qué podemos ayudarte…"
            />
            {errors.message && <span className="text-red-500 text-xs">{errors.message}</span>}
          </div>

          <button
            type="submit"
            className="bg-[#1a3a6b] text-white py-3 rounded-lg font-bold hover:bg-[#14306a] transition-colors"
          >
            Enviar mensaje
          </button>

        </form>
      </div>

      <div className="bg-white rounded-2xl shadow-md p-8 h-fit">
        <h2 className="text-xl font-bold text-[#1a3a6b] mb-6">Información de contacto</h2>
        <div className="flex flex-col gap-5">
          <div className="flex gap-4">
            <span className="text-2xl">📍</span>
            <div>
              <p className="font-semibold text-sm">Dirección</p>
              <p className="text-gray-500 text-sm">Manuel Rodríguez Sur 749, Santiago (Metro Toesca)</p>
            </div>
          </div>
          <div className="flex gap-4">
            <span className="text-2xl">✉️</span>
            <div>
              <p className="font-semibold text-sm">Correo</p>
              <a href="mailto:centro.santiago@centrossercotec.cl" className="text-[#1a3a6b] text-sm">
                centro.santiago@centrossercotec.cl
              </a>
            </div>
          </div>
          <div className="flex gap-4">
            <span className="text-2xl">🕐</span>
            <div>
              <p className="font-semibold text-sm">Horario</p>
              <p className="text-gray-500 text-sm">Lunes a viernes, 9:00 – 18:00 hrs</p>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default function ContactPage() {
  return (
    <main className="py-20 px-8 max-w-6xl mx-auto">
      <Suspense fallback={<p>Cargando...</p>}>
        <ContactForm />
      </Suspense>
    </main>
  );
}