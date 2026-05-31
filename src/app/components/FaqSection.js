"use client";

import { useState, useEffect } from "react";

export default function FaqSection() {
  const [faqs, setFaqs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [openIndex, setOpenIndex] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3001/faq")
      .then((res) => res.json())
      .then((data) => {
        setFaqs(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  function toggle(i) {
    setOpenIndex(openIndex === i ? null : i);
  }

  return (
    <section id="faq" className="py-20 px-8 bg-gray-50">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-[#1a3a6b] mb-2">Preguntas frecuentes</h2>
        <p className="text-gray-500 mb-10">Resolvemos las dudas más comunes sobre nuestros servicios.</p>

        {loading ? (
          <p className="text-gray-400">Cargando preguntas...</p>
        ) : (
          <div className="flex flex-col gap-3">
            {faqs.map((faq, i) => (
              <div key={faq.id} className="bg-white rounded-xl border border-gray-200 overflow-hidden">
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
        )}
      </div>
    </section>
  )
}