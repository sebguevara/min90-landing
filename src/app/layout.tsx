import type { Metadata } from "next";
import "@/styles/globals.css";
import { ThemeProvider } from "@/components/theme-provider";

export const metadata: Metadata = {
  title: "Minuto 90 Score",
  description: "Analisis deportivos y cobertura en tiempo real.",
  generator: "Minuto 90 Score",
  metadataBase: new URL("https://minuto90score.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Minuto 90 Score",
    description: "Analisis deportivos y cobertura en tiempo real.",
    url: "https://minuto90score.com",
    siteName: "Minuto 90 Score",
    images: ["/logos/minuto90score.png"],
    type: "website",
  },
  icons: {
    icon: "/logos/minuto90score.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
