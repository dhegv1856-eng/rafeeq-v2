"use client";

interface AudioPlayerProps {
  audioUrl: string;
  surahName: string;
  readerName: string;
}

export default function AudioPlayer({
  audioUrl,
  surahName,
  readerName,
}: AudioPlayerProps) {
  if (!audioUrl) return null;

  return (
    <div className="fixed bottom-5 left-1/2 z-50 w-[95%] max-w-3xl -translate-x-1/2 rounded-3xl border border-emerald-200 bg-white p-5 shadow-2xl">

      <div className="mb-4 text-center">

        <h2 className="text-2xl font-bold text-emerald-800">
          🎧 {surahName}
        </h2>

        <p className="mt-1 text-gray-500">
          {readerName}
        </p>

      </div>

      <audio
        controls
        autoPlay
        className="w-full"
        src={audioUrl}
      />

    </div>
  );
}