import { DeviceShipping } from "@prisma/client";
import prisma from "../../../shared/prisma";

const createDeviceShipping = async (payload: DeviceShipping) => {
    const { onlineAppointmentId, ...data } = payload;
    const result = await prisma.onlineAppointment.update({
        where: { id: onlineAppointmentId },
        data: { status: "shipping", deviceShipping: { create: { ...data } } },
    });

    return result;
};

export const DeviceShippingService = { createDeviceShipping };
