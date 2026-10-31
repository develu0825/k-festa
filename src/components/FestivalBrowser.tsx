"use client";

import { useSearchParams } from "next/navigation";
import { useMemo } from "react";
import { FestivalCard } from "./FestivalCard";
import { Filters } from "./Filters";
import { festivals, monthsUntil, upcoming } from "@/lib/festivals";

export function FestivalBrowser() {
  const params = useSearchParams();
  const category = params.get("category") ?? "";
  const region = params.get("region") ?? "";
  const when = params.get("when") ?? "";

  const results = useMemo(() => {
    let list = upcoming(); // soonest first
    if (category) list = list.filter((f) => f.category === category);
    if (region) list = list.filter((f) => f.region === region);
    if (when === "soon") list = list.filter((f) => monthsUntil(f.peakMonth) <= 2);
    return list;
  }, [category, region, when]);

  return (
    <div className="space-y-8">
      <Filters />
      <div className="flex items-center justify-between">
        <p className="text-sm text-muted">
          Showing <strong className="text-foreground">{results.length}</strong>{" "}
          of {festivals.length} festivals
        </p>
      </div>

      {results.length > 0 ? (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {results.map((f) => (
            <FestivalCard key={f.slug} festival={f} />
          ))}
        </div>
      ) : (
        <div className="rounded-2xl border border-dashed border-border bg-surface/50 py-20 text-center">
          <span className="text-4xl">🔍</span>
          <p className="mt-3 font-semibold">No festivals match these filters.</p>
          <p className="mt-1 text-sm text-muted">
            Try clearing a filter or widening your search.
          </p>
        </div>
      )}
    </div>
  );
}
