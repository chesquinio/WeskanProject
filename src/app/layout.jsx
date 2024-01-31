import { Inter } from "next/font/google";
import { SessionProvider } from "next-auth/react";
import { auth } from "@/auth";
import "@/styles/globals.css";
import "@/styles/loaders.css";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: {
    template: "%s | Weskan",
    default: "Weskan",
  },
  description:
    "Nos dedicamos a la fabricación y comercialización de guías y asientos de válvulas, tubos de fundición centrifugada. Comercializamos válvulas marca 3B y juntas y retenes marca Glaser",
  applicationName: "Weskan S.A.",
  icons: {
    icon: [
      { url: "/favicons/favicon.ico" },
      new URL("/favicons/favicon.ico", "https://weskan.online/favicon.ico"),
    ],
    apple: [
      { url: "/favicons/apple-touch-icon.png" },
      {
        url: "/favicons/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  },
  keywords: [
    "Guia de Valvulas",
    "Valvulas",
    "Asientos de válvulas",
    "Tubos de fundición centrifugada",
    "Weskan",
    "Establecimientos metalurgicos",
    "Rafaela",
    "Glaser",
    "3B",
  ],
  creator: "Francis Willener",
  formatDetection: {
    address: "J.D.Perón 2189, Rafaela, Santa Fe",
    telephone: "+54 3492 56-9621",
  },
};

export default async function RootLayout({ children }) {
  const session = await auth();
  return (
    <SessionProvider session={session}>
      <head>
        <link
          href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css"
          rel="stylesheet"
        />
      </head>
      <html lang="en">
        <body className={inter.className}>
          <main>{children}</main>
          <Toaster />
        </body>
      </html>
    </SessionProvider>
  );
}
