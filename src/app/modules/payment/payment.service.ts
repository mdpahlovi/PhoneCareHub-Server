import { Payment } from "@prisma/client";
import prisma from "../../../shared/prisma";

const createPayment = async (payload: Payment) => {
    const { onlineAppointmentId, ...data } = payload;
    const result = await prisma.onlineAppointment.update({
        where: { id: onlineAppointmentId },
        data: { status: "repairing", payment: { create: { ...data } } },
    });

    return result;
};

const updatePayment = async (payload: Partial<Payment>, id: string) => {
    const result = await prisma.payment.update({ where: { id }, data: payload });

    return result;
};

const deletePayment = async (id: string) => {
    const result = await prisma.payment.delete({ where: { id } });

    return result;
};

export const PaymentService = { createPayment, updatePayment, deletePayment };
