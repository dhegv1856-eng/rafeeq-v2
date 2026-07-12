type Surah = {
  name: string;
  englishName: string;
  id: number;
  ayahs: number;
  revelationType: string;
};

export function normalizeArabic(text: string) {
  return text
    .toLowerCase()
    .replace(/[أإآ]/g, "ا")
    .replace(/ة/g, "ه")
    .replace(/ى/g, "ي")
    .replace(/ؤ/g, "و")
    .replace(/ئ/g, "ي")
    .replace(/\s+/g, "")
    .trim();
}

export function searchSurahs(surahs: Surah[], query: string) {
  if (!query) return surahs;

  const value = normalizeArabic(query);

  return surahs.filter((surah) => {
    return (
      normalizeArabic(surah.name).includes(value) ||
      surah.englishName.toLowerCase().includes(value) ||
      surah.id.toString() === value ||
      surah.ayahs.toString() === value ||
      normalizeArabic(surah.revelationType).includes(value)
    );
  });
}