import InfoPage from "@/components/common/InfoPage";

export default function PrivacyPolicyPage() {
  return (
    <InfoPage title="سياسة الخصوصية">

      <p>
        نحن في <strong>رفيق</strong> نحترم خصوصية جميع المستخدمين، ونلتزم
        بحماية المعلومات التي تتم مشاركتها معنا.
      </p>

      <p>
        لا نقوم ببيع أو مشاركة البيانات الشخصية مع أي جهة خارجية، ويتم استخدام
        المعلومات فقط لتحسين تجربة المستخدم وتطوير خدمات الموقع.
      </p>

      <p>
        قد يستخدم الموقع ملفات تعريف الارتباط (Cookies) لتحسين الأداء وتجربة
        الاستخدام، كما قد تستخدم خدمات خارجية مثل Google AdSense ملفات تعريف
        الارتباط لعرض إعلانات مناسبة للمستخدمين.
      </p>

      <p>
        باستخدامك لموقع رفيق فإنك توافق على سياسة الخصوصية هذه، وأي تحديثات
        مستقبلية قد تطرأ عليها.
      </p>

      <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-5">
        <p className="text-center font-bold text-emerald-700">
          نحن نحرص دائمًا على حماية خصوصية مستخدمينا وتقديم تجربة آمنة.
        </p>
      </div>

    </InfoPage>
  );
}