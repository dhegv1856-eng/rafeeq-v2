"use client";

import { motion } from "framer-motion";

type FavoriteSurah = {
  id: number;
  name: string;
};

type FavoritesProps = {
  items?: FavoriteSurah[];
};

export default function Favorites({
  items = [
    { id: 18, name: "الكهف" },
    { id: 36, name: "يس" },
    { id: 67, name: "الملك" },
  ],
}: FavoritesProps) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      className="
        rounded-3xl
        border
        border-slate-200
        bg-white
        p-6
        shadow-sm
      "
    >
      <div className="flex items-center justify-between">

        <h2 className="text-2xl font-black text-slate-900">
          ⭐ السور المفضلة
        </h2>

        <span className="rounded-full bg-amber-100 px-4 py-2 text-sm font-bold text-amber-700">
          {items.length} سورة
        </span>

      </div>

      <div className="mt-6 flex flex-wrap gap-3">

        {items.map((surah) => (

          <button
            key={surah.id}
            className="
              rounded-2xl
              bg-slate-100
              px-5
              py-3
              font-bold
              text-slate-700
              transition-all
              hover:-translate-y-1
              hover:bg-amber-100
              hover:text-amber-700
            "
          >
            ⭐ {surah.name}
          </button>

        ))}

      </div>

      {items.length === 0 && (
        <p className="mt-6 text-center text-slate-500">
          لم تقم بإضافة أي سورة إلى المفضلة بعد.
        </p>
      )}

    </motion.section>
  );
}