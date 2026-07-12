"use client";

import Link from "next/link";

type Props = {
  icon: string;
  title: string;
  count: number;
  href: string;
};

export default function CategoryItem({
  icon,
  title,
  count,
  href,
}: Props) {
  return (
    <Link
      href={href}
      className="
      flex
      items-center
      justify-between
      rounded-2xl
      px-4
      py-4
      transition
      hover:bg-emerald-50
    "
    >
      <div className="flex items-center gap-3">

        <span className="text-3xl">
          {icon}
        </span>

        <span className="font-bold text-lg">
          {title}
        </span>

      </div>

      <div className="flex items-center gap-3">

        <span className="font-bold text-emerald-700">
          {count}
        </span>

        <span className="text-slate-400">
          ❯
        </span>

      </div>

    </Link>
  );
}