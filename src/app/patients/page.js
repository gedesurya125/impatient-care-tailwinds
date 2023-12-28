import { ClientLogger } from "components/ClientLogger";
import { PatientCard } from "components/PatientCard";
import { ResponsiveGrid } from "components/theme";
import { getPaginatedPatients } from "prismaClient/queries/getPaginatedPatients";
import { getPatients } from "prismaClient/queries/getPatients";
import React from "react";

export default async function patientPage() {
  const patients = await getPaginatedPatients();

  return (
    <ResponsiveGrid id="patients-page">
      <ClientLogger data={patients} />
      <Header />
      <PatientList patients={patients} />
    </ResponsiveGrid>
  );
}

const Header = () => {
  return (
    <header className="patients-page__header col-start-1 col-end-13 bg-primary mt-10 rounded-md flex items-end p-8">
      <h1 className="text-secondary text-md">Patient</h1>
    </header>
  );
};

const PatientList = ({ patients }) => {
  return (
    <ul className="list-none p-0 col-start-1 col-end-13">
      {patients.map((patient, index) => {
        return <PatientCard key={index} data={patient} />;
      })}
    </ul>
  );
};
