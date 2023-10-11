import { z } from "zod";

const signupValidate = z.object({
    body: z.object({
        name: z.string({ required_error: "Name is required" }),
        email: z.string({ required_error: "Email is required" }),
        password: z.string({ required_error: "Password is required" }),
    }),
});
const signinValidate = z.object({
    body: z.object({
        email: z.string({ required_error: "Email is required" }),
        password: z.string({ required_error: "Password is required" }),
    }),
});
const socialSigninValidate = z.object({
    body: z.object({
        name: z.string({ required_error: "Name is required" }),
        image: z.string({ required_error: "Image is required" }),
        email: z.string({ required_error: "Email is required" }),
        provider: z.enum(["google", "github", "credentials"], { required_error: "Role is required" }),
    }),
});

export const AuthValidation = { signupValidate, signinValidate, socialSigninValidate };
