import { ClientLogger } from "components/ClientLogger";
import { ResponsiveGrid } from "components/theme";
import Image from "next/image";
import { getPatients } from "prismaClient/queries/getPatients";

export default async function Home() {
  const patient = await getPatients();

  return (
    <main>
      <h1 className="text-md">Hello</h1>
      <div className="box w-card-lg h-card-lg bg-slate-200"></div>
      {/* <div
        className={`
        w-container-phone 
        tabletPortrait:w-container-tablet-portrait 
        tabletLandscape:w-container-tablet-landscape 
        desktop:w-container-desktop 
        h-container-phone 
        bg-slate-50 
        mx-auto`}
      ></div> */}
      <ResponsiveGrid>
        <div className="col-start-1 col-span-4 h-[3rem] bg-white" />
      </ResponsiveGrid>
    </main>
  );
}
