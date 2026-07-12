
import { notFound } from "next/navigation";
import { jannahData } from "@/data/jannahData";
import Counter from "@/components/jannah/Counter";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function JannahCounterPage({
  params,
}: Props) {

  const { slug } = await params;

  const data =
    jannahData[
      slug as keyof typeof jannahData
    ];

  if (!data) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f7fbf3] via-[#edf8e9] to-[#dff0d9]">

      <div className="mx-auto max-w-3xl px-5 py-8">

        <div
          className={`
            rounded-[32px]
            bg-gradient-to-r
            ${data.color}
            p-8
            text-center
            text-white
            shadow-2xl
          `}
        >
          <h1 className="text-4xl font-extrabold">
            {data.title}
          </h1>

          {data.hadith && (
            <p className="mt-5 leading-8 text-white/90">
              {data.hadith}
            </p>
          )}
        </div>

        <div className="mt-8 rounded-3xl bg-white p-8 shadow-xl">

          <h2 className="text-center text-xl font-bold text-emerald-700">
            الذكر
          </h2>

          <p className="mt-6 text-center text-3xl leading-loose font-bold text-slate-800">
            {data.dhikr}
          </p>

        </div><Counter counterKey={data.counterKey} />

      </div>
    </div>
  );
}