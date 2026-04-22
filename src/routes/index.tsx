import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { ArrowRight, HeartPulse } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "MindMitra — Care that meets you" },
      {
        name: "description",
        content:
          "MindMitra bridges your daily emotional check-ins to the right therapist, with consent-first sharing.",
      },
      { property: "og:title", content: "MindMitra — Care that meets you" },
      {
        property: "og:description",
        content: "From self-reflection to the right clinician — in minutes.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <div className="absolute inset-0 tb-gradient-soft" aria-hidden />
      <div className="relative mx-auto flex min-h-screen max-w-4xl flex-col items-center justify-center px-6 text-center tb-fade-up">
        <div className="inline-flex items-center gap-2 rounded-full border bg-background/70 px-3 py-1 text-xs font-medium text-muted-foreground backdrop-blur">
          <HeartPulse className="h-3.5 w-3.5 text-primary" />
          MindMitra
        </div>
        <h1 className="mt-6 text-5xl font-semibold tracking-tight text-foreground sm:text-7xl">
          Care that{" "}
          <span className="bg-clip-text text-transparent tb-gradient-hero">meets you</span>
        </h1>
        <p className="mt-5 max-w-xl text-lg text-muted-foreground">
          From your quiet daily check-ins to the right clinician — a consent-first bridge to
          therapy that actually fits.
        </p>
        <div className="mt-8">
          <Button asChild size="lg" className="tb-shadow-soft">
            <Link to="/therapist-bridge">
              Open Therapist Bridge
              <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </main>
  );
}
