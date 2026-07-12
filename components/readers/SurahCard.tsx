interface Props {
  number: number;
  name: string;
}

export default function SurahCard({
  number,
  name,
}: Props) {
  return (
    <button className="flex w-full items-center justify-between rounded-2xl bg-white p-5 shadow transition hover:bg-emerald-50">

      <span className="font-bold">
        {number}
      </span>

      <span className="text-xl font-bold">
        {name}
      </span>

      <span className="text-2xl">
        ▶️
      </span>

    </button>
  );
}