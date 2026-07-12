"use client";

import { useEffect, useRef } from "react";

type VerseProps = {
  verse: any;
  index: number;
  surahId: number;
  surahName: string;
  totalVerses: number;
};

export default function Verse({
  verse,
  index,
  surahId,
  surahName,
  totalVerses,
}: VerseProps) {
  const verseRef = useRef<HTMLSpanElement>(null);

  function saveLastRead() {
    localStorage.setItem(
      "lastRead",
      JSON.stringify({
        surah: surahId,
        ayah: index + 1,
        surahName,
        progress: Math.round(((index + 1) / totalVerses) * 100),
      })
    );

    window.dispatchEvent(new Event("storage"));
  }

  useEffect(() => {
    const element = verseRef.current;

    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          saveLastRead();
        }
      },
      {
        threshold: 0.6,
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <span
      id={`ayah-${index + 1}`}
      ref={verseRef}
      className="cursor-pointer"
    >
      {verse.text_uthmani}

      <span
        className="
          relative
          inline-flex
          items-center
          justify-center
          w-10
          h-10
          mx-2
          align-middle
        "
      >
        <svg
          viewBox="0 0 100 100"
          className="absolute inset-0 w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
        >
          <path
            d="M50 5
               L61 18
               L78 22
               L82 39
               L95 50
               L82 61
               L78 78
               L61 82
               L50 95
               L39 82
               L22 78
               L18 61
               L5 50
               L18 39
               L22 22
               L39 18
               Z"
            stroke="#B9923F"
            strokeWidth="3"
            fill="#FFFDF8"
          />
        </svg>

        <span
          className="
            absolute
            inset-0
            flex
            items-center
            justify-center
            text-[15px]
            font-bold
            text-[#8B6B2E]
          "
        >
          {index + 1}
        </span>
      </span>{" "}
    </span>
  );
}