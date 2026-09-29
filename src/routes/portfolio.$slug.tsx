import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { motion } from "motion/react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { projects } from "@/data/portfolio";

export const Route = createFileRoute("/portfolio/$slug")({
  loader: ({ params }) => {
    const project = projects.find((p) => p.slug === params.slug);
    if (!project) throw notFound();
    return { project };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Project not found" }, { name: "robots", content: "noindex" }],
      };
    }
    const { project } = loaderData;
    return {
      meta: [
        { title: `${project.title} — Muhammed Midlaj KK` },
        { name: "description", content: project.summary },
        { property: "og:title", content: `${project.title} — Muhammed Midlaj KK` },
        { property: "og:description", content: project.summary },
      ],
    };
  },
  notFoundComponent: ProjectNotFound,
  errorComponent: ProjectNotFound,
  component: ProjectDetail,
});

function ProjectNotFound() {
  return (
    <div className="mx-auto max-w-6xl px-5 pt-40 pb-24 md:px-8">
      <h1 className="font-display text-3xl">Project unavailable</h1>
      <p className="mt-3 text-muted-foreground">This project doesn&apos;t exist or was moved.</p>
      <Link to="/portfolio" className="link-underline mt-6 inline-block text-sm">
        Back to portfolio
      </Link>
    </div>
  );
}

function ProjectDetail() {
  const { project } = Route.useLoaderData();
  const index = projects.findIndex((p) => p.slug === project.slug);
  const next = projects[(index + 1) % projects.length] ?? project;

  return (
    <article>
      <section className="hero-aurora border-b border-border">
        <div className="mx-auto max-w-6xl px-5 pt-32 pb-12 md:px-8 md:pt-40">
          <Link
            to="/portfolio"
            className="link-underline inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
          >
            <ArrowLeft size={15} /> Portfolio
          </Link>
          <h1 className="mt-6 max-w-3xl font-display text-4xl leading-tight md:text-6xl">
            {project.title}
          </h1>
          <p className="mt-4 text-sm uppercase tracking-[0.18em] text-muted-foreground">
            {project.category} · {project.year}
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-5 py-14 md:px-8">
        <motion.img
          src={project.image}
          alt={project.title}
          width={1200}
          height={912}
          initial={{ opacity: 0, scale: 1.03 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="w-full rounded-3xl border border-border object-cover"
        />

        <div className="mt-14 grid gap-12 md:grid-cols-[1.4fr_0.6fr]">
          <div>
            <h2 className="font-display text-2xl">About the project</h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">{project.description}</p>
            <p className="mt-6 text-xs text-muted-foreground">
              Personal concept study — not commissioned client work.
            </p>
          </div>
          <aside className="space-y-6">
            <div>
              <p className="eyebrow">Year</p>
              <p className="mt-2">{project.year}</p>
            </div>
            <div>
              <p className="eyebrow">Category</p>
              <p className="mt-2">{project.category}</p>
            </div>
            <div>
              <p className="eyebrow">Software used</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {project.software.map((s) => (
                  <span
                    key={s}
                    className="rounded-full border border-border bg-surface-2 px-3 py-1 text-sm text-muted-foreground"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </aside>
        </div>

        <div className="mt-20 border-t border-border pt-8">
          <p className="eyebrow">Next project</p>
          <Link
            to="/portfolio/$slug"
            params={{ slug: next.slug }}
            className="group mt-3 inline-flex items-center gap-3 font-display text-2xl md:text-3xl"
          >
            {next.title}
            <ArrowRight
              size={22}
              className="text-primary transition-transform group-hover:translate-x-1"
            />
          </Link>
        </div>
      </div>
    </article>
  );
}
