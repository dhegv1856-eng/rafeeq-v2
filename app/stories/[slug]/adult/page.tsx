import { notFound } from "next/navigation";
import prophets from "@/data/prophets";
import { prophetVideos } from "@/data/prophetVideos";

export default async function AdultStory({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const prophet = prophets.find((p) => p.slug === slug);

  if (!prophet) return notFound();

  const video =
    prophetVideos[slug as keyof typeof prophetVideos];

  if (!video) return notFound();

  return (
    <main className="min-h-screen bg-[#F7F6F2] py-10 px-5">

      <div className="mx-auto max-w-5xl">

        <h1 className="mb-3 text-center text-4xl font-bold text-emerald-800">
          {prophet.emoji} {prophet.name}
        </h1>

        <p className="mb-10 text-center text-slate-500">
          قصة للكبار
        </p>

        <div className="overflow-hidden rounded-[35px] bg-white shadow-xl">

         
          <div className="p-8">

            <iframe
              src={video.adultVideo}
              className="h-[500px] w-full rounded-3xl"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />

          </div>

        </div>

      </div>

    </main>
  );
}