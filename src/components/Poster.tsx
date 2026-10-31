import type { Festival } from "@/lib/festivals";

type Props = {
  festival: Festival;
  className?: string;
  emojiClassName?: string;
};

/** Gradient "poster" tile with the festival emoji — no remote images needed. */
export function Poster({ festival, className = "", emojiClassName = "" }: Props) {
  const [from, to] = festival.gradient;
  return (
    <div
      className={`poster ${className}`}
      style={{ backgroundImage: `linear-gradient(135deg, ${from}, ${to})` }}
      aria-hidden="true"
    >
      <span className={`drop-shadow-lg ${emojiClassName}`}>{festival.emoji}</span>
    </div>
  );
}
