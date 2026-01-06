import { FaXTwitter, FaYoutube, FaTiktok } from "react-icons/fa6";

type Props = {
  descriptionLines: string[];
  channelUrl: string;
  social: {
    x: string;
    youtube: string;
    tiktok: string;
  };
};

export default function ChannelInfo({ descriptionLines, channelUrl, social }: Props) {
  return (
    <section className="mt-10">
      <h2 className="text-xl font-semibold text-lime-400">Acerca de mi...</h2>

      <div className="mt-4 grid gap-6 rounded-2xl border border-zinc-800 bg-zinc-950 p-6 md:grid-cols-[1fr_50px]">
        <div className="space-y-3">
          {descriptionLines.map((line, idx) => (
            <p key={idx} className="text-sm leading-relaxed text-zinc-200">
              {line}
            </p>
          ))}

          <div className="pt-2">
            <a
              href={channelUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-xl border border-lime-400/30 bg-lime-400/10 px-4 py-2 text-sm text-lime-200 hover:bg-lime-400/15"
            >
              Seguir en Twitch
            </a>
          </div>
        </div>

        <div className="mt-3 flex flex-col gap-3">
          <a
            href={social.x}
            target="_blank"
            rel="noreferrer"
            className="flex h-12 items-center justify-center rounded-xl border border-zinc-800 bg-zinc-900/40 text-zinc-300 transition hover:border-lime-400 hover:text-lime-400"
          >
            <FaXTwitter className="text-2xl" />
          </a>

          <a
            href={social.youtube}
            target="_blank"
            rel="noreferrer"
            className="flex h-12 items-center justify-center rounded-xl border border-zinc-800 bg-zinc-900/40 text-zinc-300 transition hover:border-lime-400 hover:text-lime-400"
          >
            <FaYoutube className="text-2xl" />
          </a>

          <a
            href={social.tiktok}
            target="_blank"
            rel="noreferrer"
            className="flex h-12 items-center justify-center rounded-xl border border-zinc-800 bg-zinc-900/40 text-zinc-300 transition hover:border-lime-400 hover:text-lime-400"
          >
            <FaTiktok className="text-2xl" />
          </a>
        </div>
      </div>
    </section>
  );
}
