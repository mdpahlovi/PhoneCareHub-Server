import { Request, Response } from "express";
import httpStatus from "http-status";
import catchAsync from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";
import { ServiceService } from "./review.service";

const createService = catchAsync(async (req: Request, res: Response) => {
    const result = await ServiceService.createService(req.body);

    sendResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: "Service Created Successfully...!",
        data: result,
    });
});

const getAllService = catchAsync(async (req: Request, res: Response) => {
    const result = await ServiceService.getAllService();

    sendResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: "Service Retrieves Successfully...!",
        data: result,
    });
});

const getSingleService = catchAsync(async (req: Request, res: Response) => {
    const { id } = req.params;
    const result = await ServiceService.getSingleService(id);

    sendResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: "Service Retrieve Successfully...!",
        data: result,
    });
});

const updateService = catchAsync(async (req: Request, res: Response) => {
    const { id } = req.params;
    const result = await ServiceService.updateService(req.body, id);

    sendResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: "Service Updated Successfully...!",
        data: result,
    });
});

const deleteService = catchAsync(async (req: Request, res: Response) => {
    const { id } = req.params;
    const result = await ServiceService.deleteService(id);

    sendResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: "Service Deleted Successfully...!",
        data: result,
    });
});

export const ServiceController = { createService, getAllService, getSingleService, updateService, deleteService };
