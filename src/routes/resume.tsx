import { createFileRoute, Link } from "@tanstack/react-router";
import { Mail } from "lucide-react";
import { profile, skills, timeline } from "@/data/portfolio";
import { PageHeader } from "@/components/site/PageHeader";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/resume")({
  head: () => ({
    meta: [
      { title: "Resume — Muhammed Midlaj KK" },
      {
        name: "description",
        content:
          "Experience, education, certifications and tools of designer and video editor Muhammed Midlaj KK.",
      },
      { property: "og:title", content: "Resume — Muhammed Midlaj KK" },
      {
        property: "og:description",
        content: "Experience, education and certifications timeline.",
      },
    ],
  }),
  component: Resume,
});

function Resume() {
  return (
    <>
      <PageHeader
        eyebrow="Resume"
        title="Experience, education and craft"
        description="A timeline of the work, study and tools behind the portfolio."
      />

      <section className="mx-auto max-w-4xl px-5 py-20 md:px-8">
        <ol className="relative space-y-10 border-l border-border pl-8">
          <span
            aria-hidden
            className="absolute left-0 top-0 h-full w-px bg-[image:linear-gradient(180deg,var(--primary),transparent)]"
          />
          {timeline.map((item, i) => (
            <Reveal key={item.title} delay={i} as="li">
              <div className="relative">
                <span className="absolute -left-[2.15rem] top-2 h-2.5 w-2.5 rounded-full border border-primary bg-background" />
                <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                  {item.period} · {item.kind}
                </p>
                <h2 className="mt-2 font-display text-xl">{item.title}</h2>
                <p className="text-sm text-muted-foreground">{item.place}</p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </div>
            </Reveal>
          ))}
        </ol>

        <Reveal>
          <h2 className="mt-20 font-display text-2xl">Tools</h2>
          <div className="mt-5 flex flex-wrap gap-2">
            {skills.map((s) => (
              <span
                key={s.name}
                className="rounded-full border border-border bg-surface-2 px-3.5 py-1.5 text-sm text-muted-foreground"
              >
                {s.name}
              </span>
            ))}
          </div>
        </Reveal>

        <Reveal>
          <div className="mt-16 flex flex-wrap items-center gap-4 rounded-3xl border border-border bg-surface p-8">
            <div className="flex-1">
              <h2 className="font-display text-xl">Want the full details?</h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Email me and I&apos;ll send a PDF copy of my resume.
              </p>
            </div>
            <a
              href={`mailto:${profile.email}?subject=Resume%20request`}
              className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
            >
              <Mail size={15} /> Request resume
            </a>
          </div>
        </Reveal>

        <Link to="/contact" className="link-underline mt-10 inline-block text-sm text-muted-foreground">
          Or start a project conversation
        </Link>
      </section>
    </>
  );
}
