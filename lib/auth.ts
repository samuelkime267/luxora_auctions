import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import Credentials from "next-auth/providers/credentials";
import db from "./db";
import bcrypt from "bcryptjs";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Google({
      clientId: process.env.AUTH_GOOGLE_ID,
      clientSecret: process.env.AUTH_GOOGLE_SECRET,
    }),
    Credentials({
      name: "credentials",
      credentials: {
        name: { label: "name", type: "text" },
        email: { label: "email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials.email || !credentials.password || !credentials.name)
          return null;

        const email = credentials.email as string;

        let user = await db.user.findUnique({ where: { email } });

        if (user) return null;

        const hashedPassword = await bcrypt.hash(
          credentials.password as string,
          10
        );
        user = await db.user.create({
          data: {
            name: credentials.name as string,
            email: credentials.email as string,
            password: hashedPassword,
          },
        });
        // write remaining login login here

        return user; //obob update this code
      },
    }),
  ],
});
