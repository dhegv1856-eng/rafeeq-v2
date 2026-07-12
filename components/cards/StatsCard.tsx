"use client";

export default function Stats() {
  return (
    <section className="pb-28 px-5">

      <div className="container mx-auto">

        <div className="grid gap-6 lg:grid-cols-2">

        </div>
        {/* Last Read */}

          <div className="rounded-[28px] bg-white/80 backdrop-blur-xl border border-white p-7 shadow-lg">

            <div className="text-4xl">📖</div>

            <h3 className="mt-5 text-2xl font-black">
              آخر قراءة
            </h3>

            <p className="mt-3 text-slate-600 leading-8">
              لم تبدأ القراءة بعد.
            </p>

            <button className="mt-6 rounded-2xl bg-emerald-600 px-6 py-3 font-bold text-white transition hover:bg-emerald-700">
              ابدأ القراءة
            </button>

          </div>

          {/* Dua */}

          <div className="rounded-[28px] bg-white/80 backdrop-blur-xl border border-white p-7 shadow-lg">

            <div className="text-4xl">🤲</div>

            <h3 className="mt-5 text-2xl font-black">
              دعاء اليوم
            </h3>

            <p className="mt-3 leading-8 text-slate-600">
              اللهم أعني على ذكرك وشكرك وحسن عبادتك.
            </p>

            <button className="mt-6 rounded-2xl border border-emerald-600 px-6 py-3 font-bold text-emerald-600 transition hover:bg-emerald-50">
              نسخ الدعاء
            </button>

          </div>

          {/* Achievements */}

          <div className="rounded-[28px] bg-white/80 backdrop-blur-xl border border-white p-7 shadow-lg">

            <div className="text-4xl">🏆</div>

            <h3 className="mt-5 text-2xl font-black">
              الإنجازات
            </h3>

            <p className="mt-3 text-slate-600">
              لا توجد إنجازات حتى الآن.
            </p>

          </div>

          {/* Statistics */}

          <div className="rounded-[28px] bg-white/80 backdrop-blur-xl border border-white p-7 shadow-lg">

            <div className="text-4xl">📊</div>

            <h3 className="mt-5 text-2xl font-black">
              الإحصائيات
            </h3>

            <p className="mt-3 text-slate-600">
              ستظهر بياناتك بعد بدء استخدام رفيق.
            </p>

          </div>

        </div>

      

    </section>
  );
}