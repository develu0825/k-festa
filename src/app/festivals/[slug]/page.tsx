import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Poster } from "@/components/Poster";
import { FestivalCard } from "@/components/FestivalCard";
import {
  allSlugs,
  categoryEmoji,
  festivals,
  getFestival,
  whenLabel,
} from "@/lib/festivals";

export function generateStaticParams() {
  return allSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/festivals/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const festival = getFestival(slug);
  if (!festival) return { title: "Festival not found" };
  return {
    title: festival.name,
    description: `${festival.tagline} — ${festival.period} in ${festival.city}, ${festival.province}. ${festival.about.slice(0, 120)}…`,
  };
}

export default async function FestivalDetail({
  params,
}: PageProps<"/festivals/[slug]">) {
  const { slug } = await params;
  const festival = getFestival(slug);
  if (!festival) notFound();

  const related = festivals
    .filter((f) => f.slug !== festival.slug && f.region === festival.region)
    .slice(0, 3);
  const fallbackRelated = festivals
    .filter((f) => f.slug !== festival.slug && f.category === festival.category)
    .slice(0, 3);
  const suggestions = (related.length ? related : fallbackRelated).slice(0, 3);

  return (
    <article>
      {/* Hero banner */}
      <div className="relative">
        <Poster
          festival={festival}
          className="h-64 w-full sm:h-80"
          emojiClassName="text-8xl animate-floaty"
        />
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
        <div className="container-x absolute inset-x-0 bottom-0 z-20 pb-8">
          <div className="flex flex-wrap items-center gap-2 text-sm">
            <span className="rounded-full bg-white/90 px-3 py-1 font-medium text-indigo">
              {categoryEmoji(festival.category)} {festival.category}
            </span>
            <span className="rounded-full bg-accent px-3 py-1 font-bold text-indigo">
              {whenLabel(festival.peakMonth)}
            </span>
            {festival.free && (
              <span className="rounded-full bg-emerald-500 px-3 py-1 font-semibold text-white">
                Free entry
              </span>
            )}
          </div>
          <h1 className="mt-3 text-3xl font-extrabold text-white drop-shadow sm:text-5xl">
            {festival.name}
          </h1>
          <p className="mt-1 text-lg text-white/85">{festival.koreanName}</p>
        </div>
      </div>

      <div className="container-x py-10">
        <Link
          href="/festivals"
          className="text-sm font-medium text-primary hover:underline"
        >
          ← Back to all festivals
        </Link>

        <div className="mt-6 grid gap-10 lg:grid-cols-[1fr_320px]">
          {/* Main */}
          <div>
            <p className="text-xl font-medium leading-relaxed text-foreground">
              {festival.tagline}
            </p>
            <p className="mt-5 leading-relaxed text-foreground/80">
              {festival.about}
            </p>

            <Section title="What to expect" emoji="✨">
              <ul className="space-y-2">
                {festival.highlights.map((h) => (
                  <li key={h} className="flex gap-3">
                    <span className="mt-1 text-primary">●</span>
                    <span className="text-foreground/85">{h}</span>
                  </li>
                ))}
              </ul>
            </Section>

            <Section title="Traveler tips" emoji="💡">
              <ul className="space-y-3">
                {festival.tips.map((t) => (
                  <li
                    key={t}
                    className="rounded-xl border border-border bg-surface px-4 py-3 text-sm text-foreground/85"
                  >
                    {t}
                  </li>
                ))}
              </ul>
            </Section>

            <Section title="Getting there" emoji="🚆">
              <p className="leading-relaxed text-foreground/85">
                {festival.gettingThere}
              </p>
            </Section>

            {festival.tags.length > 0 && (
              <div className="mt-8 flex flex-wrap gap-2">
                {festival.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-black/5 px-3 py-1 text-xs font-medium text-muted"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            )}
          </div>

          {/* Sidebar */}
          <aside className="h-fit space-y-4 rounded-2xl border border-border bg-surface p-6 lg:sticky lg:top-24">
            <h2 className="text-sm font-semibold uppercase tracking-wide text-muted">
              Quick facts
            </h2>
            <Fact label="When" value={festival.period} emoji="🗓️" />
            <Fact
              label="Where"
              value={`${festival.city}, ${festival.province}`}
              emoji="📍"
            />
            <Fact label="Region" value={festival.region} emoji="🧭" />
            <Fact
              label="Runs for"
              value={`about ${festival.durationDays} days`}
              emoji="⏱️"
            />
            <Fact label="Getting in" value={festival.free ? "Free" : "Ticketed"} emoji="🎟️" />
            <Fact label="From" value={festival.nearestHub} emoji="🚉" />
            {festival.official && (
              <a
                href={festival.official}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 block rounded-full bg-primary px-4 py-2.5 text-center text-sm font-semibold text-white transition-colors hover:bg-primary-dark"
              >
                Official website ↗
              </a>
            )}
          </aside>
        </div>

        {/* Related */}
        {suggestions.length > 0 && (
          <section className="mt-16">
            <h2 className="mb-6 text-2xl font-bold">You might also like</h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {suggestions.map((f) => (
                <FestivalCard key={f.slug} festival={f} />
              ))}
            </div>
          </section>
        )}
      </div>
    </article>
  );
}

function Section({
  title,
  emoji,
  children,
}: {
  title: string;
  emoji: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mt-9">
      <h2 className="mb-4 flex items-center gap-2 text-xl font-bold">
        <span>{emoji}</span>
        {title}
      </h2>
      {children}
    </section>
  );
}

function Fact({
  label,
  value,
  emoji,
}: {
  label: string;
  value: string;
  emoji: string;
}) {
  return (
    <div className="flex gap-3">
      <span className="text-lg">{emoji}</span>
      <div>
        <div className="text-xs font-medium uppercase tracking-wide text-muted">
          {label}
        </div>
        <div className="text-sm font-medium text-foreground">{value}</div>
      </div>
    </div>
  );
}
