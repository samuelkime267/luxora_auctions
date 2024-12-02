type TitleValueProps = {
  title: string;
  value: string;
};

export default function TitleValue({ title, value }: TitleValueProps) {
  return (
    <div className="flex items-start md:items-center justify-start md:gap-2 flex-col md:flex-row">
      <p className="text-xs capitalize">{title}</p>
      <p>{value}</p>
    </div>
  );
}
