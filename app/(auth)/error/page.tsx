import Link from "next/link";
import Button from "@/components/Button";

export default function Error() {
  return (
    <div className="flex items-center justify-center flex-col gap-8">
      <h3 className="text-center font-grotesk">Oops, something went wrong!</h3>
      <Link href="/">
        <Button btnType="primary">go back to homepage</Button>
      </Link>
    </div>
  );
}
