import express from "express";
import { AuthRoutes } from "../modules/auth/auth.route";
import { BookingRoutes } from "../modules/booking/booking.route";
import { ReviewRoutes } from "../modules/review/review.route";
import { ServiceRoutes } from "../modules/service/service.route";

const router = express.Router();

const moduleRoutes = [
    {
        path: "/auth",
        route: AuthRoutes,
    },
    {
        path: "/service",
        route: ServiceRoutes,
    },
    {
        path: "/booking",
        route: BookingRoutes,
    },
    {
        path: "/review",
        route: ReviewRoutes,
    },
];

moduleRoutes.forEach(route => router.use(route.path, route.route));
export default router;
