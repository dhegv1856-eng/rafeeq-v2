import { API_BASE } from "@/data/api";

export async function getSurahs() {
  const res = await fetch(`${API_BASE}/surah`, {
    cache: "force-cache",
  });

  if (!res.ok) {
    throw new Error("فشل تحميل السور");
  }

  const data = await res.json();

  return data.data;
}