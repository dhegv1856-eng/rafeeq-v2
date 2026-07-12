type InfoPageProps = {
  title: string;
  children: React.ReactNode;
};

export default function InfoPage({
  title,
  children,
}: InfoPageProps) {
  return (
    <main className="min-h-screen bg-[#f8f6ef] py-12 px-6">
      <div className="max-w-4xl mx-auto rounded-3xl bg-white p-8 shadow-lg">

        <h1 className="mb-8 text-center text-4xl font-black text-emerald-700">
          {title}
        </h1>

        <div className="space-y-6 text-lg leading-9 text-slate-700">
          {children}
        </div>

      </div>
    </main>
  );
}