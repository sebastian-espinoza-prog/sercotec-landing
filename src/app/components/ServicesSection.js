"use client";

import ServiceCard from "./ServiceCard";

const services = [
    {
        id: "1",
        title: "Acompañamiento preventivo",
        description: "Asesorías periódicas para prolongar la vida util de tu negocio y aumentar su productividad.",
        image: "https://images.unsplash.com/photo-1556761175-4b46a572b786?w=400&h=240&fit=crop"
    },
    {
        id: "2",
        title: "Acompañamiento correctivo",
        description: "Resolvemos dificultades y desafíos que afectan la gestión o el desarrollo de tu empresa.", 
        image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=240&fit=crop"
    },
    {
        id: "3", 
        title: "Talleres de capacitación",
        description: "Talleres especializados en administración, finanzas, marketing digital e innovación.", 
        image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=400&h=240&fit=crop"
    },
    {
        id: "4",
        title: "Marketing digital",
        description: "Estrategias digitales para aumentar tu presencia online y llegar a más clientes.",
        image: "https://images.unsplash.com/photo-1533750349088-cd871a92f312?w=400&h=240&fit=crop"
    },
    {
        id: "5",
        title: "Vinculación empresarial",
        description: "Espacios de networking y acceso a programas de financiamiento e instituciones de apoyo.",
        image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=400&h=240&fit=crop"
    },
    {
        id: "6",
        title: "Innovación y digitalización",
        description: "Incorporación de herramientas digitales y optimización de procesos para tu negocio.",
        image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=240&fit=crop"
    }
]

export default function ServicesSection() {
    return (
        <section id="servicios" className="py-20 px-8 bg-gray-50">
            <div className="max-w-6x1 mx-auto">
                <h2 className="text-3x1 font-bold text-[#1a3a6b] mb-2">Nuestros servicios</h2>
                <p className="text-gray-500 mb-10">
                    Ofrecemos acompañamiento integral para fortalecer tu negocio en cada etapa.
                </p>
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
            </div>
        </section>
    )
}