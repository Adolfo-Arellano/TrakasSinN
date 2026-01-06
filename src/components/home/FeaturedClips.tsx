import { useMemo, useState } from "react";

type ClipItem = {
  title: string;
  url: string;
};

type Props = {
  parent: string;
  clips: ClipItem[];
};

function getClipSlug(url: string) {
  try {
    const u = new URL(url);
    const parts = u.pathname.split("/").filter(Boolean);
    const clipIndex = parts.findIndex((p) => p.toLowerCase() === "clip");
    if (clipIndex >= 0 && parts[clipIndex + 1]) return parts[clipIndex + 1];
    return parts[parts.length - 1] ?? url;
  } catch {
    return url;
  }
}

export default function FeaturedClips({ parent, clips: clipItems }: Props) {
  const clips = useMemo(
    () =>
      clipItems.map((c, i) => ({
        id: `${getClipSlug(c.url)}-${i}`,
        slug: getClipSlug(c.url),
        url: c.url,
        title: c.title,
      })),
    [clipItems]
  );

  const [open, setOpen] = useState<null | (typeof clips)[number]>(null);

  return (
    <section className="mt-10">
      <h2 className="text-xl font-semibold text-zinc-100">Clips destacados</h2>
      <p className="mt-1 text-sm text-zinc-400">
        Tocá uno para verlo más grande.
      </p>

      <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2">
        {clips.map((c) => (
          <button
            key={c.id}
            onClick={() => setOpen(c)}
            className="group overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-950 text-left hover:border-zinc-700"
          >
            <div className="aspect-video w-full bg-zinc-900">
              <iframe
                title={c.title}
                src={`https://clips.twitch.tv/embed?clip=${c.slug}&parent=${parent}&autoplay=false`}
                height="100%"
                width="100%"
                allowFullScreen
              />
            </div>

            <div className="flex items-center justify-between gap-3 p-3">
              <p className="line-clamp-1 text-sm font-medium text-zinc-100">
                {c.title}
              </p>
              <span className="text-xs text-zinc-500 group-hover:text-zinc-400">
                Ver
              </span>
            </div>
          </button>
        ))}
      </div>

      {open ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
          onClick={() => setOpen(null)}
          role="presentation"
        >
          <div
            className="w-full max-w-5xl overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-950"
            onClick={(e) => e.stopPropagation()}
            role="presentation"
          >
            <div className="flex items-center justify-between border-b border-zinc-800 p-4">
              <p className="text-sm font-semibold text-zinc-100">{open.title}</p>
              <button
                onClick={() => setOpen(null)}
                className="rounded-lg border border-zinc-800 bg-zinc-900 px-3 py-1 text-sm text-zinc-200 hover:bg-zinc-800"
              >
                Cerrar
              </button>
            </div>

            <div className="aspect-video w-full">
              <iframe
                title={open.title}
                src={`https://clips.twitch.tv/embed?clip=${open.slug}&parent=${parent}&autoplay=true`}
                height="100%"
                width="100%"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      ) : null}
    </section>
  );
}
