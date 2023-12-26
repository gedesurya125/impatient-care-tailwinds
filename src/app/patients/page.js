import { ClientLogger } from "components/ClientLogger";
import { ResponsiveGrid } from "components/theme";
import { getPaginatedPatients } from "prismaClient/queries/getPaginatedPatients";
import { getPatients } from "prismaClient/queries/getPatients";
import React from "react";

export default async function patientPage() {
  const patients = await getPaginatedPatients();

  return (
    <ResponsiveGrid id="patients-page">
      <ClientLogger data={patients} />
    </ResponsiveGrid>
  );
}


const Heading = () => { 
  return (
    <div>
      <h1>Patient</h1>
    </div>
  )
 }