"use client";

type Props = {
  title: string;
  total: number;
  children: React.ReactNode;
  className?: string;
};

export default function CategoryCard({
  title,
  total,
  children,
  className = "",
}: Props) {
  return (
    <div
      className={`
        mt-8
        overflow-hidden
        rounded-3xl
        border
        shadow-md
        ${className}
      `}
    >
      <div className="relative flex items-center justify-center px-5 py-4 text-white">

        {/* العنوان */}
        <h2 className="text-2xl font-bold text-center">
          {title}
        </h2>

        {/* العداد */}
        <div className="absolute left-4 rounded-full bg-white px-4 py-2 text-lg font-bold text-slate-700 shadow">
          {total}
        </div>

      </div>

      <div className="bg-white p-4 space-y-2">
        {children}
      </div>
    </div>
  );
}