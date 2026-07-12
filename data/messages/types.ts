export interface Message {
  mood: string;
  type: "ayah" | "dua" | "zekr";
  text: string;
  source: string;
}