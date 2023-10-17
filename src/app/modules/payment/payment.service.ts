import { Payment } from "@prisma/client";
import prisma from "../../../shared/prisma";

const createPayment = async (payload: Payment) => {
    const { onlineAppointmentId, ...data } = payload;
    const result = await prisma.onlineAppointment.update({
        where: { id: onlineAppointmentId },
        data: { status: "servicing", payment: { create: { ...data } } },
    });

    return result;
};

export const PaymentService = { createPayment };
