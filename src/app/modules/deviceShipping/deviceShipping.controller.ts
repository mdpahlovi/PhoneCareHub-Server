import { Request, Response } from "express";
import httpStatus from "http-status";
import catchAsync from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";
import { DeviceShippingService } from "./deviceShipping.service";

const createDeviceShipping = catchAsync(async (req: Request, res: Response) => {
    const result = await DeviceShippingService.createDeviceShipping(req.body);

    sendResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: "DeviceShipping Created Successfully...!",
        data: result,
    });
});

export const DeviceShippingController = { createDeviceShipping };
