"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function SplashScreen() {

  const [show, setShow] = useState(true);
useEffect(() => {
  const alreadyShown = sessionStorage.getItem("splashShown");

  if (alreadyShown) {
    setShow(false);
    return;
  }

  sessionStorage.setItem("splashShown", "true");

  const timer = setTimeout(() => {
    setShow(false);
  }, 12000);

  return () => clearTimeout(timer);
}, []);

  return (

    <AnimatePresence>

      {show && (

        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="
          fixed
          inset-0
          z-[99999]
          flex
          flex-col
          items-center
          justify-center
          overflow-hidden
          bg-gradient-to-br
          from-emerald-950
          via-emerald-800
          to-emerald-600
          px-6
          text-center
        "
        >
     
     {/* دوائر الإضاءة */}

          <div className="absolute -top-40 -left-40 h-96 w-96 rounded-full bg-white/10 blur-3xl"></div>

          <div className="absolute -bottom-40 -right-40 h-96 w-96 rounded-full bg-emerald-300/10 blur-3xl"></div>

          {/* العناصر المتحركة */}

          <motion.div
            animate={{
              y: [-20, 20, -20],
              rotate: [0, 20, -20, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
            }}
            className="absolute left-5 top-10 text-4xl md:left-10 md:top-20 md:text-5xl"
          >
            🍃
          </motion.div>

          <motion.div
            animate={{
              y: [20, -20, 20],
              rotate: [0, -20, 20, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
            }}
            className="absolute right-5 bottom-16 text-3xl md:right-16 md:bottom-24 md:text-4xl"
          >
            🌿
          </motion.div>

          <motion.div
            animate={{
              y: [-10, 10, -10],
              rotate: [0, 15, -15, 0],
            }}
            transition={{
              duration: 7,
              repeat: Infinity,
            }}
            className="absolute right-20 top-20 text-2xl md:right-32 md:top-32 md:text-3xl"
          >
            ✨
          </motion.div>

          <motion.div
            initial={{
              opacity: 0,
              scale: 0.5,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              duration: 1,
            }}
            className="flex flex-col items-center"
          >

            <motion.div
              animate={{
                rotate: [0, 12, -12, 0],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
              }}
              className="text-5xl md:text-7xl"
            >
              🌿
            </motion.div>

            <motion.h1
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                delay: 0.3,
                duration: 0.8,
              }}
              className="mt-6 text-4xl font-extrabold tracking-widest text-white md:text-6xl"
            >
              رفيق
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                delay: 1.5,
                duration: 2,
              }}
              className="mt-4 text-lg text-white/90 md:text-2xl"
            >
              رفيقك في رحلتك إلى الله 🤍
            </motion.p>

          </motion.div>
          <motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{
    delay: 3,
    duration: 1,
  }}
  className="mt-10 max-w-4xl px-2"
>

  <p className="text-lg md:text-3xl font-bold leading-loose text-white">
    ﴿ إِنَّ اللَّهَ وَمَلَائِكَتَهُ يُصَلُّونَ عَلَى النَّبِيِّ ۚ
    يَا أَيُّهَا الَّذِينَ آمَنُوا صَلُّوا عَلَيْهِ
    وَسَلِّمُوا تَسْلِيمًا ﴾
  </p>

  <p className="mt-4 text-base md:text-xl text-emerald-100">
    سورة الأحزاب • الآية 56
  </p>

</motion.div>

<motion.div
  initial={{
    opacity: 0,
    y: 40,
  }}
  animate={{
    opacity: 1,
    y: 0,
  }}
  transition={{
    delay: 4.2,
    duration: 1,
  }}
  className="mt-10"
>

  <motion.h2
    animate={{
      scale: [1, 1.05, 1],
      textShadow: [
        "0px 0px 0px rgba(255,255,255,0)",
        "0px 0px 25px rgba(255,255,255,.9)",
        "0px 0px 0px rgba(255,255,255,0)",
      ],
    }}
    transition={{
      duration: 2,
      repeat: Infinity,
    }}
    className="px-2 text-2xl md:text-5xl font-extrabold text-white"
  >
    ﷺ صلِّ على سيدنا محمد ﷺ
  </motion.h2>

  <motion.p
    animate={{
      opacity: [0.5, 1, 0.5],
    }}
    transition={{
      duration: 2,
      repeat: Infinity,
    }}
    className="mt-5 text-base md:text-2xl text-emerald-100"
  >
    اللهم صلِّ وسلم وبارك على نبينا محمد
  </motion.p>

</motion.div>

<motion.div
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{
    delay: 5,
    duration: 1,
  }}
  className="absolute bottom-6 left-1/2 w-full -translate-x-1/2 px-6 text-center"
>

  <p className="text-xl md:text-3xl font-bold text-white">
  🤲   نسألكم الدعاء بالرحمة والمغفرة     
  
</p>

<h3 className="mt-4 text-4xl md:text-6xl font-extrabold text-emerald-100">
  عمر عثمان
</h3>

<p className="mt-4 text-xl md:text-3xl font-semibold text-white">
  رحمه الله رحمةً واسعة وأسكنه الفردوس الأعلى 🤍
</p>
</motion.div>

        </motion.div>

      )}

    </AnimatePresence>

  );

}