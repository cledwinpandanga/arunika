import "./globals.css";
import { Space_Grotesk, Geist, Playfair_Display } from "next/font/google";
import { cn } from "@/lib/utils";
import { NextIntlClientProvider } from "next-intl";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-grotesk",
});

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
  variable: "--font-playfair",
});

export const metadata = {
  title: "Ruang Arunika",
  description: "Your app description",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={cn(
        "h-full antialiased",
        geist.variable,
        spaceGrotesk.variable,
        playfairDisplay.variable,
      )}
    >
      <NextIntlClientProvider>
        <body className={cn("min-h-full flex flex-col font-sans")}>
          <main>{children}</main>
        </body>
      </NextIntlClientProvider>
    </html>
  );
}
