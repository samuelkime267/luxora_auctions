import { cn } from "@/lib/utils";

type TitleValueProps = {
  title: string;
  value: string;
  className?: string;
};

export default function TitleValue({
  title,
  value,
  className,
}: TitleValueProps) {
  return (
    <div
      className={cn(
        "flex items-start md:items-center justify-start md:gap-2 flex-col md:flex-row",
        className
      )}
    >
      <p className="text-xs capitalize">{title}</p>
      <p>{value}</p>
    </div>
  );
}
