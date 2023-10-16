import { Request, Response } from "express";
import httpStatus from "http-status";
import catchAsync from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";
import { OfflineAppointmentService } from "./offlineAppointment.service";

const createOfflineAppointment = catchAsync(async (req: Request, res: Response) => {
    const result = await OfflineAppointmentService.createOfflineAppointment(req.user, req.body);

    sendResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: "OfflineAppointment Created Successfully...!",
        data: result,
    });
});

const getAllOfflineAppointment = catchAsync(async (req: Request, res: Response) => {
    const result = await OfflineAppointmentService.getAllOfflineAppointment(req.user);

    sendResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: "OfflineAppointment Retrieves Successfully...!",
        data: result,
    });
});

const getSingleOfflineAppointment = catchAsync(async (req: Request, res: Response) => {
    const { id } = req.params;
    const result = await OfflineAppointmentService.getSingleOfflineAppointment(id, req.user);

    sendResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: "OfflineAppointment Retrieve Successfully...!",
        data: result,
    });
});

const updateOfflineAppointment = catchAsync(async (req: Request, res: Response) => {
    const { id } = req.params;
    const result = await OfflineAppointmentService.updateOfflineAppointment(id, req.user, req.body);

    sendResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: "OfflineAppointment Updated Successfully...!",
        data: result,
    });
});

const deleteOfflineAppointment = catchAsync(async (req: Request, res: Response) => {
    const { id } = req.params;
    const result = await OfflineAppointmentService.deleteOfflineAppointment(id);

    sendResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: "OfflineAppointment Deleted Successfully...!",
        data: result,
    });
});

export const OfflineAppointmentController = {
    createOfflineAppointment,
    getAllOfflineAppointment,
    getSingleOfflineAppointment,
    updateOfflineAppointment,
    deleteOfflineAppointment,
};
