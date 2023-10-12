import { User } from "@prisma/client";
import prisma from "../../../shared/prisma";

const getAllUser = async () => {
    const result = await prisma.user.findMany();

    return result;
};
const getSingleUser = async (id: string) => {
    const result = await prisma.user.findUnique({ where: { id } });

    return result;
};
const updateUser = async (payload: Partial<User>, id: string) => {
    const result = await prisma.user.update({ where: { id }, data: payload });

    return result;
};
const deleteUser = async (id: string) => {
    const result = await prisma.user.delete({ where: { id } });

    return result;
};

export const UserService = { getAllUser, getSingleUser, updateUser, deleteUser };
