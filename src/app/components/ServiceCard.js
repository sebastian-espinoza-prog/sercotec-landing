"use client";

export default function ServiceCard({ image, title, description, serviceId}) {
    return (
        <article className="bg-white rounded-2x1 shadow-md overflow-hidden flex flex-col hover:-translate-y-2 transition-transform duration-300">

            <img
                src={image}
                alt={'Imagen del servicio: ${title}'}
                className="w-full h-48 object-cover"
                loading="lazy"
            /> 

            <div className="p-6 flex flex-col gap-3 flex-1">
                <h3 className="text-[#1a3a6b] font-bold text-lg">{title}</h3>
                <p className="text-gray-500 text-sm flex-1">{description}</p>

                <a href={`/contacto?servicio=${encodeURIComponent(title)}`}
                    className="bg-[#1a3a6b] text-white px-4 py-2 rounded-lg font-bold text-sm text-center mt-auto hover:bg-[#14306a] transition-colors"
                    >
                    Contáctanos
                </a>
            </div>
        </article> 
    )
}