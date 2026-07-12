"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Card from "@/components/common/Card";
import Badge from "@/components/common/Badge";
import type { Surah } from "./data";

type Props = {
  surah: Surah;
};

const themes = {
  emerald: {
    bg: "from-emerald-50 to-emerald-100",
    border: "border-emerald-200",
    text: "text-emerald-900",
    badge: "bg-emerald-100 text-emerald-800",
    button: "bg-emerald-700 hover:bg-emerald-800",
    progress: "bg-emerald-600",
  },

  indigo: {
    bg: "from-indigo-50 to-indigo-100",
    border: "border-indigo-200",
    text: "text-indigo-900",
    badge: "bg-indigo-100 text-indigo-800",
    button: "bg-indigo-700 hover:bg-indigo-800",
    progress: "bg-indigo-600",
  },

  amber: {
    bg: "from-amber-50 to-yellow-100",
    border: "border-yellow-200",
    text: "text-yellow-900",
    badge: "bg-yellow-100 text-yellow-800",
    button: "bg-yellow-700 hover:bg-yellow-800",
    progress: "bg-yellow-600",
  },

  rose: {
    bg: "from-rose-50 to-pink-100",
    border: "border-rose-200",
    text: "text-rose-900",
    badge: "bg-rose-100 text-rose-800",
    button: "bg-rose-700 hover:bg-rose-800",
    progress: "bg-rose-600",
  },

  cyan: {
    bg: "from-cyan-50 to-sky-100",
    border: "border-cyan-200",
    text: "text-cyan-900",
    badge: "bg-cyan-100 text-cyan-800",
    button: "bg-cyan-700 hover:bg-cyan-800",
    progress: "bg-cyan-600",
  },

  violet: {
    bg: "from-violet-50 to-purple-100",
    border: "border-violet-200",
    text: "text-violet-900",
    badge: "bg-violet-100 text-violet-800",
    button: "bg-violet-700 hover:bg-violet-800",
    progress: "bg-violet-600",
  },
};

export default function SurahCard({
  surah,
}: Props) {

  const theme = themes[surah.theme];

  return (
    <motion.div
      whileHover={{ y: -6 }}
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: .3 }}
    >

      <Card
        className={`
          overflow-hidden
          border
          ${theme.border}
          bg-gradient-to-br
          ${theme.bg}
          shadow-md
          hover:shadow-xl
          transition-all
          duration-300
        `}
      >

        <div className="relative p-4 md:p-6">

          <div
            className="
              absolute
              -left-10
              -top-10
              h-40
              w-40
              rounded-full
              bg-white/30
              blur-2xl
            "
          />

          <div className="relative flex items-start justify-between">

            <div
              className="
                flex
                h-12
                w-12
                items-center
                justify-center
                rounded-full
                bg-white/70
                text-lg
                font-black
                shadow
              "
            >
              {surah.id}
            </div>

            <button
              className="
                text-xl
                text-yellow-500
                hover:scale-110
                transition
              "
            >
              {surah.favorite ? "★" : "☆"}
            </button>

          </div>

          <h2
            className={`
              mt-6
              text-2xl md:text-3xl
              font-black
              ${theme.text}
            `}
          >
            {surah.name}
          </h2>

          <p className="mt-1 text-sm text-slate-500">
            {surah.englishName}
          </p>

          <div className="mt-3flex gap-2 flex-wrap">

          </div>
          <div className="mt-5 flex flex-wrap gap-2">

            <Badge
              color={
                surah.revelationType === "مكية"
                  ? "emerald"
                  : "amber"
              }
            >
              🕌 {surah.revelationType}
            </Badge>

            <Badge color="slate">
              📖 {surah.ayahs} آية
            </Badge>

          </div>

          <div className="mt-6">

            <div className="mb-2 flex items-center justify-between text-sm text-slate-500">

              <span>التقدم</span>

              <span>{surah.progress}%</span>

            </div>

            <div className="h-2 overflow-hidden rounded-full bg-white/70">

              <div
                className={`
                  h-full
                  rounded-full
                  ${theme.progress}
                `}
                style={{
                  width: `${surah.progress}%`,
                }}
              />

            </div>

          </div>

          <Link
            href={`/quran/${surah.id}`}
            className={`
              mt-5
              flex
              items-center
              justify-center
              rounded-xl
              px-4
              py-2.5
              font-bold
              text-white
              shadow-md
              transition-all
              duration-300
              hover:scale-[1.02]
              ${theme.button}
            `}
          >
            📖 اقرأ السورة
          </Link>

        </div>

      </Card>

    </motion.div>
  );
}