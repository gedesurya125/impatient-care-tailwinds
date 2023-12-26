import { ClientLogger } from "components/ClientLogger";
import { ResponsiveGrid } from "components/theme";
import Image from "next/image";
import { getPatients } from "prismaClient/queries/getPatients";
import { Header } from "view/homePage/Header";

export default async function Home() {
  return (
    <>
      <Header />
      <button>Hello button</button>
    </>
  );
}
