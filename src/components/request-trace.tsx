"use client";

import { useEffect, useMemo, useState } from "react";
import { traceEdges, traceNodes } from "@/lib/data";

const nodeMap = Object.fromEntries(traceNodes.map((n) => [n.id, n]));

export function RequestTrace() {
  const paths = useMemo(() => {
    return traceEdges.map(([from, to]) => {
      const a = nodeMap[from];
      const b = nodeMap[to];
      return { id: `${from}-${to}`, x1: a.x, y1: a.y, x2: b.x, y2: b.y };
    });
  }, []);

  const [active, setActive] = useState(0);

  useEffect(() => {
    const reduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;
    const id = setInterval(() => {
      setActive((i) => (i + 1) % paths.length);
    }, 900);
    return () => clearInterval(id);
  }, [paths.length]);

  return (
    <div
      className="relative w-full aspect-[4/3] max-h-[420px] rounded-2xl border border-border/80 bg-surface/80 overflow-hidden shadow-[0_0_0_1px_rgba(232,164,92,0.06),0_24px_80px_rgba(0,0,0,0.45)]"
      aria-hidden
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_20%,rgba(232,164,92,0.08),transparent_55%),radial-gradient(ellipse_at_80%_70%,rgba(107,140,255,0.08),transparent_50%)]" />
      <div
        className="absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(236,232,225,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(236,232,225,0.04) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      <div className="absolute top-3 left-4 right-4 flex items-center justify-between z-10">
        <span className="font-mono text-[10px] tracking-[0.18em] uppercase text-muted-foreground">
          stack.trace · product path
        </span>
        <span className="inline-flex items-center gap-1.5 font-mono text-[10px] text-copper">
          <span className="size-1.5 rounded-full bg-copper animate-pulse" />
          shipping
        </span>
      </div>

      <svg
        viewBox="0 0 100 100"
        className="absolute inset-0 w-full h-full p-4 pt-10"
        preserveAspectRatio="xMidYMid meet"
      >
        {paths.map((p, i) => (
          <g key={p.id}>
            <line
              x1={p.x1}
              y1={p.y1}
              x2={p.x2}
              y2={p.y2}
              stroke="rgba(236,232,225,0.12)"
              strokeWidth="0.4"
            />
            <line
              x1={p.x1}
              y1={p.y1}
              x2={p.x2}
              y2={p.y2}
              stroke={i === active ? "#e8a45c" : "rgba(107,140,255,0.25)"}
              strokeWidth={i === active ? "0.7" : "0.35"}
              strokeDasharray={i === active ? "3 2" : undefined}
              className={i === active ? "trace-active" : undefined}
            />
          </g>
        ))}

        {traceNodes.map((n) => {
          const lit = paths[active]
            ? paths[active].id.includes(n.id)
            : false;
          return (
            <g key={n.id}>
              <circle
                cx={n.x}
                cy={n.y}
                r={lit ? 3.2 : 2.6}
                fill={lit ? "#e8a45c" : "#12141f"}
                stroke={lit ? "#e8a45c" : "rgba(107,140,255,0.55)"}
                strokeWidth="0.5"
              />
              <text
                x={n.x}
                y={n.y + 7}
                textAnchor="middle"
                className="fill-muted-foreground"
                style={{ fontSize: "3.2px", fontFamily: "var(--font-mono)" }}
              >
                {n.label}
              </text>
            </g>
          );
        })}
      </svg>

      <div className="absolute bottom-3 left-4 right-4 flex gap-3 font-mono text-[10px] text-muted-foreground">
        <span>
          hop <span className="text-foreground">{active + 1}</span>/{paths.length}
        </span>
        <span className="text-signal">~{(12 + active * 7).toFixed(0)}ms</span>
      </div>
    </div>
  );
}
