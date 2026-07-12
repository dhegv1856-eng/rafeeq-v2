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
    const saved = localStorage.getItem(storageKey);

    if (saved) {
      setCount(Number(saved));
    }

    const savedDate = localStorage.getItem(dateKey);

    if (savedDate !== today) {
      localStorage.setItem(dateKey, today);
      localStorage.setItem(todayKey, "0");
      setTodayCount(0);
    } else {
      const savedToday = localStorage.getItem(todayKey);

      if (savedToday) {
        setTodayCount(Number(savedToday));
      }
    }
  }, []);

  function increase() {
    const newCount = count + 1;

    const newToday = todayCount + 1;

    setCount(newCount);

    setTodayCount(newToday);

    localStorage.setItem(storageKey, String(newCount));

    localStorage.setItem(todayKey, String(newToday));
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
  }

  return {
    count,
    todayCount,
    increase,
    decrease,
  };
}