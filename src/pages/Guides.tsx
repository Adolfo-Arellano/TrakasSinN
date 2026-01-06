import { useMemo, useState } from "react";
import BuildCard from "../components/BuildCard";
import data from "../data/builds.json";

const assetUrls = import.meta.glob("../assets/*.png", {
  eager: true,
  query: "?url",
  import: "default",
}) as Record<string, string>;

type Weapon = { id: string; name: string; code: string; image: string };
type Category = { id: string; label: string; weapons: Weapon[] };

function getAssetUrl(fileName: string) {
  return assetUrls[`../assets/${fileName}`];
}

export default function Guides() {
  const categories = data.categories as Category[];
  const [activeId, setActiveId] = useState(categories[0].id);

  const active = useMemo(
    () => categories.find((c) => c.id === activeId)!,
    [categories, activeId]
  );

  return (
    <div className="mx-auto w-full px-20">
      <header className="mb-6 px-3">
        <h1 className="text-3xl font-bold text-lime-400">Builds</h1>
        <p className="text-lg text-zinc-400">
          Elegí una categoría, copiá el código y ya tienes tu arma.
        </p>
      </header>

      <div className="mb-6 flex flex-wrap gap-2 px-3">
        {categories.map((c) => {
          const active = c.id === activeId;
          return (
            <button
              key={c.id}
              onClick={() => setActiveId(c.id)}
              className={[
                "rounded-full px-4 py-2 text-sm font-medium transition cursor-pointer",
                active
                  ? "bg-lime-400 text-black shadow-[0_0_12px_rgba(132,255,0,0.6)]"
                  : "bg-zinc-800 text-zinc-300 hover:bg-zinc-700",
              ].join(" ")}
            >
              {c.label}
            </button>
          );
        })}
      </div>

      <section>
        <h2 className="mb-4 text-lg font-semibold text-yellow-400 px-3">
          {active.label} · {active.weapons.length}
        </h2>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-2">
          {active.weapons.map((w) => (
            <BuildCard
              key={w.id}
              name={w.name}
              code={w.code}
              imageUrl={getAssetUrl(w.image)}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
