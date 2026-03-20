"use client";
import Link from "next/link";

export function FooterSection() {
  const year = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-border">
      <div className="mx-auto px-5 py-10 flex flex-col items-center gap-6">
        <p className="text-xs text-muted-foreground text-center max-w-[700px] leading-relaxed mt-4">
          ⚠️ El juego puede ser adictivo. Juega con responsabilidad. Este servicio no garantiza resultados y no debe considerarse asesoramiento financiero.
          Prohibido para menores de 18 años. Consulta las leyes locales antes de participar.
        </p>

        <div className="text-xs text-muted-foreground text-center mt-2">
          © {year} Minuto 90 Score. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
}
