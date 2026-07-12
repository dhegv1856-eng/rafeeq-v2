"use client";

import Link from "next/link";
import { use, useState } from "react";

import { readers } from "@/data/readers";
import { surahs } from "@/data/surahs";
import AudioPlayer from "@/components/readers/AudioPlayer";


type Props = {
  params: Promise<{
    name: string;
  }>;
};

export default function ReaderPage({
  params,
}: Props) {

  const { name } = use(params);

  const reader = readers.find(
    (r) => String(r.id) === String(name)
  );

  const [audioUrl, setAudioUrl] = useState("");
  const [currentSurah, setCurrentSurah] = useState("");

  if (!reader) {
    return (
      <div className="flex min-h-screen items-center justify-center text-2xl font-bold">
        لم يتم العثور على القارئ
      </div>
    );
  }

  function playSurah(
    number: string,
    surahName: string
  ) {

    if (!reader) return;

    setAudioUrl(
      `${reader.server}${number}.mp3`
    );

    setCurrentSurah(surahName);

  }

  return (<main className="min-h-screen bg-[#F7F6F2]">

  <div className="mx-auto max-w-5xl p-6">

    <Link
      href="/"
      className="mb-8 inline-flex items-center rounded-xl bg-white px-5 py-3 shadow hover:bg-emerald-50"
    >
      ← الرجوع للرئيسية
    </Link>

    <h1 className="mb-10 text-center text-4xl font-extrabold text-emerald-800">
      🎧 {reader.name}
    </h1>

    <div className="grid gap-4">

      {surahs.map((surah, index) => {

        const number = String(index + 1).padStart(3, "0");

        return (

          <button
            key={number}
            onClick={() => playSurah(number, surah)}
            className="flex items-center justify-between rounded-2xl bg-white p-5 shadow transition hover:bg-emerald-50"
          >

            <span className="font-bold text-emerald-700">
              {index + 1}
            </span>

            <span className="text-xl font-bold">
              {surah}
            </span>

            <span className="text-2xl">
              ▶️
            </span>

          </button>

        );

      })}

    </div>

    <AudioPlayer
      audioUrl={audioUrl}
      surahName={currentSurah}
      readerName={reader.name}
    />

  </div>

</main>);
}