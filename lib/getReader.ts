export async function getReader(id: number) {
  const response = await fetch(
    `https://mp3quran.net/api/v3/reciters?language=ar&reciter=${id}`
  );

  if (!response.ok) {
    throw new Error("فشل تحميل بيانات القارئ");
  }

  const data = await response.json();

  return data.reciters[0];
}