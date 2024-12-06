"use client";

import React from "react";
import Button from "@/components/Button";
import { signOut } from "next-auth/react";

export default function TestSignout() {
  return (
    <div>
      <Button onClick={() => signOut()} btnType="primary">
        Logout
      </Button>
    </div>
  );
}
