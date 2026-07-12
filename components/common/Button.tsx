import { ButtonHTMLAttributes } from "react";

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary";
};

export default function Button({
  children,
  variant = "primary",
  className = "",
  ...props
}: Props) {
  return (
    <button
      {...props}
      className={`
        rounded-2xl
        px-6
        py-3
        font-bold
        transition-all
        duration-300
        ${
          variant === "primary"
            ? "bg-indigo-600 text-white hover:bg-indigo-700"
            : "bg-slate-100 text-slate-700 hover:bg-slate-200"
        }
        ${className}
      `}
    >
      {children}
    </button>
  );
}