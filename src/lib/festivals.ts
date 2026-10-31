// K-Festa — curated dataset of Korea's best local festivals for foreign travelers.
// Dates vary slightly each year, so we store the typical window + peak month.

export type Region =
  | "Seoul & Gyeonggi"
  | "Gangwon"
  | "Chungcheong"
  | "Jeolla"
  | "Gyeongsang"
  | "Jeju";

export type Category =
  | "Winter"
  | "Flowers"
  | "Nature"
  | "Culture"
  | "Food"
  | "Music"
  | "Lights";

export type Festival = {
  slug: string;
  name: string;
  koreanName: string;
  city: string;
  province: string;
  region: Region;
  category: Category;
  tags: string[];
  /** Short tagline shown on cards. */
  tagline: string;
  /** Typical window, human readable. */
  period: string;
  /** Peak month 1–12, used for sorting & "upcoming". */
  peakMonth: number;
  /** How many days it typically runs. */
  durationDays: number;
  /** Is it free to enter? */
  free: boolean;
  /** Longer intro paragraph. */
  about: string;
  /** Things you'll actually do / see. */
  highlights: string[];
  /** Insider tips for foreign travelers. */
  tips: string[];
  /** Getting there from the nearest big hub (usually Seoul). */
  gettingThere: string;
  nearestHub: string;
  official?: string;
  /** Visual theme for the poster tile. */
  emoji: string;
  gradient: [string, string];
};

export const CATEGORIES: Category[] = [
  "Winter",
  "Flowers",
  "Nature",
  "Culture",
  "Food",
  "Music",
  "Lights",
];

export const REGIONS: Region[] = [
  "Seoul & Gyeonggi",
  "Gangwon",
  "Chungcheong",
  "Jeolla",
  "Gyeongsang",
  "Jeju",
];

