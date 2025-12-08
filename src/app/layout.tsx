import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { cn } from "@/lib/utils";

const sans = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const mono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "João Mendes | Desenvolvedor Full Stack",
  description: "Portfólio profissional de João Victor Mendes, especialista em Next.js e Engenharia de Software.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          sans.variable,
          mono.variable
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark" /* <--- O SEGREDO ESTÁ AQUI */
          enableSystem={false} /* <--- Ignora a preferência do sistema operacional */
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}