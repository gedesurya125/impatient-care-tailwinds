"use client";
import React, { useState } from "react";
import { Pen, XMark } from "./svgs";
import { SideBarButton } from "./SideBarButton";
import { AnimatedOverlay } from "./AnimatedOverlay";
import { cn } from "./theme/utils";
import { handleClientScriptLoad } from "next/script";
import { TextInput } from "./formFields";

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
      className="bg-background overflow-hidden min-w-[90%] rounded-md"
      backdropClassName="flex items-center justify-center "
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
    <div className=" py-4 px-6 flex justify-between bg-primary">
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

  return (
    <form className="p-6">
      <TextInput label="Patient Name" />
    </form>
  );
};
