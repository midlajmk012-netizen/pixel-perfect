import { createFileRoute, Link } from "@tanstack/react-router";
import { AnimatePresence, motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { useState } from "react";
import { categories, projects } from "@/data/portfolio";
import { PageHeader } from "@/components/site/PageHeader";

export const Route = createFileRoute("/portfolio/")({
  head: () => ({
    meta: [
      { title: "Portfolio — Muhammed Midlaj KK" },
      {
        name: "description",
        content:
          "Selected design, branding, motion graphics and video projects by Muhammed Midlaj KK.",
      },
      { property: "og:title", content: "Portfolio — Muhammed Midlaj KK" },
      {
        property: "og:description",
        content: "Branding, motion graphics, video editing and web design projects.",
      },
    ],
  }),
  component: Portfolio,
});

function Portfolio() {
  const [filter, setFilter] = useState<string>("All Projects");
  const visible =
    filter === "All Projects" ? projects : projects.filter((p) => p.category === filter);

  return (
    <>
      <PageHeader
        eyebrow="Portfolio"
        title="Concept studies and personal projects"
        description="A selection of self-initiated work exploring identity, motion, editing and interface design."
      />

      <section className="mx-auto max-w-6xl px-5 py-16 md:px-8">
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setFilter(cat)}
              className={`rounded-full border px-4 py-2 text-sm transition-all duration-300 ${
                filter === cat
                  ? "border-primary bg-primary/15 text-foreground"
                  : "border-border text-muted-foreground hover:border-primary/40 hover:text-foreground"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <motion.div layout className="mt-10 grid gap-5 md:grid-cols-2">
          <AnimatePresence mode="popLayout">
            {visible.map((project) => (
              <motion.div
                key={project.slug}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              >
                <Link
                  to="/portfolio/$slug"
                  params={{ slug: project.slug }}
                  className="group block overflow-hidden rounded-2xl border border-border bg-surface transition-colors hover:border-primary/50"
                  data-cursor
                >
                  <div className="overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      loading="lazy"
                      width={1200}
                      height={912}
                      className="aspect-[4/3] w-full object-cover transition-transform duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105"
                    />
                  </div>
                  <div className="flex items-start justify-between gap-4 p-5">
                    <div>
                      <p className="font-display text-lg">{project.title}</p>
                      <p className="mt-1 text-xs uppercase tracking-[0.18em] text-muted-foreground">
                        {project.category} · {project.year}
                      </p>
                      <p className="mt-3 text-sm text-muted-foreground">{project.summary}</p>
                    </div>
                    <ArrowUpRight
                      size={18}
                      className="mt-1 shrink-0 text-muted-foreground transition-all group-hover:-translate-y-0.5 group-hover:text-primary"
                    />
                  </div>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {visible.length === 0 && (
          <p className="mt-16 text-center text-muted-foreground">
            No projects in this category yet.
          </p>
        )}

        <p className="mt-14 text-xs text-muted-foreground">
          These are personal concept studies, not commissioned client work.
        </p>
      </section>
    </>
  );
}
