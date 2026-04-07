"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

export const Header = () => {
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed flex sm:hidden top-0 z-30 w-full p-2 transition-all duration-300 ${
        scrolled ? "bg-[#0c1021]/80 backdrop-blur-sm" : "bg-transparent"
      }`}
    >
      <div className="flex w-full justify-between">
        <div className="relative w-16 h-12">
          <Link href="/" aria-label="Volver al inicio">
            <Image
              src="/logos/minuto90score.png"
              alt="Minuto 90 Score Logo"
              fill
              sizes="120px"
              className="object-contain"
              priority
            />
          </Link>
        </div>

        <nav className="flex items-center gap-2 md:gap-4">
          <Link
            href="https://t.me/+BuSzupq2GZ8xMTcx"
            target="_blank"
            rel="noopener noreferrer"
            className="text-center bg-transparent border border-white/80 text-white hover:bg-white hover:text-black transition-colors duration-300 px-3 py-1.5 text-xs md:text-sm rounded-md font-semibold"
          >
            Prueba Gratuita
          </Link>
          <Link
            href="https://minuto90score.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-center bg-white text-black px-3 py-1.5 text-xs md:text-sm rounded-md font-semibold shadow-lg hover:bg-white/90 transition-colors duration-300"
          >
            Plataforma
          </Link>
        </nav>
      </div>
    </header>
  );
};
