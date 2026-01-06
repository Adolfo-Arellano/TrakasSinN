type Props = {
  channel: string;
  parent: string;
};

export default function StreamPanel({ channel, parent }: Props) {
  return (
    <div className="mx-auto mt-4 w-full max-w-5xl overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-950">
      <div className="aspect-video w-full">
        <iframe
          src={`https://player.twitch.tv/?channel=${channel}&parent=${parent}&muted=true`}
          height="100%"
          width="100%"
          allowFullScreen
        />
      </div>

      <div className="flex items-center justify-between gap-3 p-4">
        <p className="text-sm text-zinc-300">Mirá la transmisión en Twitch</p>
        <a
          href={`https://www.twitch.tv/${channel}`}
          target="_blank"
          rel="noreferrer"
          className="shrink-0 rounded-xl border border-lime-400/30 bg-lime-400/10 px-4 py-2 text-sm text-lime-200 hover:bg-lime-400/15"
        >
          Ir al canal
        </a>
      </div>
    </div>
  );
}
