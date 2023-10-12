import { z } from "zod";

const createBooking = z.object({
    body: z.object({
        serviceId: z.string({ required_error: "Service Id is Required" }),
        deviceimage: z.string({ required_error: "Device Image is Required" }),
        devicename: z.string({ required_error: "Device Name is Required" }),
        problem: z.string({ required_error: "Device Problem is Required" }),
        time: z.string({ required_error: "Time is Required" }),
        status: z.string({ required_error: "Status is Required" }),
    }),
});

const updateBooking = z.object({
    body: z.object({
        serviceId: z.string().optional(),
        deviceimage: z.string().optional(),
        devicename: z.string().optional(),
        problem: z.string().optional(),
        time: z.string().optional(),
        status: z.string().optional(),
    }),
});

export const BookingValidation = { createBooking, updateBooking };
