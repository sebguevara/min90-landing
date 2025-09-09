// components/BentoSection.tsx
import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";

type Item = { title: string; description: string; points: string[] };

const items: Item[] = [
  {
    title: "Análisis diarios",
    description: "Reportes y lecturas rápidas todos los días.",
    points: [
      "📊 Estadísticas de partidos",
      "📈 Predicciones y tendencias",
      "⏱️ Resumen en minutos",
    ],
  },
  {
    title: "Comunidad activa",
    description: "Grupo privado para debatir y aprender.",
    points: [
      "💬 Debates en vivo",
      "🗳️ Encuestas y opiniones",
      "🤝 Networking deportivo",
    ],
  },
  {
    title: "Contenido educativo",
    description: "Aprende táctica y estrategia de forma simple.",
    points: [
      "🧠 Notas de expertos",
      "📝 Explicaciones simples",
      "🎧 Videos y podcasts",
    ],
  },
  {
    title: "Recargas y retiros",
    description: "Cajero autorizado para servicio de recargas y retiros",
    points: ["💳 Recargas", "💰 Retiros", "💵 Servicio disponible"],
  },
];

const BentoCard = ({ title, description, points }: Item) => (
  <div className="group relative rounded-2xl p-[1px] bg-gradient-to-br from-white/20 via-white/5 to-transparent">
    <Card
      className="h-full rounded-2xl bg-background/60 backdrop-blur-md border-white/15 transition
                     group-hover:translate-y-[-2px] shadow-md group-hover:shadow-xl group-hover:border-white/25"
    >
      <CardHeader>
        <CardTitle className="text-lg md:text-xl">{title}</CardTitle>
        <CardDescription className="text-sm md:text-base">
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent className="pt-0">
        <ul className="space-y-2 text-sm md:text-base">
          {points.map((p) => (
            <li key={p} className="flex items-start gap-2">
              <CheckCircle2 className="mt-0.5 size-4 opacity-80" />
              <span>{p}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  </div>
);

export function BentoSection() {
  return (
    <section className="w-full px-2  md:px-5 flex flex-col items-center">
      <div className="py-10 md:py-14 text-center">
        <h2 className="text-2xl md:text-6xl font-semibold text-foreground dark:text-white leading-tight">
          Únete a nuestra comunidad deportiva
        </h2>
        <p className="mt-3 max-w-[640px] mx-auto text-sm md:text-xl text-muted-foreground">
          Disfruta de análisis, comunidad y contenido exclusivo pensado para
          fanáticos como vos.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-[1220px]">
        {items.map((it) => (
          <BentoCard key={it.title} {...it} />
        ))}
      </div>
    </section>
  );
}
