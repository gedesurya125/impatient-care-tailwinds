import { Inter, Lora } from "next/font/google";
import "./globals.css";
import { ResponsiveGrid } from "components/theme";
import Link from "next/link";

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
      <body>
        <Banner />
        <Navigation />
        {children}
      </body>
    </html>
  );
}

const Banner = () => {
  return (
    <div className="banner bg-white py-4">
      <ResponsiveGrid className="">
        <h1 className="font-heading font-semibold text-md col-start-1 col-span-12 text-center">
          Impatient Care
        </h1>
      </ResponsiveGrid>
    </div>
  );
};

const Navigation = () => {
  const links = [
    { label: "Home", href: "/" },
    { label: "Patient List", href: "/" },
    { label: "Marked Patient", href: "/" },
  ];

  return (
    <nav className="navigation flex place-content-evenly">
      {links.map((data, index) => {
        return (
          <NavigationButton key={index} href={data?.href}>
            {data.label}
          </NavigationButton>
        );
      })}
    </nav>
  );
};

const NavigationButton = ({ children, href = "/" }) => {
  return (
    <Link href={href} className="px-card-sm py-4 white text-white text-sm">
      {children}
    </Link>
  );
};
