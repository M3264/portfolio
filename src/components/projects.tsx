import { ArrowUpRight, GitBranch } from "lucide-react";
import { projects } from "@/lib/data";

export function Projects() {
  return (
    <section id="work" className="px-5 sm:px-8 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="mb-14 max-w-2xl">
          <p className="font-mono text-[11px] tracking-[0.2em] uppercase text-copper mb-3">
            Selected work
          </p>
          <h2 className="font-display text-4xl sm:text-5xl tracking-tight text-balance">
            What I ship on GitHub
          </h2>
          <p className="mt-4 text-muted-foreground text-lg leading-relaxed">
            Public projects from{" "}
            <a
              href="https://github.com/M3264"
              className="text-copper hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              @M3264
            </a>
            — not mock case studies.
          </p>
        </div>

        <ul className="flex flex-col gap-4">
          {projects.map((p, i) => (
            <li
              key={p.slug}
              className="group relative rounded-2xl border border-border/80 bg-surface/40 hover:bg-surface/80 hover:border-copper/30 transition-all duration-300"
            >
              <div className="p-6 sm:p-8 grid lg:grid-cols-12 gap-6">
                <div className="lg:col-span-1 font-mono text-sm text-muted-foreground pt-1">
                  {String(i + 1).padStart(2, "0")}
                </div>

                <div className="lg:col-span-6 space-y-3">
                  <div className="flex flex-wrap items-center gap-3">
                    <h3 className="font-display text-2xl sm:text-3xl tracking-tight">
                      {p.name}
                    </h3>
                    <span
                      className={
                        p.status === "live"
                          ? "font-mono text-[10px] tracking-wider uppercase px-2 py-0.5 rounded-full border border-signal/40 text-signal bg-signal/10"
                          : "font-mono text-[10px] tracking-wider uppercase px-2 py-0.5 rounded-full border border-copper/40 text-copper bg-copper/10"
                      }
                    >
                      {p.status}
                    </span>
                    {p.meta && (
                      <span className="font-mono text-[11px] text-muted-foreground">
                        {p.meta}
                      </span>
                    )}
                  </div>
                  <p className="text-muted-foreground leading-relaxed max-w-xl">
                    {p.description}
                  </p>
                  <p className="font-mono text-[11px] text-copper/90 tracking-wide">
                    {p.role}
                  </p>
                </div>

                <div className="lg:col-span-5 flex flex-col gap-4 justify-between">
                  <div className="flex flex-wrap gap-2">
                    {p.tech.map((t) => (
                      <span
                        key={t}
                        className="font-mono text-[11px] px-2.5 py-1 rounded-md border border-border text-muted-foreground"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-wrap items-center gap-3">
                    {p.endpoints.map((e) => (
                      <a
                        key={e.href}
                        href={e.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 font-mono text-sm text-foreground hover:text-copper transition-colors"
                      >
                        {e.label}
                        <ArrowUpRight className="size-3.5 opacity-60" />
                      </a>
                    ))}
                    {p.repo && (
                      <a
                        href={p.repo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 font-mono text-sm text-muted-foreground hover:text-copper transition-colors"
                      >
                        <GitBranch className="size-3.5" />
                        source
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
