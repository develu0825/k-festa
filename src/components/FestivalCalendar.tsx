"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import {
  categoryEmoji,
  groupByMonth,
  monthName,
  seasonEmoji,
  seasonOf,
} from "@/lib/festivals";

const months = groupByMonth();

export function FestivalCalendar() {
  // Current month is resolved in the browser so "This month" is always accurate.
  const [currentMonth, setCurrentMonth] = useState<number | null>(null);

  useEffect(() => {
    setCurrentMonth(new Date().getMonth() + 1);
  }, []);

  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {months.map(({ month, items }) => {
        const season = seasonOf(month);
        const isNow = currentMonth === month;
        return (
          <section
            key={month}
            className={`flex flex-col rounded-2xl border bg-surface p-5 transition-colors ${
              isNow
                ? "border-primary ring-2 ring-primary/30"
                : "border-border"
            }`}
          >
            <header className="mb-4 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="text-xl">{seasonEmoji(season)}</span>
                <div>
                  <h2 className="text-lg font-bold leading-none">
                    {monthName(month)}
                  </h2>
                  <span className="text-xs text-muted">{season}</span>
                </div>
              </div>
              {isNow && (
                <span className="rounded-full bg-primary px-2.5 py-1 text-xs font-bold text-white">
                  This month
                </span>
              )}
            </header>

            {items.length > 0 ? (
              <ul className="space-y-1.5">
                {items.map((f) => (
                  <li key={f.slug}>
                    <Link
                      href={`/festivals/${f.slug}`}
                      className="group flex items-center gap-3 rounded-lg px-2 py-2 transition-colors hover:bg-black/5"
                    >
                      <span
                        className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-lg"
                        style={{
                          backgroundImage: `linear-gradient(135deg, ${f.gradient[0]}, ${f.gradient[1]})`,
                        }}
                      >
                        {f.emoji}
                      </span>
                      <span className="min-w-0">
                        <span className="block truncate text-sm font-semibold group-hover:text-primary">
                          {f.name}
                        </span>
                        <span className="block truncate text-xs text-muted">
                          {categoryEmoji(f.category)} {f.city} · {f.period}
                        </span>
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="flex flex-1 items-center justify-center rounded-lg border border-dashed border-border py-6 text-center text-xs text-muted">
                No festivals this month
              </p>
            )}
          </section>
        );
      })}
    </div>
  );
}
