import { Request, Response } from "express";
import httpStatus from "http-status";
import catchAsync from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";
import { BookingService } from "./booking.service";

const createBooking = catchAsync(async (req: Request, res: Response) => {
    const result = await BookingService.createBooking(req.body);

    sendResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: "Booking Created Successfully...!",
        data: result,
    });
});

const getAllBooking = catchAsync(async (req: Request, res: Response) => {
    const result = await BookingService.getAllBooking(req.user);

    sendResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: "Booking Retrieves Successfully...!",
        data: result,
    });
});

const getSingleBooking = catchAsync(async (req: Request, res: Response) => {
    const { id } = req.params;
    const result = await BookingService.getSingleBooking(id, req.user);

    sendResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: "Booking Retrieve Successfully...!",
        data: result,
    });
});

const updateBooking = catchAsync(async (req: Request, res: Response) => {
    const { id } = req.params;
    const result = await BookingService.updateBooking(req.body, id);

    sendResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: "Booking Updated Successfully...!",
        data: result,
    });
});

const deleteBooking = catchAsync(async (req: Request, res: Response) => {
    const { id } = req.params;
    const result = await BookingService.deleteBooking(id, req.user);

    sendResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: "Booking Deleted Successfully...!",
        data: result,
    });
});

export const BookingController = { createBooking, getAllBooking, getSingleBooking, updateBooking, deleteBooking };
