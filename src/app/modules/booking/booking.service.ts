import { Booking } from "@prisma/client";
import { JWTPayload } from "jose";
import prisma from "../../../shared/prisma";

const createBooking = async (payload: Booking) => {
    const result = await prisma.booking.create({ data: payload });

    return result;
};
const getAllBooking = async (user: JWTPayload) => {
    let result;
    if (user.role === "user") {
        result = await prisma.booking.findMany({ where: { userId: user?.sub } });
    } else {
        result = await prisma.booking.findMany();
    }

    return result;
};
const getSingleBooking = async (id: string, user: JWTPayload) => {
    let result;
    if (user.role === "user") {
        result = await prisma.booking.findUnique({ where: { id, userId: user?.sub } });
    } else {
        result = await prisma.booking.findUnique({ where: { id } });
    }

    return result;
};
const updateBooking = async (payload: Partial<Booking>, id: string) => {
    const result = await prisma.booking.update({ where: { id }, data: payload });

    return result;
};
const deleteBooking = async (id: string, user: JWTPayload) => {
    let result;
    if (user.role === "user") {
        result = await prisma.booking.delete({ where: { id, userId: user?.sub } });
    } else {
        result = await prisma.booking.delete({ where: { id } });
    }

    return result;
};

export const BookingService = { createBooking, getAllBooking, getSingleBooking, updateBooking, deleteBooking };
