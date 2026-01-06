import StreamPanel from "../components/home/StreamPanel";
import ChannelInfo from "../components/home/ChannelInfo";
import FeaturedClips from "../components/home/FeaturedClips";
import CreatorCodeCard from "../components/home/CreatorCodeCard";
import PerksSection from "../components/home/PerksSection";

import Creator from "../assets/Creator.png";

export default function Home() {
  const channel = "trakassinn";
  const parent = window.location.hostname;

  const clips = [
    { title: "Chop Chop", url: "https://www.twitch.tv/trakassinn/clip/BusyPiliableSaladEagleEye" },
    { title: "Le roban la mochila y rapea tilteado", url: "https://www.twitch.tv/trakassinn/clip/BlushingShakingSheepANELE-GTS9HKioqDms91li" },
    { title: "Jugada del año", url: "https://www.twitch.tv/trakassinn/clip/DullExcitedPizzaItsBoshyTime-4zbw3jGqJ10ep4wz" },
    { title: "Squad wipeada", url: "https://www.twitch.tv/trakassinn/clip/SuspiciousKnottyCocoaSmoocherZ-VCkgMbIIGKc8WUDn" },
  ];

  const descriptionLines = [
    "Amante de los survivals, shooters y MMOs desde chavalín.",
    "Rust en vena (+13.000 hs) y actualmente viciando fuerte a Arena Breakout: Infinite (+1.500 hs).",
    "Comencé a jugar al Counter-Strike desde la 1.6, la época dorada de los cibers.",
    "Actualmente soy ABI Partner.",
    "¡Espero que disfrutes el contenido!",
  ];

  return (
    <div className="mx-auto w-full max-w-6xl px-6">
      <div className="fixed right-6 top-24 z-40 hidden xl:block w-72">
        <CreatorCodeCard
          code="TRAKASSINN"
          imageSrc={Creator}
          subtitle="Usalo para apoyar al canal."
        />
      </div>

      <h1 className="text-3xl font-bold text-lime-400">En vivo</h1>
      <StreamPanel channel={channel} parent={parent} />

      <ChannelInfo
        channelUrl={`https://www.twitch.tv/${channel}`}
        descriptionLines={descriptionLines}
        social={{
          x: "https://x.com/Trakas8",
          youtube: "https://www.youtube.com/channel/UCvnQIzAG3E-ck1kPXpwm4dA",
          tiktok: "https://www.tiktok.com/@trakas.sin.n",
        }}
      />

      <PerksSection />

      <FeaturedClips parent={parent} clips={clips} />
    </div>
  );
}
