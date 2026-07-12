"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

type LastReadData = {
  surah: number;
  ayah: number;
  surahName: string;
  progress: number;
};

export default function LastRead() {
  const [lastRead, setLastRead] =
    useState<LastReadData | null>(null);

  useEffect(() => {
    const loadLastRead = () => {
      const saved = localStorage.getItem("lastRead");

      if (saved) {
        setLastRead(JSON.parse(saved));
      }
    };

    loadLastRead();

    window.addEventListener("storage", loadLastRead);

    return () => {
      window.removeEventListener("storage", loadLastRead);
    };
  }, []);

  if (!lastRead) {
    return null;
  }

  return (
    <div
      className="
        rounded-3xl
        border
        border-emerald-100
        bg-gradient-to-r
        from-emerald-50
        to-white
        p-6
        shadow-md
      "
    >
      <div className="flex items-center justify-between">

        <div>

          <p className="text-sm text-slate-500">
            📖 آخر قراءة
          </p>

          <h2 className="mt-2 text-2xl font-bold text-emerald-800">
            سورة {lastRead.surahName}
          </h2>

          <p className="mt-2 text-slate-600">
            الآية {lastRead.ayah}
          </p>

        </div>

        <Link
          href={`/quran/${lastRead.surah}#ayah-${lastRead.ayah}`}
          className="
            rounded-2xl
            bg-emerald-700
            px-6
            py-3
            font-bold
            text-white
            transition
            hover:bg-emerald-800
          "
        >
          متابعة القراءة
        </Link>

      </div>

      <div className="mt-5">

        <div className="mb-2 flex justify-between text-sm">

          <span>التقدم</span>

          <span>{lastRead.progress}%</span>

        </div>

        <div className="h-2 rounded-full bg-emerald-100">

          <div
            className="h-2 rounded-full bg-emerald-700 transition-all duration-500"
            style={{
              width: `${lastRead.progress}%`,
            }}
          />

        </div>

      </div>

    </div>
  );
}