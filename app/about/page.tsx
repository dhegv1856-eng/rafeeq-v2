import InfoPage from "@/components/common/InfoPage";

export default function AboutPage() {
  return (
    <InfoPage title="من نحن">

      <p>
        مرحبًا بك في <strong>رفيق</strong>.
      </p>

      <p>
        رفيق هو منصة إسلامية تهدف إلى مساعدة المسلمين على التقرب إلى الله من
        خلال توفير القرآن الكريم، والأذكار، والتسبيح، ومواقيت الصلاة، واتجاه
        القبلة، وغيرها من الأدوات التي تعين المسلم على المحافظة على عباداته
        اليومية.
      </p>

      <p>
        نسعى إلى تقديم تجربة استخدام بسيطة وسريعة، مع تطوير الموقع باستمرار
        وإضافة مزايا جديدة تخدم المسلمين في حياتهم اليومية.
      </p>

      <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-5">
        <p className="text-center font-bold text-emerald-700">
          🤲 نسأل الله أن يجعل هذا العمل خالصًا لوجهه الكريم وأن ينفع به المسلمين.
        </p>
      </div>

    </InfoPage>
  );
}