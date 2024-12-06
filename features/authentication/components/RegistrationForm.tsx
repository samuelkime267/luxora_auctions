"use client";

import React, { useTransition, useState } from "react";
import { useForm } from "react-hook-form";
import { registerSchema } from "../schema/auth.schema";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerAction } from "../actions/register.action";
import { Google, Loader } from "@/components/icons";
import Button from "@/components/Button";
import Input from "@/components/Input";
import Form from "@/components/Form";
import Link from "next/link";
import { signIn } from "next-auth/react";
import { defaultRedirectUrl } from "@/data/routes.data";
import { useSearchParams } from "next/navigation";

type registrationFormType = z.infer<typeof registerSchema>;

export default function RegistrationForm() {
  const [isPending, startTransition] = useTransition();
  const [formError, setFormError] = useState<string | null>(null);
  const [formSuccess, setFormSuccess] = useState<string | null>(null);
  const searchParams = useSearchParams();
  const urlError =
    searchParams.get("error") === "OAuthAccountNotLinked"
      ? "Email already in use with different provider"
      : null;

  const {
    formState: { errors },
    handleSubmit,
    register,
    setError,
  } = useForm<registrationFormType>({
    resolver: zodResolver(registerSchema),
  });

  const submit = (data: registrationFormType) => {
    setFormError(null);
    setFormSuccess(null);

    if (data.password !== data.confirmPassword) {
      setError("confirmPassword", { message: "Passwords do not match" });
    } else {
      startTransition(async () => {
        const response = await registerAction(data);
        if (response?.error) {
          setFormError(response.error);
        }
      });
    }
  };

  const signInWithGoogle = () => {
    signIn("google", {
      redirectTo: defaultRedirectUrl.user,
    });
  };

  return (
    <Form
      title="Create an account"
      description="Please enter your details to proceed"
      success={formSuccess}
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
        error={errors.name?.message}
        label="name"
        placeholder="Enter your name"
        required
      />
      <Input
        register={register}
        error={errors.email?.message}
        label="email"
        placeholder="Enter your email"
        required
      />
      <Input
        register={register}
        error={errors.password?.message}
        label="password"
        type="password"
        placeholder="Enter your password"
        required
      />
      <Input
        register={register}
        error={errors.confirmPassword?.message}
        label="confirmPassword"
        labelText="confirm password"
        type="password"
        placeholder="Enter your password"
        required
      />

      <Button
        disabled={isPending}
        btnType="primary"
        className="flex justify-center items-center"
      >
        {isPending ? <Loader className="w-6 h-6" /> : "create account"}
      </Button>

      <Link href={"/login"} className="text-sm text-text/50 text-center">
        {"Already have an account? "}
        <span className="underline">Login</span>
      </Link>
    </Form>
  );
}
