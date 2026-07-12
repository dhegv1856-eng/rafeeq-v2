"use client";

type Props = {
  onClose: () => void;
  dontShow: boolean;
  setDontShow: (value: boolean) => void;
};

export default function MushafWelcome({
  onClose,
  dontShow,
  setDontShow,
}: Props) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-5">

      <div className="w-full max-w-md rounded-3xl bg-white p-7 shadow-2xl">

        <h2 className="text-center text-3xl font-black text-emerald-700">
          🌿 أهلاً بك
        </h2>

        <p className="mt-3 text-center text-slate-600">
          مرحبًا بك في مصحف <strong>رفيق</strong>
        </p>

        <div className="my-6 space-y-5 rounded-2xl bg-emerald-50 p-5">

          <div>
            <p className="font-bold">
              👉 اضغط على النصف الأيمن
            </p>

            <p className="text-slate-600">
              للانتقال إلى الصفحة التالية.
            </p>
          </div>

          <div>
            <p className="font-bold">
              👈 اضغط على النصف الأيسر
            </p>

            <p className="text-slate-600">
              للرجوع إلى الصفحة السابقة.
            </p>
          </div>

          <div>
            <p className="font-bold">
              🔍 البحث
            </p>

            <p className="text-slate-600">
              يمكنك البحث باسم السورة أو رقم الصفحة.
            </p>
          </div>

        </div>

        <label className="flex cursor-pointer items-center gap-2">

          <input
            type="checkbox"
            checked={dontShow}
            onChange={(e) => setDontShow(e.target.checked)}
          />

          <span>لا تظهر هذه الرسالة مرة أخرى</span>

        </label>

        <button
          onClick={onClose}
          className="mt-6 w-full rounded-2xl bg-emerald-600 py-3 text-lg font-bold text-white transition hover:bg-emerald-700"
        >
          ابدأ القراءة 📖
        </button>

      </div>

    </div>
  );
}