import { Inter, Lora } from "next/font/google";
import "./globals.css";
import { Banner, Navigation } from "components";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const lora = Lora({
  subsets: ["latin"],
  variable: "--font-lora",
  display: "swap",
});
export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable}  ${lora.variable}`}>
      <body className="bg-background">
        {/* <Banner />   */}
        <Navigation />
        {children}
      </body>
    </html>
  );
}
