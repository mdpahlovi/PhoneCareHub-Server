import { Request, Response } from "express";
import httpStatus from "http-status";
import catchAsync from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";
import { PaymentService } from "./payment.service";

const createPayment = catchAsync(async (req: Request, res: Response) => {
    const result = await PaymentService.createPayment(req.body);

    sendResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: "Payment Created Successfully...!",
        data: result,
    });
});

const updatePayment = catchAsync(async (req: Request, res: Response) => {
    const { id } = req.params;
    const result = await PaymentService.updatePayment(req.body, id);

    sendResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: "Payment Updated Successfully...!",
        data: result,
    });
});

const deletePayment = catchAsync(async (req: Request, res: Response) => {
    const { id } = req.params;
    const result = await PaymentService.deletePayment(id);

    sendResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: "Payment Deleted Successfully...!",
        data: result,
    });
});

export const PaymentController = { createPayment, updatePayment, deletePayment };
