import { Service } from "@prisma/client";
import prisma from "../../../shared/prisma";

const createService = async (payload: Service) => {
    const result = await prisma.service.create({ data: payload });

    return result;
};
const getAllService = async () => {
    const result = await prisma.service.findMany();

    return result;
};
const getSingleService = async (id: string) => {
    const result = await prisma.service.findUnique({ where: { id } });

    return result;
};
const updateService = async (payload: Partial<Service>, id: string) => {
    const result = await prisma.service.update({ where: { id }, data: payload });

    return result;
};
const deleteService = async (id: string) => {
    const result = await prisma.service.delete({ where: { id } });

    return result;
};

export const ServiceService = { createService, getAllService, getSingleService, updateService, deleteService };
