"use client";

import { useEffect, useState } from "react";

export default function useCounter(key: string) {
  const storageKey = `jannah-${key}`;

  const todayKey = `jannah-${key}-today`;

  const dateKey = `jannah-${key}-date`;

  const today = new Date().toLocaleDateString();

  const [count, setCount] = useState(0);

  const [todayCount, setTodayCount] = useState(0);

 useEffect(() => {

  function loadCounts() {
    const storedCount = Number(localStorage.getItem(storageKey)) || 0;
    const storedTodayCount = Number(localStorage.getItem(todayKey)) || 0;

    setCount(storedCount);
    setTodayCount(storedTodayCount);
  }

  loadCounts();

  window.addEventListener(
    "jannah-updated",
    loadCounts
  );

  return () => {
    window.removeEventListener(
      "jannah-updated",
      loadCounts
    );
  };

}, [storageKey, todayKey]);
  function increase() {
    const newCount = count + 1;

    const newToday = todayCount + 1;

    setCount(newCount);

    setTodayCount(newToday);

    localStorage.setItem(storageKey, String(newCount));

    localStorage.setItem(todayKey, String(newToday));
    window.dispatchEvent(new Event("jannah-updated"));
  }

  function decrease() {
    if (count === 0) return;

    const newCount = count - 1;

    const newToday =
      todayCount > 0 ? todayCount - 1 : 0;

    setCount(newCount);

    setTodayCount(newToday);

    localStorage.setItem(storageKey, String(newCount));

    localStorage.setItem(todayKey, String(newToday));
    window.dispatchEvent(new Event("jannah-updated"));
  }

  return {
    count,
    todayCount,
    increase,
    decrease,
  };
}