"use client";

import { MushafProps } from "./types";

export default function MushafImage({ page }: MushafProps) {
  return (
    <div
      className="
        relative
        overflow-hidden
        rounded-[34px]
        border-2
        border-[#d8c79b]
        bg-[#fbf9f2]
        p-3
        shadow-[0_35px_80px_rgba(0,0,0,.22)]
      "
    >
      <img
        src={`https://rafeeq-pages.b-cdn.net/pages/${String(page).padStart(4, "0")}.jpg`}
        alt={`صفحة ${page}`}
        draggable={false}
        className="
          w-full
          rounded-2xl
          select-none
        "
      />
    </div>
  );
}