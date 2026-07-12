"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Key, ReactElement, JSXElementConstructor, ReactNode, ReactPortal } from "react";
import { UrlObject } from "url";

const actions: {
  id: Key;
  href: string | UrlObject;
  color: string;
  icon: ReactNode;
  title: ReactNode;
}[] = [];

export default function BottomActions() {
  return (
    <section className="py-4">

      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">

        {actions.map((action: { id: Key | null | undefined; href: string | UrlObject; color: any; icon: string | number | bigint | boolean | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<string | number | bigint | boolean | ReactPortal | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined> | null | undefined; title: string | number | bigint | boolean | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<string | number | bigint | boolean | ReactPortal | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined> | null | undefined; }) => (

          <motion.div
            key={action.id}
            whileHover={{ y: -5, scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >

            <Link
              href={action.href}
              className="
                flex
                flex-col
                items-center
                justify-center
                rounded-3xl
                border
                border-slate-200
                bg-white
                p-6
                shadow-sm
                transition
                hover:shadow-lg
              "
            >

              <div
                className={`mb-4 flex h-16 w-16 items-center justify-center rounded-2xl text-3xl ${action.color}`}
              >
                {action.icon}
              </div>

              <h3 className="text-lg font-bold text-slate-800">
                {action.title}
              </h3>

            </Link>

          </motion.div>

        ))}

      </div>

    </section>
  );
}