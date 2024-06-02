import { z } from "zod";

export const signupSchema = z.object({
  firstName: z
    .string({ required_error: "First name is required" })
    .min(1, "Please enter first name"),
  lastName: z
    .string({ required_error: "Last name is required" })
    .min(1, "Please enter last name"),
  phoneNumber: z
    .string({
      required_error: "Enter Phone Number",
    })
    .min(10, "Phone Number must be at least 10 characters")
    .max(13, "Phone Number must be less than 13 characters")
    .regex(/^(\+250)\d{9}$/, {
      message: "Phone Number must be in the format +2507XXXXXXXX",
    }),
  password: z
    .string({ required_error: "Password is required" })
    .min(6, "Password must be at least 6 characters"),
});

export const loginSchema = z.object({
  phoneNumber: z
    .string({
      required_error: "Enter Phone Number",
    })
    .min(10, "Phone Number must be at least 10 characters")
    .max(13, "Phone Number must be less than 13 characters")
    .regex(/^(\+250)\d{9}$/, {
      message: "Phone Number must be in the format +2507XXXXXXXX",
    }),
  password: z
    .string({ required_error: "Password is required" })
    .min(6, "Password must be at least 6 characters"),
});

export type SignupFields = z.infer<typeof signupSchema>;
