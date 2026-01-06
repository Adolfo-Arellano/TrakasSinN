import { HOME } from "../../data/home";

export default function SocialLinks() {
  return (
    <section className="mx-auto w-full px-1">
      <h2 className="text-2xl font-bold text-lime-400 px-3">Redes</h2>

      <div className="mt-4 flex flex-wrap gap-3">
        {HOME.socials.map((s) => (
          <a
            key={s.href}
            href={s.href}
            target="_blank"
            rel="noreferrer"
            className="rounded-xl border border-zinc-800 bg-zinc-950 px-4 py-2 text-sm text-zinc-200 hover:border-lime-400/30 hover:bg-zinc-900"
          >
            {s.label}
          </a>
        ))}
      </div>
    </section>
  );
}
