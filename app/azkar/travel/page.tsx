"use client";

import { useState } from "react";

import travelAzkar from "@/data/travelAzkar";

export default function TravelAzkarPage() {
  const [currentZekr, setCurrentZekr] = useState(0);
  const [count, setCount] = useState(travelAzkar[0].count);

  const current = travelAzkar[currentZekr];

  function handleDone() {
    if (count > 1) {
      setCount(count - 1);
      return;
    }

    if (currentZekr < travelAzkar.length - 1) {
      const next = currentZekr + 1;
      setCurrentZekr(next);
      setCount(travelAzkar[next].count);
      return;
    }

    setCount(0);
  }

  const finished =
    currentZekr === travelAzkar.length - 1 &&
    count === 0;

  if (finished) {
    return (
      <main className="min-h-screen bg-[#F7F6F2] flex items-center justify-center px-5">
        <div className="max-w-xl rounded-[35px] bg-white p-10 text-center shadow-xl">

          <div className="mb-6 text-7xl">
            🌿
          </div>

          <h1 className="text-4xl font-bold text-emerald-800">
            تقبل الله منك
          </h1>

          <p className="mt-4 text-lg leading-9 text-slate-600">
            لقد أتممت  أذكار السفر كاملة.
          </p>

          <button
            onClick={() => {
              setCurrentZekr(0);
              setCount(travelAzkar[0].count);
            }}
            className="mt-8 rounded-2xl bg-emerald-700 px-8 py-4 text-lg font-bold text-white"
          >
            إعادة الأذكار
          </button>

        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#F7F6F2] py-8 px-4">

      <div className="mx-auto max-w-4xl">

        <h1 className="mb-2 text-center text-4xl font-extrabold text-emerald-800">
          🚗 أذكار السفر
        </h1>

        <p className="mb-8 text-center text-slate-500">
          حافظ على وردك اليومي واذكر الله بقلب حاضر
        </p>

        <div className="mb-8 h-3 overflow-hidden rounded-full bg-slate-200">

          <div
            className="h-full rounded-full bg-emerald-600 transition-all duration-500"
            style={{
              width: `${((currentZekr + 1) / travelAzkar.length) * 100}%`,
            }}
          />

        </div>

        <div
  className="
    rounded-[35px]
    bg-white
    shadow-xl
    p-10
    min-h-[75vh]
    flex
    flex-col
  "
>


          <div className="mb-8 flex items-center justify-between">

            <div className="rounded-full bg-emerald-100 px-5 py-2 font-bold text-emerald-800">
              الذكر {currentZekr + 1} من {travelAzkar.length}
            </div>

            <div className="rounded-full bg-amber-100 px-5 py-2 font-bold text-amber-800">
              🔁 المتبقي {count}
            </div>

          </div>

          <div className="flex-1 flex items-center justify-center">

            <p
              className="max-w-3xl text-center text-[32px] leading-[2.3] text-slate-800"
              style={{
                fontFamily:
                  "'Amiri','Scheherazade New','Noto Naskh Arabic',serif",
              }}
            >
              {current.text}
            </p>

          </div>
          <div
            className="
              mt-8
              rounded-3xl
              border
              border-emerald-200
              bg-emerald-50
              p-6
            "
          >
            <h2 className="mb-3 text-center text-2xl font-bold text-emerald-800">
              🌿 فضل هذا الذكر
            </h2>

            <p className="text-center text-lg leading-9 text-emerald-900">
            {current.benefit} || {"من أفضل الأذكار التي تقرب العبد إلى الله وتملأ القلب طمأنينة."}
            </p>

          </div>

          <div className="mt-10 flex justify-center">

            <button
              onClick={handleDone}
              className="
                rounded-2xl
                bg-emerald-700
                px-12
                py-4
                text-xl
                font-bold
                text-white
                shadow-lg
                transition-all
                duration-300
                hover:bg-emerald-800
                hover:scale-105
                active:scale-95
              "
            >
              ✓ تم
            </button>

          </div>

        </div>

      </div>
      </main>
  );
}