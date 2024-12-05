import * as z from "zod";

const role = z.enum(["ADMIN", "USER"]);

export const loginSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
  password: z.string().min(1, { message: "Password is required" }),
});

const passwordMsg =
  "Password must be at least 6 characters long, contain at least one lowercase letter, one uppercase letter, one number and one special character";

export const registerSchema = z
  .object({
    name: z
      .string()
      .min(3, { message: "Name must be at least 3 characters long" }),
    email: z.string().email({ message: "Invalid email address" }),
    password: z
      .string()
      .min(6, {
        message: passwordMsg,
      })
      .regex(/[a-z]/, {
        message: passwordMsg,
      })
      .regex(/[A-Z]/, {
        message: passwordMsg,
      })
      .regex(/\d/, {
        message: passwordMsg,
      })
      .regex(/[\W_]/, {
        message: passwordMsg,
      }),
    confirmPassword: z.string(),
    role: role.optional(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });
