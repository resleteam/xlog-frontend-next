import type { Metadata } from "next";
import "./globals.css";
import { Lexend_Deca } from "next/font/google";
import { PrimeReactProvider } from 'primereact/api';
import "primereact/resources/themes/lara-light-cyan/theme.css";
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

const lexend_Deca = Lexend_Deca({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "XLog",
  description: "Description ...",
};

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className={lexend_Deca.className + " w-full h-full"}>
        <PrimeReactProvider>
          {children}
        </PrimeReactProvider>
      </body>
    </html>
  );
}
