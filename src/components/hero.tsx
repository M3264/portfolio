"use client";

import { GitBranch, Mail, Send } from "lucide-react";
import { profile, stats } from "@/lib/data";
import { RequestTrace } from "@/components/request-trace";

export function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-screen pt-28 pb-20 px-5 sm:px-8 overflow-hidden"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-10%,rgba(232,164,92,0.12),transparent_55%)]" />

      <div className="relative mx-auto max-w-6xl grid lg:grid-cols-12 gap-12 lg:gap-10 items-center">
        <div className="lg:col-span-6 space-y-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-border/80 bg-surface/60 px-3 py-1.5 font-mono text-[11px] tracking-wide text-muted-foreground">
            <span className="size-1.5 rounded-full bg-signal" />
            {profile.hireable ? "Open to work" : "Building"} · {profile.company}
          </div>

          <div className="space-y-4">
            <p className="font-mono text-[11px] tracking-[0.2em] uppercase text-copper">
              {profile.title}
            </p>
            <h1 className="font-display text-[clamp(2.75rem,8vw,5rem)] leading-[0.95] tracking-tight text-balance">
              <span className="text-foreground">{profile.name}</span>
              <br />
              <span className="text-copper">builds what</span>
              <br />
              the product needs.
            </h1>
            <p className="max-w-xl text-lg sm:text-xl text-muted-foreground leading-relaxed text-pretty">
              {profile.tagline}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-2 rounded-full bg-copper text-ink px-5 py-2.5 text-sm font-medium hover:bg-copper/90 transition-colors"
            >
              <Mail className="size-4" />
              Start a project
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/50 px-5 py-2.5 text-sm text-foreground hover:border-copper/50 hover:text-copper transition-colors"
            >
              <GitBranch className="size-4" />
              GitHub
            </a>
            <a
              href={profile.telegram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/50 px-5 py-2.5 text-sm text-foreground hover:border-copper/50 hover:text-copper transition-colors"
            >
              <Send className="size-4" />
              Telegram
            </a>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-border/60">
            {stats.map((s) => (
              <div key={s.label}>
                <div className="font-display text-2xl sm:text-3xl text-foreground tracking-tight">
                  {s.value}
                </div>
                <div className="font-mono text-[10px] tracking-[0.14em] uppercase text-muted-foreground mt-1">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-6">
          <RequestTrace />
          <p className="mt-4 font-mono text-[11px] text-muted-foreground text-center lg:text-left">
            Signature view — edge → API → SparkDB / dashboard · Kord-Ai ·
            vault. Platforms, products, and the path between.
          </p>
        </div>
      </div>
    </section>
  );
}
