"use client";

import { motion } from "framer-motion";
import Link from "next/link";

type QuranHeroProps = {
  userName?: string;
  totalSurahs?: number;
  lastRead?: {
    surah: string;
    ayah: number;
  };
  favorites?: number;
  currentJuz?: number;
};

export default function QuranHero({
  userName = "ضيف",
  totalSurahs = 114,
  favorites = 0,
  currentJuz = 1,
  lastRead = {
    surah: "ابدأ القراءة",
    ayah: 0,
  },
}: QuranHeroProps) {
  return (
    <section className="mb-10 overflow-hidden rounded-[32px] bg-gradient-to-br from-slate-900 via-indigo-900 to-violet-800 shadow-2xl">

      <div className="px-8 py-10 lg:px-12 lg:py-12">

        <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: .6 }}
            className="max-w-2xl"
          >

            <span className="rounded-full bg-white/10 px-4 py-2 text-sm font-bold text-white">

              📖 القرآن الكريم

            </span>

            <h1 className="mt-6 text-4xl font-black text-white lg:text-6xl">

              السلام عليكم {userName}

            </h1>

            <p className="mt-5 text-lg leading-9 text-slate-200">

              اقرأ القرآن الكريم، احفظ آخر موضع وصلت إليه،
              وابحث عن أي سورة بسهولة.

            </p>

             className="mt-8 flex flex-wrap gap-4"

              <Link
                href="/quran/read"
                className="rounded-2xl bg-amber-400 px-7 py-4 font-bold text-slate-900 transition hover:scale-105"
              >
                📖 ابدأ القراءة
              </Link>

              <motion.div
              whileHover={{ y: -5 }}
              className="rounded-3xl bg-white/10 border border-white/10 p-6 backdrop-blur-xl"
            >
              <div className="flex items-center justify-between">

                <div>

                  <p className="text-slate-300 text-sm">
                    عدد السور
                  </p>

                  <h3 className="mt-2 text-4xl font-black text-white">
                    {totalSurahs}
                  </h3>

                </div>

                <div className="text-5xl">
                  📚
                </div>

              </div>
            </motion.div>

            <motion.div
              whileHover={{ y: -5 }}
              className="rounded-3xl bg-white/10 border border-white/10 p-6 backdrop-blur-xl"
            >
              <div className="flex items-center justify-between">

                <div>

                  <p className="text-slate-300 text-sm">
                    آخر قراءة
                  </p>

                  <h3 className="mt-2 text-2xl font-bold text-white">
                    {lastRead.surah}
                  </h3>

                  <span className="text-slate-300">
                    الآية {lastRead.ayah}
                  </span>

                </div>

                <div className="text-5xl">
                  📍
                </div>

              </div>
            </motion.div>

            <div className="grid grid-cols-2 gap-5">

              <motion.div
                whileHover={{ y: -5 }}
                className="rounded-3xl bg-white/10 border border-white/10 p-5 text-center backdrop-blur-xl"
              >

               

                <h4 className="mt-3 text-3xl font-black text-white">
                  {favorites}
                </h4>

              

              </motion.div>

              <motion.div
                whileHover={{ y: -5 }}
                className="rounded-3xl bg-white/10 border border-white/10 p-5 text-center backdrop-blur-xl"
              >

                <div className="text-4xl">
                  📖
                </div>

                <h4 className="mt-3 text-3xl font-black text-white">
                  {currentJuz}
                </h4>

                <p className="text-slate-300">
                  الجزء الحالي
                </p>

              </motion.div>

            </div>

          </motion.div>

        </div>

      </div>

    </section>
 ) ;
}