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
  {
    slug: "seoul-yeouido-spring-flower",
    name: "Yeouido Spring Flower Festival",
    koreanName: "여의도 봄꽃축제",
    city: "Seoul",
    province: "Seoul",
    region: "Seoul & Gyeonggi",
    category: "Flowers",
    tags: ["cherry blossom", "spring", "flowers", "easy"],
    tagline: "Cherry blossoms behind the National Assembly — in the heart of Seoul.",
    period: "Early April",
    peakMonth: 4,
    durationDays: 5,
    free: true,
    about:
      "The easiest cherry blossom experience for any Seoul visitor. Yunjungno, the road that loops behind the National Assembly on Yeouido island, is lined with hundreds of cherry trees that burst into bloom each April. The street closes to traffic, food trucks roll in, and the whole city seems to come out for a stroll under the petals beside the Han River.",
    highlights: [
      "Blossom tunnel along Yunjungno by the National Assembly",
      "Han River riverside parks right next door",
      "Food trucks, buskers and night-lit blossoms",
      "Views across the river to the city skyline",
    ],
    tips: [
      "Go on a weekday morning — weekends are extremely crowded.",
      "Pair with a Han River picnic or a rental-bike ride.",
      "Blossoms last only about a week, so watch the bloom forecast.",
    ],
    gettingThere:
      "In Seoul, take Subway Line 9 to National Assembly Station (Exit 1 or 6) or Line 5 to Yeouinaru Station for the riverside. It's a short walk to the blossoms.",
    nearestHub: "Central Seoul (subway)",
    emoji: "🌸",
    gradient: ["#ed64a6", "#fbb6ce"],
  },
  {
    slug: "taean-tulip",
    name: "Taean Tulip Festival",
    koreanName: "태안 세계튤립꽃축제",
    city: "Taean",
    province: "Chungcheongnam-do",
    region: "Chungcheong",
    category: "Flowers",
    tags: ["tulips", "spring", "flowers", "seaside"],
    tagline: "A million tulips bloom beside the West Sea.",
    period: "Mid – late April",
    peakMonth: 4,
    durationDays: 20,
    free: false,
    about:
      "Held at the Korea Flower Park on Anmyeondo island, this is the country's biggest tulip festival — vast ribbons of red, yellow and purple tulips rolling toward the West Sea. With windmills, themed gardens and sea breezes, it's a riot of color and one of Korea's most photogenic spring outings.",
    highlights: [
      "Fields of over a million tulips in every color",
      "Dutch-style windmills and themed flower gardens",
      "Sea views from the Korea Flower Park",
      "Nearby Anmyeondo beaches and pine forests",
    ],
    tips: [
      "Rent a car — public transport to Anmyeondo is slow.",
      "Mid-April is usually peak bloom, but check before you go.",
      "Combine with a fresh seafood lunch on the coast.",
    ],
    gettingThere:
      "From Seoul's Nambu Terminal, take a bus to Taean (about 2.5 hours), then a local bus or taxi to the Korea Flower Park on Anmyeondo. A rental car is easiest.",
    nearestHub: "Seoul (~2.5 hrs by bus)",
    emoji: "🌷",
    gradient: ["#9f7aea", "#f687b3"],
  },
  {
    slug: "jindo-sea-parting",
    name: "Jindo Miracle Sea Road Festival",
    koreanName: "진도 신비의 바닷길 축제",
    city: "Jindo",
    province: "Jeollanam-do",
    region: "Jeolla",
    category: "Nature",
    tags: ["sea parting", "nature", "island", "phenomenon"],
    tagline: "Walk across the sea when the water parts — Korea's 'Moses Miracle'.",
    period: "Varies with tides (often spring)",
    peakMonth: 4,
    durationDays: 4,
    free: true,
    about:
      "A few times a year, the lowest tides reveal a 2.8-kilometer land bridge across the sea between Jindo and the tiny island of Modo. Locals call it the 'Miracle Sea Road,' and the festival times its biggest celebration to the strongest tide — thousands of visitors roll up their trousers and walk across the exposed seabed, gathering shellfish as they go.",
    highlights: [
      "Walk the 2.8 km seabed path as the water parts",
      "Torch-lit parade and Jindo folk performances",
      "Meet the famous loyal Jindo dog breed",
      "Gather clams and sea life on the exposed sand",
    ],
    tips: [
      "Walk times depend on the tide — check the exact schedule first.",
      "Bring boots or sandals you can get wet and muddy.",
      "The sea returns quickly; don't linger past the posted time.",
    ],
    gettingThere:
      "Take a KTX to Mokpo or a bus to Jindo, then a local bus or taxi to Hoedong, where the sea road appears. About 4.5 hours total from Seoul.",
    nearestHub: "Mokpo (KTX) / Jindo",
    emoji: "🌊",
    gradient: ["#2b6cb0", "#4fd1c5"],
  },
  {
    slug: "hampyeong-butterfly",
    name: "Hampyeong Butterfly Festival",
    koreanName: "함평 나비대축제",
    city: "Hampyeong",
    province: "Jeollanam-do",
    region: "Jeolla",
    category: "Nature",
    tags: ["butterflies", "spring", "flowers", "family"],
    tagline: "Clouds of butterflies over fields of spring flowers.",
    period: "Late April – early May",
    peakMonth: 5,
    durationDays: 10,
    free: false,
    about:
      "A small rural county turned itself into one of Korea's best-loved family festivals by releasing thousands of butterflies among blossoming canola and wildflowers. Walk-through butterfly gardens, insect exhibits and flower fields make it a gentle, colorful day out — especially magical for kids.",
    highlights: [
      "Walk-through gardens filled with live butterflies",
      "Canola and wildflower fields in full spring bloom",
      "Insect and ecology exhibits for families",
      "Flower-lined riverside walking paths",
    ],
    tips: [
      "Great for families with young children.",
      "Mornings are best for active butterflies and photos.",
      "Combine with nearby Gwangju for food and transport links.",
    ],
    gettingThere:
      "Take a KTX to Gwangju Songjeong Station, then a local train or bus to Hampyeong (about 30–40 minutes). Around 3.5 hours total from Seoul.",
    nearestHub: "Gwangju (KTX, ~40 min to Hampyeong)",
    emoji: "🦋",
    gradient: ["#48bb78", "#f6ad55"],
  },
  {
    slug: "daegu-chimac",
    name: "Daegu Chimac Festival",
    koreanName: "대구 치맥페스티벌",
    city: "Daegu",
    province: "Daegu",
    region: "Gyeongsang",
    category: "Food",
    tags: ["chicken", "beer", "summer", "nightlife"],
    tagline: "Korea's great summer celebration of fried chicken and beer.",
    period: "Late July",
    peakMonth: 7,
    durationDays: 5,
    free: true,
    about:
      "'Chimac' — chicken plus maekju (beer) — is Korea's favorite comfort combo, and Daegu throws the nation's biggest party for it. Duryu Park fills with stalls from dozens of chicken brands, ice-cold beer, live concerts and a buzzing summer-night crowd. It's casual, delicious and a brilliant window into modern Korean food culture.",
    highlights: [
      "Dozens of fried-chicken brands in one place",
      "Ice-cold draft beer and summer night concerts",
      "Food-truck alleys and street performances",
      "A relaxed, local-feeling crowd",
    ],
    tips: [
      "Go in the evening when it cools down and the stages light up.",
      "Bring cash and friends — portions are made for sharing.",
      "Daegu is brutally hot in summer; hydrate between beers.",
    ],
    gettingThere:
      "Take the KTX/SRT from Seoul to Dongdaegu Station (about 2 hours), then the subway or a taxi to Duryu Park.",
    nearestHub: "Seoul (2 hrs by KTX)",
    emoji: "🍗",
    gradient: ["#dd6b20", "#f6e05e"],
  },
  {
    slug: "incheon-pentaport-rock",
    name: "Incheon Pentaport Rock Festival",
    koreanName: "인천 펜타포트 락 페스티벌",
    city: "Incheon",
    province: "Incheon",
    region: "Seoul & Gyeonggi",
    category: "Music",
    tags: ["rock", "music", "summer", "festival"],
    tagline: "Korea's biggest rock festival — three days of mud and music.",
    period: "Early August",
    peakMonth: 8,
    durationDays: 3,
    free: false,
    about:
      "Modeled on the great international rock festivals, Pentaport is Korea's largest and longest-running, drawing global headliners and the country's best bands to Songdo in Incheon. Expect multiple stages, a passionate crowd, summer downpours and the kind of muddy, euphoric weekend that fans plan their year around.",
    highlights: [
      "International and Korean rock & indie headliners",
      "Multiple stages across the Songdo festival grounds",
      "Camping options and all-night energy",
      "Easy to reach from Seoul and Incheon Airport",
    ],
    tips: [
      "Buy tickets early — multi-day passes sell out.",
      "Pack a rain poncho; August storms are part of the legend.",
      "Fly in? Songdo is close to Incheon International Airport.",
    ],
    gettingThere:
      "From Seoul, take the subway or airport line toward Incheon/Songdo, then a shuttle or taxi to the festival park. About 1.5 hours from central Seoul.",
    nearestHub: "Seoul / Incheon Airport",
    emoji: "🎸",
    gradient: ["#1a202c", "#e53e3e"],
  },
  {
    slug: "suwon-hwaseong-culture",
    name: "Suwon Hwaseong Cultural Festival",
    koreanName: "수원화성문화제",
    city: "Suwon",
    province: "Gyeonggi-do",
    region: "Seoul & Gyeonggi",
    category: "Culture",
    tags: ["UNESCO", "fortress", "history", "parade"],
    tagline: "A royal procession around a UNESCO fortress — just outside Seoul.",
    period: "Early – mid October",
    peakMonth: 10,
    durationDays: 4,
    free: true,
    about:
      "Set around the magnificent UNESCO-listed Hwaseong Fortress, this festival reenacts the grand royal procession of King Jeongjo with hundreds of costumed performers, horses and traditional music. Lantern-lit fortress walls, martial-arts displays and a hands-on Joseon-era atmosphere make it the most accessible deep-history festival from Seoul.",
    highlights: [
      "Grand royal procession reenactment in period costume",
      "Illuminated Hwaseong Fortress walls at night",
      "Traditional martial arts and music performances",
      "Walk the full fortress wall for city views",
    ],
    tips: [
      "Suwon is a quick trip from Seoul — easy as a day visit.",
      "Catch an evening program when the fortress is lit up.",
      "Try Suwon's famous galbi (grilled short ribs).",
    ],
    gettingThere:
      "From Seoul, take Subway Line 1 or a KTX to Suwon Station (about 30–50 minutes), then a short bus or taxi ride to Hwaseong Fortress.",
    nearestHub: "Seoul (30–50 min by train)",
    emoji: "🏯",
    gradient: ["#9c4221", "#ed8936"],
  },
  {
    slug: "jeonju-bibimbap",
    name: "Jeonju Bibimbap Festival",
    koreanName: "전주비빔밥축제",
    city: "Jeonju",
    province: "Jeollabuk-do",
    region: "Jeolla",
    category: "Food",
    tags: ["bibimbap", "food", "hanok", "autumn"],
    tagline: "Taste Korea's most famous dish in its hometown.",
    period: "October",
    peakMonth: 10,
    durationDays: 4,
    free: true,
    about:
      "Jeonju is Korea's culinary capital and the birthplace of bibimbap, and this festival celebrates it with cooking shows, giant communal mixing events, and a chance to taste countless regional versions of the dish. Based beside the beautiful Jeonju Hanok Village, it pairs perfectly with a wander through traditional streets and a tour of the city's legendary food.",
    highlights: [
      "Taste and make authentic Jeonju-style bibimbap",
      "Giant communal bibimbap-mixing events",
      "Right beside the Jeonju Hanok Village",
      "A gateway to Jeonju's wider food scene",
    ],
    tips: [
      "Stay a night in a hanok guesthouse in the village.",
      "Come hungry — street food is half the fun here.",
      "Also try kongnamul-gukbap and Jeonju's makgeolli alleys.",
    ],
    gettingThere:
      "Take the KTX/SRT to Jeonju Station (about 2 hours from Seoul), then a local bus or taxi to the Hanok Village area.",
    nearestHub: "Seoul (2 hrs by KTX)",
    emoji: "🥘",
    gradient: ["#c05621", "#f6e05e"],
  },
  {
    slug: "pyeongchang-trout",
    name: "Pyeongchang Trout Festival",
    koreanName: "평창 송어축제",
    city: "Pyeongchang",
    province: "Gangwon-do",
    region: "Gangwon",
    category: "Winter",
    tags: ["ice fishing", "winter", "snow", "family"],
    tagline: "Ice-fish for trout in the mountains of the Olympic host town.",
    period: "Late December – early February",
    peakMonth: 12,
    durationDays: 40,
    free: false,
    about:
      "Held near the host region of the 2018 Winter Olympics, Pyeongchang's trout festival turns a frozen river into a snowy playground. Drill through the ice to catch trout, try bare-hand fishing, then have your catch grilled or sliced into sashimi on the spot — all surrounded by some of Korea's best winter mountain scenery and ski resorts.",
    highlights: [
      "Ice fishing and bare-hand trout catching",
      "Snow sledding hills and ice sculptures",
      "Grill or sashimi your fresh-caught trout",
      "Close to major ski resorts for a winter combo",
    ],
    tips: [
      "Combine with skiing at a nearby Pyeongchang resort.",
      "Dress in serious thermal layers — it's mountain cold.",
      "The KTX from Seoul makes this an easy winter day trip.",
    ],
    gettingThere:
      "Take the KTX (Gyeonggang Line) from Seoul to Jinbu Station (about 1.5 hours), then a short shuttle or taxi to the festival grounds.",
    nearestHub: "Seoul (~1.5 hrs by KTX)",
    emoji: "🐟",
    gradient: ["#3182ce", "#90cdf4"],
  },
  {
    slug: "jeju-seongsan-sunrise",
    name: "Seongsan Sunrise Festival",
    koreanName: "성산일출축제",
    city: "Seogwipo",
    province: "Jeju-do",
    region: "Jeju",
    category: "Culture",
    tags: ["sunrise", "new year", "UNESCO", "night"],
    tagline: "Ring in the New Year with sunrise over a UNESCO volcanic crater.",
    period: "December 31 – January 1",
    peakMonth: 12,
    durationDays: 2,
    free: true,
    about:
      "Seongsan Ilchulbong — a dramatic UNESCO-listed tuff cone rising straight from the sea — is the most iconic place in Korea to watch the first sunrise of the year. The festival wraps the night in bonfires, concerts, fireworks and wish-making rituals, building to the moment the sun breaks over the crater at dawn on New Year's Day.",
    highlights: [
      "First sunrise of the year over Seongsan Ilchulbong",
      "New Year's Eve concerts, bonfire and fireworks",
      "Wish-writing and traditional Jeju rituals",
      "Hike the crater rim for the full panorama",
    ],
    tips: [
      "Arrive before dawn and dress warmly — the sea wind bites.",
      "Rent a car; Jeju's east coast is hard to reach at night.",
      "Clear skies aren't guaranteed, but the atmosphere always is.",
    ],
    gettingThere:
      "Fly into Jeju International Airport (about 1 hour from Seoul), then drive roughly an hour to Seongsan Ilchulbong on the island's east coast.",
    nearestHub: "Jeju Airport (~1 hr by car)",
    emoji: "🌅",
    gradient: ["#dd6b20", "#fbd38d"],
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

/** Festivals grouped into all 12 months (empty months included), for the calendar. */
export function groupByMonth(): { month: number; items: Festival[] }[] {
  return Array.from({ length: 12 }, (_, i) => {
    const month = i + 1;
    return {
      month,
      items: festivals
        .filter((f) => f.peakMonth === month)
        .sort((a, b) => a.name.localeCompare(b.name)),
    };
  });
}

export type Season = "Winter" | "Spring" | "Summer" | "Autumn";

export function seasonOf(month: number): Season {
  if (month === 12 || month <= 2) return "Winter";
  if (month <= 5) return "Spring";
  if (month <= 8) return "Summer";
  return "Autumn";
}

export function seasonEmoji(season: Season): string {
  const map: Record<Season, string> = {
    Winter: "❄️",
    Spring: "🌸",
    Summer: "☀️",
    Autumn: "🍁",
  };
  return map[season];
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
