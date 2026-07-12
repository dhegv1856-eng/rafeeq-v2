type BadgeProps = {
  children: React.ReactNode;
  color?:
    | "indigo"
    | "emerald"
    | "amber"
    | "rose"
    | "slate";
};

const colors = {
  indigo: "bg-indigo-100 text-indigo-700",
  emerald: "bg-emerald-100 text-emerald-700",
  amber: "bg-amber-100 text-amber-700",
  rose: "bg-rose-100 text-rose-700",
  slate: "bg-slate-100 text-slate-700",
};

export default function Badge({
  children,
  color = "indigo",
}: BadgeProps) {
  return (
    <span
      className={`
        inline-flex
        items-center
        rounded-full
        px-3
        py-1
        text-sm
        font-semibold
        ${colors[color]}
      `}
    >
      {children}
    </span>
  );
}