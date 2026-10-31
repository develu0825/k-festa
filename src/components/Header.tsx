import Link from "next/link";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/85 backdrop-blur-md">
      <div className="container-x flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2 font-bold text-lg">
          <span className="text-2xl leading-none">🏮</span>
          <span>
            K-<span className="text-primary">Festa</span>
          </span>
        </Link>
        <nav className="flex items-center gap-1 sm:gap-2 text-sm font-medium">
          <Link
            href="/festivals"
            className="rounded-full px-3 py-2 text-muted transition-colors hover:bg-black/5 hover:text-foreground"
          >
            All Festivals
          </Link>
          <Link
            href="/calendar"
            className="rounded-full px-3 py-2 text-muted transition-colors hover:bg-black/5 hover:text-foreground"
          >
            Calendar
          </Link>
          <Link
            href="/festivals?when=soon"
            className="rounded-full bg-primary px-4 py-2 text-white transition-colors hover:bg-primary-dark"
          >
            Happening Soon
          </Link>
        </nav>
      </div>
    </header>
  );
}
