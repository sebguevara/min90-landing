import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { GradientBg } from "./ui/gradientBg";
import { CheckIcon } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { Header } from "./header";

export function HeroSection() {
  return (
    <section className="relative mx-auto pt-9 sm:pt-6 w-full overflow-hidden h-screen md:h-full min-h-[730px]">
      <GradientBg />
      <Header />

      <div className="relative z-10 grid h-full grid-rows-[auto_1fr_auto] lg:grid-rows-1 lg:grid-cols-2 min-h-[730px]">
        {/* Texto */}
        <div className="order-1 pt-8 md:pt-0 flex flex-col items-center lg:items-start justify-center gap-4 px-6 md:px-10 lg:px-8">
          <h1 className="text-white text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight text-center lg:text-left">
            Transforma tu pasión deportiva con Minuto 90
          </h1>

          <p className="text-white/90 text-base md:text-lg lg:text-xl max-w-xl text-center lg:text-left">
            ¡Prueba gratis esta semana!
          </p>

          <Card className="bg-foreground/60 p-2 my-2 shadow-lg sm:w-full">
            <CardContent className="mt-2 space-y-2 text-white/90 text-sm md:text-base">
              <li className="flex items-center text-xs md:text-base gap-2">
                <div className="flex items-center justify-center bg-primary rounded-full p-1">
                  <CheckIcon size={12} className="inline-block text-white" />
                </div>
                <span>Análisis deportivos diarios</span>
              </li>
              <li className="flex items-center text-xs md:text-base gap-2">
                <div className="flex items-center justify-center bg-primary rounded-full p-1">
                  <CheckIcon size={12} className="inline-block text-white" />
                </div>
                <span>Recargas y retiros</span>
              </li>
              <li className="flex items-center text-xs md:text-base gap-2">
                <div className="flex items-center justify-center bg-primary rounded-full p-1">
                  <CheckIcon size={12} className="inline-block text-white" />
                </div>
                <span>Comunidad privada y activa</span>
              </li>
              <li className="flex items-center text-xs md:text-base gap-2">
                <div className="flex items-center justify-center bg-primary rounded-full p-1">
                  <CheckIcon size={12} className="inline-block text-white" />
                </div>
                <span>Contenido educativo y entretenido</span>
              </li>
            </CardContent>
          </Card>

          <div className="mt-4 flex flex-col sm:flex-row items-center justify-center lg:justify-evenly gap-4 w-full ">
            <Link
              href="https://whatsapp.com/channel/0029Vb6hp6k1XquWY9AZ1d0J"
              target="_blank"
              rel="noopener noreferrer"
              className="min-w-64 text-center bg-white text-black px-4 py-2 rounded-lg font-semibold shadow-lg hover:bg-white/90 transition-colors duration-300"
            >
              Prueba gratis esta semana
            </Link>

            <Link
              href="https://minuto90.co"
              target="_blank"
              rel="noopener noreferrer"
              className="min-w-64 text-center bg-transparent border border-white/80 text-white hover:bg-white hover:text-black transition-colors duration-300 px-4 py-2 rounded-lg font-semibold"
            >
              Plataforma Minuto 90
            </Link>
          </div>

          <div className="flex bg-foreground/40 p-2 my-2 rounded-lg">
            <p className="text-white/70 text-xs text-center lg:text-left">
              ⚠️ Solo para mayores de 18 años. Este contenido es educativo y no
              constituye asesoría de apuestas.
            </p>
          </div>
        </div>

        {/* Imagen: visible SIEMPRE, centrada en mobile como en el mock */}
        <div className="order-2 lg:order-none relative flex items-end justify-center pt-4 md:pt-0 md:pb-8">
          <div
            className="
              relative w-[70%] lg:w-[88%] max-w-[560px] h-[320px] md:h-[420px] lg:h-[660px]
              rounded-2xl overflow-hidden ring-1 ring-white/15 shadow-2xl
              [mask-image:linear-gradient(to_bottom,black,black,transparent)]
            "
          >
            <Image
              src="/images/img.png" // tu imagen
              alt="Jugador de fútbol"
              fill
              className="object-cover object-top md:object-center"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
