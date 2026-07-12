import Link from "next/link";
import { notFound } from "next/navigation";

import prophets from "@/data/prophets";

export default async function StoryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const prophet = prophets.find((p) => p.slug === slug);

  if (!prophet) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#F7F6F2] py-10 px-5">

      <div className="mx-auto max-w-5xl">

        <div className="rounded-[35px] bg-white p-10 shadow-xl">

          <div className="text-center text-7xl">
            {prophet.emoji}
          </div>

          <h1 className="mt-5 text-center text-4xl font-bold text-emerald-800">
            {prophet.name}
          </h1>

          <p className="mt-3 text-center text-slate-500">
            اختر نوع القصة
          </p>

          <div className="mt-10 grid gap-8 md:grid-cols-2">

            <Link
              href={`/stories/${slug}/kids`}
              className="group overflow-hidden rounded-3xl bg-white shadow-lg transition hover:scale-105"
            >
              <div className="bg-yellow-100 p-10 text-center">

                <div className="text-7xl">
                  👶
                </div>

                <h2 className="mt-5 text-3xl font-bold text-orange-700">
                  قصة للأطفال
                </h2>

                <p className="mt-4 text-slate-600">
                  فيديو كرتون مناسب للأطفال
                </p>

              </div>

              <div className="bg-orange-500 py-4 text-center text-xl font-bold text-white">
                ▶ مشاهدة
              </div>

            </Link>

            <Link
              href={`/stories/${slug}/adult`}
              className="group overflow-hidden rounded-3xl bg-white shadow-lg transition hover:scale-105"
            >
              <div className="bg-emerald-100 p-10 text-center">

                <div className="text-7xl">
                  📖
                </div>

                <h2 className="mt-5 text-3xl font-bold text-emerald-800">
                  قصة للكبار
                </h2>

                <p className="mt-4 text-slate-600">
                  فيديو يشرح القصة كاملة
                </p>

              </div>

              <div className="bg-emerald-700 py-4 text-center text-xl font-bold text-white">
                ▶ مشاهدة
              </div>

            </Link>

          </div>

        </div>

      </div>

    </main>
  );
}