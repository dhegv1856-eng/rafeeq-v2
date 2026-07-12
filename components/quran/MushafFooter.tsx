"use client";

type Props = {
  page: number;
};

export default function MushafFooter({
  page,
}: Props) {
  return (
    <div
      className="
      mt-5
      flex
      justify-center
    "
    >
      <div
        className="
        rounded-full
        bg-white/85
        px-5
        py-2
        shadow-lg
        border
        border-[#d8c9a3]
        text-emerald-800
        font-bold
      "
      >
        الصفحة {page}
      </div>
    </div>
  );
}