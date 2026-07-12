"use client";

import Image from "next/image";
import { MushafProps } from "./types";

export default function MushafImage({
  page,
}: MushafProps) {
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
      {/* توهج خفيف */}
      <div
        className="
          absolute
          inset-0
          pointer-events-none
          bg-gradient-to-br
          from-white/50
          via-transparent
          to-[#efe6d2]/40
        "
      />

      <Image
        src={`/mushaf/pages/مصحف المدينة النبوية_page-${String(
          page
        ).padStart(4, "0")}.jpg`}
        alt={`صفحة ${page}`}
        width={1200}
        height={1800}
        priority
        draggable={false}
        className="
          relative
          w-full
          rounded-2xl
          select-none
        "
      />
    </div>
  );
}