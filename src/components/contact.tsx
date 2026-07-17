import { GitBranch, Mail, Send } from "lucide-react";
import { profile } from "@/lib/data";

const channels = [
  {
    label: "Email",
    value: profile.email,
    href: `mailto:${profile.email}`,
    icon: Mail,
    hint: "Project briefs & hire",
  },
  {
    label: "GitHub",
    value: `@${profile.handle}`,
    href: profile.github,
    icon: GitBranch,
    hint: "Code & history",
  },
  {
    label: "Telegram",
    value: "@m32669",
    href: profile.telegram,
    icon: Send,
    hint: "Fast support / chat",
  },
];

export function Contact() {
  return (
    <section id="contact" className="px-5 sm:px-8 py-24 sm:py-32 border-t border-border/50">
      <div className="mx-auto max-w-6xl">
        <div className="rounded-3xl border border-border/80 bg-gradient-to-br from-surface via-surface to-ink p-8 sm:p-12 lg:p-16 relative overflow-hidden">
          <div className="pointer-events-none absolute -right-20 -top-20 size-72 rounded-full bg-copper/10 blur-3xl" />
          <div className="pointer-events-none absolute -left-16 bottom-0 size-56 rounded-full bg-signal/10 blur-3xl" />

          <div className="relative grid lg:grid-cols-2 gap-12">
            <div className="space-y-6">
              <p className="font-mono text-[11px] tracking-[0.2em] uppercase text-copper">
                Contact
              </p>
              <h2 className="font-display text-4xl sm:text-5xl tracking-tight text-balance">
                Need something built — end to end?
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed max-w-md">
                Platforms, APIs, dashboards, bots, infra, or the messy middle.
                {profile.hireable ? " Open to work." : ""}
              </p>
              <a
                href={`mailto:${profile.email}?subject=Project%20inquiry`}
                className="inline-flex items-center gap-2 rounded-full bg-copper text-ink px-6 py-3 text-sm font-medium hover:bg-copper/90 transition-colors"
              >
                <Mail className="size-4" />
                {profile.email}
              </a>
            </div>

            <div className="grid sm:grid-cols-1 gap-3 content-start">
              {channels.map((c) => (
                <a
                  key={c.label}
                  href={c.href}
                  target={c.href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    c.href.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className="group rounded-2xl border border-border/80 bg-ink/40 p-5 hover:border-copper/40 transition-colors"
                >
                  <c.icon className="size-5 text-copper mb-3" />
                  <div className="font-display text-lg text-foreground group-hover:text-copper transition-colors">
                    {c.label}
                  </div>
                  <div className="font-mono text-xs text-muted-foreground mt-1">
                    {c.value}
                  </div>
                  <div className="text-xs text-muted-foreground/80 mt-2">
                    {c.hint}
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
