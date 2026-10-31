import { Suspense } from "react";
import type { Metadata } from "next";
import { FestivalBrowser } from "@/components/FestivalBrowser";

export const metadata: Metadata = {
  title: "All Festivals",
  description:
    "Browse and filter Korea's local festivals by season, region and category.",
};

export default function FestivalsPage() {
  return (
    <div className="container-x py-12">
      <header className="mb-8">
        <h1 className="text-3xl font-extrabold sm:text-4xl">All festivals</h1>
        <p className="mt-2 max-w-2xl text-muted">
          Filter by when you&apos;re visiting, the region you&apos;ll be in, or
          the kind of experience you&apos;re after.
        </p>
      </header>
      <Suspense fallback={<div className="py-20 text-center text-muted">Loading festivals…</div>}>
        <FestivalBrowser />
      </Suspense>
    </div>
  );
}
