import { createFileRoute } from "@tanstack/react-router";
import { lazy, Suspense, useCallback, useRef, useState } from "react";
import { Hero } from "@/components/therapist-bridge/Hero";
import { EmotionalProfileSection } from "@/components/therapist-bridge/EmotionalProfile";
import { ClinicalActions } from "@/components/therapist-bridge/ClinicalActions";
import { IntakeForm } from "@/components/therapist-bridge/IntakeForm";
import { ConsentForm } from "@/components/therapist-bridge/ConsentForm";
import { ProcessTimeline } from "@/components/therapist-bridge/ProcessTimeline";
import { HandoffExplainer } from "@/components/therapist-bridge/HandoffExplainer";
import { BookingModal } from "@/components/therapist-bridge/BookingModal";
import { Skeleton } from "@/components/ui/skeleton";
import { Toaster } from "@/components/ui/sonner";
import {
  defaultConsent,
  defaultIntake,
  minimumConsent,
  type ConsentState,
  type IntakePrefs,
  type Therapist,
} from "@/lib/mock/therapist-bridge";
import { toast } from "sonner";

const TherapistDirectory = lazy(
  () => import("@/components/therapist-bridge/TherapistDirectory"),
);
const DataPreviewModal = lazy(
  () => import("@/components/therapist-bridge/DataPreviewModal"),
);

export const Route = createFileRoute("/therapist-bridge")({
  head: () => ({
    meta: [
      { title: "Therapist Bridge — MindMitra" },
      {
        name: "description",
        content:
          "A consent-first bridge from your daily check-ins to the right therapist. Match, share, and book in minutes.",
      },
      { property: "og:title", content: "Therapist Bridge — MindMitra" },
      {
        property: "og:description",
        content:
          "Match with the right therapist using your emotional profile — you decide what to share.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: TherapistBridgePage,
});

function Section({
  id,
  eyebrow,
  title,
  children,
  innerRef,
}: {
  id: string;
  eyebrow?: string;
  title?: string;
  children: React.ReactNode;
  innerRef?: React.Ref<HTMLElement>;
}) {
  return (
    <section id={id} ref={innerRef} className="mx-auto max-w-6xl px-6 py-12 sm:py-16">
      {(eyebrow || title) && (
        <div className="mb-8">
          {eyebrow && (
            <p className="text-xs font-semibold uppercase tracking-wider text-primary">
              {eyebrow}
            </p>
          )}
          {title && (
            <h2 className="mt-1 text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
              {title}
            </h2>
          )}
        </div>
      )}
      {children}
    </section>
  );
}

function TherapistBridgePage() {
  const profileRef = useRef<HTMLElement>(null);
  const directoryRef = useRef<HTMLElement>(null);
  const consentRef = useRef<HTMLElement>(null);

  const [prefs, setPrefs] = useState<IntakePrefs>(defaultIntake);
  const [consent, setConsent] = useState<ConsentState>(defaultConsent);
  const [previewOpen, setPreviewOpen] = useState(false);
  const [bookingOpen, setBookingOpen] = useState(false);
  const [pendingTherapist, setPendingTherapist] = useState<Therapist | null>(null);

  const scrollTo = useCallback((ref: React.RefObject<HTMLElement | null>) => {
    ref.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  const handleBook = useCallback(
    (t: Therapist) => {
      setPendingTherapist(t);
      if (!minimumConsent(consent)) {
        toast("Consent needed", {
          description: "Enable assessments and contact info to book.",
        });
        scrollTo(consentRef);
        return;
      }
      setBookingOpen(true);
    },
    [consent, scrollTo],
  );

  return (
    <main className="min-h-screen bg-background">
      <Toaster richColors position="top-center" />

      <Hero
        onProfile={() => scrollTo(profileRef)}
        onFind={() => scrollTo(directoryRef)}
      />

      <Section
        id="profile"
        eyebrow="Your signal"
        title="Emotional profile"
        innerRef={profileRef}
      >
        <div className="space-y-4">
          <EmotionalProfileSection />
          <ClinicalActions onPreview={() => setPreviewOpen(true)} />
        </div>
      </Section>

      <Section id="intake" eyebrow="Step 1" title="Intake preferences">
        <IntakeForm onApply={setPrefs} />
      </Section>

      <Section
        id="directory"
        eyebrow="Step 2"
        title="Matched therapists"
        innerRef={directoryRef}
      >
        <Suspense
          fallback={
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {Array.from({ length: 6 }).map((_, i) => (
                <Skeleton key={i} className="h-64 rounded-2xl" />
              ))}
            </div>
          }
        >
          <TherapistDirectory prefs={prefs} onBook={handleBook} />
        </Suspense>
      </Section>

      <Section
        id="consent"
        eyebrow="Step 3"
        title="Your consent"
        innerRef={consentRef}
      >
        <ConsentForm consent={consent} onChange={setConsent} />
      </Section>

      <Section id="process" eyebrow="The flow" title="From signal to session">
        <ProcessTimeline />
      </Section>

      <Section id="handoff" eyebrow="Transparency" title="What gets handed off">
        <HandoffExplainer />
      </Section>

      <footer className="border-t bg-muted/30">
        <div className="mx-auto max-w-6xl px-6 py-10 text-center text-xs text-muted-foreground">
          MindMitra · Therapist Bridge demo. All data shown is illustrative.
        </div>
      </footer>

      <Suspense fallback={null}>
        {previewOpen && (
          <DataPreviewModal
            open={previewOpen}
            onOpenChange={setPreviewOpen}
            consent={consent}
          />
        )}
      </Suspense>

      <BookingModal
        therapist={pendingTherapist}
        open={bookingOpen}
        onOpenChange={setBookingOpen}
      />
    </main>
  );
}