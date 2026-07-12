interface Reader {
  id: number;
  name: string;
  image: string;
  server: string;
}

export const readers: Reader[] = [
  {
    id: 64,
    name: "عبد الباسط عبد الصمد",
    image: "/readers/abdulbasit.jpg",
    server: "https://server7.mp3quran.net/basit/",
  },
  {
    id: 61,
    name: "محمد صديق المنشاوي",
    image: "/readers/minshawi.jpg",
    server: "https://server10.mp3quran.net/minsh/",
  },
  {
    id: 52,
    name: "محمود خليل الحصري",
    image: "/readers/husary.jpg",
    server: "https://server13.mp3quran.net/husr/",
  },
  {
    id: 188,
    name: "ماهر المعيقلي",
    image: "/readers/muaiqly.jpg",
    server: "https://server12.mp3quran.net/maher/",
  },
  {
    id: 57,
    name: "مشاري العفاسي",
    image: "/readers/afasy.jpg",
    server: "https://server8.mp3quran.net/afs/",
  },
  {
    id: 171,
    name: "ياسر الدوسري",
    image: "/readers/dosary.jpg",
    server: "https://server11.mp3quran.net/yasser/",
  },
];