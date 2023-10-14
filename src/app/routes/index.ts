import express from "express";
import { AdminRoutes } from "../modules/admin/admin.route";
import { AuthRoutes } from "../modules/auth/auth.route";
import { BookingRoutes } from "../modules/booking/booking.route";
import { ProfileRoutes } from "../modules/profile/profile.route";
import { ReviewRoutes } from "../modules/review/review.route";
import { ServiceRoutes } from "../modules/service/service.route";
import { UserRoutes } from "../modules/user/user.route";

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
    {
        path: "/user",
        route: UserRoutes,
    },
    {
        path: "/admin",
        route: AdminRoutes,
    },
    {
        path: "/profile",
        route: ProfileRoutes,
    },
];

moduleRoutes.forEach(route => router.use(route.path, route.route));
export default router;
