import { Button } from "@/components/ui/button";
import { Sparkles, ArrowDown } from "lucide-react";

export function Hero({ onProfile, onFind }: { onProfile: () => void; onFind: () => void }) {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 tb-gradient-soft" aria-hidden />
      <div className="relative mx-auto max-w-6xl px-6 py-20 sm:py-28 tb-fade-up">
        <div className="inline-flex items-center gap-2 rounded-full border bg-background/70 px-3 py-1 text-xs font-medium text-muted-foreground backdrop-blur">
          <Sparkles className="h-3.5 w-3.5 text-primary" />
          MindMitra · Therapist Bridge
        </div>
        <h1 className="mt-6 text-4xl font-semibold tracking-tight text-foreground sm:text-6xl">
          Bridge to the right{" "}
          <span className="bg-clip-text text-transparent tb-gradient-hero">therapist</span>
        </h1>
        <p className="mt-5 max-w-2xl text-lg text-muted-foreground">
          A calm, consent-first handoff from your daily check-ins to a clinician who fits.
          Share only what you choose. Match in minutes.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button size="lg" onClick={onProfile} className="tb-shadow-soft">
            See my emotional profile
            <ArrowDown className="ml-1 h-4 w-4" />
          </Button>
          <Button size="lg" variant="outline" onClick={onFind}>
            Find a therapist
          </Button>
        </div>
      </div>
    </section>
  );
}