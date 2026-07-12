"use client";

import useJannahCounts from "@/hooks/useJannahCounter";

export default function TotalHasanat() {
  const counts = useJannahCounts();

  const total =
    counts.trees +
    counts.palms +
    counts.flowers +
    counts.houses +
    counts.treasures +
    counts.palaces +

    counts.subhanallah +
    counts.alhamdulillah +
    counts.takbeer +
    counts.salawat +

    counts.subhanallahWaBihamdih +
    counts.laIlahaIllallah +
    counts.laIlahaIllallahAlhamd +
    counts.alAliAlAzim +
    counts.astaghfirullah +
    counts.hawqala +

    counts.salam +

    counts.fatiha +
    counts.baqarah +
    counts.imran +
    counts.kahf +
    counts.yaseen +
    counts.mulk +
    counts.kafirun +
    counts.ikhlas;

  return (
    <div className="mt-8 rounded-3xl bg-white p-6 shadow-xl">
      <h2 className="text-center text-xl font-bold text-emerald-700">
        ✨ إجمالي الحسنات
      </h2>

      <p className="mt-4 text-center text-6xl font-extrabold text-amber-500">
        {total}
      </p>
    </div>
  );
}