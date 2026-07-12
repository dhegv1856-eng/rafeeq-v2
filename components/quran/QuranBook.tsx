"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const TOTAL_PAGES = 605;

export default function MushafViewer() {
  const [page, setPage] = useState(1);
  const [direction, setDirection] = useState(1);

  useEffect(() => {
    const last = localStorage.getItem("lastPage");

    if (last) {
      setPage(Number(last));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("lastPage", page.toString());
  }, [page]);

  function nextPage() {
    if (page >= TOTAL_PAGES) return;

    setDirection(1);
    setPage((p) => p + 1);
  }

  function prevPage() {
    if (page <= 1) return;

    setDirection(-1);
    setPage((p) => p - 1);
  }

  return (
    <div className="w-full min-h-screen bg-[#ece6d8] flex flex-col items-center justify-center">

      <div className="w-full max-w-md px-2">

        <AnimatePresence mode="wait">

         <img
  src={`https://rafeeq-pages.b-cdn.net/pages/${String(page).padStart(4, "0")}.jpg`}
  className="w-full rounded-xl shadow-2xl"
  alt={`صفحة ${page}`}
/>

        </AnimatePresence>

      </div>

      <div className="mt-5 flex gap-5">

        <button
          onClick={nextPage}
          className="bg-emerald-700 text-white px-5 py-2 rounded-xl"
        >
          التالي
        </button>

        <span className="font-bold text-xl">
          {page} / {TOTAL_PAGES}
        </span>

        <button
          onClick={prevPage}
          className="bg-emerald-700 text-white px-5 py-2 rounded-xl"
        >
          السابق
        </button>

      </div>

    </div>
  );
}