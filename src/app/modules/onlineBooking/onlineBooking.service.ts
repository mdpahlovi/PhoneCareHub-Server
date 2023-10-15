/* eslint-disable @typescript-eslint/no-non-null-asserted-optional-chain */
import { OnlineAppointment } from "@prisma/client";
import httpStatus from "http-status";
import { JWTPayload } from "jose";
import ApiError from "../../../errors/ApiError";
import prisma from "../../../shared/prisma";

type Payload = { serviceId: string; deviceInfo: string; issueDescription: string; shippingAddress: string };

const createOnlineBooking = async (user: JWTPayload, payload: Payload) => {
    const result = await prisma.onlineAppointment.create({ data: { userId: user?.sub!, ...payload } });

    return result;
};
const getAllOnlineBooking = async (user: JWTPayload) => {
    let result;
    if (user.role === "user") {
        result = await prisma.onlineAppointment.findMany({ where: { userId: user?.sub } });
    } else {
        result = await prisma.onlineAppointment.findMany();
    }

    return result;
};
const getSingleOnlineBooking = async (id: string, user: JWTPayload) => {
    let result;
    if (user.role === "user") {
        result = await prisma.onlineAppointment.findUnique({ where: { id, userId: user?.sub } });
    } else {
        result = await prisma.onlineAppointment.findUnique({ where: { id } });
    }

    if (!result) throw new ApiError(httpStatus.NOT_FOUND, "Failed to get data");
    return result;
};
const updateOnlineBooking = async (id: string, user: JWTPayload, payload: Partial<OnlineAppointment>) => {
    let result;
    if (user.role === "user") {
        result = await prisma.onlineAppointment.update({ where: { id }, data: { status: "cancelled" } });
    } else {
        result = await prisma.onlineAppointment.update({ where: { id }, data: payload });
    }

    return result;
};
const deleteOnlineBooking = async (id: string) => {
    const result = await prisma.onlineAppointment.delete({ where: { id } });

    return result;
};

export const OnlineBookingService = {
    createOnlineBooking,
    getAllOnlineBooking,
    getSingleOnlineBooking,
    updateOnlineBooking,
    deleteOnlineBooking,
};
