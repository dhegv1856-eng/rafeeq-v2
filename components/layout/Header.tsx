"use client";

import Link from "next/link";
import { Menu, Search, Moon, Globe } from "lucide-react";
import MobileMenu from "./MobileMenu";
export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50">

      <div className="container mx-auto px-5">

        <div className="glass mt-5 rounded-3xl px-6 py-4 flex items-center justify-between">

          {/* Logo */}

          <Link
            href="/"
            className="flex items-center gap-3"
          >

            <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-emerald-500 to-emerald-700 text-white flex items-center justify-center text-xl font-black">

              ر

            </div>

            <div>

              
              <p className="text-sm text-slate-500">

                رفيقك في رحلتك إلى الله

              </p>

            </div>

          </Link>

          {/* Desktop Menu */}

          

          {/* Mobile */}
<MobileMenu />
        </div>
{/* Actions */}

<div className="hidden lg:flex items-center gap-3">

  <button
    className="
      h-10
      w-10
      rounded-xl
      flex
      items-center
      justify-center
      hover:bg-emerald-100
      transition-all
    "
  >
    <Search size={18} />
  </button>

  <button
    className="
      h-10
      w-10
      rounded-xl
      flex
      items-center
      justify-center
      hover:bg-emerald-100
      transition-all
    "
  >
    <Moon size={10} />
  </button>

  <button
    className="
      flex
      items-center
      gap-2
      px-4
      h-10
      rounded-xl
      bg-emerald-600
      text-white
      hover:bg-emerald-700
      transition-all
    "
  >
    <Globe size={17} />
    AR
  </button>

</div>
      </div>

    </header>
  );
}