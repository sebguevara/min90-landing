// components/ui/gradient-bg.tsx
"use client"
import React from "react"

export function GradientBg() {
  return (
    <div className="absolute inset-0 z-0">
      {/* Degradé principal (sunset) */}
      <div className="absolute inset-0 bg-gradient-to-br from-rose-500 via-orange-500 to-fuchsia-600"/>

      {/* Vignette para enfoque */}
      <div className="absolute inset-0 bg-[radial-gradient(120%_80%_at_50%_10%,transparent,rgba(0,0,0,0.4))]" />

      {/* Blobs suaves */}
      <div className="pointer-events-none absolute -top-24 -left-20 h-[420px] w-[420px] rounded-full bg-white/15 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-28 -right-16 h-[460px] w-[460px] rounded-full bg-white/10 blur-3xl" />

      {/* Grain sutil */}
      <div className="absolute inset-0 opacity-[0.8] mix-blend-overlay"
           style={{
             backgroundImage:
               "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/><feColorMatrix type='saturate' values='0'/><feComponentTransfer><feFuncA type='table' tableValues='0 0.6'/></feComponentTransfer></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>\")",
           }}
      />

      {/* Borde sutil */}
      <div className="absolute inset-0 rounded-2xl ring-1 ring-white/10" />
    </div>
  )
}
