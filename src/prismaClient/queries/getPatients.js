import { prisma } from "prismaClient/db";
import { runQuery } from "./runQuery";

export const getPatients = async () => {
  return runQuery(async () => {
    const patients = await prisma.patient.findMany();
    return patients;
  });
};
