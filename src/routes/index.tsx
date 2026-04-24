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
          "A gentle space for daily reflection — and a quiet bridge to a therapist when you're ready.",
      },
      { property: "og:title", content: "MindMitra — Care that meets you" },
      {
        property: "og:description",
        content: "From quiet daily reflections to a therapist who feels right — at your pace.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <div className="absolute inset-0 tb-gradient-soft" aria-hidden />
      <div className="relative mx-auto grid min-h-screen max-w-6xl items-center gap-12 px-6 py-16 tb-fade-up md:grid-cols-2">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border bg-background/70 px-3 py-1 text-xs font-medium text-muted-foreground backdrop-blur">
            <HeartPulse className="h-3.5 w-3.5 text-primary" />
            MindMitra
          </div>
          <h1 className="mt-6 text-5xl font-semibold tracking-tight text-foreground sm:text-7xl">
            Care that{" "}
            <span className="bg-clip-text text-transparent tb-gradient-hero">meets you</span>
          </h1>
          <p className="mt-5 max-w-xl text-lg text-muted-foreground">
            A soft place to land between your daily reflections and a therapist who feels right.
            You decide what to share, and when.
          </p>
          <div className="mt-8">
            <Button asChild size="lg" className="tb-shadow-soft">
              <Link to="/therapist-bridge">
                Begin gently
                <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
        <div className="relative hidden md:block">
          <div className="absolute -inset-10 rounded-full tb-gradient-hero blur-3xl tb-breathe" aria-hidden />
          <img
            src="https://images.unsplash.com/photo-1518495973542-4542c06a5843?auto=format&fit=crop&w=900&q=75"
            alt="Soft sunlight filtering through leaves"
            loading="eager"
            className="relative h-[480px] w-full rounded-[2.5rem] object-cover tb-shadow-soft tb-float"
          />
        </div>
      </div>
    </main>
  );
}
