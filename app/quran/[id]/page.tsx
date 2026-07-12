type Props = {
  params: Promise<{
    id: string;
  }>;
};
import Verse from "@/components/quran/Verse";
async function getChapter(id: string) {
  const res = await fetch(
    `https://api.quran.com/api/v4/chapters/${id}`,
    {
      next: {
        revalidate: 3600,
      },
    }
  );

  if (!res.ok) {
    throw new Error("فشل تحميل بيانات السورة");
  }

  const data = await res.json();

  return data.chapter;
}

async function getVerses(id: string) {
  const res = await fetch(
    `https://api.quran.com/api/v4/quran/verses/uthmani?chapter_number=${id}`,
    {
      next: {
        revalidate: 3600,
      },
    }
  );

  if (!res.ok) {
    throw new Error("فشل تحميل الآيات");
  }

  const data = await res.json();

  return data.verses;
}

export default async function Page({
  params,
}: Props) {
  const { id } = await params;

  const chapter = await getChapter(id);

  const verses = await getVerses(id);

  return (
    <main
      className="
        min-h-screen
        bg-gradient-to-br
        from-[#F8F7F2]
        via-[#FDFCF8]
        to-[#EDF6F0]
        py-12
      "
    >
      <div className="mx-auto flex justify-center px-4">

        <div
          className="
            w-full
            max-w-6xl
            rounded-[40px]
            border-2
            border-[#D8C9A3]
            bg-[#FBF8F1]
            shadow-2xl
            overflow-hidden
          "
        >

          <div className="p-10">

            <div className="text-center">

              <div
                className="
                  mx-auto
                  flex
                  h-20
                  w-20
                  items-center
                  justify-center
                  rounded-full
                  border-2
                  border-[#D8C9A3]
                  bg-white
                  text-3xl
                  font-bold
                  text-emerald-700
                "
              >
                {id}
              </div>

              <h1
                className="
                  mt-7
                  text-6xl
                  font-bold
                  text-emerald-900
                "
                style={{
                  fontFamily:
                    "'Amiri','Scheherazade New','Noto Naskh Arabic',serif",
                }}
              >
                {chapter.name_arabic}
              </h1>

              <p className="mt-3 text-lg text-slate-500">
                {chapter.name_simple}
              </p>

              <div className="mt-6 flex justify-center gap-3 flex-wrap">

                <span className="rounded-full bg-emerald-100 px-5 py-2 font-bold text-emerald-700">
                  {chapter.revelation_place === "makkah"
                    ? "مكية"
                    : "مدنية"}
                </span>

                <span className="rounded-full bg-amber-100 px-5 py-2 font-bold text-amber-700">
                  {chapter.verses_count} آية
                </span>

              </div>

            </div>

            <div
              className="
                my-10
                h-px
                bg-gradient-to-r
                from-transparent
                via-[#D8C9A3]
                to-transparent
              "
            />

            <div
              
  className="
    rounded-[28px]
    border
    border-[#E8DFC8]
    bg-[#FFFDF8]
    p-4
    md:p-10
  "
>
            

                

              <div
                className="mb-10 text-center text-6xl text-emerald-800"
                style={{
                  fontFamily:
                    "'Amiri','Scheherazade New','Noto Naskh Arabic',serif",
                }}
              >
                ﷽
              </div>
   <p
  dir="rtl"
  className="
    text-right
    text-[24px]
    md:text-[40px]
    leading-[2.2]
    md:leading-[2.5]
    text-[#222]
    font-normal
  "
  style={{
    fontFamily:
      "'Amiri','Scheherazade New','Noto Naskh Arabic',serif",
    textAlign: "justify",
    textAlignLast: "justify",
    wordSpacing: "0.05em",
  }}
>
                style={{
                  fontFamily:
                    "'Amiri','Scheherazade New','Noto Naskh Arabic',serif",
                }}
              
                {verses.map((verse: any, index: number) => (
  <span key={verse.id}>
    {verse.text_uthmani}

    <span
      className="
        relative
        inline-flex
        items-center
        justify-center
        w-8
        h-8
        mx-1
        align-middle
      "
    >
      <svg
        viewBox="0 0 100 100"
        className="absolute inset-0 w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
      >
        <path
          d="M50 5
             L61 18
             L78 22
             L82 39
             L95 50
             L82 61
             L78 78
             L61 82
             L50 95
             L39 82
             L22 78
             L18 61
             L5 50
             L18 39
             L22 22
             L39 18
             Z"
          stroke="#B9923F"
          strokeWidth="3"
          fill="#FFFDF8"
        />
      </svg>

      <span className="absolute inset-0 flex items-center justify-center text-[15px] font-bold text-[#8B6B2E]">
        {index + 1}
      </span>
    </span>{" "}
  </span>
))}

              </p>

            </div>

          </div>

        </div>

      </div>

    </main>
  );
}