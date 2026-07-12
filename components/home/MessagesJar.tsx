"use client";


import { sadMessages } from "@/data/messages/saad";
import { happyMessages } from "@/data/messages/happy";
import { fearMessages } from "@/data/messages/fear";
import { peaceMessages } from "@/data/messages/peace";
import { duaMessages } from "@/data/messages/dua";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function MessagesJar() {

  const [selectedMood, setSelectedMood] = useState("");
  const [showPaper, setShowPaper] = useState(false);
  const [opened, setOpened] = useState(false);
  const [message, setMessage] = useState<any>(null);

const handleDraw = () => {

  if (!selectedMood) {
    alert("اختاري حالتك أولاً 🤍");
    return;
  }

  let list = [];

  switch (selectedMood) {
    case "sad":
      list = sadMessages;
      break;

    case "happy":
      list = happyMessages;
      break;

    case "fear":
      list = fearMessages;
      break;

    case "peace":
      list = peaceMessages;
      break;

    case "dua":
      list = duaMessages;
      break;

    default:
      list = [
        ...sadMessages,
        ...happyMessages,
        ...fearMessages,
        ...peaceMessages,
        ...duaMessages,
      ];
  }

  const random =
    list[Math.floor(Math.random() * list.length)];

  setMessage(random);

  setOpened(false);

  setShowPaper(true);
};

  return (
    <section className="mx-auto mt-12 max-w-6xl px-5">

      <div className="rounded-[40px] bg-white p-10 shadow-xl">

        <div className="text-center">

          <h2 className="text-4xl font-extrabold text-emerald-800">
            
          </h2>

          <p className="mt-3 text-lg text-gray-500">
            اختر لون الورقة حسب حالتك ثم اسحب رسالة
          </p>

        </div>
        <div className="mt-16 flex justify-center">

          <motion.div
            animate={{
              rotate: showPaper ? [0, -4, 4, -4, 4, 0] : 0,
            }}
            transition={{
              duration: 0.6,
            }}
            className="
              relative
              h-[420px]
              w-[300px]
              rounded-b-[90px]
              rounded-t-[40px]
              border-[10px]
              border-emerald-200
              bg-gradient-to-b
              from-white
              via-emerald-50
              to-emerald-100
              overflow-hidden
              shadow-2xl
            "
          >

            <div
              className="
                absolute
                -top-7
                left-1/2
                h-10
                w-32
                -translate-x-1/2
                rounded-full
                border-8
                border-emerald-300
                bg-white
              "
            />

            <div className="absolute left-6 top-8 h-64 w-6 rounded-full bg-white/40"></div>

            <div className="absolute inset-0 flex flex-wrap content-end justify-center gap-2 p-8 pb-10">

              {[
                "bg-red-300",
                "bg-green-300",
                "bg-yellow-300",
                "bg-blue-300",
                "bg-purple-300",
                "bg-pink-300",
                "bg-red-400",
                "bg-green-400",
                "bg-yellow-400",
                "bg-blue-400",
                "bg-purple-400",
                "bg-pink-400",
                "bg-red-200",
                "bg-green-200",
                "bg-yellow-200",
                "bg-blue-200",
                "bg-purple-200",
                "bg-pink-200",
                "bg-red-300",
                "bg-green-300",
                "bg-yellow-300",
                "bg-blue-300",
                "bg-purple-300",
                "bg-pink-300",
              ].map((color, index) => (

                <motion.div
                  key={index}
                  animate={{
                    y: [0, -3, 0],
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 2 + (index % 3),
                  }}
                  className={`h-12 w-6 rounded-sm shadow ${color}`}
                  style={{
                    rotate: `${(index % 2 === 0 ? 1 : -1) * (8 + (index % 4) * 4)}deg`,
                  }}
                />

              ))}

            </div>
            </motion.div>

        </div>

        {/* اختيار الحالة */}

        <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-4">

          <button
            onClick={() => setSelectedMood("sad")}
            className={`rounded-2xl py-4 font-bold transition ${
              selectedMood === "sad"
                ? "bg-red-500 text-white scale-105"
                : "bg-red-100 hover:bg-red-200"
            }`}
          >
            ❤️ حزين
          </button>

          <button
            onClick={() => setSelectedMood("happy")}
            className={`rounded-2xl py-4 font-bold transition ${
              selectedMood === "happy"
                ? "bg-green-500 text-white scale-105"
                : "bg-green-100 hover:bg-green-200"
            }`}
          >
            💚 سعيد
          </button>

          <button
            onClick={() => setSelectedMood("worried")}
            className={`rounded-2xl py-4 font-bold transition ${
              selectedMood === "worried"
                ? "bg-yellow-500 text-white scale-105"
                : "bg-yellow-100 hover:bg-yellow-200"
            }`}
          >
            💛 الدنيا ضاقت
          </button>

          <button
            onClick={() => setSelectedMood("fear")}
            className={`rounded-2xl py-4 font-bold transition ${
              selectedMood === "fear"
                ? "bg-blue-500 text-white scale-105"
                : "bg-blue-100 hover:bg-blue-200"
            }`}
          >
            💙 قلقان
          </button>

          <button
            onClick={() => setSelectedMood("peace")}
            className={`rounded-2xl py-4 font-bold transition ${
              selectedMood === "peace"
                ? "bg-pink-500 text-white scale-105"
                : "bg-pink-100 hover:bg-pink-200"
            }`}
          >
            🩷 محتاج راحة
          </button>

          <button
            onClick={() => setSelectedMood("dua")}
            className={`rounded-2xl py-4 font-bold transition ${
              selectedMood === "dua"
                ? "bg-purple-500 text-white scale-105"
                : "bg-purple-100 hover:bg-purple-200"
            }`}
          >
            🟣 دعاء
          </button>

          <button
            onClick={() => setSelectedMood("random")}
            className={`col-span-2 rounded-2xl py-4 font-bold transition ${
              selectedMood === "random"
                ? "bg-gray-700 text-white scale-105"
                : "bg-gray-100 hover:bg-gray-200"
            }`}
          >
            🤍 رسالة عشوائية
          </button>

        </div>

        <div className="mt-10 flex justify-center">

          <button
            onClick={handleDraw}
            className="rounded-full bg-emerald-600 px-10 py-4 text-xl font-bold text-white shadow-lg transition hover:scale-105"
          >
            🍃 اسحب رسالة
          </button>

        </div>
        <AnimatePresence>

          {showPaper && (

            <motion.div
              initial={{
                y: 150,
                scale: 0,
                opacity: 0,
              }}
              animate={{
                y: -10,
                scale: 1,
                opacity: 1,
                rotate: [0, -8, 8, 0],
              }}
              exit={{
                opacity: 0,
                scale: 0,
              }}
              transition={{
                duration: 0.7,
              }}
              onClick={() => setOpened(true)}
              className="
                absolute
                left-1/2
                top-[700px]
                z-50
                flex
                h-36
                w-28
                -translate-x-1/2
                cursor-pointer
                items-center
                justify-center
                rounded-xl
                bg-white
                text-center
                shadow-2xl
                border-2
                border-amber-200
              "
            >

              📜

            </motion.div>

          )}

        </AnimatePresence>

        <AnimatePresence>

          {opened && (

            <motion.div
              initial={{
                opacity: 0,
                scale: 0.8,
              }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
              exit={{
                opacity: 0,
              }}
              className="
                fixed
                inset-0
                z-[100]
                flex
                items-center
                justify-center
                bg-black/40
              "
            >

              <motion.div
                initial={{
                  y: 40,
                }}
                animate={{
                  y: 0,
                }}
                className="
                  w-[90%]
                  max-w-md
                  rounded-3xl
                  bg-white
                  p-8
                  shadow-2xl
                "
              >

                <h2 className="mb-6 text-center text-2xl font-bold text-emerald-700">
                  🌿 رسالتك
                </h2>

               <>
  <p className="text-center text-2xl leading-10 font-bold">
    {message?.text}
  </p>

  <p className="mt-6 text-center text-gray-500">
    {message?.source}
  </p>
</>
                <div className="mt-8 flex justify-center">

                  <button
                    onClick={()=>{
                      setOpened(false);
                      setShowPaper(false);
                    }}
                    className="
                      rounded-full
                      bg-emerald-600
                      px-8
                      py-3
                      text-white
                    "
                  >
                    إغلاق
                  </button>

                </div>

              </motion.div>

            </motion.div>

          )}

        </AnimatePresence>

      </div>

    </section>

  );

}