"use server";
import { z } from "zod";
import { loginSchema } from "../schema/auth.schema";
import { signIn } from "@/lib/auth";
import { defaultRedirectUrl } from "@/data/routes.data";
import { AuthError } from "next-auth";

export type loginFormType = z.infer<typeof loginSchema>;

export const loginAction = async (data: loginFormType) => {
  try {
    const validatedField = loginSchema.safeParse(data);

    if (!validatedField.success) return { error: validatedField.error.message };

    const { email, password } = validatedField.data;

    await signIn("credentials", {
      email,
      password,
      redirectTo: defaultRedirectUrl.user,
    });
  } catch (error) {
    if (error instanceof AuthError) {
      if (error.type === "CredentialsSignin")
        return { error: "Invalid credentials!" };

      return { error: "Something went wrong!" };
    }
    throw error;
  }
};
