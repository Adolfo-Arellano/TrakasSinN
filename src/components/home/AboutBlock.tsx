import { HOME } from "../../data/home";

export default function AboutBlock() {
  return (
    <section className="mx-auto w-full px-1">
      <h2 className="text-2xl font-bold text-lime-400 px-3">Acerca de mi...</h2>

      <div className="mt-4 rounded-2xl border border-zinc-800 bg-zinc-950 p-5">
        <ul className="space-y-2 text-zinc-200">
          {HOME.about.map((line, i) => (
            <li key={i} className="leading-relaxed">
              {line}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
