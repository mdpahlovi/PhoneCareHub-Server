import { DeviceReturned } from "@prisma/client";
import prisma from "../../../shared/prisma";

const createDeviceReturned = async (payload: DeviceReturned) => {
    const { onlineAppointmentId, ...data } = payload;
    const result = await prisma.onlineAppointment.update({
        where: { id: onlineAppointmentId },
        data: { status: "returned", deviceReturned: { create: { ...data } } },
    });

    return result;
};

export const DeviceReturnedService = { createDeviceReturned };
