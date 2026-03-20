"use client";

import { TestimonialCard } from "./testimonial-card";

const testimonials = [
  {
    quote:
      "Los reportes diarios de Minuto 90 Score cambiaron por completo mi forma de analizar partidos. Ahora filtro mis picks por estadísticas clave y contexto, y logré mejorar mi tasa de aciertos de un 48% a un 56% en 6 semanas.",
    name: "Sofía Ramírez",
    company: "Córdoba, Argentina",
    type: "large-teal",
  },
  {
    quote:
      "La comunidad privada es oro puro. Aprendí a manejar mi bank con más disciplina, evito sobreapostar y ahora cierro el mes con mejores resultados y menos estrés. La info que comparten es muy valiosa.",
    name: "Diego Méndez",
    company: "Bogotá, Colombia",
    type: "small-dark",
  },
  {
    quote:
      "Me sorprendió lo fácil que es interpretar los dashboards. Ahora sé en qué ligas tengo mejor rendimiento y en cuáles no me conviene apostar. Menos picks, más control y mejores resultados.",
    name: "Laura Pérez",
    company: "Montevideo, Uruguay",
    type: "small-dark",
  },
  {
    quote:
      "El análisis de tendencias que hacen en Minuto 90 Score me abrió los ojos. Antes seguía corazonadas, ahora respaldo mis decisiones con datos reales y proyecciones claras. Mi ROI mejoró un 7% en solo un mes.",
    name: "Nicolás Torres",
    company: "Resistencia, Argentina",
    type: "small-dark",
  },
  {
    quote:
      "Empecé probando la versión gratuita y en una semana ya sabía que quería quedarme. Las predicciones combinadas con el contexto de lesiones y fixture son un diferencial enorme.",
    name: "Camila Rojas",
    company: "Lima, Perú",
    type: "small-dark",
  },
  {
    quote:
      "La mejor parte es la comunidad. Los debates en vivo sobre picks y tendencias me enseñaron a analizar mucho mejor. Minuto 90 Score es más que estadísticas, es aprendizaje colectivo.",
    name: "Fernando Gómez",
    company: "Medellín, Colombia",
    type: "small-dark",
  },
  {
    quote:
      "Con Minuto 90 Score dejé de perder tiempo saltando entre varias apps y hojas de cálculo. Ahora tengo todo centralizado: estadísticas, predicciones y comunidad en un solo lugar. Se nota el salto de calidad.",
    name: "Valentina Herrera",
    company: "Buenos Aires, Argentina",
    type: "large-teal",
  },
];

export function TestimonialsSection() {
  return (
    <section className="w-full px-2 overflow-hidden flex flex-col justify-start py-6 md:py-8 lg:py-14">
      <div className="self-stretch py-6 md:py-8 lg:py-14 flex flex-col justify-center items-center gap-2">
        <div className="flex flex-col justify-start items-center gap-4">
          <h2 className="text-center text-foreground dark:text-white text-2xl md:text-6xl font-semibold leading-tight">
            Testimonios reales
          </h2>
          <p className="self-stretch text-center text-muted-foreground text-sm md:text-xl max-w-[600px] leading-relaxed">
            Historias de usuarios que mejoraron su análisis deportivo y gestión
            de riesgo con <span className="text-primary">Minuto 90 Score</span>.
          </p>
        </div>
      </div>
      <div className="w-full pt-0.5 pb-4 md:pb-6 lg:pb-10 flex flex-col md:flex-row justify-center items-start gap-4 md:gap-4 lg:gap-6 max-w-[1100px] mx-auto">
        <div className="flex-1 flex flex-col justify-start items-start gap-4 md:gap-4 lg:gap-6">
          <TestimonialCard {...testimonials[0]} />
          <TestimonialCard {...testimonials[1]} />
        </div>
        <div className="flex-1 flex flex-col justify-start items-start gap-4 md:gap-4 lg:gap-6">
          <TestimonialCard {...testimonials[2]} />
          <TestimonialCard {...testimonials[3]} />
          <TestimonialCard {...testimonials[4]} />
        </div>
        <div className="flex-1 flex flex-col justify-start items-start gap-4 md:gap-4 lg:gap-6">
          <TestimonialCard {...testimonials[5]} />
          <TestimonialCard {...testimonials[6]} />
        </div>
      </div>
    </section>
  );
}
