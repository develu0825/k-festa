"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useCallback } from "react";
import { CATEGORIES, REGIONS, categoryEmoji } from "@/lib/festivals";

type Chip = { label: string; value: string; emoji?: string };

export function Filters() {
  const router = useRouter();
  const params = useSearchParams();

  const activeCategory = params.get("category") ?? "";
  const activeRegion = params.get("region") ?? "";
  const activeWhen = params.get("when") ?? "";

  const setParam = useCallback(
    (key: string, value: string) => {
      const next = new URLSearchParams(params.toString());
      if (value && next.get(key) !== value) {
        next.set(key, value);
      } else {
        next.delete(key);
      }
      const qs = next.toString();
      router.push(qs ? `/festivals?${qs}` : "/festivals", { scroll: false });
    },
    [params, router],
  );

  const hasFilters = activeCategory || activeRegion || activeWhen;

  const categoryChips: Chip[] = CATEGORIES.map((c) => ({
    label: c,
    value: c,
    emoji: categoryEmoji(c),
  }));
  const regionChips: Chip[] = REGIONS.map((r) => ({ label: r, value: r }));

  return (
    <div className="space-y-4">
      <ChipRow
        title="When"
        chips={[{ label: "Happening soon", value: "soon", emoji: "⏳" }]}
        active={activeWhen}
        onToggle={(v) => setParam("when", v)}
      />
      <ChipRow
        title="Category"
        chips={categoryChips}
        active={activeCategory}
        onToggle={(v) => setParam("category", v)}
      />
      <ChipRow
        title="Region"
        chips={regionChips}
        active={activeRegion}
        onToggle={(v) => setParam("region", v)}
      />
      {hasFilters && (
        <button
          onClick={() => router.push("/festivals", { scroll: false })}
          className="text-sm font-medium text-primary hover:underline"
        >
          ✕ Clear all filters
        </button>
      )}
    </div>
  );
}

function ChipRow({
  title,
  chips,
  active,
  onToggle,
}: {
  title: string;
  chips: Chip[];
  active: string;
  onToggle: (value: string) => void;
}) {
  return (
    <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
      <span className="w-20 shrink-0 text-xs font-semibold uppercase tracking-wide text-muted">
        {title}
      </span>
      <div className="no-scrollbar flex gap-2 overflow-x-auto pb-1">
        {chips.map((chip) => {
          const isActive = active === chip.value;
          return (
            <button
              key={chip.value}
              onClick={() => onToggle(chip.value)}
              className={`shrink-0 rounded-full border px-3.5 py-1.5 text-sm font-medium transition-colors ${
                isActive
                  ? "border-primary bg-primary text-white"
                  : "border-border bg-surface text-foreground/80 hover:border-primary/40 hover:text-primary"
              }`}
            >
              {chip.emoji ? `${chip.emoji} ` : ""}
              {chip.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}
