"use client";

import { useEffect, useState } from "react";

export default function useJannahCounts() {
  const [counts, setCounts] = useState({
    trees: 0,
    palms: 0,
    flowers: 0,
    houses: 0,
    treasures: 0,
    palaces: 0,

    subhanallah: 0,
    alhamdulillah: 0,
    takbeer: 0,
    salawat: 0,

    subhanallahWaBihamdih: 0,
    laIlahaIllallah: 0,
    laIlahaIllallahAlhamd: 0,
    alAliAlAzim: 0,
    astaghfirullah: 0,
    hawqala: 0,

    salam: 0,

    fatiha: 0,
    baqarah: 0,
    imran: 0,
    kahf: 0,
    yaseen: 0,
    mulk: 0,
    kafirun: 0,
    ikhlas: 0,
  });

  useEffect(() => {
    const trees =
      Number(localStorage.getItem("jannah-trees")) || 0;

    const palms =
      Number(localStorage.getItem("jannah-palms")) || 0;

    const flowers =
      Number(localStorage.getItem("jannah-flowers")) || 0;

    const houses =
      Number(localStorage.getItem("jannah-houses")) || 0;

    const treasures =
      Number(localStorage.getItem("jannah-treasures")) || 0;

    const palaces =
      Number(localStorage.getItem("jannah-palaces")) || 0;
const subhanallah =
  Number(localStorage.getItem("jannah-subhanallah")) || 0;

const alhamdulillah =
  Number(localStorage.getItem("jannah-alhamdulillah")) || 0;

const takbeer =
  Number(localStorage.getItem("jannah-takbeer")) || 0;

const salawat =
  Number(localStorage.getItem("jannah-salawat")) || 0;

const subhanallahWaBihamdih =
  Number(localStorage.getItem("jannah-subhanallah-wa-bihamdih")) || 0;

const laIlahaIllallah =
  Number(localStorage.getItem("jannah-la-ilaha-illa-allah")) || 0;

const laIlahaIllallahAlhamd =
  Number(localStorage.getItem("jannah-la-ilaha-illa-allah-alhamd")) || 0;

const alAliAlAzim =
  Number(localStorage.getItem("jannah-al-ali-al-azim")) || 0;

const astaghfirullah =
  Number(localStorage.getItem("jannah-astaghfirullah")) || 0;

const hawqala =
  Number(localStorage.getItem("jannah-hawqala")) || 0;

const salam =
  Number(localStorage.getItem("jannah-salam")) || 0;

const fatiha =
  Number(localStorage.getItem("jannah-fatiha")) || 0;

const baqarah =
  Number(localStorage.getItem("jannah-baqarah")) || 0;

const imran =
  Number(localStorage.getItem("jannah-imran")) || 0;

const kahf =
  Number(localStorage.getItem("jannah-kahf")) || 0;

const yaseen =
  Number(localStorage.getItem("jannah-yaseen")) || 0;

const mulk =
  Number(localStorage.getItem("jannah-mulk")) || 0;

const kafirun =
  Number(localStorage.getItem("jannah-kafirun")) || 0;

const ikhlas =
  Number(localStorage.getItem("jannah-ikhlas")) || 0;
   setCounts({
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
});

  }, []);

  return counts;
}