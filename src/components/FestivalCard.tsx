import Link from "next/link";
import type { Festival } from "@/lib/festivals";
import { categoryEmoji, whenLabel } from "@/lib/festivals";
import { Poster } from "./Poster";

export function FestivalCard({ festival }: { festival: Festival }) {
  const when = whenLabel(festival.peakMonth);
  const soon = when === "Happening this month" || when === "Next month";

  return (
    <Link
      href={`/festivals/${festival.slug}`}
      className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-surface shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
    >
      <div className="relative h-44">
        <Poster
          festival={festival}
          className="h-full w-full transition-transform duration-500 group-hover:scale-105"
          emojiClassName="text-6xl"
        />
        <span className="absolute left-3 top-3 z-10 rounded-full bg-black/35 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm">
          {categoryEmoji(festival.category)} {festival.category}
        </span>
        {soon && (
          <span className="absolute right-3 top-3 z-10 rounded-full bg-accent px-3 py-1 text-xs font-bold text-indigo shadow">
            {when}
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-lg font-bold leading-snug text-foreground group-hover:text-primary">
          {festival.name}
        </h3>
        <p className="mt-1 text-sm text-muted">
          📍 {festival.city}, {festival.province}
        </p>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-foreground/80">
          {festival.tagline}
        </p>
        <div className="mt-4 flex items-center justify-between border-t border-border pt-3 text-xs text-muted">
          <span>🗓️ {festival.period}</span>
          <span className="font-medium text-primary group-hover:underline">
            Details →
          </span>
        </div>
      </div>
    </Link>
  );
}
