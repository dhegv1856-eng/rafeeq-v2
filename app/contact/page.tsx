import InfoPage from "@/components/common/InfoPage";

export default function ContactPage() {
  return (
    <InfoPage title="اتصل بنا">

      <p>
        إذا كان لديك أي استفسار أو اقتراح أو واجهت أي مشكلة أثناء استخدام
        <strong> رفيق </strong>
        يسعدنا التواصل معك.
      </p>

      <p>
        يمكنك مراسلتنا عبر البريد الإلكتروني:
      </p>

      <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-6 text-center">

        <a
          href="mailto:reemn696696@gmail.com"
          className="text-xl font-bold text-emerald-700 hover:underline"
        >
          📧 reemn696696@gmail.com
        </a>

      </div>

      <p>
        نرحب بجميع الاقتراحات التي تساعد على تطوير رفيق وتحسين تجربة المستخدم.
      </p>

      <div className="rounded-2xl border border-amber-200 bg-amber-50 p-5">
        <p className="text-center font-bold text-amber-700">
          جزاكم الله خيرًا على دعمكم وثقتكم.
        </p>
      </div>

    </InfoPage>
  );
}