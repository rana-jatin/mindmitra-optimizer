
# Soften Microcopy — Hero, Consent & Form Sections

Goal: replace clinical/transactional phrasing with warmer, more reassuring language. Visuals, layout, components, and behavior stay exactly the same — text only.

## 1. Landing Hero — `src/routes/index.tsx`

| Element | Current | Proposed |
|---|---|---|
| Meta title | "MindMitra — Care that meets you" | _(unchanged — already warm)_ |
| Meta description | "MindMitra bridges your daily emotional check-ins to the right therapist, with consent-first sharing." | "A gentle space for daily reflection — and a quiet bridge to a therapist when you're ready." |
| OG description | "From self-reflection to the right clinician — in minutes." | "From quiet daily reflections to a therapist who feels right — at your pace." |
| Sub-headline | "From your quiet daily check-ins to the right clinician — a consent-first bridge to therapy that actually fits." | "A soft place to land between your daily reflections and a therapist who feels right. You decide what to share, and when." |
| CTA button | "Open Therapist Bridge" | "Begin gently" |

## 2. Therapist Bridge Hero — `src/components/therapist-bridge/Hero.tsx`

| Element | Current | Proposed |
|---|---|---|
| Eyebrow chip | "MindMitra · Therapist Bridge" | "MindMitra · A gentle bridge" |
| Headline | "Bridge to the right **therapist**" | "Find someone who **truly listens**" |
| Sub-copy | "A calm, consent-first handoff from your daily check-ins to a clinician who fits. Share only what you choose. Match in minutes." | "When you're ready, we'll help you meet a therapist who feels like a good fit. You stay in control of what's shared — nothing leaves your hands without you." |
| Primary CTA | "See my emotional profile" | "See how you've been feeling" |
| Secondary CTA | "Find a therapist" | "Meet someone who fits" |

## 3. Section Headers — `src/routes/therapist-bridge.tsx`

Soften the eyebrow + title pairs (drop "Step 1/2/3" clinical labeling):

| Section | Current eyebrow / title | Proposed |
|---|---|---|
| Profile | "Your signal" / "Emotional profile" | "How you've been" / "A gentle look at your week" |
| Intake | "Step 1" / "Intake preferences" | "Tell us a little" / "What feels right for you" |
| Directory | "Step 2" / "Matched therapists" | "People who could help" / "Therapists who might fit" |
| Consent | "Step 3" / "Your consent" | "You're in control" / "What you'd like to share" |
| Process | "The flow" / "From signal to session" | "How it unfolds" / "From a quiet check-in to a first session" |
| Handoff | "Transparency" / "What gets handed off" | "Nothing hidden" / "What your therapist will see" |
| Footer | "MindMitra · Therapist Bridge demo. All data shown is illustrative." | "MindMitra · A gentle preview. Everything shown here is for illustration." |

## 4. Consent Form — `src/components/therapist-bridge/ConsentForm.tsx`

| Element | Current | Proposed |
|---|---|---|
| Card title | "Consent — what you share" | "What you'd like to share" |
| Card sub-copy | "You stay in control. Toggle exactly what your therapist receives." | "Take your time. Share only what feels right — you can change your mind anytime." |
| "Share assessments" desc | "PHQ-9, GAD-7 scores and severity." | "A simple snapshot of how you've been feeling lately." |
| "Share full emotional profile" desc | "Mood trends, patterns, topics." | "The bigger picture — your moods, themes, and gentle patterns." |
| "Share session summaries" desc | "AI-generated reflection notes." | "Soft notes from your reflections, in your own rhythm." |
| "Share contact information" desc | "Name and email — required to book." | "Just your name and email, so they can reach out." |

## 5. Intake Form — `src/components/therapist-bridge/IntakeForm.tsx`

| Element | Current | Proposed |
|---|---|---|
| Card title | "Tell us what you're looking for" | "What would feel supportive?" |
| Card sub-copy | "We'll narrow the directory below. Nothing here is shared without consent." | "We'll gently shape the suggestions below. Nothing you choose here is shared with anyone." |
| "Concerns" label | "Concerns" | "What's on your mind" |
| "Modality" label | "Modality" | "How you'd like to meet" |
| "Therapist gender" label | "Therapist gender" | "Therapist you'd feel at ease with" |
| "Budget per session" label | "Budget per session" | "What feels comfortable per session" |
| Apply button | "Apply & match" | "Show me people who fit" |
| Toast title / desc | "Filters applied" / "Directory updated below." | "Updated gently" / "Take a look at the people below." |

## 6. Booking Consent Toast — `src/routes/therapist-bridge.tsx`

| Element | Current | Proposed |
|---|---|---|
| Toast title | "Consent needed" | "One small step first" |
| Toast desc | "Enable assessments and contact info to book." | "Let your therapist see a snapshot and how to reach you, and we're set." |

## Out of Scope
- No layout, color, image, animation, or component-structure changes.
- No changes to the Therapist Directory cards, Process Timeline, Handoff Explainer, Booking Modal, or Data Preview Modal copy (let me know if you'd like those softened too in a follow-up).
