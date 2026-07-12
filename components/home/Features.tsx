"use client";

import Link from "next/link";
import { motion } from "framer-motion";

type Feature = {
  id: number;
  title: string;
  description: string;
  icon: string;
  href: string;
  gradient: string;
};

const features: Feature[] = [
  {
    id: 1,
    title: "القرآن الكريم",
    description: "اقرأ القرآن الكريم واحفظ آخر موضع توقفت عنده.",
    icon: "📖",
    href: "/quran",
    gradient: "from-emerald-100 to-green-50",
  },
  {
    id: 2,
    title: "الأذكار",
    description: "أذكار الصباح والمساء والنوم والسفر.",
    icon: "🤲",
    href: "/azkar",
    gradient: "from-sky-100 to-cyan-50",
  },
  {
    id: 3,
    title: "مواقيت الصلاة",
    description: "اعرف مواقيت الصلاة حسب موقعك.",
    icon: "🕌",
    href: "/prayer",
    gradient: "from-indigo-100 to-violet-50",
  },
  {
    id: 4,
    title: "اتجاه القبلة",
    description: "اعرف اتجاه القبلة بسهولة.",
    icon: "🧭",
    href: "/qibla",
    gradient: "from-amber-100 to-yellow-50",
  },
  {
    id: 5,
    title: "السبحة",
    description: "عداد تسبيح ذكي يحفظ تقدمك.",
    icon: "📿",
    href: "/tasbeeh",
    gradient: "from-rose-100 to-pink-50",
  },
  {
    id: 6,
    title: "قصص الأنبياء",
    description: "اقرأ قصص الأنبياء بطريقة جميلة.",
    icon: "📚",
    href: "/stories",
    gradient: "from-orange-100 to-amber-50",
  },
];

export default function Features() {
  return (
    <section className="py-24 px-5">

      <div className="container mx-auto">

        <div className="mb-14 text-center">

          <span className="rounded-full bg-emerald-100 px-4 py-2 text-sm font-bold text-emerald-700">

            ✨ خدمات رفيق

          </span>

          <h2 className="mt-6 text-4xl font-black text-slate-900">

            كل ما تحتاجه في مكان واحد

          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-600">

            تطبيق يساعدك على المحافظة على عباداتك اليومية بطريقة بسيطة وعصرية.

          </p>

        </div>

        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">

        </div>
        {features.map((feature, index) => (

            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
              }}
            >

              <Link href={feature.href}>

                <div
                  className={`
                    group
                    h-full
                    rounded-[30px]
                    border
                    border-white
                    bg-gradient-to-br
                    ${feature.gradient}
                    p-7
                    shadow-md
                    transition-all
                    duration-300
                    hover:-translate-y-2
                    hover:shadow-2xl
                  `}
                >

                  <div className="flex items-center justify-between">

                    <span className="text-5xl">
                      {feature.icon}
                    </span>

                    <span
                      className="
                        rounded-full
                        bg-white/80
                        px-4
                        py-2
                        text-xs
                        font-bold
                        text-emerald-700
                      "
                    >
                      جديد
                    </span>

                  </div>

                  <h3 className="mt-8 text-2xl font-black text-slate-900">

                    {feature.title}

                  </h3>

                  <p className="mt-4 leading-8 text-slate-600">

                    {feature.description}

                  </p>

                  <div
                    className="
                      mt-8
                      flex
                      items-center
                      gap-2
                      font-bold
                      text-emerald-700
                      transition-all
                      group-hover:translate-x-[-6px]
                    "
                  >

                    ابدأ الآن

                    <span>←</span>

                  </div>

                </div>

              </Link>

            </motion.div>

          ))}

        </div>

      

    </section>
  );
}