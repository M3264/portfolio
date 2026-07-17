import { profile } from "@/lib/data";

export function Footer() {
  return (
    <footer className="px-5 sm:px-8 py-10 border-t border-border/50">
      <div className="mx-auto max-w-6xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <p className="font-mono text-[11px] text-muted-foreground">
          © {new Date().getFullYear()} {profile.name} · @{profile.handle}
        </p>
        <p className="font-mono text-[11px] text-muted-foreground">
          kennyy.xyz
        </p>
      </div>
    </footer>
  );
}
