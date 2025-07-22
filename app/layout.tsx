import type { Metadata } from "next";
import { Quicksand } from "next/font/google";
import "./globals.css";

const quicksand = Quicksand({
  subsets: ["latin"],
  variable: "--font-quicksand",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Helem Steer",
  description: "Conheça Helem Steer, a mentoria que pode transformar sua carreira.",
  keywords: [
    "Helem Steer",
    "mentoria para professores",
    "ensino de inglês",
    "carreira internacional",
    "aulas premium",
    "mentoria educacional"
  ],
  authors: [{ name: "Helem Steer" }],
  creator: "Helem Steer",
  robots: "index, follow",
  metadataBase: new URL("https://www.helemsteer.com"), // Altere para sua URL real
  openGraph: {
    type: "website",
    url: "https://www.helemsteer.com", // Altere para sua URL real
    title: "Helem Steer",
    description: "Conheça Helem Steer, a mentoria que pode transformar sua carreira.",
    siteName: "Helem Steer",
    images: [
      {
        url: "/og-image.jpg", // Altere para o caminho real da imagem de preview
        width: 1200,
        height: 630,
        alt: "Helem Steer Mentoria"
      }
    ],
    locale: "pt_BR"
  },
  twitter: {
    card: "summary_large_image",
    title: "Helem Steer",
    description: "Conheça Helem Steer, a mentoria que pode transformar sua carreira.",
    images: ["/og-image.jpg"],
    creator: "@helemsteer" // Altere se houver
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png"
  },
  themeColor: "#0f0f23"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={quicksand.variable}>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
