"use client";

import Link from "next/link";
import { motion } from "framer-motion";

type HeroProps = {
  userName?: string;
  lastRead?: string;
};

export default function Hero({
  userName = "ضيف",
  lastRead,
}: HeroProps) {
  const cards = [
    
    {
      icon: "📖",
      title: "القرآن الكريم",
      desc: "اقرأ القرآن واحفظ آخر قراءة.",
      href: "/quran",
      color: "from-emerald-100 to-green-50",
    },

     {
  title: "أشهر القراء",
  icon: "🎧",
  href: "/reciters",
  color: "from-orange-100 to-amber-50",
},
  {
      icon: "🕌",
      title: "الصلاة",
      desc: "مواقيت الصلاة اليومية.",
      href: "/prayer",
      color: "from-violet-100 to-fuchsia-50",
    },
     {
      icon: "🧭",
      title: "القبلة",
      desc: "اعرف اتجاه القبلة.",
      href: "/qibla",
      color: "from-teal-100 to-emerald-50",
    },
     {
      icon: "📿",
      title: "السبحة",
      desc: "عداد تسبيح ذكي.",
      href: "/tasbeeh",
      color: "from-rose-100 to-pink-50",
    },

    {
      icon: "🤲",
      title: "الأذكار",
      desc: "أذكار الصباح والمساء.",
      href: "/azkar",
      color: "from-blue-100 to-cyan-50",
    },
  
    {
      icon: "📚",
      title: "قصص الأنبياء",
      desc: "تعرف على قصص الأنبياء.",
      href: "/stories",
      color: "from-orange-100 to-amber-50",
    },
   
   
   
{
  title: "ابني جنتك",
  icon: "🏡  ",
  href: "/jannah",
  color: "from-violet-100 to-fuchsia-50",
}
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-emerald-50 via-white to-green-100 pt-40 pb-24">

      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,#bbf7d0,transparent_35%),radial-gradient(circle_at_bottom_left,#d9f99d,transparent_35%)]" />

      <div className="container mx-auto px-5 mt-16">

        <div className="grid items-center gap-14 lg:grid-cols-2">

          {/* Right */}

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: .7 }}
          >

            <span className="inline-flex rounded-full bg-emerald-100 px-4 py-2 text-sm font-bold text-emerald-700">

              👋 السلام عليكم {userName}

            </span>

            <h1 className="mt-8 text-5xl font-black leading-tight text-slate-900 md:text-6xl">

              رفيق في رحلتك
              <span className="block text-emerald-600 mt-3">
                إلى الله
              </span>

            </h1>

            <p className="mt-7 max-w-xl text-lg leading-9 text-slate-600">

              اقرأ القرآن الكريم، تابع الأذكار،
              اعرف مواقيت الصلاة،
              واحفظ تقدمك في مكان واحد.

            </p>

            <div className="mt-10 flex flex-wrap gap-4">

              <Link
                href="/quran"
                className="rounded-2xl bg-emerald-600 px-8 py-4 font-bold text-white transition hover:-translate-y-1 hover:bg-emerald-700"
              >
                📖 ابدأ القراءة
              </Link>

              <Link
                href="/quran"
                className="rounded-2xl border border-emerald-300 bg-white px-8 py-4 font-bold text-emerald-700 transition hover:bg-emerald-50"
              >
                {lastRead || "آخر قراءة"}
              </Link>

            </div>

          </motion.div>

          {/* Left */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: .8 }}
            className="grid grid-cols-2 gap-5 md:grid-cols-3"
          >

          {cards.map((card) => (
              <Link key={card.title} href={card.href}>
                <motion.div
                  whileHover={{ y: -8, scale: 1.03 }}
                  transition={{ duration: 0.25 }}
                  className={`
                    h-full
                    rounded-3xl
                    bg-gradient-to-br
                    ${card.color}
                    border
                    border-white/60
                    p-6
                    shadow-lg
                    backdrop-blur-xl
                    cursor-pointer
                  `}
                >
                  <div className="text-5xl">
                    {card.icon}
                  </div>

                  <h3 className="mt-5 text-xl font-black text-slate-900">
                    {card.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {card.desc}
                  </p>

                  <div className="mt-6 text-sm font-bold text-emerald-700">
                    ابدأ الآن ←
                  </div>
                </motion.div>
              </Link>
            ))}

          </motion.div>

        </div>

      </div>

    </section>
  );
}