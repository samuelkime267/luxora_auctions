import type { NextAuthConfig } from "next-auth";
import Google from "next-auth/providers/google";
import Credentials from "next-auth/providers/credentials";
import { getUserByEmail } from "./db";
import bcrypt from "bcryptjs";
import { loginSchema } from "@/features/authentication/schema/auth.schema";

export default {
  providers: [
    Google({
      clientId: process.env.AUTH_GOOGLE_ID,
      clientSecret: process.env.AUTH_GOOGLE_SECRET,
    }),
    Credentials({
      async authorize(credentials) {
        try {
          const validatedFields = loginSchema.safeParse(credentials);
          if (!validatedFields.success) return null;

          const { email, password } = validatedFields.data;

          const user = await getUserByEmail(email);

          if (!user || !user.password) return null;

          const isMatch = await bcrypt.compare(password, user.password);

          if (!isMatch) return null;

          return user;
        } catch {
          return null;
        }
      },
    }),
  ],
} satisfies NextAuthConfig;
