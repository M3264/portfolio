import { skills } from "@/lib/data";

export function Skills() {
  return (
    <section id="stack" className="px-5 sm:px-8 py-24 sm:py-32 border-t border-border/50">
      <div className="mx-auto max-w-6xl">
        <div className="mb-14 max-w-2xl">
          <p className="font-mono text-[11px] tracking-[0.2em] uppercase text-copper mb-3">
            Stack
          </p>
          <h2 className="font-display text-4xl sm:text-5xl tracking-tight">
            Tools that ship
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            Production-proven modules — not a laundry list of every tutorial.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {skills.map((group) => (
            <div
              key={group.category}
              className="rounded-2xl border border-border/80 bg-surface/40 p-6"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-display text-lg">{group.category}</h3>
                <span className="font-mono text-[10px] text-muted-foreground">
                  {group.items.length}
                </span>
              </div>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="font-mono text-[12px] px-2.5 py-1 rounded-md border border-border text-foreground/90 hover:border-copper/40 hover:text-copper transition-colors"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
