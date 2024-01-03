"use client";
import React, { useState } from "react";
import { Pen, XMark } from "./svgs";
import { SideBarButton } from "./SideBarButton";
import { AnimatedOverlay } from "./AnimatedOverlay";
import { CheckBox, TextInput } from "./formFields";
import { fieldName } from "data/fieldNameData";

export function EditPatientButton({ patientData }) {
  const [openOverlay, setOpenOverlay] = useState(false);

  const handleOpenOverlay = () => {
    setOpenOverlay(true);
  };

  const handleCloseOverlay = () => {
    setOpenOverlay(false);
  };

  return (
    <>
      <SideBarButton onClick={handleOpenOverlay}>
        <Pen />
      </SideBarButton>
      <EditPatientOverlay
        data={patientData}
        isOpen={openOverlay}
        handleClose={handleCloseOverlay}
      />
    </>
  );
}

const EditPatientOverlay = ({ isOpen, handleClose, data }) => {
  return (
    <AnimatedOverlay
      id="edit-patient-overlay"
      isOpen={isOpen}
      handleClose={handleClose}
      className={`bg-background min-w-[90%] rounded-lg max-h-[95%] overflow-auto relative`}
      backdropClassName={`flex items-center justify-center z-editPatientOverlay`}
      initial={{
        scale: 0,
        opacity: 0,
      }}
      animate={{
        scale: 1,
        opacity: 1,
      }}
      exit={{
        scale: 0,
        opacity: 0,
      }}
      backdropProps={{
        initial: {
          backgroundColor: "rgba(0,0,0, 0)",
        },
        animate: {
          backgroundColor: "rgba(0,0,0, 0.2)",
        },
        exit: {
          backgroundColor: "rgba(0,0,0, 0)",
        },
      }}
    >
      <Header handleClose={handleClose} />
      <PatientForm initialPatientData={data} />
    </AnimatedOverlay>
  );
};

const Header = ({ handleClose }) => {
  return (
    <div className=" py-4 px-6 flex justify-between bg-primary sticky top-[-1px] mt-[-1px] left-0 w-full z-10">
      <p className="font-heading font-semibold text-md text-secondary">
        Edit Patient
      </p>
      <button className="w-7 text-secondary" onClick={handleClose}>
        <XMark />
      </button>
    </div>
  );
};

const PatientForm = ({ initialPatientData, ...props }) => {
  console.log("this is the patientd data", initialPatientData);

  const {
    actualWeight,
    armCircumference,
    assessmentDate,
    codeAg,
    createdAt,
    diet,
    dob,
    estimatedWeight,
    heightMrs,
    id,
    imt,
    imtOrWaterLow,
    isSamplingComstock,
    medicalDiagnose,
    mrsDate,
    name,
    rmNumber,
    roomName,
    roomNumber,
    waterLow,
    weightMrs,
  } = fieldName;

  return (
    <form className="p-6">
      <TextInput label={actualWeight} type="number" />
      <TextInput label={armCircumference} type="number" />
      <TextInput label={assessmentDate} type="date" />
      <TextInput label={codeAg} />
      {/* <TextInput label={createdAt} /> */}
      <TextInput label={diet} />
      <TextInput label={dob} type="date" />
      <TextInput label={heightMrs} type="number" />
      <TextInput label={id} />
      <TextInput label={imt} type="number" />
      <TextInput label={imtOrWaterLow} />
      <CheckBox label={isSamplingComstock} id={isSamplingComstock} />
      <TextInput label={medicalDiagnose} />
      <TextInput label={mrsDate} type="date" />
      <TextInput label={name} />
      <TextInput label={rmNumber} type="number" />
      <TextInput label={roomName} />
      <TextInput label={roomNumber} type="number" />
      <TextInput label={waterLow} type="number" />
      <TextInput label={weightMrs} type="number" />
    </form>
  );
};
