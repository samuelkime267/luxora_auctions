"use server";

import { registerSchema } from "../schema/auth.schema";
import { z } from "zod";
import db from "@/lib/db";
import bcrypt from "bcryptjs";
import { redirect } from "next/navigation";

export const registerAction = async (data: z.infer<typeof registerSchema>) => {
  try {
    const validatedFields = registerSchema.safeParse(data);
    if (!validatedFields.success)
      return { error: validatedFields.error.message };

    const { name, email, password, role } = validatedFields.data;

    const user = await db.user.findUnique({ where: { email } });
    if (user) return { error: "User already exists" };

    const hashedPassword = await bcrypt.hash(password, 10);

    await db.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
        role,
      },
    });

    redirect("/login");
  } catch (error) {
    console.log(error);
    return { error: "Something went wrong" };
  }
};
