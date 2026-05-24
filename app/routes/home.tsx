import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  Flame,
  Clock,
  Sparkles,
  Salad,
  Soup,
  Search,
  Shuffle,
  Heart,
} from "lucide-react";

const meals = [
  {
    name: "Spicy Egg Rice Bowl",
    mood: "lazy",
    spice: "spicy",
    style: "balanced",
    time: "15 min",
    vibe: "warm, quick, comforting",
    ingredients: ["rice", "eggs", "chili oil", "spinach", "soy sauce"],
    steps: [
      "Warm leftover rice in a pan.",
      "Scramble or fry 1–2 eggs.",
      "Add spinach until it wilts.",
      "Top with chili oil and soy sauce.",
    ],
    icon: "🍳",
  },
  {
    name: "Avocado Salmon Toast",
    mood: "productive",
    spice: "mild",
    style: "healthy",
    time: "10 min",
    vibe: "clean, filling, cafe-style",
    ingredients: ["toast", "avocado", "salmon", "lime", "pepper"],
    steps: [
      "Toast bread until crisp.",
      "Mash avocado with lime, salt, and pepper.",
      "Add cooked salmon on top.",
      "Finish with extra pepper or chili flakes.",
    ],
    icon: "🥑",
  },
  {
    name: "Creamy Tomato Pasta",
    mood: "comfort",
    spice: "medium",
    style: "comfort",
    time: "20 min",
    vibe: "cozy, creamy, dinner energy",
    ingredients: ["pasta", "tomato", "cream cheese", "butter", "pepper"],
    steps: [
      "Boil pasta and save a little pasta water.",
      "Cook tomato with butter in a pan.",
      "Add cream cheese and pasta water to make sauce.",
      "Mix in pasta and lots of pepper.",
    ],
    icon: "🍝",
  },
  {
    name: "Spicy Protein Egg Bowl",
    mood: "productive",
    spice: "spicy",
    style: "healthy",
    time: "12 min",
    vibe: "high-protein, quick, spicy",
    ingredients: ["eggs", "spinach", "chili oil", "cottage cheese"],
    steps: [
      "Cook eggs on low-medium heat.",
      "Add spinach and let it wilt.",
      "Stir in cottage cheese.",
      "Top with chili oil.",
    ],
    icon: "🌶️",
  },
  {
    name: "Lazy Butter Noodles",
    mood: "lazy",
    spice: "medium",
    style: "comfort",
    time: "15 min",
    vibe: "easy, cozy, buttery",
    ingredients: ["noodles", "butter", "pepper", "parmesan"],
    steps: [
      "Boil noodles.",
      "Melt butter in a pan.",
      "Add noodles and pepper.",
      "Top with parmesan.",
    ],
    icon: "🍜",
  },
  {
    name: "Healthy Salmon Rice Bowl",
    mood: "productive",
    spice: "mild",
    style: "healthy",
    time: "20 min",
    vibe: "clean, filling, meal-prep friendly",
    ingredients: ["salmon", "rice", "avocado", "lime"],
    steps: [
      "Cook salmon.",
      "Warm rice.",
      "Add avocado and lime.",
      "Season with salt and pepper.",
    ],
    icon: "🐟",
  },
  {
    name: "Cozy Mild Rice Bowl",
    mood: "comfort",
    spice: "mild",
    style: "balanced",
    time: "18 min",
    vibe: "soft, cozy, simple",
    ingredients: ["rice", "egg", "spinach", "butter", "salt"],
    steps: [
      "Warm rice in a pan.",
      "Cook an egg separately.",
      "Add spinach until soft.",
      "Mix everything with butter and salt.",
    ],
    icon: "🍚",
  },
  {
    name: "Lazy Healthy Avocado Bowl",
    mood: "lazy",
    spice: "mild",
    style: "healthy",
    time: "10 min",
    vibe: "fresh, low effort, filling",
    ingredients: ["avocado", "rice", "lime", "egg", "pepper"],
    steps: [
      "Warm rice or use leftover rice.",
      "Mash avocado with lime and pepper.",
      "Add an egg on top.",
      "Mix and eat.",
    ],
    icon: "🥗",
  },
  {
    name: "Comfort Spicy Garlic Pasta",
    mood: "comfort",
    spice: "spicy",
    style: "comfort",
    time: "18 min",
    vibe: "spicy, garlicky, cozy",
    ingredients: ["pasta", "garlic", "butter", "chili oil", "parmesan"],
    steps: [
      "Boil pasta.",
      "Cook garlic in butter.",
      "Add chili oil.",
      "Mix pasta in and top with parmesan.",
    ],
    icon: "🧄",
  },
];

const moods = ["all", "lazy", "productive", "comfort"];
const spiceLevels = ["all", "mild", "medium", "spicy"];
const styles = ["all", "healthy", "balanced", "comfort"];

function Pill({ active, children, onClick }: any) {
  return (
    <button
      onClick={onClick}
      className={`rounded-full px-4 py-2 text-sm transition border ${
        active
          ? "bg-black text-white border-black shadow"
          : "bg-white text-neutral-700 border-neutral-200 hover:border-neutral-400"
      }`}
    >
      {children}
    </button>
  );
}

