import { ClientLogger } from "components/ClientLogger";
import { ResponsiveGrid } from "components/theme";
import Image from "next/image";
import { getPaginatedPatients } from "prismaClient/queries/getPaginatedPatients";
import { getPatients } from "prismaClient/queries/getPatients";
import React from "react";
import patientImage from "assets/patient.jpg";
import { PatientList } from "components/PatientList";

export default async function patientPage() {
  const PATIENT_PER_PAGE = 10;
  const patients = await getPaginatedPatients({ take: PATIENT_PER_PAGE });

  return (
    <ResponsiveGrid id="patients-page" className="pb-14">
      <ClientLogger data={patients} />
      <Header />
      <PatientList patients={patients} take={PATIENT_PER_PAGE} />
    </ResponsiveGrid>
  );
}

const Header = () => {
  return (
    <header className="patients-page__header col-start-1 col-end-13 bg-primary min-h-16 mt-10 rounded-md flex items-center p-8 relative overflow-hidden isolate ">
      <h1 className="text-background text-lg font-semibold self-end w-full text-right">
        Patient
      </h1>
      <Image
        src={patientImage}
        alt="patient-image"
        className="absolute left-0 w-full z-[-1] brightness-50"
      />
    </header>
  );
};
