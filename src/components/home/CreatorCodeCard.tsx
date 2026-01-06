import { useState } from "react";

type Props = {
  code: string;
  title?: string;
  subtitle?: string;
  imageSrc?: string;
};

async function copyToClipboard(text: string) {
  if (navigator.clipboard?.writeText) {
    await navigator.clipboard.writeText(text);
    return;
  }

  const textarea = document.createElement("textarea");
  textarea.value = text;
  textarea.style.position = "fixed";
  textarea.style.left = "-9999px";
  document.body.appendChild(textarea);
  textarea.focus();
  textarea.select();
  document.execCommand("copy");
  document.body.removeChild(textarea);
}

export default function CreatorCodeCard({
  code,
  title = "Código de creador",
  subtitle = "Usalo para apoyar al canal.",
  imageSrc,
}: Props) {
  const [copied, setCopied] = useState(false);
  const [isCopying, setIsCopying] = useState(false);

  const handleCopy = async () => {
    try {
      setIsCopying(true);
      await copyToClipboard(code);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1200);
    } finally {
      setIsCopying(false);
    }
  };

  return (
    <aside className="overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-950 p-4 mt-7">
      <div className="flex items-start justify-between gap-3">
        <div>
          <h3 className="text-sm font-semibold text-zinc-100">{title}</h3>
          <p className="mt-1 text-xs text-zinc-400">{subtitle}</p>
        </div>

        <span className="rounded-full border border-lime-400/30 bg-lime-400/10 px-2 py-1 text-[11px] font-medium text-lime-200">
          {code}
        </span>
      </div>

      {imageSrc ? (
        <div className="mt-3 overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900/40">
          <img
            src={imageSrc}
            alt={`Código ${code}`}
            className="h-full w-full object-cover"
            draggable={false}
          />
        </div>
      ) : null}

      <button
        type="button"
        onClick={handleCopy}
        disabled={isCopying}
        className="mt-3 w-full rounded-xl border border-lime-400/30 bg-lime-400/10 px-4 py-2 text-sm text-lime-200 hover:bg-lime-400/15 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {copied ? "Copiado ✅" : "Copiar código"}
      </button>
    </aside>
  );
}
