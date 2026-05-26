import { useMemo, useState, type ReactNode } from "react";
import { motion } from "framer-motion";
import {
  Clock,
  Flame,
  Heart,
  Moon,
  Salad,
  Search,
  ShoppingBasket,
  Shuffle,
  Soup,
  Sparkles,
  Sun,
} from "lucide-react";

type Meal = {
  name: string;
  mood: "lazy" | "productive" | "comfort";
  spice: "mild" | "medium" | "spicy";
  style: "healthy" | "balanced" | "comfort";
  time: string;
  vibe: string;
  imageUrl: string;
  imageAlt: string;
  ingredients: string[];
  steps: string[];
};

const meals: Meal[] = [
  {
    name: "Spicy Egg Rice Bowl",
    mood: "lazy",
    spice: "spicy",
    style: "balanced",
    time: "15 min",
    vibe: "warm, quick, comforting",
    imageUrl:
      "https://images.unsplash.com/photo-1607532941433-304659e8198a?auto=format&fit=crop&w=900&q=80",
    imageAlt: "Rice bowl with egg and greens",
    ingredients: ["rice", "eggs", "chili oil", "spinach", "soy sauce"],
    steps: [
      "Warm leftover rice in a pan.",
      "Scramble or fry 1-2 eggs.",
      "Add spinach until it wilts.",
      "Top with chili oil and soy sauce.",
    ],
  },
  {
    name: "Avocado Salmon Toast",
    mood: "productive",
    spice: "mild",
    style: "healthy",
    time: "10 min",
    vibe: "clean, filling, cafe-style",
    imageUrl:
      "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=900&q=80",
    imageAlt: "Avocado toast with toppings",
    ingredients: ["toast", "avocado", "salmon", "lime", "pepper"],
    steps: [
      "Toast bread until crisp.",
      "Mash avocado with lime, salt, and pepper.",
      "Add cooked salmon on top.",
      "Finish with extra pepper or chili flakes.",
    ],
  },
  {
    name: "Creamy Tomato Pasta",
    mood: "comfort",
    spice: "medium",
    style: "comfort",
    time: "20 min",
    vibe: "cozy, creamy, dinner energy",
    imageUrl:
      "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?auto=format&fit=crop&w=900&q=80",
    imageAlt: "Creamy tomato pasta in a bowl",
    ingredients: ["pasta", "tomato", "cream cheese", "butter", "pepper"],
    steps: [
      "Boil pasta and save a little pasta water.",
      "Cook tomato with butter in a pan.",
      "Add cream cheese and pasta water to make sauce.",
      "Mix in pasta and lots of pepper.",
    ],
  },
  {
    name: "Spicy Protein Egg Bowl",
    mood: "productive",
    spice: "spicy",
    style: "healthy",
    time: "12 min",
    vibe: "high-protein, quick, spicy",
    imageUrl:
      "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=900&q=80",
    imageAlt: "Protein bowl with greens and egg",
    ingredients: ["eggs", "spinach", "chili oil", "cottage cheese"],
    steps: [
      "Cook eggs on low-medium heat.",
      "Add spinach and let it wilt.",
      "Stir in cottage cheese.",
      "Top with chili oil.",
    ],
  },
  {
    name: "Lazy Butter Noodles",
    mood: "lazy",
    spice: "medium",
    style: "comfort",
    time: "15 min",
    vibe: "easy, cozy, buttery",
    imageUrl:
      "https://images.unsplash.com/photo-1612929633738-8fe44f7ec841?auto=format&fit=crop&w=900&q=80",
    imageAlt: "Bowl of noodles",
    ingredients: ["noodles", "butter", "pepper", "parmesan"],
    steps: [
      "Boil noodles.",
      "Melt butter in a pan.",
      "Add noodles and pepper.",
      "Top with parmesan.",
    ],
  },
  {
    name: "Healthy Salmon Rice Bowl",
    mood: "productive",
    spice: "mild",
    style: "healthy",
    time: "20 min",
    vibe: "clean, filling, meal-prep friendly",
    imageUrl:
      "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=900&q=80",
    imageAlt: "Cooked salmon with vegetables",
    ingredients: ["salmon", "rice", "avocado", "lime"],
    steps: [
      "Cook salmon.",
      "Warm rice.",
      "Add avocado and lime.",
      "Season with salt and pepper.",
    ],
  },
  {
    name: "Cozy Mild Rice Bowl",
    mood: "comfort",
    spice: "mild",
    style: "balanced",
    time: "18 min",
    vibe: "soft, cozy, simple",
    imageUrl:
      "https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=900&q=80",
    imageAlt: "Simple rice bowl",
    ingredients: ["rice", "egg", "spinach", "butter", "salt"],
    steps: [
      "Warm rice in a pan.",
      "Cook an egg separately.",
      "Add spinach until soft.",
      "Mix everything with butter and salt.",
    ],
  },
  {
    name: "Lazy Healthy Avocado Bowl",
    mood: "lazy",
    spice: "mild",
    style: "healthy",
    time: "10 min",
    vibe: "fresh, low effort, filling",
    imageUrl:
      "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=900&q=80",
    imageAlt: "Healthy avocado salad bowl",
    ingredients: ["avocado", "rice", "lime", "egg", "pepper"],
    steps: [
      "Warm rice or use leftover rice.",
      "Mash avocado with lime and pepper.",
      "Add an egg on top.",
      "Mix and eat.",
    ],
  },
  {
    name: "Comfort Spicy Garlic Pasta",
    mood: "comfort",
    spice: "spicy",
    style: "comfort",
    time: "18 min",
    vibe: "spicy, garlicky, cozy",
    imageUrl:
      "https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=900&q=80",
    imageAlt: "Garlic pasta with parmesan",
    ingredients: ["pasta", "garlic", "butter", "chili oil", "parmesan"],
    steps: [
      "Boil pasta.",
      "Cook garlic in butter.",
      "Add chili oil.",
      "Mix pasta in and top with parmesan.",
    ],
  },
];

