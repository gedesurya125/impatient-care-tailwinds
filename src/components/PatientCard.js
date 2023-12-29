"use client";
import React, { useState } from "react";
import { PlusIcon } from "./svgs";
import { AnimatePresence, motion } from "framer-motion";

export const PatientCard = ({ data, number }) => {
  const { name } = data;

  const [openDetails, setOpenDetails] = useState(false);

  const toggleOpenDetails = () => {
    return setOpenDetails((state) => !state);
  };

  return (
    <li className="patient-card rounded-md flex flex-col overflow-hidden [&:not(:first-of-type)]:mt-4 ">
      <button
        className="bg-primary p-4 text-sm text-secondary text-left flex place-content-between items-center"
        onClick={toggleOpenDetails}
      >
        <span>{`${number}. ${name}`}</span>
        <PlusIcon
          className={`w-5 shrink-0 transition-transform ${
            openDetails ? "rotate-45" : "rotate-0"
          }`}
        />
      </button>
      <AnimatePresence>
        {openDetails && <DetailsContainer data={data} />}
      </AnimatePresence>
    </li>
  );
};

const DetailsContainer = ({ data }) => {
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
  } = data;
  return (
    <motion.div
      initial={{
        height: 0,
      }}
      animate={{
        height: "auto",
      }}
      exit={{
        height: 0,
      }}
    >
      <div className="border-2 border-primary p-4 flex">
        <div className="side-bar-menu w-16 shrink-0 bg-tertiary"></div>
        <table className=" ml-4 flex-1">
          <tbody>
            <TableData title="Actual Weight" value={actualWeight} />
            <TableData title="Arm Circumference" value={armCircumference} />
            <TableData
              title="Assessment Date"
              value={getFormattedDate(assessmentDate)}
            />
            <TableData title="Code AG" value={codeAg} />
            <TableData title="Created At" value={getFormattedDate(createdAt)} />
            <TableData title="Diet" value={diet} />
            <TableData title="DOB" value={getFormattedDate(dob)} />
            <TableData title="Estimated Weight" value={estimatedWeight} />
            <TableData title="Height MRS" value={heightMrs} />
            <TableData title="IMT" value={imt} />
            <TableData
              title="Is Sampling Comstock"
              value={isSamplingComstock}
            />
            <TableData title="Medical Diagnose" value={medicalDiagnose} />
            <TableData title="MRS Date" value={getFormattedDate(mrsDate)} />
            <TableData title="RM Number" value={rmNumber} />
            <TableData title="Room Name" value={roomName} />
            <TableData title="Room Number" value={roomNumber} />
            <TableData title="Water Low" value={waterLow} />
            <TableData title="Weight MRS" value={weightMrs} />
            <TableData title="IMT or water low" value={imtOrWaterLow} />
          </tbody>
        </table>
      </div>
    </motion.div>
  );
};

const TableData = ({ title, value }) => {
  return (
    <tr className="even:bg-tertiary">
      <th className="text-sm font-body font-normal align-text-top">{title}</th>
      <td className="text-sm font-body font-light align-text-top">:&nbsp;</td>
      <td className="text-sm font-body font-light"> {value}</td>
    </tr>
  );
};

const getFormattedDate = (isoString) => new Date(isoString).toDateString();
