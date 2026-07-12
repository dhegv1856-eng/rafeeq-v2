"use client";

import { useRouter } from "next/navigation";
import useCounter from "@/hooks/useCounter";

type Props = {
  counterKey: string;
};

export default function Counter({ counterKey }: Props) {
  const {
    count,
    todayCount,
    increase,
    decrease,
  } = useCounter(counterKey);
  const router = useRouter();

  return (
    <>
      <div className="mt-8 rounded-3xl bg-white p-8 shadow-xl">

        <h2 className="text-center text-xl font-bold text-emerald-700">
          العداد
        </h2>

        <p className="mt-6 text-center text-7xl font-extrabold text-emerald-700">
          {count}
        </p>

      </div>

      <div className="mt-8 rounded-3xl bg-white p-8 shadow-xl">

        <h2 className="text-center text-xl font-bold text-emerald-700">
          الذكر
        </h2>

        <div className="mt-8 flex gap-4">

         <button
  onClick={() => {
    increase();
    router.refresh();
  }}
  className="flex-1 rounded-3xl bg-emerald-600 py-5 text-5xl font-bold text-white"
>
  +
</button>

         <button
  onClick={() => {
    decrease();
    router.refresh();
  }}
  className="w-24 rounded-3xl bg-red-500 text-5xl text-white"
>
  −
</button>

        </div>

      </div>

      <div className="mt-8 rounded-3xl bg-white p-6 shadow-xl">

        <h3 className="text-center text-lg font-bold text-slate-700">
          إحصائيات اليوم
        </h3>

        <div className="mt-6 flex justify-between">
          <span>اليوم</span>
          <span>{todayCount}</span>
        </div>

        <div className="mt-4 flex justify-between">
          <span>الإجمالي</span>
          <span>{count}</span>
        </div>

      </div>
    </>
  );
}