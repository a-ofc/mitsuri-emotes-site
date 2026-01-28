import { Copy, Check } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

interface EmoteCardProps {
  id: string;
  name: string;
  icon: string;
}

export default function EmoteCard({ id, name, icon }: EmoteCardProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(id);
      setCopied(true);
      toast.success(`ID ${id} copiado!`);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      toast.error("Erro ao copiar ID");
    }
  };

  return (
    <div className="group relative flex flex-col items-center gap-3">
      {/* Emote Container */}
      <div className="relative h-24 w-24 overflow-hidden rounded-lg bg-white shadow-md transition-all duration-300 group-hover:shadow-xl group-hover:shadow-pink-300/50">
        {/* Glow Effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-pink-400/0 via-transparent to-purple-400/0 opacity-0 transition-opacity duration-300 group-hover:opacity-30" />
        
        {/* Image */}
        <img
          src={icon}
          alt={name}
          className="h-full w-full object-contain p-2 transition-transform duration-300 group-hover:scale-110"
          onError={(e) => {
            (e.target as HTMLImageElement).src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Crect fill='%23f5a9d0' width='100' height='100'/%3E%3C/svg%3E";
          }}
        />
      </div>

      {/* Name */}
      <p className="text-center text-sm font-medium text-foreground line-clamp-2 w-full px-1">
        {name}
      </p>

      {/* Copy Button */}
      <button
        onClick={handleCopy}
        className="flex items-center gap-1 rounded-md bg-gradient-to-r from-pink-500 to-purple-500 px-3 py-1.5 text-xs font-semibold text-white shadow-md transition-all duration-200 hover:shadow-lg hover:from-pink-600 hover:to-purple-600 active:scale-95"
      >
        {copied ? (
          <>
            <Check className="h-3.5 w-3.5" />
            <span>Copiado</span>
          </>
        ) : (
          <>
            <Copy className="h-3.5 w-3.5" />
            <span>Copiar</span>
          </>
        )}
      </button>
    </div>
  );
}
