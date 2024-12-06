import { Suspense } from "react";
import RegistrationForm from "@/features/authentication/components/RegistrationForm";

export default function Register() {
  return (
    <div className="flex items-center justify-center w-full">
      <Suspense>
        <RegistrationForm />
      </Suspense>
    </div>
  );
}
