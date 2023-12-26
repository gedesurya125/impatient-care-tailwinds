import { navigationData } from "data/navigationData";
import Link from "next/link";
import { ResponsiveGrid } from "./theme";
import { Logo } from "./svgs/Logo";
import { MenuButton } from "./MenuButton";
import { cn } from "./theme/utils/cn";

export const Navigation = () => {
  const { links } = navigationData;

  return (
    <nav className="bg-primary z-50 relative">
      <ResponsiveGrid className="py-6">
        <LogoLink />
        <MenuButton />
      </ResponsiveGrid>
    </nav>
  );
};

const LogoLink = () => {
  return (
    <Link href="/" className="col-start-1 w-16 self-center flex content-center">
      <Logo className=" text-secondary flex-shrink-0 " />
      <p className="font-body font-bold whitespace-nowrap ml-2 text-sm text-secondary">
        Impatient Care
      </p>
    </Link>
  );
};
