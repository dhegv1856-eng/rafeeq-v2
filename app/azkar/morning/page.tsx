"use client";

import { useState } from "react";
import morningAzkar from "@/data/morningAzkar";

export default function MorningAzkarPage() {
  const [currentZekr, setCurrentZekr] = useState(0);
  const [count, setCount] = useState(morningAzkar[0].count);

  const current = morningAzkar[currentZekr];

  const benefits: Record<number, string> = {
    1: "قراءة آية الكرسي سبب للحفظ بإذن الله حتى يمسي المسلم.",
    2: "سورة الإخلاص تعدل ثلث القرآن.",
    3: "سورة الفلق استعاذة بالله من الشرور.",
    4: "سورة الناس تحفظ من وساوس الشيطان.",
    5: "يجدد هذا الذكر التوكل على الله ويملأ القلب طمأنينة.",
    6: "سيد الاستغفار من أعظم أسباب المغفرة.",
    7: "من قاله ثلاث مرات رضي بالله ربًا وبالإسلام دينًا وبمحمد ﷺ نبيًا.",
    8: "دعاء جامع للعفو والعافية والحفظ.",
    9: "استعانة بالله وإصلاح لجميع شؤون الحياة.",
    10: "تجديد للفطرة والإيمان.",
    11: "تفويض الأمر لله مع بداية اليوم.",
    12: "حفظ من شر النفس والشيطان.",
    13: "سبب للحفظ من الضرر بإذن الله.",
    14: "دعاء للعافية في الدين والدنيا.",
    15: "من قاله سبع مرات كفاه الله ما أهمه.",
    16: "ذكر عظيم يثقل الميزان.",
    17: "دعاء لطلب العلم النافع والرزق الطيب.",
    18: "الاستغفار سبب لمغفرة الذنوب.",
    19: "من أحب الأذكار إلى الله.",
    20: "له أجر عظيم ومغفرة للذنوب.",
    21: "الصلاة على النبي ﷺ سبب لنيل رحمة الله.",
  };

  function handleDone() {
    if (count > 1) {
      setCount(count - 1);
      return;
    }

    if (currentZekr < morningAzkar.length - 1) {
      const next = currentZekr + 1;
      setCurrentZekr(next);
      setCount(morningAzkar[next].count);
      return;
    }

    setCount(0);
  }

  const finished =
    currentZekr === morningAzkar.length - 1 &&
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
            لقد أتممت أذكار الصباح كاملة.
          </p>

          <button
            onClick={() => {
              setCurrentZekr(0);
              setCount(morningAzkar[0].count);
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
          🌅 أذكار الصباح
        </h1>

        <p className="mb-8 text-center text-slate-500">
          حافظ على وردك اليومي واذكر الله بقلب حاضر
        </p>

        <div className="mb-8 h-3 overflow-hidden rounded-full bg-slate-200">

          <div
            className="h-full rounded-full bg-emerald-600 transition-all duration-500"
            style={{
              width: `${((currentZekr + 1) / morningAzkar.length) * 100}%`,
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


          <div className="mb-6 flex items-center justify-between pr-6">

            <div className="rounded-full bg-emerald-100 px-5 py-2 font-bold text-emerald-800">
              الذكر {currentZekr + 1} من {morningAzkar.length}
            </div>

          <div className="rounded-full bg-amber-100 px-5 py-2 mr-4 font-bold text-amber-800">
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
