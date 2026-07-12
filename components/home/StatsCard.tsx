"use client";

import { motion } from "framer-motion";

type Stat = {
  id: number;
  title: string;
  value: string;
  icon: string;
  subtitle: string;
  gradient: string;
};

type StatsProps = {
  stats?: Stat[];
};

const defaultStats: Stat[] = [
  {
    id: 1,
    title: "آخر قراءة",
    value: "لم تبدأ",
    icon: "📖",
    subtitle: "ابدأ رحلتك",
    gradient: "from-emerald-100 to-green-50",
  },
  {
    id: 2,
    title: "دعاء اليوم",
    value: "جاهز",
    icon: "🤲",
    subtitle: "اضغط للعرض",
    gradient: "from-sky-100 to-cyan-50",
  },
  {
    id: 3,
    title: "الإنجازات",
    value: "0",
    icon: "🏆",
    subtitle: "ابدأ الآن",
    gradient: "from-amber-100 to-orange-50",
  },
  {
    id: 4,
    title: "سلسلة الأيام",
    value: "0",
    icon: "🔥",
    subtitle: "يوم متتالي",
    gradient: "from-violet-100 to-fuchsia-50",
  },
];

export default function Stats({
  stats = defaultStats,
}: StatsProps) {
  return (
    <section className="py-24 px-5">

      <div className="container mx-auto">

        <div className="mb-14 text-center">

          <span className="rounded-full bg-emerald-100 px-4 py-2 text-sm font-bold text-emerald-700">
            📊 إحصائياتك
          </span>

          <h2 className="mt-6 text-4xl font-black text-slate-900">
            تابع تقدمك اليومي
          </h2>

          <p className="mt-5 text-lg text-slate-600">
            كل إنجاز تقوم به يظهر هنا تلقائياً.
          </p>

        </div>

        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">

        </div>
        {stats.map((item, index) => (

            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
              }}
            >

              <div
                className={`
                  group
                  h-full
                  rounded-[30px]
                  border
                  border-white
                  bg-gradient-to-br
                  ${item.gradient}
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
                    {item.icon}
                  </span>

                  <span
                    className="
                      rounded-full
                      bg-white/80
                      px-3
                      py-2
                      text-xs
                      font-bold
                      text-emerald-700
                    "
                  >
                    مباشر
                  </span>

                </div>

                <h3 className="mt-8 text-lg font-bold text-slate-700">

                  {item.title}

                </h3>

                <p className="mt-3 text-4xl font-black text-slate-900">

                  {item.value}

                </p>

                <p className="mt-4 text-sm leading-7 text-slate-600">

                  {item.subtitle}

                </p>

              </div>

            </motion.div>

          ))}

        </div>

      

    </section>
  );
}