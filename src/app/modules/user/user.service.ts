import { Prisma, User } from "@prisma/client";
import httpStatus from "http-status";
import ApiError from "../../../errors/ApiError";
import { exclude } from "../../../helpers/exclude";
import { IOptions, calculateOptions } from "../../../helpers/paginationHelper";
import prisma from "../../../shared/prisma";

const getAllUser = async (options: IOptions) => {
    const { page, size, skip, sortBy, sortOrder } = calculateOptions(options);

    const orderBy: Prisma.UserOrderByWithRelationInput = { [sortBy]: sortOrder };
    const users = await prisma.user.findMany({ skip, take: size, orderBy });
    const total = await prisma.user.count();

    const result = users.map(user => exclude(user, ["password", "provider", "updatedAt"]));
    return { meta: { page, size, total, totalPage: Math.ceil(total / size) }, data: result };
};
const getSingleUser = async (id: string) => {
    const user = await prisma.user.findUnique({ where: { id } });

    if (!user) throw new ApiError(httpStatus.NOT_FOUND, "Failed to get data");
    const result = exclude(user, ["password", "provider", "updatedAt"]);
    return result;
};
const updateUser = async (payload: Partial<User>, id: string) => {
    const user = await prisma.user.update({ where: { id }, data: payload });

    const result = exclude(user, ["password", "provider", "updatedAt"]);
    return result;
};
const deleteUser = async (id: string) => {
    const user = await prisma.user.delete({ where: { id } });

    const result = exclude(user, ["password", "provider", "updatedAt"]);
    return result;
};

export const UserService = { getAllUser, getSingleUser, updateUser, deleteUser };
