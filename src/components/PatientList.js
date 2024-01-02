"use client";
import React, { useState } from "react";
import { PatientCard } from "components/PatientCard";
import { getPaginatedPatients } from "prismaClient/queries/getPaginatedPatients";
import { Spinner } from "./svgs";

export const PatientList = ({ patients, take }) => {
  const [patientToDisplay, setPatientToDisplay] = useState(patients);
  const [loading, setLoading] = useState(false);
  const [disableButton, setDisableButton] = useState(false);

  const handleLoadMore = async () => {
    setLoading(true);
    const patients = await getPaginatedPatients({
      lastItemId: patientToDisplay[patientToDisplay.length - 1].id,
      take,
    });

    if (patients) {
      setPatientToDisplay((state) => [...state, ...patients]);
      if (patients.length < take) {
        setDisableButton(true);
      }
    }
    setLoading(false);
  };

  return (
    <>
      <ul className="list-none p-0 col-start-1 col-end-13 mt-6">
        {patientToDisplay.map((patient, index) => {
          return <PatientCard key={index} data={patient} number={index + 1} />;
        })}
      </ul>
      {loading && (
        <Spinner className="col-start-1 col-end-13 w-10 justify-self-center mt-10" />
      )}
      <button
        onClick={handleLoadMore}
        className="col-start-1 col-end-13 mt-12 bg-primary text-secondary p-4 text-sm rounded-md disabled:bg-accent"
        disabled={disableButton || loading}
      >
        Load More
      </button>
    </>
  );
};
