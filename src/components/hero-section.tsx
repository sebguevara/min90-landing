// components/HeroSection.tsx
import React from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { GradientBg } from "./ui/gradientBg"

export function HeroSection() {
  return (
    <section
      className="relative mx-auto my-6 w-full h-[560px] md:h-[680px] lg:h-[760px] overflow-hidden rounded-2xl"
    >
      <GradientBg />  

      <div className="relative z-10 grid h-full grid-cols-1 lg:grid-cols-2">
        <div className="flex flex-col items-center lg:items-start justify-center gap-4 px-6 md:px-10 lg:px-14">
          <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight text-center lg:text-left">
            ¿Te apasionan los deportes?
          </h1>

          <p className="text-white/90 text-base md:text-lg lg:text-xl max-w-xl text-center lg:text-left">
            Únete a nuestra comunidad y accede a <strong>análisis deportivos de calidad</strong>.
          </p>

          <ul className="mt-2 space-y-2 text-white/90 text-sm md:text-base">
            <li className="flex items-start gap-2">
              <span className="mt-1.5 inline-block size-2 rounded-full bg-white/90" />
              <span>Análisis deportivos diarios</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1.5 inline-block size-2 rounded-full bg-white/90" />
              <span>Comunidad privada y activa</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1.5 inline-block size-2 rounded-full bg-white/90" />
              <span>Contenido educativo y entretenido</span>
            </li>
          </ul>

          <div className="mt-4">
            <Link href="https://t.me/tu_grupo_telegram" target="_blank" rel="noopener noreferrer">
              <Button className="rounded-full px-8 py-6 text-base font-medium shadow-lg ring-1 ring-white/20
                                 bg-white text-black hover:bg-white/90">
                Solicitar acceso
              </Button>
            </Link>
          </div>

          <p className="mt-3 text-white/70 text-xs max-w-md text-center lg:text-left">
            ⚠️ Solo para mayores de 18 años. Este contenido es educativo y no constituye asesoría de apuestas.
          </p>
        </div>

        <div className="relative hidden lg:block">
          <div className="absolute inset-0 flex items-end justify-center pr-6 pb-8">
            <div className="relative w-[540px] h-[660px] rounded-2xl overflow-hidden ring-1 ring-white/15 shadow-2xl
                            [mask-image:linear-gradient(to_bottom,black,black,transparent)]">
              <Image
                src="/images/img.png" // pon tu imagen aquí
                alt="Jugador de fútbol"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
