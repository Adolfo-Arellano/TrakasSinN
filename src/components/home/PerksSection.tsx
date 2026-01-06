import BitsImg from "../../assets/Bits.png";
import EmotesImg from "../../assets/Emotes.png";

export default function PerksSection() {
  return (
    <section className="mt-8">
      <h2 className="text-2xl font-bold text-lime-400 mb-3 ml-3">Beneficios del canal</h2>
      <div className="grid gap-6 md:grid-cols-2">
        <div className="rounded-2xl border border-zinc-800 bg-zinc-950 p-4">
          <h3 className="text-sm font-semibold text-zinc-100">Beneficios Subs</h3>
          <p className="mt-1 text-xs text-zinc-400">Emotes propios y sorteos para subs.</p>

          <div className="mt-4 flex items-center justify-center rounded-xl bg-zinc-900/40 p-3">
            <img
              src={EmotesImg}
              alt="Beneficios de subs"
              className="h-80 w-auto max-w-full object-contain"
              loading="lazy"
            />
          </div>
        </div>

        <div className="rounded-2xl border border-zinc-800 bg-zinc-950 p-4">
          <h3 className="text-sm font-semibold text-zinc-100">Beneficios Bits</h3>
          <p className="mt-1 text-xs text-zinc-400">Íconos exclusivos por enviar bits.</p>

          <div className="mt-4 flex items-center justify-center rounded-xl bg-zinc-900/40 p-3">
            <img
              src={BitsImg}
              alt="Beneficios de bits"
              className="h-80 w-auto max-w-full object-contain"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
