"use client";

import SearchBar from "./SearchBar";
import { surahPages } from "@/data/surahPages";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import MushafImage from "./MushafImage";
import MushafFooter from "./MushafFooter";
import MushafWelcome from "./MushafWelcome";
import { TOTAL_PAGES } from "./types";

export default function MushafViewer() {
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");

  const [showWelcome, setShowWelcome] = useState(false);
  const [dontShowAgain, setDontShowAgain] = useState(false);

  const filteredSurahs = surahPages.filter((surah) =>
    surah.name.includes(search.trim())
  );

  const isPageNumber =
    /^\d+$/.test(search.trim()) &&
    Number(search) >= 1 &&
    Number(search) <= 605;

  // تحميل آخر صفحة + رسالة الترحيب
  useEffect(() => {
    const lastPage = localStorage.getItem("lastMushafPage");

    if (lastPage) {
      setPage(Number(lastPage));
    }

    const hideWelcome = localStorage.getItem("hideMushafWelcome");

    if (!hideWelcome) {
      setShowWelcome(true);
    }
  }, []);

  // حفظ الصفحة الحالية
  useEffect(() => {
    localStorage.setItem("lastMushafPage", page.toString());
  }, [page]);

  function nextPage() {
    if (page < TOTAL_PAGES) {
      setPage((p) => p + 1);
    }
  }

  function prevPage() {
    if (page > 1) {
      setPage((p) => p - 1);
    }
  }

  return (
    <main
      className="
        min-h-screen
        bg-gradient-to-br
        from-[#faf7ef]
        via-[#eee5d4]
        to-[#d9c9ad]
        flex
        justify-center
        items-center
        p-3
      "
    >
      <div
        className="
          w-[98vw]
          max-w-[620px]
        "
      >
        <SearchBar value={search} onChange={setSearch} />

        {search.trim() && (
          <div
            className="
              mt-2
              overflow-hidden
              rounded-2xl
              bg-white
              shadow-lg
              border
              border-slate-200
            "
          >
            {isPageNumber && (
              <button
                onClick={() => {
                  setPage(Number(search));
                  setSearch("");
                }}
                className="
                  flex
                  w-full
                  items-center
                  justify-between
                  px-4
                  py-3
                  bg-emerald-50
                  hover:bg-emerald-100
                  transition
                "
              >
                <span className="font-bold">
                  📄 الانتقال للصفحة
                </span>

                <span className="text-emerald-700 font-bold">
                  {search}
                </span>
              </button>
            )}

            {filteredSurahs.length > 0 ? (
              filteredSurahs.map((surah) => (
                <button
                  key={surah.id}
                  onClick={() => {
                    setPage(surah.page);
                    setSearch("");
                  }}
                  className="
                    flex
                    w-full
                    items-center
                    justify-between
                    px-4
                    py-3
                    hover:bg-emerald-50
                    transition
                  "
                >
                  <span className="font-bold">
                    {surah.name}
                  </span>

                  <span className="text-sm text-slate-500">
                    صفحة {surah.page}
                  </span>
                </button>
              ))
            ) : (
              <div className="p-4 text-center text-slate-500">
                لا توجد نتائج
              </div>
            )}
          </div>
        )}

        {showWelcome && (
          <MushafWelcome
            dontShow={dontShowAgain}
            setDontShow={setDontShowAgain}
            onClose={() => {
              if (dontShowAgain) {
                localStorage.setItem(
                  "hideMushafWelcome",
                  "true"
                );
              }

              setShowWelcome(false);
            }}
          />
        )}

        <AnimatePresence mode="wait">
          <motion.div
            key={page}
            initial={{
              opacity: 0,
              x: 40,
              scale: 0.98,
            }}
            animate={{
              opacity: 1,
              x: 0,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              x: -40,
              scale: 0.98,
            }}
            transition={{
              duration: 0.25,
            }}
            onClick={(e) => {
              if (e.clientX > window.innerWidth / 2) {
                nextPage();
              } else {
                prevPage();
              }
            }}
          >
            <MushafImage page={page} />
          </motion.div>
        </AnimatePresence>

        <MushafFooter page={page} />
      </div>
    </main>
  );
}