export const festivals: Festival[] = [
  {
    slug: "hwacheon-sancheoneo-ice",
    name: "Hwacheon Sancheoneo Ice Festival",
    koreanName: "화천 산천어 축제",
    city: "Hwacheon",
    province: "Gangwon-do",
    region: "Gangwon",
    category: "Winter",
    tags: ["ice fishing", "winter", "family", "snow"],
    tagline: "Catch mountain trout through a hole in a frozen river.",
    period: "Early – late January",
    peakMonth: 1,
    durationDays: 23,
    free: false,
    about:
      "One of Asia's most famous winter festivals. The frozen Hwacheoncheon River turns into a playground where tens of thousands of visitors drill holes in the ice to fish for sancheoneo (mountain trout). Dress for serious cold — and bring a sense of adventure: there's also bare-hand trout catching in icy water for the truly brave.",
    highlights: [
      "Ice fishing for mountain trout on the frozen river",
      "Have your catch grilled or made into sashimi on the spot",
      "Snow & ice sculpture plaza and giant sledding hill",
      "Bare-hand fishing event (bring a change of clothes!)",
    ],
    tips: [
      "Buy tickets online in advance — weekend slots sell out.",
      "Thermal layers, waterproof gloves and ice cleats are essential.",
      "Go on a weekday morning to avoid the biggest crowds.",
    ],
    gettingThere:
      "From Seoul, take a bus from Dong Seoul Bus Terminal to Hwacheon (about 2 hours). During the festival, free shuttle buses often run from the terminal to the venue.",
    nearestHub: "Seoul (2 hrs by bus)",
    official: "https://www.narafestival.com",
    emoji: "🎣",
    gradient: ["#2b6cb0", "#63b3ed"],
  },
  {
    slug: "taebaeksan-snow",
    name: "Taebaeksan Snow Festival",
    koreanName: "태백산 눈축제",
    city: "Taebaek",
    province: "Gangwon-do",
    region: "Gangwon",
    category: "Winter",
    tags: ["snow", "winter", "hiking", "sculpture"],
    tagline: "Giant snow sculptures on one of Korea's most scenic peaks.",
    period: "Late January – early February",
    peakMonth: 1,
    durationDays: 10,
    free: true,
    about:
      "Set in Taebaeksan National Park, this festival pairs huge, intricately carved snow sculptures with one of the country's best easy winter hikes. The trail up to the ridge rewards you with snow-draped Korean yew trees and sweeping mountain views — a bucket-list winter landscape.",
    highlights: [
      "Monumental snow and ice sculptures",
      "Beginner-friendly snow hike to Taebaeksan ridge",
      "Sledding slopes and igloo cafés",
      "Sunrise views over snow-covered peaks",
    ],
    tips: [
      "Rent or bring crampons (ice spikes) for the hike.",
      "The summit is windy and far colder than town — overdress.",
      "Combine with a stay in nearby Jeongseon for more mountain scenery.",
    ],
    gettingThere:
      "Take a KTX or Mugunghwa train from Seoul's Cheongnyangni Station toward Taebaek (about 3–4 hours), then a local bus or taxi to the park entrance.",
    nearestHub: "Seoul (3–4 hrs by train)",
    emoji: "⛄",
    gradient: ["#4c51bf", "#a3bffa"],
  },
  {
    slug: "jeju-fire",
    name: "Jeju Fire Festival",
    koreanName: "제주 들불축제",
    city: "Jeju City",
    province: "Jeju-do",
    region: "Jeju",
    category: "Culture",
    tags: ["fire", "tradition", "island", "night"],
    tagline: "A whole hillside set ablaze under the full moon.",
    period: "Early – mid March",
    peakMonth: 3,
    durationDays: 3,
    free: true,
    about:
      "Rooted in the old farming custom of burning fields to drive out pests and pray for a good harvest, the Jeju Fire Festival climaxes with the dramatic burning of an entire oreum (volcanic hill) on Saebyeol Oreum. The sight of the glowing hillside against the night sky, followed by fireworks, is unforgettable.",
    highlights: [
      "The spectacular Oreum hillside burning at night",
      "Torch parade and wish-writing rituals",
      "Fireworks finale over the volcanic landscape",
      "Jeju folk games, food and crafts",
    ],
    tips: [
      "Dates can shift and the burn may be cancelled for wildfire risk — check before booking.",
      "Rent a car on Jeju; public transport to the oreum is limited at night.",
      "Arrive early to grab a good hillside viewing spot.",
    ],
    gettingThere:
      "Fly into Jeju International Airport (about 1 hour from Seoul), then drive roughly 30 minutes to Saebyeol Oreum. A rental car is strongly recommended.",
    nearestHub: "Jeju Airport (30 min by car)",
    emoji: "🔥",
    gradient: ["#c53030", "#ed8936"],
  },
  {
    slug: "gwangyang-maehwa",
    name: "Gwangyang Maehwa Festival",
    koreanName: "광양 매화축제",
    city: "Gwangyang",
    province: "Jeollanam-do",
    region: "Jeolla",
    category: "Flowers",
    tags: ["plum blossom", "spring", "flowers", "riverside"],
    tagline: "Korea's first blossoms of spring — hillsides of white plum.",
    period: "Mid – late March",
    peakMonth: 3,
    durationDays: 10,
    free: true,
    about:
      "Before the cherry blossoms arrive, the hills of Gwangyang's Maehwa Village turn white with plum blossoms overlooking the Seomjin River. Winding paths lead through the flowering orchards to photo-perfect viewpoints, with vendors selling everything plum — from tea to traditional sweets.",
    highlights: [
      "Hillside orchards of white plum blossoms",
      "Views over the Seomjin River",
      "Maesil (green plum) products: tea, syrup, snacks",
      "Traditional hanok and jangdok (clay jar) gardens",
    ],
    tips: [
      "Bloom timing depends on weather — check the week before you go.",
      "Weekends are very busy; park-and-ride shuttles help.",
      "Pair with nearby Suncheon Bay or Hadong green tea fields.",
    ],
    gettingThere:
      "Take a KTX to Suncheon or Gwangyang, then a local bus or taxi to Maehwa Village (Seomjin Village). About 3.5 hours total from Seoul.",
    nearestHub: "Suncheon (KTX, ~3.5 hrs from Seoul)",
    emoji: "🌸",
    gradient: ["#d53f8c", "#fbb6ce"],
  },
  {
    slug: "jinhae-gunhangje",
    name: "Jinhae Gunhangje Cherry Blossom Festival",
    koreanName: "진해 군항제",
    city: "Changwon (Jinhae)",
    province: "Gyeongsangnam-do",
    region: "Gyeongsang",
    category: "Flowers",
    tags: ["cherry blossom", "spring", "flowers", "iconic"],
    tagline: "Korea's largest cherry blossom festival.",
    period: "Late March – early April",
    peakMonth: 4,
    durationDays: 10,
    free: true,
    about:
      "When spring peaks, the port town of Jinhae disappears under a canopy of cherry blossoms. The romantic Yeojwacheon Stream and the Gyeonghwa Station railway — lined with blossoms on both sides — are among the most photographed spots in all of Korea. Expect huge, happy crowds.",
    highlights: [
      "Blossom tunnel along Gyeonghwa Station railway",
      "Romantic Yeojwacheon Stream and its bridges",
      "Jehwangsan Park observation tower views",
      "Naval history exhibits and marching bands",
    ],
    tips: [
      "Go very early morning for the famous railway shots without crowds.",
      "Stay in Busan and day-trip in — Jinhae lodging books out fast.",
      "Expect heavy traffic; use the festival park-and-ride shuttles.",
    ],
    gettingThere:
      "Take a KTX to Busan or Changwon, then a local bus or taxi to Jinhae. From Busan it's about 1 hour; total from Seoul around 4 hours.",
    nearestHub: "Busan / Changwon (~1 hr to Jinhae)",
    emoji: "🌸",
    gradient: ["#e53e8c", "#fbb6ce"],
  },
  {
    slug: "boseong-green-tea",
    name: "Boseong Green Tea Festival",
    koreanName: "보성 다향대축제",
    city: "Boseong",
    province: "Jeollanam-do",
    region: "Jeolla",
    category: "Food",
    tags: ["green tea", "spring", "nature", "photogenic"],
    tagline: "Walk the emerald tea terraces of Korea's tea capital.",
    period: "Early May",
    peakMonth: 5,
    durationDays: 5,
    free: false,
    about:
      "Boseong's steep, sculpted green tea plantations are one of Korea's most iconic landscapes. During the festival you can try hand-picking tea leaves, sip fresh green tea, and taste surprising local specialties like green tea ice cream and green tea pork. The terraced rows against the morning mist are a photographer's dream.",
    highlights: [
      "Walk among the famous terraced tea fields",
      "Hand-pick and roast your own tea leaves",
      "Green tea everything: ice cream, noodles, bibimbap",
      "Cedar forest path beside the plantation",
    ],
    tips: [
      "Mornings offer the best light and thinnest crowds.",
      "Wear good shoes — the tea terraces are steep.",
      "Combine with the Yulpo seaside green tea spa nearby.",
    ],
    gettingThere:
      "Take a KTX to Suncheon, then a bus or taxi to the Daehan Dawon tea plantation in Boseong. About 4 hours total from Seoul.",
    nearestHub: "Suncheon (KTX from Seoul)",
    emoji: "🍵",
    gradient: ["#2f855a", "#9ae6b4"],
  },
  {
    slug: "damyang-bamboo",
    name: "Damyang Bamboo Festival",
    koreanName: "담양 대나무축제",
    city: "Damyang",
    province: "Jeollanam-do",
    region: "Jeolla",
    category: "Nature",
    tags: ["bamboo", "forest", "nature", "wellness"],
    tagline: "Breathe deep in a cool, green bamboo forest.",
    period: "Early May",
    peakMonth: 5,
    durationDays: 5,
    free: false,
    about:
      "Damyang is Korea's bamboo country, and its star is Juknokwon — a lush bamboo forest laced with walking trails that stay cool even in summer. The festival adds bamboo crafts, bamboo-themed food, and a famously relaxing 'forest bathing' atmosphere, plus the nearby Metasequoia tree-lined road.",
    highlights: [
      "Juknokwon bamboo forest walking trails",
      "Bamboo crafts and musical instrument workshops",
      "Daetong-bap (rice steamed in bamboo) and bamboo-leaf tea",
      "The stunning Metasequoia Road nearby",
    ],
    tips: [
      "The forest is cool and shaded — great for a hot day.",
      "Rent a bike to ride the Metasequoia Road.",
      "Pair with Gwangju city (30–40 minutes away) for food and nightlife.",
    ],
    gettingThere:
      "Take a KTX to Gwangju Songjeong Station, then a local bus or taxi to Damyang (about 40 minutes). Around 3.5 hours total from Seoul.",
    nearestHub: "Gwangju (KTX, ~40 min to Damyang)",
    emoji: "🎋",
    gradient: ["#38a169", "#9ae6b4"],
  },
  {
    slug: "gangneung-danoje",
    name: "Gangneung Danoje Festival",
    koreanName: "강릉 단오제",
    city: "Gangneung",
    province: "Gangwon-do",
    region: "Gangwon",
    category: "Culture",
    tags: ["UNESCO", "tradition", "ritual", "market"],
    tagline: "A 1,000-year-old UNESCO shamanic festival by the sea.",
    period: "Late May – early June",
    peakMonth: 6,
    durationDays: 8,
    free: true,
    about:
      "Recognized by UNESCO as a Masterpiece of the Oral and Intangible Heritage of Humanity, Gangneung Danoje blends Confucian rites, shamanic rituals, folk theater and a huge traditional market. It's the most authentic window into Korea's living folk culture — held in a coastal city that also has one of the country's best beaches.",
    highlights: [
      "Shamanic rituals (gut) and Confucian ceremonies",
      "Gwanno mask drama, a UNESCO-listed folk play",
      "Giant Dano market with folk games and street food",
      "Swing games and traditional wrestling (ssireum)",
    ],
    tips: [
      "Catch an evening gut ritual for the most atmospheric experience.",
      "Combine with Gyeongpo Beach and Ojukheon historic house.",
      "Try surichwi-tteok, the festival's signature herb rice cake.",
    ],
    gettingThere:
      "Take the KTX from Seoul's Cheongnyangni/Seoul Station to Gangneung (about 2 hours), then a short taxi ride to the festival grounds by Namdaecheon Stream.",
    nearestHub: "Seoul (2 hrs by KTX)",
    emoji: "🎭",
    gradient: ["#6b46c1", "#d6bcfa"],
  },
  {
    slug: "boryeong-mud",
    name: "Boryeong Mud Festival",
    koreanName: "보령 머드축제",
    city: "Boryeong",
    province: "Chungcheongnam-do",
    region: "Chungcheong",
    category: "Nature",
    tags: ["beach", "summer", "party", "iconic"],
    tagline: "Korea's wildest, muddiest beach party.",
    period: "Mid – late July",
    peakMonth: 7,
    durationDays: 10,
    free: true,
    about:
      "The festival that made Korea famous with young foreign travelers. On Daecheon Beach, mineral-rich mud becomes the main event: mud wrestling, mud slides, a mud prison, giant inflatable obstacle courses and nightly beach concerts and fireworks. It's messy, chaotic and ridiculously fun.",
    highlights: [
      "Mud pools, slides and the legendary mud prison",
      "Inflatable obstacle courses and body-painting",
      "Beach concerts, foam parties and fireworks",
      "Supposedly skin-friendly mineral mud",
    ],
    tips: [
      "Wear clothes and shoes you don't mind destroying.",
      "Bring a waterproof phone pouch and a towel.",
      "The core festival zone is free; some attractions need a pass.",
    ],
    gettingThere:
      "Take a train or express bus from Seoul to Daecheon / Boryeong (about 2.5 hours), then a short local bus or taxi to Daecheon Beach.",
    nearestHub: "Seoul (~2.5 hrs by train/bus)",
    emoji: "🌊",
    gradient: ["#b7791f", "#f6e05e"],
  },
  {
    slug: "muju-firefly",
    name: "Muju Firefly Festival",
    koreanName: "무주 반딧불축제",
    city: "Muju",
    province: "Jeollabuk-do",
    region: "Jeolla",
    category: "Nature",
    tags: ["fireflies", "nature", "night", "eco"],
    tagline: "Watch wild fireflies light up a pristine valley.",
    period: "Late August – early September",
    peakMonth: 9,
    durationDays: 9,
    free: true,
    about:
      "Fireflies only thrive where the environment is genuinely clean, and Muju — a mountain county designated a firefly habitat — celebrates them with guided night walks to see them glowing in the dark. By day there are eco-programs, mountain scenery and the famous Taekwondowon. A quieter, magical alternative to Korea's big summer parties.",
    highlights: [
      "Guided firefly-watching night walks",
      "Stargazing in clear mountain skies",
      "Eco and nature experience programs for families",
      "Nearby Deogyusan National Park hikes",
    ],
    tips: [
      "Firefly walks are limited — reserve a time slot early.",
      "Use dim red light (not white phone light) to avoid disturbing them.",
      "Nights get cool in the mountains; bring a layer.",
    ],
    gettingThere:
      "Take an express bus from Seoul's Nambu/Central City Terminal to Muju (about 2.5–3 hours), then a local shuttle to the festival area.",
    nearestHub: "Seoul (~3 hrs by bus)",
    emoji: "✨",
    gradient: ["#2c5282", "#68d391"],
  },
  {
    slug: "andong-maskdance",
    name: "Andong Maskdance Festival",
    koreanName: "안동 국제탈춤페스티벌",
    city: "Andong",
    province: "Gyeongsangbuk-do",
    region: "Gyeongsang",
    category: "Culture",
    tags: ["mask dance", "tradition", "UNESCO village", "autumn"],
    tagline: "Satirical masked dance in Korea's folk-culture heartland.",
    period: "Late September – early October",
    peakMonth: 10,
    durationDays: 10,
    free: true,
    about:
      "Andong is the guardian of Korea's traditional culture, and its mask dance (talchum) — once used by commoners to mock the ruling class — takes center stage here alongside mask-dance troupes from around the world. Pair the festival with the UNESCO-listed Hahoe Folk Village for one of Korea's most rewarding cultural trips.",
    highlights: [
      "Korean talchum and international mask-dance performances",
      "Hands-on mask-making and folk-game experiences",
      "UNESCO Hahoe Folk Village nearby",
      "Andong's famous jjimdak (braised chicken) and soju",
    ],
    tips: [
      "Set aside a half-day for Hahoe Village — it's the highlight.",
      "Catch an evening performance when the stage lighting shines.",
      "Try the regional Andong jjimdak and salted mackerel.",
    ],
    gettingThere:
      "Take the KTX to Andong (about 2 hours from Seoul's Cheongnyangni), then a local bus or taxi to the riverside festival grounds.",
    nearestHub: "Seoul (2 hrs by KTX)",
    emoji: "🎭",
    gradient: ["#9c4221", "#f6ad55"],
  },
  {
    slug: "jinju-lantern",
    name: "Jinju Namgang Yudeung Festival",
    koreanName: "진주 남강유등축제",
    city: "Jinju",
    province: "Gyeongsangnam-do",
    region: "Gyeongsang",
    category: "Lights",
    tags: ["lanterns", "river", "night", "history"],
    tagline: "Thousands of lanterns float down the Namgang River.",
    period: "Early – mid October",
    peakMonth: 10,
    durationDays: 12,
    free: false,
    about:
      "Born from a wartime tradition of floating lanterns on the Namgang River during the 1592 siege of Jinju Fortress, this festival now fills the river and fortress with tens of thousands of glowing lanterns. Crossing the floating lantern bridge and writing your own wish-lantern at night is pure magic.",
    highlights: [
      "Tens of thousands of lanterns on the river at night",
      "Floating lantern bridges across the Namgang",
      "Historic Jinju Fortress illuminated after dark",
      "Float your own handwritten wish-lantern",
    ],
    tips: [
      "Go after sunset — the lanterns are the whole point.",
      "Buy the entry pass online to skip the queues.",
      "Jinju bibimbap is a local specialty worth seeking out.",
    ],
    gettingThere:
      "Take the KTX/SRT to Jinju (about 3.5 hours from Seoul), then a short taxi or walk to the Namgang riverside and fortress.",
    nearestHub: "Seoul (~3.5 hrs by KTX)",
    emoji: "🏮",
    gradient: ["#c53030", "#f6ad55"],
  },
  {
    slug: "jarasum-jazz",
    name: "Jarasum Jazz Festival",
    koreanName: "자라섬 재즈페스티벌",
    city: "Gapyeong",
    province: "Gyeonggi-do",
    region: "Seoul & Gyeonggi",
    category: "Music",
    tags: ["jazz", "music", "island", "autumn"],
    tagline: "Korea's top jazz festival on a river island.",
    period: "Early – mid October",
    peakMonth: 10,
    durationDays: 3,
    free: false,
    about:
      "Each autumn the small river island of Jarasum, just outside Seoul, hosts one of Asia's most respected jazz festivals, drawing world-class international and Korean acts. With open-air stages, riverside picnics and crisp fall weather, it's the easiest big festival to reach from the capital.",
    highlights: [
      "International and Korean jazz headliners",
      "Riverside open-air stages and picnic lawns",
      "Free fringe stages around Gapyeong town",
      "Autumn foliage and nearby Nami Island",
    ],
    tips: [
      "Combine with Nami Island and the Garden of Morning Calm.",
      "Bring a picnic mat; the lawn stages are relaxed.",
      "Book the ITX-Cheongchun train seat in advance on weekends.",
    ],
    gettingThere:
      "Take the ITX-Cheongchun train or Gyeongchun Line subway from Seoul to Gapyeong Station (about 1 hour), then a 10-minute walk to Jarasum island.",
    nearestHub: "Seoul (1 hr by train)",
    emoji: "🎷",
    gradient: ["#2b6cb0", "#f6ad55"],
  },
  {
    slug: "busan-fireworks",
    name: "Busan Fireworks Festival",
    koreanName: "부산 불꽃축제",
    city: "Busan",
    province: "Busan",
    region: "Gyeongsang",
    category: "Lights",
    tags: ["fireworks", "beach", "night", "city"],
    tagline: "Spectacular fireworks over Gwangan Bridge.",
    period: "October – November",
    peakMonth: 11,
    durationDays: 2,
    free: true,
    about:
      "Busan lights up its skyline with one of Asia's largest fireworks shows, launched over the sea and the illuminated Gwangan Bridge. Hundreds of thousands gather on Gwangalli Beach for the multimedia pyrotechnic finale. Add Busan's beaches, seafood and buzzing city energy and it's a perfect weekend.",
    highlights: [
      "Massive multimedia fireworks over Gwangan Bridge",
      "Gwangalli Beach atmosphere and street food",
      "Laser and drone light accompaniment",
      "Busan's seafood markets and coastal walks",
    ],
    tips: [
      "Arrive hours early (or pay for a reserved seat) for a beach spot.",
      "Expect packed subways right after — walk a few stops to board.",
      "Haeundae and Gwangalli hotels sell out; book well ahead.",
    ],
    gettingThere:
      "Take the KTX/SRT from Seoul to Busan (about 2.5 hours), then the subway to Gwangan or Geumnyeonsan Station for Gwangalli Beach.",
    nearestHub: "Seoul (2.5 hrs by KTX)",
    emoji: "🎆",
    gradient: ["#2d3748", "#f6ad55"],
  },
  {
    slug: "seoul-lantern",
    name: "Seoul Lantern Festival",
    koreanName: "서울 빛초롱축제",
    city: "Seoul",
    province: "Seoul",
    region: "Seoul & Gyeonggi",
    category: "Lights",
    tags: ["lanterns", "city", "winter", "easy"],
    tagline: "Glowing lantern art along a downtown stream.",
    period: "Mid November – December",
    peakMonth: 11,
    durationDays: 20,
    free: true,
    about:
      "The easiest festival for any Seoul visitor: giant themed lantern sculptures line the Cheonggyecheon Stream in the heart of downtown, telling stories from Korean history and folklore. Right next to Gwanghwamun and Myeongdong, it pairs perfectly with winter shopping, street food and palace visits.",
    highlights: [
      "Themed lantern sculptures along Cheonggyecheon Stream",
      "Steps from Gwanghwamun, Myeongdong and the palaces",
      "Winter night-market food stalls",
      "Family- and photo-friendly, fully walkable",
    ],
    tips: [
      "Weekday evenings are far less crowded than weekends.",
      "Combine with a Gyeongbokgung palace night opening.",
      "Dress warmly — the stream path gets windy at night.",
    ],
    gettingThere:
      "In central Seoul, get off at Gwanghwamun (Line 5) or City Hall (Lines 1/2) Station and walk to the Cheonggyecheon Stream entrance near Cheonggye Plaza.",
    nearestHub: "Central Seoul (subway)",
    emoji: "🏮",
    gradient: ["#2d3748", "#f6e05e"],
  },
];

