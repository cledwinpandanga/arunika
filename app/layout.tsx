import "./globals.css";
import { Space_Grotesk, Geist } from "next/font/google";
import { cn } from "@/lib/utils";
import { orange } from "@/lib/assets";

const geist = Geist({ subsets: ["latin"], variable: "--font-sans" });

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-space-grotesk",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn(
        "h-full",
        "antialiased",
        spaceGrotesk.variable,
        "font-sans",
        geist.variable,
      )}
    >
      <body
        className="min-h-full flex flex-col bg-center bg-cover"
        style={{ backgroundImage: `url(${orange[2].src})` }}
      >
        {children}
      </body>
    </html>
  );
}
