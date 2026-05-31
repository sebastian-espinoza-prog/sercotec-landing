"use client";

import { useState } from "react";

const faqs = [
  {
    question: "¿Los servicios del Centro de Negocios son gratuitos?",
    answer: "Sí, todos nuestros servicios de acompañamiento, asesoría y capacitación son completamente gratuitos para micro, pequeñas y medianas empresas."
  },
  {
    question: "¿Quiénes pueden acceder a los servicios?",
    answer: "Pueden acceder micro, pequeñas y medianas empresas de la región de Santiago que estén formalmente constituidas o en proceso de formalización."
  },
  {
    question: "¿Cómo puedo agendar una asesoría?",
    answer: "Puedes contactarnos a través del formulario de contacto en nuestro sitio web o escribirnos directamente al correo centro.santiago@centrossercotec.cl"
  },
  {
    question: "¿Qué tipo de talleres ofrecen?",
    answer: "Ofrecemos talleres de administración, finanzas, marketing digital, innovación, digitalización de procesos y más. El calendario se actualiza periódicamente."
  },
  {
    question: "¿Dónde están ubicados?",
    answer: "Estamos ubicados en Manuel Rodríguez Sur 749, Santiago, a pasos del Metro Toesca."
  }
]

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(null);

  function toggle(i) {
    setOpenIndex(openIndex === i ? null : i);
  }

  return (
    <section id="faq" className="py-20 px-8 bg-gray-50">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-[#1a3a6b] mb-2">Preguntas frecuentes</h2>
        <p className="text-gray-500 mb-10">Resolvemos las dudas más comunes sobre nuestros servicios.</p>

        <div className="flex flex-col gap-3">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-white rounded-xl border border-gray-200 overflow-hidden">
              <button
                onClick={() => toggle(i)}
                className="w-full flex justify-between items-center px-6 py-4 text-left font-semibold text-[#1a3a6b] hover:bg-gray-50"
              >
                {faq.question}
                <span>{openIndex === i ? "−" : "+"}</span>
              </button>
              {openIndex === i && (
                <div className="px-6 pb-4 text-gray-500 text-sm">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}