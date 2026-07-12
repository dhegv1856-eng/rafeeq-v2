"use client";

import { useState } from "react";

export default function TasbeehPage() {
  const azkar = [
    "سبحان الله",
    "الحمد لله",
    "الله أكبر",
    "لا إله إلا الله",
    "أستغفر الله",
    "سبحان الله وبحمده",
    "سبحان الله العظيم",
    "لا حول ولا قوة إلا بالله",
    "اللهم صل وسلم على نبينا محمد ﷺ",
  ];

  const [count, setCount] = useState(0);
  const [currentZekr, setCurrentZekr] = useState(azkar[0]);

  return (
    <main className="min-h-screen bg-[#F7F6F2] flex items-center justify-center p-6">

      <div
        className="
          w-full
          max-w-md
          rounded-[45px]
          bg-gradient-to-b
          from-emerald-700
          via-emerald-800
          to-emerald-900
          p-6
          shadow-[0_20px_60px_rgba(0,0,0,.35)]
        "
      >

        <div className="text-center text-3xl font-bold text-white">
          📿 السبحة الإلكترونية
        </div>

        <div
          className="
            mt-6
            rounded-3xl
            bg-[#dfe9cf]
            p-5
            shadow-inner
            border-4
            border-emerald-900
          "
        >

          <p className="mb-2 text-center text-sm font-bold text-slate-700">
            الذكر الحالي
          </p>

          <h2 className="text-center text-2xl font-bold text-slate-900">
            {currentZekr}
          </h2>

          <div className="mt-5 rounded-xl bg-[#b7c7a4] p-4">

            <p className="text-center text-6xl font-extrabold tracking-widest text-slate-900">
              {count}
            </p>

          </div>

        </div><div className="mt-8 flex justify-center">

          <button
            onClick={() => setCount((prev) => prev + 1)}
            className="
              relative
              h-56
              w-56
              rounded-full
              bg-gradient-to-br
              from-emerald-600
              via-emerald-700
              to-emerald-900
              border-[12px]
              border-emerald-950
              shadow-[0_15px_40px_rgba(0,0,0,.45)]
              transition-all
              duration-150
              active:scale-95
            "
          >

            <div
              className="
                absolute
                inset-4
                rounded-full
                bg-gradient-to-br
                from-emerald-300
                to-emerald-500
              "
            />

            <div
              className="
                absolute
                inset-8
                rounded-full
                bg-gradient-to-br
                from-emerald-100
                to-emerald-300
                flex
                items-center
                justify-center
                text-5xl
              "
            >
              📿
            </div>

          </button>

        </div>

        <p className="mt-5 text-center text-white/90">
          اضغط على الزر للتسبيح
        </p>

        <div className="mt-8">

          <select
            value={currentZekr}
            onChange={(e) => {
              setCurrentZekr(e.target.value);
              setCount(0);
            }}
            className="
              w-full
              rounded-2xl
              bg-white
              p-4
              text-center
              text-lg
              font-bold
            "
          >
            {azkar.map((item) => (
              <option key={item}>{item}</option>
            ))}
          </select>

        </div><div className="mt-8 flex justify-center">

          <button
            onClick={() => setCount(0)}
            className="
              rounded-full
              bg-red-500
              px-8
              py-3
              text-white
              font-bold
              shadow-lg
              transition-all
              hover:bg-red-600
              active:scale-95
            "
          >
            🔄 RESET
          </button>

        </div>

        <div className="mt-8 text-center text-white/80 text-sm">
          سبح بطمأنينة واجعل لسانك رطبًا بذكر الله 🤍
        </div>

      </div>

    </main>
  );
}