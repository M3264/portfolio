import { experience, principles, profile } from "@/lib/data";

export function About() {
  return (
    <section id="about" className="px-5 sm:px-8 py-24 sm:py-32 border-t border-border/50">
      <div className="mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
          <div className="lg:col-span-5 space-y-6">
            <p className="font-mono text-[11px] tracking-[0.2em] uppercase text-copper">
              About
            </p>
            <h2 className="font-display text-4xl sm:text-5xl tracking-tight text-balance">
              {profile.name} — platforms to pixels
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed text-lg">
              <p>{profile.shortBio}</p>
              <p>
                On GitHub as{" "}
                <a
                  href={profile.github}
                  className="text-copper hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  @{profile.handle}
                </a>
                . Affiliated with {profile.company}. Active on{" "}
                <a
                  href="https://sparkdb.pro"
                  className="text-copper hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  SparkDB
                </a>{" "}
                with haki.dev — and anything else that needs building.
              </p>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-10">
            <div>
              <h3 className="font-mono text-[11px] tracking-[0.16em] uppercase text-muted-foreground mb-5">
                Focus
              </h3>
              <ol className="space-y-8">
                {experience.map((job) => (
                  <li
                    key={job.period + job.role}
                    className="relative pl-6 border-l border-border"
                  >
                    <span className="absolute -left-[5px] top-1.5 size-2 rounded-full bg-copper" />
                    <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-2">
                      <div>
                        <h4 className="font-display text-xl text-foreground">
                          {job.role}
                        </h4>
                        <p className="text-copper text-sm">{job.org}</p>
                      </div>
                      <p className="font-mono text-[11px] text-muted-foreground">
                        {job.period}
                      </p>
                    </div>
                    <ul className="space-y-1.5 text-muted-foreground text-sm leading-relaxed">
                      {job.points.map((pt) => (
                        <li key={pt} className="flex gap-2">
                          <span className="text-copper shrink-0">▸</span>
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </li>
                ))}
              </ol>
            </div>

            <div className="grid sm:grid-cols-3 gap-4">
              {principles.map((pr) => (
                <article
                  key={pr.title}
                  className="rounded-xl border border-border/80 bg-surface/40 p-5"
                >
                  <h4 className="font-display text-base text-foreground mb-2">
                    {pr.title}
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {pr.body}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
