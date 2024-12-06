"use client";

import React, { useTransition, useState } from "react";
import { useForm } from "react-hook-form";
import { loginSchema } from "../schema/auth.schema";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginAction } from "../actions/login.action";
import { Loader } from "@/components/icons";
import Button from "@/components/Button";
import Input from "@/components/Input";
import Form from "@/components/Form";
import Link from "next/link";
import { Google } from "@/components/icons";
import { signIn } from "next-auth/react";
import { defaultRedirectUrl } from "@/data/routes.data";
import { useSearchParams } from "next/navigation";

type loginFormType = z.infer<typeof loginSchema>;

export default function LoginForm() {
  const [isPending, startTransition] = useTransition();
  const [formError, setFormError] = useState<string | null>(null);
  const searchParams = useSearchParams();
  const urlError =
    searchParams.get("error") === "OAuthAccountNotLinked"
      ? "Email already in use with different provider"
      : null;

  const {
    formState: { errors },
    handleSubmit,
    register,
  } = useForm<loginFormType>({
    resolver: zodResolver(loginSchema),
  });

  const submit = (data: loginFormType) => {
    setFormError(null);

    startTransition(async () => {
      const response = await loginAction(data);
      if (response?.error) {
        setFormError(response.error);
      }
    });
  };

  const signInWithGoogle = () => {
    signIn("google", {
      redirectTo: defaultRedirectUrl.user,
    });
  };

  return (
    <Form
      title="Login to your account"
      description="Please enter your details to login"
      error={formError || urlError}
      onSubmit={handleSubmit(submit)}
    >
      <Button
        type="button"
        disabled={isPending}
        btnType="secondary"
        className="flex justify-center items-center"
        onClick={signInWithGoogle}
      >
        <Google className="w-6 h-6" />
      </Button>

      <div className="w-full flex items-center justify-center gap-1">
        <div className="w-full h-[1px] bg-neutral-300" />
        <p>or</p>
        <div className="w-full h-[1px] bg-neutral-300" />
      </div>

      <Input
        register={register}
        error={errors.email?.message}
        label="email"
        placeholder="Enter your email"
        required
      />
      <div className="w-full grid grid-cols-1">
        <Input
          register={register}
          error={errors.password?.message}
          label="password"
          type="password"
          placeholder="Enter your password"
          required
        />
        <Link
          href="/forgot-password"
          className="text-sm capitalize mt-2 text-right w-full hover:underline"
        >
          forgot password?
        </Link>
      </div>

      <Button
        disabled={isPending}
        btnType="primary"
        className="flex justify-center items-center"
      >
        {isPending ? <Loader className="w-6 h-6" /> : "Login"}
      </Button>

      <Link href={"/register"} className="text-sm text-text/50 text-center">
        {"You don't have an account? "}
        <span className="underline">Create an account</span>
      </Link>
    </Form>
  );
}
