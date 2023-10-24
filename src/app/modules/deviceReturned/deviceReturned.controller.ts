import { Request, Response } from "express";
import httpStatus from "http-status";
import catchAsync from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";
import { DeviceReturnedService } from "./deviceReturned.service";

const createDeviceReturned = catchAsync(async (req: Request, res: Response) => {
    const result = await DeviceReturnedService.createDeviceReturned(req.body);

    sendResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: "DeviceReturned Created Successfully...!",
        data: result,
    });
});

export const DeviceReturnedController = { createDeviceReturned };
