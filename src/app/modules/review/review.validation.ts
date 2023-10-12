import { z } from "zod";

const createReview = z.object({
    body: z.object({
        serviceId: z.string({ required_error: "Service Id is Required" }),
        rating: z.string({ required_error: "Review Image is Required" }),
        comment: z.string({ required_error: "Review Description is Required" }),
    }),
});

const updateReview = z.object({
    body: z.object({
        serviceId: z.string({ required_error: "Service Id is Required" }),
        rating: z.string().optional(),
        comment: z.string().optional(),
    }),
});

export const ReviewValidation = { createReview, updateReview };
