import { z } from "zod";

const createReview = z.object({
    body: z.object({
        serviceId: z.string({ required_error: "Service Id is Required" }),
        rating: z.number({ required_error: "Ratting is Required" }),
        comment: z.string({ required_error: "Comment is Required" }),
    }),
});

const updateReview = z.object({
    body: z.object({
        serviceId: z.string({ required_error: "Service Id is Required" }),
        rating: z.number().optional(),
        comment: z.string().optional(),
    }),
});

export const ReviewValidation = { createReview, updateReview };
