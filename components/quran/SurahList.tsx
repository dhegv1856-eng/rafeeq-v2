"use client";

import { surahs } from "./data";
import SurahCard from "./SurahCard";

type Props = {
  search?: string;
  filter?: "all" | "مكية" | "مدنية";
};

export default function SurahList({
  search = "",
  filter = "all",
}: Props) {
  const query = search.trim().toLowerCase();

  const filtered = surahs.filter((surah) => {
    const matchesSearch =
      query === "" ||
      surah.name.includes(search) ||
      surah.englishName.toLowerCase().includes(query) ||
      surah.id.toString() === query;

    const matchesFilter =
      filter === "all" ||
      surah.revelationType === filter;

    return matchesSearch && matchesFilter;
  });

  if (filtered.length === 0) {
    return (
      <div className="rounded-3xl border border-slate-200 bg-white p-10 text-center">
        <h3 className="text-xl font-bold">
          لا توجد نتائج
        </h3>

        <p className="mt-2 text-slate-500">
          جرب البحث بطريقة أخرى.
        </p>
      </div>
    );
  }

  return (
    <div
      className="
        grid
        gap-6
        sm:grid-cols-2
        xl:grid-cols-3
      "
    >
      {filtered.map((surah) => (
        <SurahCard
          key={surah.id}
          surah={surah}
        />
      ))}
    </div>
  );
}