import type { Metadata } from "next";
import { FestivalCalendar } from "@/components/FestivalCalendar";
import { festivals } from "@/lib/festivals";

export const metadata: Metadata = {
  title: "Festival Calendar",
  description:
    "A month-by-month calendar of Korea's local festivals — see what's on whenever you visit.",
};

export default function CalendarPage() {
  return (
    <div className="container-x py-12">
      <header className="mb-8">
        <h1 className="text-3xl font-extrabold sm:text-4xl">Festival calendar 🗓️</h1>
        <p className="mt-2 max-w-2xl text-muted">
          Korea has a festival in every season. Browse all {festivals.length}{" "}
          month by month and plan your trip around the dates that work for you.
        </p>
        <p className="mt-2 max-w-2xl text-xs text-muted">
          Note: exact dates shift slightly each year with the weather and the
          lunar calendar — always confirm the official schedule before booking.
        </p>
      </header>
      <FestivalCalendar />
    </div>
  );
}
