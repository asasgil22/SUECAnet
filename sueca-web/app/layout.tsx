import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sueca Multiplayer",
  description: "Jogo de Sueca Online Premium",
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "Sueca",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className="bg-[#0b130d] text-white antialiased overflow-hidden overscroll-none">
        {children}
      </body>
    </html>
  );
}