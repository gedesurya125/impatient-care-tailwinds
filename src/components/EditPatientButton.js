"use client";
import React, { useState } from "react";
import { Pen, XMark } from "./svgs";
import { SideBarButton } from "./SideBarButton";
import { AnimatedOverlay } from "./AnimatedOverlay";
import { CheckBox, TextInput } from "./formFields";
import { fieldName } from "data/fieldNameData";
import { Formik, Form } from "formik";

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

  const stringToKey = (string = "") => string.toLowerCase().replace(" ", "_");

  const getInitialValues = () => {
    let initialValues;

    Object.keys(fieldName).map((key) => {
      initialValues = {
        ...initialValues,
        [stringToKey(fieldName[key])]: initialPatientData[key],
      };
    });
    return initialValues;
  };

  return (
    <Formik
      initialValues={getInitialValues()}
      onSubmit={(values) => {
        console.log("this is the formik values", values);
      }}
    >
      {(props) => {
        console.log("this sis the value", props.values);

        return (
          <Form className="p-6">
            <TextInput
              label={actualWeight}
              name={stringToKey(actualWeight)}
              type="number"
            />
            <TextInput
              label={armCircumference}
              name={stringToKey(armCircumference)}
              type="number"
            />
            <TextInput
              label={assessmentDate}
              name={stringToKey(assessmentDate)}
              type="date"
            />
            <TextInput label={codeAg} name={stringToKey(codeAg)} />
            {/* <TextInput label={createdAt} name={stringToKey(createdAt)} /> */}
            <TextInput label={diet} name={stringToKey(diet)} />
            <TextInput label={dob} name={stringToKey(dob)} type="date" />
            <TextInput
              label={heightMrs}
              name={stringToKey(heightMrs)}
              type="number"
            />
            <TextInput label={id} name={stringToKey(id)} />
            <TextInput label={imt} name={stringToKey(imt)} type="number" />
            <TextInput
              label={imtOrWaterLow}
              name={stringToKey(imtOrWaterLow)}
            />
            <CheckBox
              label={isSamplingComstock}
              name={stringToKey(isSamplingComstock)}
              id={isSamplingComstock}
            />
            <TextInput
              label={medicalDiagnose}
              name={stringToKey(medicalDiagnose)}
            />
            <TextInput
              label={mrsDate}
              name={stringToKey(mrsDate)}
              type="date"
            />
            <TextInput label={name} name={stringToKey(name)} />
            <TextInput
              label={rmNumber}
              name={stringToKey(rmNumber)}
              type="number"
            />
            <TextInput label={roomName} name={stringToKey(roomName)} />
            <TextInput
              label={roomNumber}
              name={stringToKey(roomNumber)}
              type="number"
            />
            <TextInput
              label={waterLow}
              name={stringToKey(waterLow)}
              type="number"
            />
            <TextInput
              label={weightMrs}
              name={stringToKey(weightMrs)}
              type="number"
            />
          </Form>
        );
      }}
    </Formik>
  );
};