const moods = ["all", "lazy", "productive", "comfort"] as const;
const spiceLevels = ["all", "mild", "medium", "spicy"] as const;
const styles = ["all", "healthy", "balanced", "comfort"] as const;

type MoodFilter = (typeof moods)[number];
type SpiceFilter = (typeof spiceLevels)[number];
type StyleFilter = (typeof styles)[number];

function cx(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

function normalizeTerms(value: string) {
  return value
    .toLowerCase()
    .split(/[\s,]+/)
    .map((item) => item.trim())
    .filter(Boolean);
}

function Pill({
  active,
  children,
  isDarkMode,
  onClick,
}: {
  active: boolean;
  children: ReactNode;
  isDarkMode: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cx(
        "rounded-full border px-4 py-2 text-sm transition",
        active &&
          (isDarkMode
            ? "border-white bg-white text-neutral-950 shadow"
            : "border-black bg-black text-white shadow"),
        !active &&
          (isDarkMode
            ? "border-neutral-700 bg-neutral-900 text-neutral-200 hover:border-neutral-400"
            : "border-neutral-200 bg-white text-neutral-700 hover:border-neutral-400"),
      )}
    >
      {children}
    </button>
  );
}

function MealCard({
  isDarkMode,
  meal,
}: {
  isDarkMode: boolean;
  meal: Meal;
}) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className={cx(
        "overflow-hidden rounded-3xl shadow-xl",
        isDarkMode ? "bg-neutral-900 text-neutral-50" : "bg-white",
      )}
    >
      <img
        src={meal.imageUrl}
        alt={meal.imageAlt}
        className="h-48 w-full object-cover"
        loading="lazy"
      />

      <div className="p-6">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="text-2xl font-bold">{meal.name}</h3>
            <p
              className={cx(
                "mt-1",
                isDarkMode ? "text-neutral-300" : "text-neutral-500",
              )}
            >
              {meal.vibe}
            </p>
          </div>

          <div
            className={cx(
              "flex shrink-0 items-center gap-1 rounded-full px-3 py-1 text-sm",
              isDarkMode ? "bg-neutral-800" : "bg-neutral-100",
            )}
          >
            <Clock size={14} /> {meal.time}
          </div>
        </div>

        <div className="mt-5 flex flex-wrap gap-2">
          <span className="rounded-full bg-rose-100 px-3 py-1 text-sm text-rose-950">
            {meal.mood}
          </span>
          <span className="rounded-full bg-orange-100 px-3 py-1 text-sm text-orange-950">
            {meal.spice}
          </span>
          <span className="rounded-full bg-emerald-100 px-3 py-1 text-sm text-emerald-950">
            {meal.style}
          </span>
        </div>

        <div className="mt-6 grid gap-5 md:grid-cols-2">
          <div>
            <h4 className="mb-2 flex items-center gap-2 font-semibold">
              <Salad size={16} />
              Ingredients
            </h4>

            <ul
              className={cx(
                "space-y-1 text-sm",
                isDarkMode ? "text-neutral-300" : "text-neutral-600",
              )}
            >
              {meal.ingredients.map((item) => (
                <li key={item}>- {item}</li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-2 flex items-center gap-2 font-semibold">
              <Soup size={16} />
              Steps
            </h4>

            <ol
              className={cx(
                "space-y-1 text-sm",
                isDarkMode ? "text-neutral-300" : "text-neutral-600",
              )}
            >
              {meal.steps.map((step, index) => (
                <li key={step}>
                  {index + 1}. {step}
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Home() {
  const [mood, setMood] = useState<MoodFilter>("all");
  const [spice, setSpice] = useState<SpiceFilter>("all");
  const [style, setStyle] = useState<StyleFilter>("all");
  const [query, setQuery] = useState("");
  const [ingredientsInput, setIngredientsInput] = useState("");
  const [featuredMeal, setFeaturedMeal] = useState(meals[0]);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const filteredMeals = useMemo(() => {
    const searchText = query.trim().toLowerCase();
    const userIngredients = normalizeTerms(ingredientsInput);

    const exactMatches = meals.filter((meal) => {
      const matchesMood = mood === "all" || meal.mood === mood;
      const matchesSpice = spice === "all" || meal.spice === spice;
      const matchesStyle = style === "all" || meal.style === style;
      const searchable =
        `${meal.name} ${meal.ingredients.join(" ")} ${meal.vibe}`.toLowerCase();
      const matchesQuery = !searchText || searchable.includes(searchText);
      const ingredientText = meal.ingredients.join(" ").toLowerCase();
      const matchesIngredients =
        userIngredients.length === 0 ||
        userIngredients.some((ingredient) => ingredientText.includes(ingredient));

      return (
        matchesMood &&
        matchesSpice &&
        matchesStyle &&
        matchesQuery &&
        matchesIngredients
      );
    });

    if (exactMatches.length > 0) {
      return exactMatches;
    }

    return meals.filter((meal) => {
      const matchesMood = mood === "all" || meal.mood === mood;
      const matchesSpice = spice === "all" || meal.spice === spice;
      const matchesStyle = style === "all" || meal.style === style;
      const ingredientText = meal.ingredients.join(" ").toLowerCase();
      const ingredientScore = userIngredients.filter((ingredient) =>
        ingredientText.includes(ingredient),
      ).length;
      const filterScore =
        Number(matchesMood) + Number(matchesSpice) + Number(matchesStyle);

      return filterScore >= 2 || ingredientScore > 0;
    });
  }, [mood, spice, style, query, ingredientsInput]);

  function surpriseMe() {
    const randomMeal = meals[Math.floor(Math.random() * meals.length)];
    setFeaturedMeal(randomMeal);
  }

  return (
    <main
      className={cx(
        "min-h-screen p-6 transition-colors",
        isDarkMode
          ? "bg-neutral-950 text-neutral-50"
          : "bg-orange-50 text-neutral-900",
      )}
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 grid gap-6 lg:grid-cols-2 lg:items-center">
          <div>
            <div className="mb-4 flex flex-wrap items-center gap-3">
              <div
                className={cx(
                  "inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm shadow",
                  isDarkMode ? "bg-neutral-900" : "bg-white",
                )}
              >
                <Sparkles size={16} />
                Midnight Meals
              </div>

              <button
                type="button"
                onClick={() => setIsDarkMode((current) => !current)}
                className={cx(
                  "inline-flex h-10 w-10 items-center justify-center rounded-full border transition",
                  isDarkMode
                    ? "border-neutral-700 bg-neutral-900 text-yellow-200 hover:border-neutral-400"
                    : "border-neutral-200 bg-white text-neutral-800 hover:border-neutral-400",
                )}
                aria-label="Toggle dark mode"
              >
                {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
              </button>
            </div>

            <h1 className="text-5xl font-bold leading-tight md:text-6xl">
              What should I eat?
            </h1>

            <p
              className={cx(
                "mt-4 max-w-xl text-lg",
                isDarkMode ? "text-neutral-300" : "text-neutral-600",
              )}
            >
              A cute little food mood generator based on real lazy, spicy,
              cozy, and healthy meals.
            </p>

            <button
              type="button"
              onClick={surpriseMe}
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-black px-5 py-3 text-white shadow transition hover:scale-105"
            >
              <Shuffle size={18} />
              Surprise me
            </button>
          </div>

          <div>
            <div
              className={cx(
                "mb-3 flex items-center gap-2 text-sm font-semibold",
                isDarkMode ? "text-neutral-300" : "text-neutral-600",
              )}
            >
              <Heart size={16} />
              Today&apos;s pick
            </div>
            <MealCard meal={featuredMeal} isDarkMode={isDarkMode} />
          </div>
        </div>

        <section
          className={cx(
            "rounded-3xl p-6 shadow-xl",
            isDarkMode ? "bg-neutral-900" : "bg-white",
          )}
        >
          <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="text-3xl font-bold">Find your meal vibe</h2>
            </div>

            <div className="grid w-full gap-3 md:w-96">
              <div className="relative">
                <Search
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400"
                  size={18}
                />

                <input
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                  placeholder="Search rice, eggs, salmon..."
                  className={cx(
                    "w-full rounded-full border py-3 pl-10 pr-4 outline-none focus:border-neutral-500",
                    isDarkMode
                      ? "border-neutral-700 bg-neutral-950 text-neutral-50 placeholder:text-neutral-500"
                      : "border-neutral-200 bg-white",
                  )}
                />
              </div>

              <div className="relative">
                <ShoppingBasket
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400"
                  size={18}
                />

                <input
                  value={ingredientsInput}
                  onChange={(event) => setIngredientsInput(event.target.value)}
                  placeholder="I have eggs, rice, spinach..."
                  className={cx(
                    "w-full rounded-full border py-3 pl-10 pr-4 outline-none focus:border-neutral-500",
                    isDarkMode
                      ? "border-neutral-700 bg-neutral-950 text-neutral-50 placeholder:text-neutral-500"
                      : "border-neutral-200 bg-white",
                  )}
                />
              </div>
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
                    isDarkMode={isDarkMode}
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
                    isDarkMode={isDarkMode}
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
                    isDarkMode={isDarkMode}
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
          {filteredMeals.length > 0 ? (
            filteredMeals.map((meal) => (
              <MealCard
                key={meal.name}
                meal={meal}
                isDarkMode={isDarkMode}
              />
            ))
          ) : (
            <div
              className={cx(
                "rounded-3xl p-6 shadow-xl lg:col-span-2",
                isDarkMode ? "bg-neutral-900" : "bg-white",
              )}
            >
              <h3 className="text-2xl font-bold">No close match</h3>
              <p
                className={cx(
                  "mt-2",
                  isDarkMode ? "text-neutral-300" : "text-neutral-600",
                )}
              >
                Try changing one filter or search for an ingredient like rice,
                eggs, pasta, or salmon.
              </p>
            </div>
          )}
        </section>
      </div>
    </main>
  );
}
