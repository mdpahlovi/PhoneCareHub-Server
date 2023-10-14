import { Admin } from "@prisma/client";
import { hash } from "bcrypt";
import httpStatus from "http-status";
import ApiError from "../../../errors/ApiError";
import { exclude } from "../../../helpers/exclude";
import prisma from "../../../shared/prisma";

type CreateAdminPayload = { name: string; email: string; password: string };

const createAdmin = async (payload: CreateAdminPayload) => {
    const isExist = await prisma.admin.findUnique({ where: { email: payload.email } });
    if (isExist) {
        throw new ApiError(httpStatus.UNPROCESSABLE_ENTITY, "User Already Exists...!");
    }

    payload.password = await hash(payload.password, 12);
    const user = await prisma.admin.create({ data: { ...payload } });
    const result = exclude(user, ["password", "updatedAt"]);

    return result;
};

const getAllAdmin = async () => {
    const admins = await prisma.admin.findMany();

    const result = admins.map(admin => exclude(admin, ["password", "updatedAt"]));
    return result;
};
const getSingleAdmin = async (id: string) => {
    const admin = await prisma.admin.findUnique({ where: { id } });

    if (!admin) throw new ApiError(httpStatus.NOT_FOUND, "Failed to get data");
    const result = exclude(admin, ["password", "updatedAt"]);
    return result;
};
const updateAdmin = async (payload: Partial<Admin>, id: string) => {
    const admin = await prisma.admin.update({ where: { id }, data: payload });

    const result = exclude(admin, ["password", "updatedAt"]);
    return result;
};
const deleteAdmin = async (id: string) => {
    const admin = await prisma.admin.delete({ where: { id } });

    const result = exclude(admin, ["password", "updatedAt"]);
    return result;
};

export const AdminService = { createAdmin, getAllAdmin, getSingleAdmin, updateAdmin, deleteAdmin };
