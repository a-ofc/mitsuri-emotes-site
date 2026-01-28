import { useEffect, useState } from "react";
import EmoteCard from "@/components/EmoteCard";
import { Loader2 } from "lucide-react";

interface Emote {
  id: string;
  name: string;
  icon: string;
}

/**
 * Design: Mitsuri Kanroji - Demon Slayer Temático
 * - Paleta: Rosa sakura (#E94B8E), roxo profundo (#6B4C9A), verde-amarelo (cabelo)
 * - Layout: Grid de 5 emotes com espaçamento generoso
 * - Interações: Hover effects com glow, transições fluidas
 * - Tipografia: Playfair Display para títulos, Inter para corpo
 * - Temática: Love Breathing, Demon Slayer, sakura, elegância feminina
 */
export default function Home() {
  const [emotes, setEmotes] = useState<Emote[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadEmotes = async () => {
      try {
        const response = await fetch("/emotes.json");
        const data = await response.json();
        setEmotes(data);
      } catch (error) {
        console.error("Erro ao carregar emotes:", error);
      } finally {
        setLoading(false);
      }
    };

    loadEmotes();
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 md:py-32">
        {/* Background Image */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "url('/images/mitsuri-hero.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40" />

        {/* Content */}
        <div className="relative z-10 mx-auto max-w-4xl px-4 text-center">
          <h1 className="mb-2 text-6xl font-bold text-pink-300 md:text-7xl drop-shadow-lg" style={{ textShadow: '0 0 20px rgba(233, 75, 142, 0.8)' }}>
            Mitsuri
          </h1>
          <p className="text-xl text-pink-200 drop-shadow-md md:text-2xl font-semibold">
            Love Breathing • Emotes
          </p>
          <p className="mt-4 text-sm text-pink-100/80">
            {emotes.length} emotes do Free Fire
          </p>
        </div>

        {/* Decorative Elements */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-pink-500 to-transparent opacity-50" />
      </section>

      {/* Main Content */}
      <main className="mx-auto max-w-7xl px-4 py-16 md:py-20">
        {loading ? (
          <div className="flex flex-col items-center justify-center gap-4 py-20">
            <Loader2 className="h-8 w-8 animate-spin text-pink-500" />
            <p className="text-muted-foreground">Carregando emotes...</p>
          </div>
        ) : emotes.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-lg text-muted-foreground">Nenhum emote encontrado</p>
          </div>
        ) : (
          <div className="grid gap-8" style={{ gridTemplateColumns: 'repeat(5, 1fr)' }}>
            {emotes.map((emote) => (
              <div key={emote.id} className="flex justify-center">
                <EmoteCard
                  id={emote.id}
                  name={emote.name}
                  icon={emote.icon}
                />
              </div>
            ))}
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="border-t border-pink-500/30 bg-card py-8">
        <div className="mx-auto max-w-7xl px-4 text-center">
          <p className="text-sm text-pink-300/70">
            ✿ Mitsuri Kanroji • Love Breathing ✿
          </p>
          <p className="text-xs text-muted-foreground mt-2">
            Demon Slayer © • Free Fire Emotes
          </p>
        </div>
      </footer>
    </div>
  );
}
