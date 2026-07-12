export async function getReaders() {
  const res = await fetch("https://mp3quran.net/api/v3/reciters?language=ar");

  if (!res.ok) {
    throw new Error("حدث خطأ");
  }

  return res.json();
}