import { Request, Response } from "express";
import httpStatus from "http-status";
import catchAsync from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";
import { OnlineBookingService } from "./onlineBooking.service";

const createOnlineBooking = catchAsync(async (req: Request, res: Response) => {
    const result = await OnlineBookingService.createOnlineBooking(req.user, req.body);

    sendResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: "OnlineBooking Created Successfully...!",
        data: result,
    });
});

const getAllOnlineBooking = catchAsync(async (req: Request, res: Response) => {
    const result = await OnlineBookingService.getAllOnlineBooking(req.user);

    sendResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: "OnlineBooking Retrieves Successfully...!",
        data: result,
    });
});

const getSingleOnlineBooking = catchAsync(async (req: Request, res: Response) => {
    const { id } = req.params;
    const result = await OnlineBookingService.getSingleOnlineBooking(id, req.user);

    sendResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: "OnlineBooking Retrieve Successfully...!",
        data: result,
    });
});

const updateOnlineBooking = catchAsync(async (req: Request, res: Response) => {
    const { id } = req.params;
    const result = await OnlineBookingService.updateOnlineBooking(id, req.user, req.body);

    sendResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: "OnlineBooking Updated Successfully...!",
        data: result,
    });
});

const deleteOnlineBooking = catchAsync(async (req: Request, res: Response) => {
    const { id } = req.params;
    const result = await OnlineBookingService.deleteOnlineBooking(id);

    sendResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: "OnlineBooking Deleted Successfully...!",
        data: result,
    });
});

export const OnlineBookingController = {
    createOnlineBooking,
    getAllOnlineBooking,
    getSingleOnlineBooking,
    updateOnlineBooking,
    deleteOnlineBooking,
};
