"use client";

type FilterProps = {
  value: "all" | "مكية" | "مدنية";
  onChange: (value: "all" | "مكية" | "مدنية") => void;
};

const filters = [
  {
    id: "all",
    title: "الكل",
  },
  {
    id: "مكية",
    title: "مكية",
  },
  {
    id: "مدنية",
    title: "مدنية",
  },
] as const;

export default function Filter({
  value,
  onChange,
}: FilterProps) {
  return (
    <div className="flex flex-wrap gap-3">

      {filters.map((filter) => {

        const active = value === filter.id;

        return (
          <button
            key={filter.id}
            onClick={() => onChange(filter.id)}
            className={`
              rounded-full
              px-6
              py-3
              text-sm
              font-bold
              transition-all
              duration-300
              ${
                active
                  ? "bg-[#2F6F57] text-white shadow-lg"
                  : "bg-white text-slate-700 border border-slate-200 hover:bg-slate-50"
              }
            `}
          >
            {filter.title}
          </button>
        );
      })}

    </div>
  );
}