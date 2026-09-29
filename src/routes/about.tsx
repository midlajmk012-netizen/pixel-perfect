import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { profile, skills, timeline } from "@/data/portfolio";
import { PageHeader } from "@/components/site/PageHeader";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Muhammed Midlaj KK" },
      {
        name: "description",
        content:
          "The background, creative journey, skills and interests behind designer and video editor Muhammed Midlaj KK.",
      },
      { property: "og:title", content: "About — Muhammed Midlaj KK" },
      {
        property: "og:description",
        content: "Background, creative journey and skills of designer Muhammed Midlaj KK.",
      },
    ],
  }),
  component: About,
});

const groups = ["Design", "Motion & Video", "Development"];

function About() {
  return (
    <>
      <PageHeader
        eyebrow="About me"
        title="A designer obsessed with detail and rhythm"
        description={profile.intro}
      />

      <section className="mx-auto max-w-6xl px-5 py-20 md:px-8">
        <div className="grid gap-12 md:grid-cols-[0.85fr_1.15fr] md:gap-16">
          <Reveal>
            <div className="sticky top-28 overflow-hidden rounded-3xl border border-border bg-surface">
              <div className="flex aspect-[4/5] items-center justify-center bg-[image:var(--gradient-hero)]">
                <span className="font-display text-6xl tracking-tight text-foreground/25">MK</span>
              </div>
              <div className="border-t border-border p-5 text-sm text-muted-foreground">
                Profile photo coming soon — upload yours and it will sit here.
              </div>
            </div>
          </Reveal>

          <div className="space-y-12">
            <Reveal>
              <h2 className="font-display text-2xl">Creative journey</h2>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                I started with posters and social graphics, then moved deeper into motion and
                editing — learning that timing matters as much as composition. Today I work across
                identity, motion and interface design, and I keep a daily practice of concept
                studies so the craft never goes stale.
              </p>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                My approach is simple: understand the message, strip away what does not serve it,
                and give the rest room to breathe.
              </p>
            </Reveal>

            <Reveal>
              <h2 className="font-display text-2xl">Skills &amp; interests</h2>
              <div className="mt-6 space-y-6">
                {groups.map((group) => (
                  <div key={group}>
                    <p className="eyebrow">{group}</p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {skills
                        .filter((s) => s.group === group)
                        .map((s) => (
                          <span
                            key={s.name}
                            className="rounded-full border border-border bg-surface-2 px-3.5 py-1.5 text-sm text-muted-foreground transition-colors hover:border-primary/50 hover:text-foreground"
                          >
                            {s.name}
                          </span>
                        ))}
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal>
              <h2 className="font-display text-2xl">Experience &amp; education</h2>
              <ol className="mt-6 space-y-6 border-l border-border pl-6">
                {timeline.map((item) => (
                  <li key={item.title} className="relative">
                    <span className="absolute -left-[1.68rem] top-2 h-2 w-2 rounded-full bg-primary" />
                    <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                      {item.period} · {item.kind}
                    </p>
                    <p className="mt-1 font-display text-lg">{item.title}</p>
                    <p className="text-sm text-muted-foreground">{item.place}</p>
                  </li>
                ))}
              </ol>
              <Link
                to="/resume"
                className="link-underline mt-8 inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
              >
                Full resume <ArrowRight size={15} />
              </Link>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
