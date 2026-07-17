"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { profile } from "@/lib/data";

const links = [
  { id: "work", label: "Work" },
  { id: "about", label: "About" },
  { id: "stack", label: "Stack" },
  { id: "contact", label: "Contact" },
];

export function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (id: string) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-ink/80 backdrop-blur-xl border-b border-border/60"
          : "bg-transparent"
      )}
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8 h-16 flex items-center justify-between">
        <a
          href="#top"
          className="group flex items-baseline gap-2 font-display text-lg tracking-tight"
        >
          <span className="text-foreground">{profile.name}</span>
          <span className="font-mono text-[11px] text-muted-foreground tracking-wide">
            @{profile.handle}
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <button
              key={l.id}
              type="button"
              onClick={() => go(l.id)}
              className="font-mono text-[11px] tracking-[0.16em] uppercase text-muted-foreground hover:text-copper transition-colors"
            >
              {l.label}
            </button>
          ))}
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex items-center rounded-full bg-copper text-ink px-4 py-2 text-sm font-medium hover:bg-copper/90 transition-colors"
          >
            Hire me
          </a>
        </nav>

        <button
          type="button"
          className="md:hidden p-2 text-foreground"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-border/60 bg-ink/95 backdrop-blur-xl px-5 py-6 flex flex-col gap-4">
          {links.map((l) => (
            <button
              key={l.id}
              type="button"
              onClick={() => go(l.id)}
              className="text-left font-display text-2xl text-foreground"
            >
              {l.label}
            </button>
          ))}
          <a
            href={`mailto:${profile.email}`}
            className="mt-2 inline-flex w-fit items-center rounded-full bg-copper text-ink px-4 py-2 text-sm font-medium"
          >
            Hire me
          </a>
        </div>
      )}
    </header>
  );
}
