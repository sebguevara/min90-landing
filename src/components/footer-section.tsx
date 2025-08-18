"use client"


export function FooterSection() {
  return (
    <footer className="w-full max-w-[1320px] mx-auto px-5 flex flex-col md:flex-row justify-between items-start gap-8 md:gap-0 py-10 md:py-[70px]">
      <div className="flex flex-col justify-start items-start gap-8 p-4 md:p-8">
        <div className="flex gap-3 items-stretch justify-center">
          <div className="text-center text-foreground text-xl font-semibold leading-4">Minuto 90</div>
        </div>
        <p className="text-foreground/90 text-sm font-medium leading-[18px] text-left">Análisis deportivos</p>
        <div className="flex justify-start items-start gap-3">
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-12 p-4 md:p-8 w-full md:w-auto">
      </div>
    </footer>
  )
}
