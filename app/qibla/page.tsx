import QiblaCompass from "@/components/qibla/QiblaCompass";

export default function QiblaPage() {
  return (
    <main className="min-h-screen bg-[#F7F6F2] py-10 px-5">

      <div className="mx-auto max-w-5xl">

        <h1 className="mb-10 text-center text-5xl font-bold text-emerald-800">
          🧭 اتجاه القبلة
        </h1>

        <QiblaCompass />

      </div>

    </main>
  );
}