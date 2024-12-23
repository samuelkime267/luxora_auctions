import { Suspense } from "react";
import LoginForm from "@/features/authentication/components/LoginForm";

export default function Login() {
  return (
    <div className="flex items-center justify-center w-full">
      <Suspense>
        <LoginForm />
      </Suspense>
    </div>
  );
}
