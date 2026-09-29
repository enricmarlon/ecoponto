import type { Metadata } from "next";
import { Header } from "@/src/components/header";
import "./globals.css";

export const metadata: Metadata = {
  title: "EcoPonto Digital",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="pt-BR">
      <body>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
