import { Request, Response } from "express";
import httpStatus from "http-status";
import catchAsync from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";
import { AdminService } from "./admin.service";

const createAdmin = catchAsync(async (req: Request, res: Response) => {
    const result = await AdminService.createAdmin(req.body);

    sendResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: "Admin Created Successfully...!",
        data: result,
    });
});

const getAllAdmin = catchAsync(async (req: Request, res: Response) => {
    const result = await AdminService.getAllAdmin();

    sendResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: "Admin Retrieves Successfully...!",
        data: result,
    });
});

const getSingleAdmin = catchAsync(async (req: Request, res: Response) => {
    const { id } = req.params;
    const result = await AdminService.getSingleAdmin(id);

    sendResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: "Admin Retrieve Successfully...!",
        data: result,
    });
});

const updateAdmin = catchAsync(async (req: Request, res: Response) => {
    const { id } = req.params;
    const result = await AdminService.updateAdmin(req.body, id);

    sendResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: "Admin Updated Successfully...!",
        data: result,
    });
});

const deleteAdmin = catchAsync(async (req: Request, res: Response) => {
    const { id } = req.params;
    const result = await AdminService.deleteAdmin(id);

    sendResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: "Admin Deleted Successfully...!",
        data: result,
    });
});

export const AdminController = { createAdmin, getAllAdmin, getSingleAdmin, updateAdmin, deleteAdmin };
