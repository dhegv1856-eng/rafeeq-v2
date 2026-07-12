"use client";

import Link from "next/link";
import { motion } from "framer-motion";

type FooterLink = {
  title: string;
  href: string;
};

const links: FooterLink[] = [
  { title: "القرآن", href: "/quran" },
  { title: "الأذكار", href: "/azkar" },
  { title: "الصلاة", href: "/prayer" },
  { title: "القبلة", href: "/qibla" },
  { title: "السبحة", href: "/tasbeeh" },
  { title: "قصص الأنبياء", href: "/stories" },
];

export default function Footer() {

  const year = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-white border-t border-slate-800">

  <div className="container mx-auto px-6 py-16">

    <div className="grid gap-10 lg:grid-cols-3">

      {/* Logo */}
      <div>

        <h2 className="text-3xl font-black text-amber-400">
          💚 رفيق
        </h2>

        <p className="mt-5 leading-8 text-slate-300">
          رفيقك اليومي للقرآن الكريم والأذكار ومواقيت الصلاة
          والقبلة والعبادات.
        </p>

      </div>

      {/* Links */}
      <div>

        <h3 className="mb-5 text-xl font-black text-white">
          الخدمات
        </h3>

        <div className="grid grid-cols-2 gap-3">

          {links.map((link) => (

            <Link
              key={link.title}
              href={link.href}
              className="
                rounded-xl
                bg-slate-800
                px-4
                py-3
                text-center
                transition
                hover:bg-amber-500
                hover:text-slate-900
              "
            >
              {link.title}
            </Link>

          ))}

        </div>

      </div>

      {/* About */}
      <div>

        <h3 className="mb-5 text-xl font-black text-white">
          عن التطبيق
        </h3>

        <p className="leading-8 text-slate-300">
          نسأل الله أن يجعل هذا العمل خالصًا لوجهه الكريم،
          وأن ينفع به كل مسلم، وأن يجعله سببًا في زيادة
          القرب من الله تعالى.
        </p>

        <div className="mt-6 rounded-2xl bg-slate-800 p-4 border border-amber-500/20">

          <p className="text-amber-300 font-bold">
            🤲 اللهم تقبل منا ومنكم صالح الأعمال.
          </p>

        </div>

      </div>

    </div>

    <div className="mt-14 border-t border-slate-700 pt-6 text-center">

      <p className="text-slate-400">
        © {year} <span className="text-amber-400 font-bold">رفيق</span>
      </p>

      <p className="mt-2 text-sm text-slate-500">
        هذا العمل صدقة جارية بإذن الله، ونسأل الله أن يجعله خالصًا لوجهه الكريم.
      </p>

    </div>

  </div>

</footer>
)}