function MealCard({ meal }: any) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="rounded-3xl bg-white p-6 shadow-xl"
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <div className="text-4xl mb-3">{meal.icon}</div>
          <h3 className="text-2xl font-bold">{meal.name}</h3>
          <p className="mt-1 text-neutral-500">{meal.vibe}</p>
        </div>

        <div className="flex items-center gap-1 rounded-full bg-neutral-100 px-3 py-1 text-sm">
          <Clock size={14} /> {meal.time}
        </div>
      </div>

      <div className="mt-5 flex flex-wrap gap-2">
        <span className="rounded-full bg-rose-100 px-3 py-1 text-sm">
          {meal.mood}
        </span>
        <span className="rounded-full bg-orange-100 px-3 py-1 text-sm">
          {meal.spice}
        </span>
        <span className="rounded-full bg-emerald-100 px-3 py-1 text-sm">
          {meal.style}
        </span>
      </div>

      <div className="mt-6 grid gap-5 md:grid-cols-2">
        <div>
          <h4 className="mb-2 flex items-center gap-2 font-semibold">
            <Salad size={16} />
            Ingredients
          </h4>

          <ul className="space-y-1 text-sm text-neutral-600">
            {meal.ingredients.map((item: string) => (
              <li key={item}>• {item}</li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="mb-2 flex items-center gap-2 font-semibold">
            <Soup size={16} />
            Steps
          </h4>

          <ol className="space-y-1 text-sm text-neutral-600">
            {meal.steps.map((step: string, index: number) => (
              <li key={step}>
                {index + 1}. {step}
              </li>
            ))}
          </ol>
        </div>
      </div>
    </motion.div>
  );
}

export default function Home() {
  const [mood, setMood] = useState("all");
  const [spice, setSpice] = useState("all");
  const [style, setStyle] = useState("all");
  const [query, setQuery] = useState("");
  const [featuredMeal, setFeaturedMeal] = useState(meals[0]);

  const filteredMeals = useMemo(() => {
    const searchText = query.toLowerCase();

    const exactMatches = meals.filter((meal) => {
      const matchesMood = mood === "all" || meal.mood === mood;
      const matchesSpice = spice === "all" || meal.spice === spice;
      const matchesStyle = style === "all" || meal.style === style;

      const searchable =
        `${meal.name} ${meal.ingredients.join(" ")} ${meal.vibe}`.toLowerCase();

      const matchesQuery = searchable.includes(searchText);

      return matchesMood && matchesSpice && matchesStyle && matchesQuery;
    });

    if (exactMatches.length > 0) {
      return exactMatches;
    }

    const fallbackMatches = meals.filter((meal) => {
      const matchesMood = mood === "all" || meal.mood === mood;
      const matchesSpice = spice === "all" || meal.spice === spice;
      const matchesStyle = style === "all" || meal.style === style;

      const score =
        Number(matchesMood) + Number(matchesSpice) + Number(matchesStyle);

      return score >= 2;
    });

    return fallbackMatches.length > 0 ? fallbackMatches : meals;
  }, [mood, spice, style, query]);

  function surpriseMe() {
    const randomMeal = meals[Math.floor(Math.random() * meals.length)];
    setFeaturedMeal(randomMeal);
  }

  return (
    <main className="min-h-screen bg-orange-50 text-neutral-900 p-6">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 grid gap-6 lg:grid-cols-2 lg:items-center">
          <div>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm shadow">
              <Sparkles size={16} />
              Midnight Meals
            </div>

            <h1 className="text-6xl font-bold leading-tight">
              What should I eat?
            </h1>

            <p className="mt-4 max-w-xl text-lg text-neutral-600">
              A cute little food mood generator based on real lazy, spicy,
              cozy, and healthy meals.
            </p>

            <button
              onClick={surpriseMe}
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-black px-5 py-3 text-white shadow transition hover:scale-105"
            >
              <Shuffle size={18} />
              Surprise me
            </button>
          </div>

          <div>
            <div className="mb-3 flex items-center gap-2 text-sm font-semibold text-neutral-600">
              <Heart size={16} />
              Today&apos;s pick
            </div>
            <MealCard meal={featuredMeal} />
          </div>
        </div>

        <section className="rounded-3xl bg-white p-6 shadow-xl">
          <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="text-3xl font-bold">Find your meal vibe</h2>
            </div>

            <div className="relative w-full md:w-80">
              <Search
                className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400"
                size={18}
              />

              <input
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search rice, eggs, salmon..."
                className="w-full rounded-full border border-neutral-200 py-3 pl-10 pr-4 outline-none"
              />
            </div>
          </div>

          <div className="space-y-5">
            <div>
              <p className="mb-2 text-sm font-semibold">Mood</p>

              <div className="flex flex-wrap gap-2">
                {moods.map((item) => (
                  <Pill
                    key={item}
                    active={mood === item}
                    onClick={() => setMood(item)}
                  >
                    {item}
                  </Pill>
                ))}
              </div>
            </div>

            <div>
              <p className="mb-2 flex items-center gap-1 text-sm font-semibold">
                <Flame size={15} />
                Spice
              </p>

              <div className="flex flex-wrap gap-2">
                {spiceLevels.map((item) => (
                  <Pill
                    key={item}
                    active={spice === item}
                    onClick={() => setSpice(item)}
                  >
                    {item}
                  </Pill>
                ))}
              </div>
            </div>

            <div>
              <p className="mb-2 text-sm font-semibold">Food style</p>

              <div className="flex flex-wrap gap-2">
                {styles.map((item) => (
                  <Pill
                    key={item}
                    active={style === item}
                    onClick={() => setStyle(item)}
                  >
                    {item}
                  </Pill>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="mt-8 grid gap-5 lg:grid-cols-2">
          {filteredMeals.map((meal) => (
            <MealCard key={meal.name} meal={meal} />
          ))}
        </section>
      </div>
    </main>
  );
}