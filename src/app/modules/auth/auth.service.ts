import { Provider } from "@prisma/client";
import { compare, hash } from "bcrypt";
import httpStatus from "http-status";
import ApiError from "../../../errors/ApiError";
import { exclude } from "../../../helpers/exclude";
import prisma from "../../../shared/prisma";

type SignupUserPayload = { name: string; email: string; password: string };
type SigninUserPayload = { email: string; password: string };
type SocialSignin = { name: string; image: string; email: string; provider: Provider };

const signupUser = async (payload: SignupUserPayload) => {
    const isExist = await prisma.auth.findUnique({ where: { email: payload.email } });
    if (isExist) {
        throw new ApiError(httpStatus.UNPROCESSABLE_ENTITY, "User Already Exists...!");
    }

    payload.password = await hash(payload.password, 12);
    const user = await prisma.auth.create({ data: { ...payload } });
    const result = exclude(user, ["password"]);

    return result;
};

const signinUser = async (payload: SigninUserPayload) => {
    const { email, password } = payload;

    const user = await prisma.auth.findUnique({ where: { email } });
    if (!user) throw new Error("User Not Found...!");

    const isPassMatch = await compare(password, user.password!);
    if (!isPassMatch) throw new Error("Password doesn't match...!");

    const result = exclude(user, ["password", "provider", "created_at"]);
    return result;
};

const socialSignin = async (payload: SocialSignin) => {
    let auth = await prisma.auth.findUnique({ where: { email: payload.email } });
    if (!auth) auth = await prisma.auth.create({ data: { ...payload } });

    const result = exclude(auth, ["provider", "created_at"]);
    return result;
};

export const AuthService = { signupUser, signinUser, socialSignin };
