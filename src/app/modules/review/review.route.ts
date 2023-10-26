import express from "express";
import { USER_ROLE } from "../../../enums/user";
import auth from "../../middlewares/auth";
import validateRequest from "../../middlewares/validateRequest";
import { ReviewController } from "./review.controller";
import { ReviewValidation } from "./review.validation";

const router = express.Router();

router.post(
    "/create",
    auth(USER_ROLE.USER, USER_ROLE.ADMIN),
    validateRequest(ReviewValidation.createReview),
    ReviewController.createReview,
);

router.get("/", ReviewController.getAllReview);

router.patch("/:id", auth(USER_ROLE.USER, USER_ROLE.ADMIN), validateRequest(ReviewValidation.updateReview), ReviewController.updateReview);

router.delete("/:id", auth(USER_ROLE.USER, USER_ROLE.ADMIN), ReviewController.deleteReview);

export const ReviewRoutes = router;
