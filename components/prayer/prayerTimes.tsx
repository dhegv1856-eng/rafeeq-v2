"use client";

import { useEffect, useState } from "react";
import PrayerReminder from "./PrayerReminder";


type Timings = {
  Fajr: string;
  Sunrise: string;
  Dhuhr: string;
  Asr: string;
  Maghrib: string;
  Isha: string;
};

const prayerIcons = {
  الفجر: "🌅",
  الشروق: "🌄",
  الظهر: "☀️",
  العصر: "🌇",
  المغرب: "🌆",
  العشاء: "🌙",
};

export default function PrayerTimes() {
  const [timings, setTimings] = useState<Timings | null>(null);

  const [city, setCity] = useState("");

  const [today, setToday] = useState("");

  const [hijri, setHijri] = useState("");

  const [nextPrayer, setNextPrayer] = useState("");

  const [countdown, setCountdown] = useState("");

  const [currentPrayer, setCurrentPrayer] = useState("");
  const [showReminder, setShowReminder] = useState(false);

const [reminderPrayer, setReminderPrayer] = useState("");

  useEffect(() => {

    navigator.geolocation.getCurrentPosition(async (position) => {

      const { latitude, longitude } = position.coords;

      const prayerRes = await fetch(
        `https://api.aladhan.com/v1/timings?latitude=${latitude}&longitude=${longitude}&method=5`
      );

      const prayerData = await prayerRes.json();

      setTimings(prayerData.data.timings);

      setHijri(
        `${prayerData.data.date.hijri.day} ${prayerData.data.date.hijri.month.ar} ${prayerData.data.date.hijri.year} هـ`
      );

      setToday(
        new Date().toLocaleDateString("ar-EG", {
          weekday: "long",
          day: "numeric",
          month: "long",
          year: "numeric",
        })
      );

      const locationRes = await fetch(
        `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`
      );

      const location = await locationRes.json();

      setCity(
        location.address.city ||
        location.address.town ||
        location.address.village ||
        location.address.state ||
        "موقعك الحالي"
      );

    });

  }, []);
  useEffect(() => {
  

  if (!currentPrayer) return;

  setReminderPrayer(currentPrayer);

  setShowReminder(true);

}, [currentPrayer]);

  useEffect(() => {
    if (!timings) return;

    const updatePrayer = () => {
      const now = new Date();

      const prayers = [
        { name: "الفجر", time: timings.Fajr },
        { name: "الظهر", time: timings.Dhuhr },
        { name: "العصر", time: timings.Asr },
        { name: "المغرب", time: timings.Maghrib },
        { name: "العشاء", time: timings.Isha },
      ];

      let upcoming = prayers[0];

      for (const prayer of prayers) {
        const [hour, minute] = prayer.time.split(":").map(Number);

        const prayerDate = new Date();
        prayerDate.setHours(hour, minute, 0, 0);

        if (prayerDate > now) {
          upcoming = prayer;
          break;
        }
      }

      setNextPrayer(upcoming.name);

      const [hour, minute] = upcoming.time.split(":").map(Number);

      const prayerDate = new Date();
      prayerDate.setHours(hour, minute, 0, 0);

      const diff = prayerDate.getTime() - now.getTime();

      const h = Math.floor(diff / 1000 / 60 / 60);
      const m = Math.floor((diff / 1000 / 60) % 60);
      const s = Math.floor((diff / 1000) % 60);

      setCountdown(
        `${toArabic(h)}:${toArabic(m)}:${toArabic(s)}`
      );

      let current = "";

      for (let i = prayers.length - 1; i >= 0; i--) {
        const [hh, mm] = prayers[i].time.split(":").map(Number);

        const d = new Date();
        d.setHours(hh, mm, 0, 0);

        if (now >= d) {
          current = prayers[i].name;
          break;
        }
      }

      setCurrentPrayer(current);
    };

    updatePrayer();

    const timer = setInterval(updatePrayer, 1000);

    return () => clearInterval(timer);
  }, [timings]);
  if (!timings) {
  return (
    <div className="rounded-[35px] bg-white p-10 text-center shadow-xl">
      <div className="text-5xl">🕌</div>

      <h2 className="mt-5 text-2xl font-bold text-emerald-800">
        جاري تحميل مواقيت الصلاة...
      </h2>
    </div>
  );
}

return (
  <div className="rounded-[35px] bg-white p-8 shadow-xl">

    <div className="text-center">

      <h2 className="text-3xl font-bold text-emerald-800">
        🕌 {city}
      </h2>

      <p className="mt-3 text-slate-500">
        {today}
      </p>

      <p className="text-emerald-700 font-bold mt-2">
        {hijri}
      </p>

    </div>

    <div className="mt-8 rounded-3xl bg-emerald-700 p-6 text-center text-white">

      <h3 className="text-xl font-bold">
        ⏳ الصلاة القادمة
      </h3>

      <p className="mt-3 text-3xl font-extrabold">
        {nextPrayer}
      </p>

      <p className="mt-2 text-2xl">
        {countdown}
      </p>

    </div>

    <div className="mt-8 space-y-4">
      <PrayerRow
        icon="🌅"
        name="الفجر"
        time={timings.Fajr}
        active={currentPrayer === "الفجر"}
      />

      <PrayerRow
        icon="🌄"
        name="الشروق"
        time={timings.Sunrise}
        active={false}
      />

      <PrayerRow
        icon="☀️"
        name="الظهر"
        time={timings.Dhuhr}
        active={currentPrayer === "الظهر"}
      />

      <PrayerRow
        icon="🌇"
        name="العصر"
        time={timings.Asr}
        active={currentPrayer === "العصر"}
      />

      <PrayerRow
        icon="🌆"
        name="المغرب"
        time={timings.Maghrib}
        active={currentPrayer === "المغرب"}
      />

      <PrayerRow
        icon="🌙"
        name="العشاء"
        time={timings.Isha}
        active={currentPrayer === "العشاء"}
      />
    </div>
    <PrayerReminder
  open={showReminder}
  prayerName={reminderPrayer}
  onClose={() => setShowReminder(false)}
/>
  </div>
);
}
function PrayerRow({
  icon,
  name,
  time,
  active,
}: {
  icon: string;
  name: string;
  time: string;
  active: boolean;
}) {
  return (
    <div
      className={`flex items-center justify-between rounded-3xl p-5 transition-all ${
        active
          ? "bg-emerald-700 text-white shadow-xl"
          : "bg-emerald-50"
      }`}
    >
      <div className="flex items-center gap-4">

        <div className="text-3xl">
          {icon}
        </div>

        <div>

          <h3
            className={`text-xl font-bold ${
              active ? "text-white" : "text-emerald-800"
            }`}
          >
            {name}
          </h3>

          {active && (
            <p className="text-sm text-emerald-100">
              الصلاة الحالية
            </p>
          )}

        </div>

      </div>

      <span
        className={`text-xl font-bold ${
          active ? "text-white" : "text-slate-700"
        }`}
      >
        {formatTime(time)}
      </span>

    </div>
  );
}

function formatTime(time: string) {
  let [hour, minute] = time.split(":").map(Number);

  const period = hour >= 12 ? "م" : "ص";

  hour = hour % 12;

  if (hour === 0) hour = 12;

  return toArabic(
    `${hour}:${minute.toString().padStart(2, "0")} ${period}`
  );
}

function toArabic(value: string | number) {
  return value
    .toString()
    .replace(/\d/g, (d) => "٠١٢٣٤٥٦٧٨٩"[Number(d)]);
}