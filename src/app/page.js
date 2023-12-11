import { ClientLogger } from "components/ClientLogger";
import { ResponsiveGrid } from "components/theme";
import Image from "next/image";
import { getPatients } from "prismaClient/queries/getPatients";

export default async function Home() {
  const patient = await getPatients();

  return (
    <main>
      <ResponsiveGrid></ResponsiveGrid>
    </main>
  );
}
