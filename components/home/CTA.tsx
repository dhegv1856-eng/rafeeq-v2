"use client";

import Link from "next/link";
import { motion } from "framer-motion";

type CTAProps = {
  title?: string;
  description?: string;
  primaryText?: string;
  secondaryText?: string;
};

export default function CTA({
  title = "ابدأ رحلتك اليوم",
  description = "اجعل القرآن والأذكار والصلاة جزءًا من يومك مع رفيق.",
  primaryText = "ابدأ الآن",
  secondaryText = "استكشف الخدمات",
}: CTAProps) {

  return (
    <section className="py-24 px-5">

      <div className="container mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .6 }}
          className="
            relative
            overflow-hidden
            rounded-[36px]
            bg-gradient-to-r
            from-emerald-600
            via-green-500
            to-emerald-700
            p-12
            text-center
            text-white
            shadow-2xl
          "
        >

          <div className="absolute -left-20 -top-20 h-56 w-56 rounded-full bg-white/10 blur-3xl" />

          <div className="absolute -bottom-20 -right-20 h-56 w-56 rounded-full bg-white/10 blur-3xl" />

          <h2 className="text-4xl font-black">
            {title}
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-9 text-emerald-50">
            {description}
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-5">

          
          <Link
            href="/quran"
            className="
              rounded-2xl
              bg-white
              px-8
              py-4
              font-bold
              text-emerald-700
              transition-all
              duration-300
              hover:-translate-y-1
              hover:shadow-xl
            "
          >
            📖 {primaryText}
          </Link>

          <Link
            href="/"
            className="
              rounded-2xl
              border
              border-white/40
              bg-white/10
              px-8
              py-4
              font-bold
              backdrop-blur-md
              transition-all
              duration-300
              hover:bg-white/20
            "
          >
            ✨ {secondaryText}
          </Link>

        </div>

      </motion.div>

    </div>

  </section>
);
}