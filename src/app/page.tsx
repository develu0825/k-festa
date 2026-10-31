import Link from "next/link";
import { FestivalCard } from "@/components/FestivalCard";
import {
  CATEGORIES,
  categoryEmoji,
  festivals,
  upcoming,
} from "@/lib/festivals";

export default function Home() {
  const soon = upcoming().slice(0, 3);
  const featured = festivals.filter((f) =>
    ["jinhae-gunhangje", "boryeong-mud", "jinju-lantern", "hwacheon-sancheoneo-ice", "jarasum-jazz", "andong-maskdance"].includes(
      f.slug,
    ),
  );

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-indigo text-white">
        <div
          className="pointer-events-none absolute inset-0 opacity-60"
          style={{
            backgroundImage:
              "radial-gradient(60% 60% at 80% 10%, rgba(246,166,35,0.35), transparent 60%), radial-gradient(50% 50% at 10% 90%, rgba(232,70,60,0.4), transparent 60%)",
          }}
        />
        <div className="container-x relative py-20 sm:py-28">
          <p className="animate-rise text-sm font-semibold uppercase tracking-[0.2em] text-accent">
            Your guide to real Korea
          </p>
          <h1 className="animate-rise mt-4 max-w-3xl text-4xl font-extrabold leading-tight sm:text-6xl">
            Experience Korea&apos;s{" "}
            <span className="text-accent">local festivals</span> like a local.
          </h1>
          <p className="animate-rise mt-6 max-w-2xl text-lg text-white/75">
            Mud fights on summer beaches, lanterns drifting down a river, ice
            fishing in the mountains. K-Festa helps foreign travelers find
            Korea&apos;s best festivals — and tells you exactly when, where and
            how to go.
          </p>
          <div className="animate-rise mt-9 flex flex-wrap gap-3">
            <Link
              href="/festivals"
              className="rounded-full bg-primary px-6 py-3 font-semibold text-white shadow-lg transition-transform hover:scale-[1.03] hover:bg-primary-dark"
            >
              Explore all festivals
            </Link>
            <Link
              href="/festivals?when=soon"
              className="rounded-full border border-white/30 bg-white/5 px-6 py-3 font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white/15"
            >
              ⏳ What&apos;s happening soon
            </Link>
          </div>
          <div className="mt-10 flex gap-6 text-sm text-white/60">
            <span>
              <strong className="text-white">{festivals.length}</strong> curated
              festivals
            </span>
            <span>
              <strong className="text-white">7</strong> categories
            </span>
            <span>
              <strong className="text-white">All</strong> seasons
            </span>
          </div>
        </div>
      </section>

      {/* Happening soon */}
      <section className="container-x py-16">
        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl font-bold sm:text-3xl">Happening soon ⏳</h2>
            <p className="mt-1 text-muted">
              The next festivals coming up from today.
            </p>
          </div>
          <Link
            href="/festivals?when=soon"
            className="shrink-0 text-sm font-semibold text-primary hover:underline"
          >
            See all →
          </Link>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {soon.map((f) => (
            <FestivalCard key={f.slug} festival={f} />
          ))}
        </div>
      </section>

      {/* Browse by category */}
      <section className="border-y border-border bg-surface/60">
        <div className="container-x py-16">
          <h2 className="text-2xl font-bold sm:text-3xl">Browse by vibe</h2>
          <p className="mt-1 text-muted">
            Whatever you&apos;re into, there&apos;s a festival for it.
          </p>
          <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-7">
            {CATEGORIES.map((c) => (
              <Link
                key={c}
                href={`/festivals?category=${encodeURIComponent(c)}`}
                className="flex flex-col items-center gap-2 rounded-2xl border border-border bg-background p-5 text-center transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-md"
              >
                <span className="text-3xl">{categoryEmoji(c)}</span>
                <span className="text-sm font-semibold">{c}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured */}
      <section className="container-x py-16">
        <div className="mb-8">
          <h2 className="text-2xl font-bold sm:text-3xl">Festival favorites ⭐</h2>
          <p className="mt-1 text-muted">
            The ones travelers rave about — a great place to start.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((f) => (
            <FestivalCard key={f.slug} festival={f} />
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="container-x pb-8">
        <div className="relative overflow-hidden rounded-3xl bg-indigo px-8 py-14 text-center text-white">
          <div
            className="pointer-events-none absolute inset-0 opacity-70"
            style={{
              backgroundImage:
                "radial-gradient(50% 80% at 50% 0%, rgba(246,166,35,0.3), transparent 60%)",
            }}
          />
          <div className="relative">
            <span className="animate-floaty inline-block text-5xl">🏮</span>
            <h2 className="mt-4 text-2xl font-bold sm:text-3xl">
              Ready to find your festival?
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-white/70">
              Filter by season, region and vibe to plan your perfect Korean
              festival trip.
            </p>
            <Link
              href="/festivals"
              className="mt-7 inline-block rounded-full bg-primary px-7 py-3 font-semibold text-white shadow-lg transition-transform hover:scale-[1.03] hover:bg-primary-dark"
            >
              Explore all festivals
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
