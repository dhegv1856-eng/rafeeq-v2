"use client";

import useJannahCounts from "@/hooks/useJannahCounter";
import JannahHeader from "@/components/jannah/JannahHeader";
import TotalHasanat from "@/components/jannah/TotalHasanat";
import CategoryCard from "@/components/jannah/CategoryCard";
import CategoryItem from "@/components/jannah/CategoryItem";

export default function JannahPage() {

  // العدادات (هنربطها بعدين بالـ Local Storage)

 const {
  trees,
  palms,
  flowers,
  houses,
  treasures,
  palaces,

  subhanallah,
  alhamdulillah,
  takbeer,
  salawat,
  

  subhanallahWaBihamdih,
  laIlahaIllallah,
  laIlahaIllallahAlhamd,
  alAliAlAzim,
  astaghfirullah,
  hawqala,

  salam,

  fatiha,
  baqarah,
  imran,
  kahf,
  yaseen,
  mulk,
  kafirun,
  ikhlas,
} = useJannahCounts();

  const treesCount = trees;
  const palmsCount = palms;
  const flowersCount = flowers;
  const housesCount = houses;
  const treasuresCount = treasures;
  const palacesCount = palaces;
  const istighfarCount = subhanallahWaBihamdih;
const sayyidIstighfarCount = 0;

const astaghfirullahCount = astaghfirullah;
const hawqalaCount = hawqala;
const tahlilCount = laIlahaIllallah;

const subhanAllahCount = subhanallah;
const alhamdulillahCount = alhamdulillah;
const allahuAkbarCount = takbeer;

const salawatCount = salawat;
const salamCount = salam;
const smileCount = 0;

  const jannahTotal =
    treesCount +
    palmsCount +
    flowersCount +
    housesCount +
    treasuresCount +
    palacesCount;

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f7fbf3] via-[#edf8e9] to-[#dff0d9]">

      <div className="mx-auto max-w-3xl px-5 py-8">

        <JannahHeader />

        <TotalHasanat />

        {/* ============================= */}
        {/* زين جنتك */}
        {/* ============================= */}

        <CategoryCard
          title="زين جنتك"
          total={jannahTotal}
         className="bg-gradient-to-r from-emerald-600 to-lime-500"
        >

          <CategoryItem
                      title="🌳 "
                      count={treesCount}
                      href="/jannah/trees" icon={""}          />

          <CategoryItem
                      title="🌴 "
                      count={palmsCount}
                      href="/jannah/palms" icon={""}          />

          <CategoryItem
                      title="🌺 "
                      count={flowersCount}
                      href="/jannah/flowers" icon={""}          />

          <CategoryItem
                      title="🏡 "
                      count={housesCount}
                      href="/jannah/houses" icon={""}          />

          <CategoryItem
                      title="💎 "
                      count={treasuresCount}
                      href="/jannah/treasures" icon={""}          />

          <CategoryItem
                      title="🏰 "
                      count={palacesCount}
                      href="/jannah/palaces" icon={""}          />

        </CategoryCard>{/* ============================= */}
{/* استغفر الله */}
{/* ============================= */}

<CategoryCard
  title="استغفر الله"
  total={
    istighfarCount +
    sayyidIstighfarCount +
    astaghfirullah +
    hawqalaCount +
    tahlilCount
  }className="bg-gradient-to-r from-emerald-600 to-lime-500"
>

  <CategoryItem
                      title="سبحان الله وبحمده"
                      count={istighfarCount}
                      href="/jannah/subhanallah-wa-bihamdih" icon={""}  />

  <CategoryItem
                      title="لا إله إلا الله وحده لا شريك له"
                      count={tahlilCount}
                      href="/jannah/la-ilaha-illa-allah" icon={""}  />

  <CategoryItem
                      title="لا إله إلا الله وحده لا شريك له، له الملك وله الحمد"
                      count={Number(localStorage.getItem("jannah-subhanallah-alazim")) || 0}
                      href="/jannah/subhanallah-alazim" icon={""}  />
  <CategoryItem
                      title="لا إله إلا الله العلي العظيم"
                      count={Number(localStorage.getItem("jannah-al-ali-al-azim")) || 0}
                      href="/jannah/al-ali-al-azim" icon={""}  />

  <CategoryItem
                      title="أستغفر الله الذي لا إله إلا هو الحي القيوم وأتوب إليه"
                      count={astaghfirullahCount}
                      href="/jannah/astaghfirullah" icon={""}  />

  <CategoryItem
                      title="لا حول ولا قوة إلا بالله"
                      count={hawqalaCount}
                      href="/jannah/hawqala" icon={""}  />

</CategoryCard>{/* ============================= */}
{/* اكسب حسنات */}
{/* ============================= */}

<CategoryCard
  title="اكسب حسنات"
  total={
    subhanAllahCount +
    alhamdulillahCount +
    allahuAkbarCount +
    salawatCount
  }
className="bg-gradient-to-r from-emerald-600 to-lime-500"
>

  <CategoryItem
                      title="سبحان الله"
                      count={subhanAllahCount}
                      href="/jannah/subhanallah" icon={""}  />

  <CategoryItem
                      title="الحمد لله"
                      count={alhamdulillahCount}
                      href="/jannah/alhamdulillah" icon={""}  />

  <CategoryItem
                      title="لا إله إلا الله"
                      count={tahlilCount}
                      href="/jannah/tahlil" icon={""}  />

  <CategoryItem
                      title="الله أكبر"
                      count={allahuAkbarCount}
                      href="/jannah/takbeer" icon={""}  />

  <CategoryItem
                      title="سبحان الله وبحمده"
                      count={istighfarCount}
                      href="/jannah/subhanallah-wa-bihamdih" icon={""}  />

  <CategoryItem
                      title="سبحان الله العظيم وبحمده"
                      count={0}
                      href="/jannah/subhanallah-alazim" icon={""}  />

  <CategoryItem
                      title="سبحان الله وبحمده عدد خلقه ورضا نفسه..."
                      count={0}
                      href="/jannah/adad-khalqih" icon={""}  />

  <CategoryItem
                      title="سبحان الله عدد ما خلق"
                      count={0}
                      href="/jannah/adad-ma-khalaq" icon={""}  />

  <CategoryItem
                      title="الله أكبر كبيرًا والحمد لله كثيرًا"
                      count={0}
                      href="/jannah/allahu-akbar-kabeera" icon={""}  />

</CategoryCard>{/* ============================= */}
{/* حسن لقاؤك */}
{/* ============================= */}

<CategoryCard
  title="حسن لقاؤك"
  total={
    salamCount +
    salawatCount +
    smileCount
  }
 className="bg-gradient-to-r from-emerald-600 to-lime-500"
>

  <CategoryItem
                      title="سبحان الله وبحمده"
                      count={salamCount}
                      href="/jannah/salam" icon={""}  />

  <CategoryItem
                      title="الصلاة على النبي ﷺ"
                      count={salawatCount}
                      href="/jannah/salawat" icon={""}  />

  

</CategoryCard>{/* ============================= */}
{/* فضائل السور */}
{/* ============================= */}

<CategoryCard
  title="فضائل السور"
  total={0}
className="bg-gradient-to-r from-emerald-600 to-lime-500"
>

  <CategoryItem
                      title="سورة الفاتحة"
                      count={0}
                      href="/jannah/fatiha" icon={""}  />

  <CategoryItem
                      title="سورة البقرة"
                      count={0}
                      href="/jannah/baqarah" icon={""}  />

  <CategoryItem
                      title="سورة آل عمران"
                      count={0}
                      href="/jannah/imran" icon={""}  />

  <CategoryItem
                      title="سورة الكهف"
                      count={0}
                      href="/jannah/kahf" icon={""}  />

  <CategoryItem
                      title="سورة يس"
                      count={0}
                      href="/jannah/yaseen" icon={""}  />

  <CategoryItem
                      title="سورة الملك"
                      count={0}
                      href="/jannah/mulk" icon={""}  />

  <CategoryItem
                      title="سورة الكافرون"
                      count={0}
                      href="/jannah/kafirun" icon={""}  />

  <CategoryItem
                      title="سورة الإخلاص"
                      count={0}
                      href="/jannah/ikhlas" icon={""}  />

</CategoryCard></div>
    </div>
  );
}