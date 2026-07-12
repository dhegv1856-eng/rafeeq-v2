import Link from "next/link";
import prophets from "@/data/prophets";

export default function StoriesPage() {
  return (
    <main className="min-h-screen bg-[#F7F6F2] py-10 px-5">
      <div className="mx-auto max-w-7xl">

        <h1 className="text-center text-5xl font-extrabold text-emerald-800">
          📖 القصص الإسلامية
        </h1>

        <p className="mt-3 mb-10 text-center text-slate-600 text-lg">
          تعلم من قصص الأنبياء واستخرج منها العبر والدروس.
        </p>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

          {prophets.map((prophet) => (
            <Link
              key={prophet.id}
              href={`/stories/${prophet.slug}`}
              className="
                group
                rounded-[30px]
                bg-white
                p-7
                shadow-xl
                transition-all
                duration-300
                hover:-translate-y-2
                hover:shadow-2xl
              "
            >
              <div className="text-center text-6xl">
                {prophet.emoji}
              </div>

              <h2 className="mt-5 text-center text-2xl font-bold text-emerald-800">
                {prophet.name}
              </h2>

              <div className="mt-6 flex justify-center">
                <span
                  className="
                    rounded-full
                    bg-emerald-700
                    px-6
                    py-3
                    font-bold
                    text-white
                    transition
                    group-hover:bg-emerald-800
                  "
                >
                  اقرأ القصة 📖
                </span>
              </div>

            </Link>
          ))}

        </div>

      </div>
    </main>
  );
}