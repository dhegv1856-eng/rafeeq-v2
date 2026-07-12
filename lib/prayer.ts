export async function getPrayerTimes(
  latitude: number,
  longitude: number
) {
  const res = await fetch(
    `https://api.aladhan.com/v1/timings?latitude=${latitude}&longitude=${longitude}&method=5`
  );

  const data = await res.json();

  return data.data.timings;
}