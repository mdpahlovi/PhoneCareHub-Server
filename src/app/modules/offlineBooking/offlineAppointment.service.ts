/* eslint-disable @typescript-eslint/no-non-null-asserted-optional-chain */
import { OfflineAppointment } from "@prisma/client";
import httpStatus from "http-status";
import { JWTPayload } from "jose";
import ApiError from "../../../errors/ApiError";
import prisma from "../../../shared/prisma";

type Payload = { serviceId: string; deviceInfo: string; issueDescription: string; appointmentDate: Date };

const createOfflineAppointment = async (user: JWTPayload, payload: Payload) => {
    const result = await prisma.offlineAppointment.create({ data: { userId: user?.sub!, ...payload } });

    return result;
};
const getAllOfflineAppointment = async (user: JWTPayload) => {
    let result;
    if (user.role === "user") {
        result = await prisma.offlineAppointment.findMany({ where: { userId: user?.sub } });
    } else {
        result = await prisma.offlineAppointment.findMany();
    }

    return result;
};
const getSingleOfflineAppointment = async (id: string, user: JWTPayload) => {
    let result;
    if (user.role === "user") {
        result = await prisma.offlineAppointment.findUnique({ where: { id, userId: user?.sub } });
    } else {
        result = await prisma.offlineAppointment.findUnique({ where: { id } });
    }

    if (!result) throw new ApiError(httpStatus.NOT_FOUND, "Failed to get data");
    return result;
};
const updateOfflineAppointment = async (id: string, user: JWTPayload, payload: Partial<OfflineAppointment>) => {
    let result;
    if (user.role === "user") {
        result = await prisma.offlineAppointment.update({ where: { id }, data: { status: "cancelled" } });
    } else {
        result = await prisma.offlineAppointment.update({ where: { id }, data: payload });
    }

    return result;
};
const deleteOfflineAppointment = async (id: string) => {
    const result = await prisma.offlineAppointment.delete({ where: { id } });

    return result;
};

export const OfflineAppointmentService = {
    createOfflineAppointment,
    getAllOfflineAppointment,
    getSingleOfflineAppointment,
    updateOfflineAppointment,
    deleteOfflineAppointment,
};
