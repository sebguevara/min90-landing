import React from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { GradientBg } from "./ui/gradientBg"
import { CheckIcon } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative mx-auto my-6 w-full overflow-hidden rounded-2xl h-full min-h-[800px]">
      <GradientBg />

      <div className="relative z-10 grid h-full grid-rows-[auto_1fr_auto] lg:grid-rows-1 lg:grid-cols-2 min-h-[800px]">
        {/* Texto */}
        <div className="order-1 pt-8 md:pt-0 flex flex-col items-center lg:items-start justify-center gap-4 px-6 md:px-10 lg:px-8">
          <h1 className="text-white text-2xl md:text-3xl lg:text-5xl font-semibold leading-tight text-center lg:text-left">
            Transforma tu pasión deportiva con Minuto 90
          </h1>

          <p className="text-white/90 text-base md:text-lg lg:text-xl max-w-xl text-center lg:text-left">
          ¡Prueba gratis esta semana!
          </p>

          <ul className="mt-2 space-y-2 text-white/90 text-sm md:text-base">
            <li className="flex items-center gap-2">
              <CheckIcon size={12} className="inline-block rounded-full bg-green-500 text-white" />
              <span>Análisis deportivos diarios</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckIcon size={12} className="inline-block rounded-full bg-green-500 text-white" />
              <span>Comunidad privada y activa</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckIcon size={12} className="inline-block rounded-full bg-green-500 text-white" />
              <span>Contenido educativo y entretenido</span>
            </li>
          </ul>

          <div className="mt-4">
            <Link
              href="https://t.me/tu_grupo_telegram"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="button-border-animated shadow-lg">
                <Button className="inner-btn">
                  Prueba gratis esta semana
                </Button>
              </div>
            </Link>
          </div>

          <p className="mt-3 text-white/70 text-xs max-w-md text-center lg:text-left">
            ⚠️ Solo para mayores de 18 años. Este contenido es educativo y no constituye asesoría de apuestas.
          </p>
        </div>

        {/* Imagen: visible SIEMPRE, centrada en mobile como en el mock */}
        <div className="order-2 lg:order-none relative flex items-end justify-center pt-4 md:pt-0 pb-4 md:pb-8">
          <div
            className="
              relative w-[70%] lg:w-[88%] max-w-[560px]
              h-[260px] sm:h-[320px] md:h-[420px] lg:h-[660px]
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
  )
}
