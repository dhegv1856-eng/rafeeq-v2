"use client";

import { useEffect, useState } from "react";

export default function QiblaCompass() {
  const [qiblaDirection, setQiblaDirection] = useState(0);
  const [heading, setHeading] = useState(0);
  const [city, setCity] = useState("جاري تحديد الموقع...");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!navigator.geolocation) {
      setError("المتصفح لا يدعم تحديد الموقع");
      setLoading(false);
      return;
    }

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        try {
          const { latitude, longitude } = position.coords;

          const kaabaLat = 21.4225 * (Math.PI / 180);
          const kaabaLon = 39.8262 * (Math.PI / 180);

          const userLat = latitude * (Math.PI / 180);
          const userLon = longitude * (Math.PI / 180);

          const y = Math.sin(kaabaLon - userLon);

          const x =
            Math.cos(userLat) * Math.tan(kaabaLat) -
            Math.sin(userLat) *
              Math.cos(kaabaLon - userLon);

          let bearing =
            (Math.atan2(y, x) * 180) / Math.PI;

          bearing = (bearing + 360) % 360;

          setQiblaDirection(bearing);

          const res = await fetch(
            `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`
          );

          const data = await res.json();

          setCity(
            data.address.city ||
              data.address.town ||
              data.address.village ||
              data.address.state ||
              "موقعك الحالي"
          );

          setLoading(false);
        } catch {
          setError("حدث خطأ أثناء تحديد الموقع");
          setLoading(false);
        }
      },
      () => {
        setError("يرجى السماح بالوصول للموقع");
        setLoading(false);
      }
    );
  }, []);
  useEffect(() => {
    function handleOrientation(event: DeviceOrientationEvent) {
      if (event.alpha != null) {
        setHeading(event.alpha);
      }
    }

    window.addEventListener(
      "deviceorientation",
      handleOrientation,
      true
    );

    return () => {
      window.removeEventListener(
        "deviceorientation",
        handleOrientation,
        true
      );
    };
  }, []);

  if (loading) {
    return (
      <div className="rounded-[35px] bg-white p-10 shadow-xl text-center">
        <div className="text-7xl animate-pulse">🧭</div>

        <h2 className="mt-6 text-2xl font-bold text-emerald-800">
          جاري تحديد اتجاه القبلة...
        </h2>
      </div>
    );
  }

  if (error) {
    return (
      <div className="rounded-[35px] bg-red-50 p-10 shadow-xl text-center">

        <div className="text-6xl">
          ⚠️
        </div>

        <h2 className="mt-5 text-xl font-bold text-red-700">
          {error}
        </h2>

      </div>
    );
  }

  return (
    <div className="rounded-[35px] bg-white p-8 shadow-xl">

      <div className="text-center">

        <h2 className="text-3xl font-bold text-emerald-800">
          🕌 اتجاه القبلة
        </h2>

        <p className="mt-3 text-slate-500">
          📍 {city}
        </p>

      </div>

      <div className="mt-10 flex justify-center">

        <div
          className="
            relative
            h-80
            w-80
            rounded-full
            border-[10px]
            border-emerald-200
            bg-gradient-to-br
            from-emerald-50
            to-white
            shadow-inner
          "
        >

        <div
            className="absolute inset-0 flex items-center justify-center"
            style={{
              transform: `rotate(${-heading}deg)`,
              transition: "transform 0.2s linear",
            }}
          >
            <div
              className="absolute"
              style={{
                transform: `rotate(${qiblaDirection}deg)`,
              }}
            >
              <div className="flex flex-col items-center">

                <div className="text-5xl">
                  🕋
                </div>

                <div className="-mt-2 text-6xl font-bold text-emerald-700">
                  ↑
                </div>

              </div>
            </div>

            <div className="flex h-32 w-32 items-center justify-center rounded-full border-4 border-emerald-300 bg-white shadow-xl">

              <span className="text-6xl">
                🧭
              </span>

            </div>

            <span className="absolute top-3 left-1/2 -translate-x-1/2 text-xl font-bold">
              N
            </span>

            <span className="absolute bottom-3 left-1/2 -translate-x-1/2 text-xl font-bold">
              S
            </span>

            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-xl font-bold">
              W
            </span>

            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-xl font-bold">
              E
            </span>

          </div>

        </div>

      </div>

      <div className="mt-10 rounded-3xl bg-emerald-700 p-6 text-center text-white">

        <h3 className="text-2xl font-bold">
          🕋 اتجاه القبلة
        </h3>

        <p className="mt-3 text-4xl font-extrabold">
          {Math.round(qiblaDirection)}°
        </p>

        <p className="mt-4 text-lg text-emerald-100">
          حرك الهاتف حتى يشير السهم إلى الكعبة المشرفة
        </p>

      </div>

    </div>
  );
}