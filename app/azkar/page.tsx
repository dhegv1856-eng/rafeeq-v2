import Link from "next/link";

export default function AzkarPage() {
  const categories = [
    {
      title: "أذكار الصباح",
      slug: "morning",
      emoji: "🌅",
      color: "from-emerald-100 to-emerald-50",
    },
    {
      title: "أذكار المساء",
      slug: "evening",
      emoji: "🌙",
      color: "from-indigo-100 to-indigo-50",
    },
    {
      title: "أذكار النوم",
      slug: "sleep",
      emoji: "😴",
      color: "from-violet-100 to-violet-50",
    },
    {
      title: "أذكار بعد الصلاة",
      slug: "after-prayer",
      emoji: "🕌",
      color: "from-amber-100 to-amber-50",
    },
    {
      title: "أذكار الطعام",
      slug: "food",
      emoji: "🍽️",
      color: "from-orange-100 to-orange-50",
    },
    {
      title: "أذكار السفر",
      slug: "travel",
      emoji: "🚗",
      color: "from-sky-100 to-sky-50",
    },
    {
      title: "أذكار الدخول والخروج",
      slug: "home",
      emoji: "🚪",
      color: "from-teal-100 to-teal-50",
    },
    {
      title: "أدعية متنوعة",
      slug: "dua",
      emoji: "🤲",
      color: "from-rose-100 to-rose-50",
    },
  ];

  return (
    <main className="min-h-screen bg-[#F7F6F2] py-10 px-5">
      <div className="mx-auto max-w-6xl">

        <div className="mb-10 text-center">
          <h1 className="text-4xl font-extrabold text-emerald-800">
            الأذكار
          </h1>

          <p className="mt-3 text-slate-500">
            حافظ على وردك اليومي من الأذكار 🌿
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

          {categories.map((item) => (
            <Link
              key={item.slug}
              href={`/azkar/${item.slug}`}
              className={`
                rounded-3xl
                bg-gradient-to-br
                ${item.color}
                p-8
                shadow-md
                transition-all
                hover:scale-[1.03]
                hover:shadow-xl
              `}
            >
              <div className="mb-5 text-5xl">
                {item.emoji}
              </div>

              <h2 className="text-2xl font-bold text-slate-800">
                {item.title}
              </h2>

              <p className="mt-3 text-slate-600">
                اضغط لبدء القراءة
              </p>
            </Link>
          ))}

        </div>

      </div>
    </main>
  );
}