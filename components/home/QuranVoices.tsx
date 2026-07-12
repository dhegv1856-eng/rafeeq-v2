"use client";

import Image from "next/image";
import Link from "next/link";

import { readers } from "@/data/readers";

export default function QuranVoices() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16">

      <div className="mb-10 text-center">

        <h2 className="text-4xl font-extrabold text-emerald-800">
          🎧 أصوات أشهر القراء
        </h2>

        <p className="mt-3 text-gray-500">
          اختر قارئك المفضل واستمع إلى القرآن الكريم بصوته
        </p>

      </div>

      <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">

        {readers.map((reader) => (

          <Link
            key={reader.name}
            href={`/readers/${reader.id}`}
            className="group overflow-hidden rounded-3xl bg-white shadow-lg transition hover:-translate-y-2 hover:shadow-2xl"
          >

            <div className="relative h-72 w-full">

              <Image
                src={reader.image}
                alt={reader.name}
                fill
                className="object-cover transition duration-500 group-hover:scale-110"
              />

            </div>

            <div className="p-5">

              <h3 className="text-center text-xl font-bold text-emerald-800">
                {reader.name}
              </h3>

              <button className="mt-5 w-full rounded-xl bg-emerald-600 py-3 font-bold text-white">
                ▶️ عرض السور
              </button>

            </div>

          </Link>

        ))}

      </div>

    </section>
  );
}