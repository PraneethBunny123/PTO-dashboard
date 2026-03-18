"use client";

import { UserAvatar } from "./UserAvatar";
import { NAV_LINKS } from "@/lib/constants";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b bg-slate-200 backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-2xl font-bold">
          Time Tracker
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {NAV_LINKS.map((item) => {
            const href = `/${item.toLowerCase()}`;
            return (
              <Link
                key={item}
                href={href}
                className="text-md text-slate-500 hover:text-slate-950 transition-colors"
              >
                {item}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center">
          <div className="hidden md:block">
            <UserAvatar />
          </div>
          <button
            className="md:hidden p-1 rounded-md transition-colors"
            onClick={() => setOpen((prev) => !prev)}
            aria-label="Toggle menu"
          >
            {open ? <X className="h-6 w-6 cursor-pointer" /> : <Menu className="h-6 w-6 cursor-pointer" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden bg-slate-700 px-6 py-4 flex flex-col gap-4">
          {NAV_LINKS.map((item) => (
            <Link
              key={item}
              href={`/${item.toLowerCase()}`}
              onClick={() => setOpen(false)}
              className="text-md text-slate-500 hover:text-slate-950 transition-colors"
            >
              {item}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