/* ---------------------------------- helpers --------------------------------- */

const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export function monthName(m: number): string {
  return MONTHS[(m - 1 + 12) % 12];
}

export function getFestival(slug: string): Festival | undefined {
  return festivals.find((f) => f.slug === slug);
}

export function allSlugs(): string[] {
  return festivals.map((f) => f.slug);
}

/** Months from `now` until the festival's next peak month (0 = this month). */
export function monthsUntil(peakMonth: number, now = new Date()): number {
  const current = now.getMonth() + 1; // 1–12
  return (peakMonth - current + 12) % 12;
}

/** Festivals sorted by how soon they're coming up from today. */
export function upcoming(now = new Date()): Festival[] {
  return [...festivals].sort(
    (a, b) => monthsUntil(a.peakMonth, now) - monthsUntil(b.peakMonth, now),
  );
}

/** A friendly "when" label relative to today. */
export function whenLabel(peakMonth: number, now = new Date()): string {
  const diff = monthsUntil(peakMonth, now);
  if (diff === 0) return "Happening this month";
  if (diff === 1) return "Next month";
  if (diff <= 3) return `In about ${diff} months`;
  return monthName(peakMonth);
}

export function categoryEmoji(c: Category): string {
  const map: Record<Category, string> = {
    Winter: "❄️",
    Flowers: "🌸",
    Nature: "🌿",
    Culture: "🎭",
    Food: "🍲",
    Music: "🎵",
    Lights: "🏮",
  };
  return map[c];
}
