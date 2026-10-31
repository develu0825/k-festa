import Link from "next/link";

export function Footer() {
  return (
    <footer className="mt-20 border-t border-border bg-indigo text-white/80">
      <div className="container-x grid gap-8 py-12 sm:grid-cols-3">
        <div>
          <div className="flex items-center gap-2 text-lg font-bold text-white">
            <span className="text-2xl leading-none">🏮</span>
            K-Festa
          </div>
          <p className="mt-3 max-w-xs text-sm text-white/60">
            A friendly English guide to Korea&apos;s best local festivals — made
            for travelers who want more than the usual tourist trail.
          </p>
        </div>
        <div className="text-sm">
          <h3 className="mb-3 font-semibold text-white">Explore</h3>
          <ul className="space-y-2 text-white/70">
            <li>
              <Link href="/festivals" className="hover:text-white">
                All festivals
              </Link>
            </li>
            <li>
              <Link href="/calendar" className="hover:text-white">
                Festival calendar
              </Link>
            </li>
            <li>
              <Link href="/festivals?when=soon" className="hover:text-white">
                Happening soon
              </Link>
            </li>
            <li>
              <Link href="/festivals?category=Flowers" className="hover:text-white">
                Flower festivals
              </Link>
            </li>
            <li>
              <Link href="/festivals?category=Winter" className="hover:text-white">
                Winter festivals
              </Link>
            </li>
          </ul>
        </div>
        <div className="text-sm">
          <h3 className="mb-3 font-semibold text-white">Good to know</h3>
          <p className="text-white/60">
            Festival dates shift slightly each year with the seasons and the
            lunar calendar. Always double-check the official schedule before you
            book travel.
          </p>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-x flex flex-col items-center justify-between gap-2 py-5 text-xs text-white/50 sm:flex-row">
          <span>© {new Date().getFullYear()} K-Festa · A weekend project.</span>
          <span>Built for foreign travelers exploring Korea 🇰🇷</span>
        </div>
      </div>
    </footer>
  );
}
