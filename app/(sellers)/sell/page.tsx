import { auth } from "@/lib/auth";
import TestSignout from "./testSignout";

export default async function Sell() {
  const user = await auth();
  return (
    <div>
      <h6>{JSON.stringify(user)}</h6>
      <p>sell page</p>

      <TestSignout />
    </div>
  );
}
