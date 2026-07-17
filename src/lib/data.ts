export type Project = {
  name: string;
  slug: string;
  description: string;
  role: string;
  endpoints: { label: string; href: string }[];
  tech: string[];
  repo?: string;
  status: "live" | "building";
  meta?: string;
};

export type Experience = {
  role: string;
  org: string;
  period: string;
  points: string[];
};

/**
 * Profile + work:
 * - Kennyy · @M3264 · hireable · CodeTheEarth
 * - Active collaborator on SparkDB (sparkdb.pro) with haki.dev (owner)
 * - Kord-Ai (250★ / 424 forks) — multi-device WhatsApp bot
 * - CryptoVault — client-side encrypted secrets vault
 * Builds whatever the product needs: platforms, APIs, bots, UI, infra.
 */
export const profile = {
  name: "Kennyy",
  handle: "M3264",
  title: "Full-stack engineer · product builder",
  company: "CodeTheEarth",
  email: "miracle32669@gmail.com",
  github: "https://github.com/M3264",
  telegram: "https://t.me/m32669",
  hireable: true,
  tagline:
    "I build whatever the product needs — platforms, APIs, dashboards, bots, and the glue that keeps them online.",
  shortBio:
    "Full-stack engineer shipping real products end to end. Active collaborator on SparkDB (sparkdb.pro) with haki.dev — multi-tenant databases, buckets, and a developer dashboard. Also author of Kord-Ai and CryptoVault. Open to work.",
};

export const stats = [
  { label: "Kord-Ai stars", value: "250+" },
  { label: "Kord-Ai forks", value: "420+" },
  { label: "Public repos", value: "38" },
  { label: "GitHub", value: "@M3264" },
];

export const projects: Project[] = [
  {
    name: "SparkDB",
    slug: "sparkdb",
    description:
      "Databases without the setup — spin up Postgres, MySQL, or MongoDB, grab a connection string, and ship. Multi-tenant platform with S3-compatible buckets, typed SDK, dashboard, billing, and auth. Built with haki.dev (owner); I collaborate actively across the stack.",
    role: "Active collaborator · with haki.dev",
    endpoints: [
      { label: "sparkdb.pro", href: "https://sparkdb.pro" },
      { label: "api.sparkdb.pro", href: "https://api.sparkdb.pro" },
    ],
    tech: [
      "Bun",
      "PostgreSQL",
      "Drizzle",
      "Next.js",
      "Traefik",
      "MinIO",
      "Go",
    ],
    status: "live",
    meta: "with haki.dev",
  },
  {
    name: "Kord-Ai",
    slug: "kord-ai",
    description:
      "Multi-functional WhatsApp bot built on Baileys — multi-device, easy to configure, and designed for simple deploys. Session pairing, plugin-style commands, and community distribution at scale.",
    role: "Author & maintainer",
    endpoints: [
      { label: "kord.live", href: "https://kord.live" },
      { label: "Session pair", href: "https://kord.live/session" },
      { label: "Deploy", href: "https://kord.live/deploy" },
      { label: "kord-ai.web.id", href: "https://www.kord-ai.web.id" },
    ],
    tech: ["JavaScript", "Node.js", "Baileys", "WhatsApp"],
    repo: "https://github.com/M3264/Kord-Ai",
    status: "live",
    meta: "250★ · 424 forks",
  },
  {
    name: "CryptoVault",
    slug: "crypto-vault",
    description:
      "Client-side encrypted vault for keys, seeds, and secrets. AES-256-GCM + PBKDF2 in the browser; ciphertext lands in the user’s own Google Drive appDataFolder. Optional TOTP and auto-lock.",
    role: "Solo product",
    endpoints: [
      { label: "vault.kennyy.xyz", href: "https://vault.kennyy.xyz" },
    ],
    tech: ["Next.js", "TypeScript", "Web Crypto", "Google Drive API"],
    repo: "https://github.com/M3264/crypto-vault",
    status: "live",
  },
];

export const skills = [
  {
    category: "Runtime & language",
    items: ["JavaScript", "TypeScript", "Node.js", "Bun", "Go", "HTML"],
  },
  {
    category: "Frameworks & UI",
    items: ["Next.js", "React", "Express", "Electron", "Tailwind"],
  },
  {
    category: "Data & storage",
    items: ["PostgreSQL", "MongoDB", "MySQL", "Drizzle", "MinIO / S3"],
  },
  {
    category: "Platforms & bots",
    items: ["Multi-tenant SaaS", "Baileys", "WhatsApp multi-device", "SDKs"],
  },
  {
    category: "Security / crypto",
    items: ["Web Crypto API", "AES-GCM", "PBKDF2", "TOTP", "OAuth"],
  },
  {
    category: "Infra",
    items: ["Docker", "Traefik", "Nginx", "CI/CD", "VPS / panel deploys"],
  },
];

export const experience: Experience[] = [
  {
    role: "Active collaborator",
    org: "SparkDB · sparkdb.pro · with haki.dev",
    period: "Present",
    points: [
      "Collaborate on SparkDB — multi-tenant DBaaS with buckets, SDK, and dashboard",
      "Work across product surface: backend services, UI, auth, and deploy paths",
      "Partner with haki.dev (owner) on shipping infrastructure developers actually use",
    ],
  },
  {
    role: "Open-source maintainer",
    org: "Kord-Ai · github.com/M3264",
    period: "2024 — Present",
    points: [
      "Designed and shipped Kord-Ai: multi-device WhatsApp bot with public session + deploy flows",
      "Grew the project to 250+ stars and 400+ forks with active community channels",
      "Documented Render, panel, and VPS deploy paths used by operators worldwide",
    ],
  },
  {
    role: "Independent builder",
    org: "CodeTheEarth · personal products",
    period: "Ongoing",
    points: [
      "Shipped CryptoVault (encrypted client-side secrets + Google Drive storage)",
      "Build full products when needed — APIs, dashboards, bots, ops tooling",
      "Available for hire — platforms, backends, frontends, and everything between",
    ],
  },
];

export const principles = [
  {
    title: "Build what’s needed",
    body: "Not a one-trick stack. Platforms, UIs, bots, infra — whatever unblocks the product ships.",
  },
  {
    title: "Ship what people run",
    body: "Real deploys, real tenants, real operators. Demos that never leave localhost don’t count.",
  },
  {
    title: "Own the hard parts",
    body: "CryptoVault encrypts in-browser. SparkDB hides database setup. Kord-Ai makes pairing + deploy obvious.",
  },
];

/** Nodes used by the hero request-trace signature */
export const traceNodes = [
  { id: "edge", label: "edge", x: 10, y: 48 },
  { id: "api", label: "api", x: 34, y: 28 },
  { id: "db", label: "sparkdb", x: 58, y: 18 },
  { id: "ui", label: "dashboard", x: 78, y: 40 },
  { id: "bots", label: "kord-ai", x: 58, y: 72 },
  { id: "vault", label: "vault", x: 34, y: 78 },
] as const;

export const traceEdges: [string, string][] = [
  ["edge", "api"],
  ["api", "db"],
  ["db", "ui"],
  ["api", "bots"],
  ["bots", "vault"],
  ["vault", "api"],
];
