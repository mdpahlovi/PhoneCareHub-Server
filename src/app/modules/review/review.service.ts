import { Review } from "@prisma/client";
import prisma from "../../../shared/prisma";

const createReview = async (payload: Review) => {
    const result = await prisma.review.create({ data: payload });

    return result;
};
const updateReview = async (payload: Partial<Review>, id: string) => {
    const result = await prisma.review.update({ where: { id }, data: payload });

    return result;
};
const deleteReview = async (id: string) => {
    const result = await prisma.review.delete({ where: { id } });

    return result;
};

export const ReviewService = { createReview, updateReview, deleteReview };
