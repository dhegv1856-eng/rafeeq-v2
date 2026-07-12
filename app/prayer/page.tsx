import PrayerTimes from "@/components/prayer/prayerTimes";

export default function PrayerPage() {
  return (
    <main className="min-h-screen bg-[#F7F6F2] py-10 px-5">

      <div className="mx-auto max-w-4xl">

        <h1 className="mb-8 text-center text-5xl font-bold text-emerald-800">
          🕌 مواقيت الصلاة
        </h1>

        <PrayerTimes />

      </div>

    </main>
  );
}