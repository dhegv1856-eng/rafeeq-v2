"use client";

import { useEffect, useRef, useState } from "react";
import { Search, Mic, MicOff } from "lucide-react";

type SearchBarProps = {
  value: string;
  onChange: (value: string) => void;
};

declare global {
  interface Window {
    SpeechRecognition: any;
    webkitSpeechRecognition: any;
  }
}

export default function SearchBar({
  value,
  onChange,
}: SearchBarProps) {
  const [isListening, setIsListening] = useState(false);
  const [isSupported, setIsSupported] = useState(false);

  const recognitionRef = useRef<any>(null);

  useEffect(() => {
    const SpeechRecognition =
      window.SpeechRecognition ||
      window.webkitSpeechRecognition;

    if (!SpeechRecognition) {
      setIsSupported(false);
      return;
    }

    setIsSupported(true);

    const recognition = new SpeechRecognition();

    recognition.lang = "ar-EG";
    recognition.continuous = false;
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;

    recognition.onstart = () => {
      setIsListening(true);
    };

    recognition.onend = () => {
      setIsListening(false);
    };

    recognition.onerror = () => {
      setIsListening(false);
    };

    recognition.onresult = (event: any) => {
      const text = event.results[0][0].transcript;

      const cleanedText = text
        .replace("سورة", "")
        .replace("سوره", "")
        .trim();

      onChange(cleanedText);
    };

    recognitionRef.current = recognition;
  }, [onChange]);

  const toggleVoiceSearch = () => {
    if (!isSupported) {
      alert("البحث الصوتي غير مدعوم في هذا المتصفح");
      return;
    }

    if (isListening) {
      recognitionRef.current.stop();
    } else {
      recognitionRef.current.start();
    }
  };return (
    <div className="rounded-3xl border border-slate-200 bg-white shadow-md p-5">

      <div className="flex items-center gap-4">

        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-100">
          <Search
            className="text-indigo-600"
            size={22}
          />
        </div>

        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="ابحث باسم السورة أو استخدم الميكروفون..."
          className="
            flex-1
            bg-transparent
            outline-none
            text-lg
            placeholder:text-slate-400
          "
        />

        <button
          type="button"
          onClick={toggleVoiceSearch}
          disabled={!isSupported}
          className={`
            flex
            h-12
            w-12
            items-center
            justify-center
            rounded-2xl
            transition-all
            duration-300

            ${
              isListening
                ? "bg-red-100 text-red-600 animate-pulse"
                : "bg-emerald-100 text-emerald-700 hover:bg-emerald-200"
            }

            ${
              !isSupported
                ? "opacity-50 cursor-not-allowed"
                : ""
            }
          `}
        >
          {isListening ? (
            <MicOff size={22} />
          ) : (
            <Mic size={22} />
          )}
        </button>

      </div>{isListening && (
        <div className="mt-4 flex items-center justify-center gap-2 text-emerald-700">
          <div className="h-2 w-2 animate-ping rounded-full bg-emerald-600"></div>

          <span className="text-sm font-medium">
            جاري الاستماع...
          </span>
        </div>
      )}

      {!isSupported && (
        <p className="mt-4 text-center text-sm text-slate-500">
          البحث الصوتي غير مدعوم في هذا المتصفح.
        </p>
      )}

    </div>
  );
}const surahNames = [
        "الفاتحة",
        "البقرة",
        "آل عمران",
        "النساء",
        "المائدة",
        "الأنعام",
        "الأعراف",
        "الأنفال",
        "التوبة",
        "يونس",
        "هود",
        "يوسف",
        "الرعد",
        "إبراهيم",
        "الحجر",
        "النحل",
        "الإسراء",
        "الكهف",
        "مريم",
        "طه",
        "الأنبياء",
        "الحج",
        "المؤمنون",
        "النور",
        "الفرقان",
        "الشعراء",
        "النمل",
        "القصص",
        "العنكبوت",
        "الروم",
        "لقمان",
        "السجدة",
        "الأحزاب",
        "سبأ",
        "فاطر",
        "يس",
        "الصافات",
        "ص",
        "الزمر",
        "غافر",
        "فصلت",
        "الشورى",
        "الزخرف",
        "الدخان",
        "الجاثية",
        "الأحقاف",
        "محمد",
        "الفتح",
        "الحجرات",
        "ق",
        "الذاريات",
        "الطور",
        "النجم",
        "القمر",
        "الرحمن",
        "الواقعة",
        "الحديد",
        "المجادلة",
        "الحشر",
        "الممتحنة",
        "الصف",
        "الجمعة",
        "المنافقون",
        "التغابن",
        "الطلاق",
        "التحريم",
        "الملك"
      ];