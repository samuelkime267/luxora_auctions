"use server";
import { z } from "zod";
import { loginSchema } from "../schema/auth.schema";
import db from "@/lib/db";
import bcrypt from "bcryptjs";

export type loginFormType = z.infer<typeof loginSchema>;

export const loginAction = async (data: loginFormType) => {
  try {
    const validatedField = loginSchema.safeParse(data);

    if (!validatedField.success) return { error: validatedField.error.message };

    const { email, password } = validatedField.data;

    const user = await db.user.findUnique({ where: { email } });
    if (!user) return { error: "User does not exist" };
    if (!user.password) return { error: "Check provider used" };

    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) return { error: "Invalid email or password" };

    // session creation here

    return { success: "Login successful" };
  } catch (error) {
    console.log(error);
    return { error: "Something went wrong" };
  }
};
