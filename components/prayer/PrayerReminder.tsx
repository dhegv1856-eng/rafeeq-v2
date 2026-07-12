"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

type Props = {
  open: boolean;
  prayerName: string;
  onClose: () => void;
};

export default function PrayerReminder({
  open,
  prayerName,
  onClose,
}: Props) {

  const [message, setMessage] = useState("");

  function handleYes() {
    setMessage("🌸 تقبل الله منك، وثبتك على الطاعة");
    setTimeout(() => {
      setMessage("");
      onClose();
    }, 2000);
  }

  function handleLater() {
    setMessage("🤍 بارك الله فيك، قم إلى الصلاة ولا تؤخرها");
    setTimeout(() => {
      setMessage("");
      onClose();
    }, 2000);
  }

  return (
    <AnimatePresence>

      {open && (

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/50"
        >

          <motion.div
            initial={{ scale: 0.7, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            className="w-[90%] max-w-md rounded-3xl bg-white p-8 shadow-2xl"
          >

            {!message ? (
              <>

                <h2 className="text-center text-3xl font-bold text-emerald-700">
                  🌿 تذكير لطيف
                </h2>

                <p className="mt-6 text-center text-xl leading-10">
                  هل صليت صلاة <b>{prayerName}</b>؟ 🤍
                </p>

                <button
                  onClick={handleYes}
                  className="mt-8 w-full rounded-xl bg-emerald-600 py-4 text-lg font-bold text-white"
                >
                  ✅ نعم، الحمد لله
                </button>

                <button
                  onClick={handleLater}
                  className="mt-4 w-full rounded-xl bg-gray-100 py-4 text-lg font-bold"
                >
                  📿 سأصليها الآن
                </button>

              </>
            ) : (

              <div className="py-8 text-center">

                <p className="text-2xl font-bold leading-10">
                  {message}
                </p>

              </div>

            )}

          </motion.div>

        </motion.div>

      )}

    </AnimatePresence>
  );
}