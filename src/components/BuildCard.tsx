import { useState } from "react";

type Props = {
  name: string;
  code: string;
  imageUrl?: string;
};

export default function BuildCard({ name, code, imageUrl }: Props) {
  const [open, setOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const onCopy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 800);
  };

  return (
    <div className="relative rounded-xl border border-zinc-800 bg-zinc-900 p-4 hover:border-lime-400 transition">
      <h3 className="mb-2 text-lg font-semibold text-zinc-100">{name}</h3>

      <div className="mb-3 overflow-hidden rounded-lg border border-zinc-800 bg-black">
        <div className="h-full w-full">
          {imageUrl ? (
            <img
              src={imageUrl}
              alt={name}
              className="h-full w-full object-cover cursor-zoom-in"
              loading="lazy"
              onClick={() => setOpen(true)}
            />
          ) : (
            <div className="flex h-full items-center justify-center text-sm text-zinc-500">
              Sin imagen
            </div>
          )}
        </div>
      </div>

      <button
        onClick={onCopy}
        className="flex w-full items-center justify-between rounded-lg border border-zinc-700 bg-zinc-800 px-3 py-2 text-sm text-zinc-200 hover:border-lime-400 hover:text-lime-300 cursor-pointer"
      >
        <span className="truncate">{code}</span>
        <span className="ml-3 text-xs">
          {copied ? "✓ Copiado" : "Copiar"}
        </span>
      </button>

      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80"
          onClick={() => setOpen(false)}
        >
          <div className="relative max-h-[90vh] max-w-[90vw]">
            <img
              src={imageUrl}
              alt={name}
              className="max-h-[90vh] max-w-[90vw] object-contain rounded-lg"
            />
            <button
              onClick={() => setOpen(false)}
              className="absolute -top-4 -right-4 rounded-full bg-zinc-900 px-2 py-1 text-sm text-white hover:bg-zinc-800 cursor-pointer"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
