/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-non-null-asserted-optional-chain */
import { OnlineAppointment, Prisma } from "@prisma/client";
import httpStatus from "http-status";
import { JWTPayload } from "jose";
import ApiError from "../../../errors/ApiError";
import { IOptions, calculateOptions } from "../../../helpers/paginationHelper";
import prisma from "../../../shared/prisma";

type Payload = { serviceId: string; deviceInfo: string; issueDescription: string; shippingAddress: string };

const createOnlineAppointment = async (user: JWTPayload, payload: Payload) => {
    const result = await prisma.onlineAppointment.create({ data: { userId: user?.sub!, ...payload } });

    return result;
};

const getAllOnlineAppointment = async (type: string, options: IOptions, user: JWTPayload) => {
    const { page, size, skip, sortBy, sortOrder } = calculateOptions(options);

    const andConditions: any[] = [];
    if (user.role === "user") andConditions.push({ userId: user?.sub });
    switch (type) {
        case "appointments":
            andConditions.push({
                OR: [{ status: { equals: "pending" } }, { status: { equals: "reviewing" } }, { status: { equals: "paymentPending" } }],
            });
            break;
        case "completed":
            andConditions.push({ status: { equals: "completed" } });
            break;
        case "cancelled":
            andConditions.push({ status: { equals: "cancelled" } });
            break;
    }

    const where: Prisma.OnlineAppointmentWhereInput = { AND: andConditions };
    const orderBy: Prisma.OnlineAppointmentOrderByWithRelationInput = { [sortBy]: sortOrder };

    const result = await prisma.onlineAppointment.findMany({
        where,
        include: { user: { select: { name: true, image: true } }, service: { select: { name: true } } },
        skip,
        take: size,
        orderBy,
    });
    const total = await prisma.onlineAppointment.count({ where });

    return { meta: { page, size, total, totalPage: Math.ceil(total / size) }, data: result };
};

const getSingleOnlineAppointment = async (id: string, user: JWTPayload) => {
    let result;
    if (user.role === "user") {
        result = await prisma.onlineAppointment.findUnique({ where: { id, userId: user?.sub } });
    } else {
        result = await prisma.onlineAppointment.findUnique({ where: { id } });
    }

    if (!result) throw new ApiError(httpStatus.NOT_FOUND, "Failed to get data");
    return result;
};
const updateOnlineAppointment = async (id: string, user: JWTPayload, payload: Partial<OnlineAppointment>) => {
    let result;
    if (user.role === "user") {
        result = await prisma.onlineAppointment.update({ where: { id }, data: { status: "cancelled" } });
    } else {
        result = await prisma.onlineAppointment.update({ where: { id }, data: payload });
    }

    return result;
};
const deleteOnlineAppointment = async (id: string) => {
    const result = await prisma.onlineAppointment.delete({ where: { id } });

    return result;
};

export const OnlineAppointmentService = {
    createOnlineAppointment,
    getAllOnlineAppointment,
    getSingleOnlineAppointment,
    updateOnlineAppointment,
    deleteOnlineAppointment,
};
