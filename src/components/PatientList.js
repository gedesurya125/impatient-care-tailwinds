"use client";
import React, { useState } from "react";
import { PatientCard } from "components/PatientCard";
import { getPaginatedPatients } from "prismaClient/queries/getPaginatedPatients";

export const PatientList = ({ patients }) => {
  const [patientToDisplay, setPatientToDisplay] = useState(patients);
  const [loading, setLoading] = useState(false);

  const handleLoadMore = async () => {
    setLoading(true);
    const patients = await getPaginatedPatients({
      lastItemId: patientToDisplay[patientToDisplay.length - 1].id,
    });
    if (patients) {
      setPatientToDisplay((state) => [...state, ...patients]);
    }
    setLoading(false);
  };

  return (
    <>
      <ul className="list-none p-0 col-start-1 col-end-13 mt-6">
        {patientToDisplay.map((patient, index) => {
          return <PatientCard key={index} data={patient} />;
        })}
      </ul>
      <button
        onClick={handleLoadMore}
        className="col-start-1 col-end-13 mt-12 bg-primary text-secondary p-4 text-sm rounded-md"
      >
        Load More
      </button>
    </>
  );
};
