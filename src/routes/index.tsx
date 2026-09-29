import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { profile, projects, services, stats } from "@/data/portfolio";
import { Reveal, RevealWords } from "@/components/site/Reveal";
import { Counter } from "@/components/site/Counter";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Muhammed Midlaj KK — Graphic Designer & Video Editor" },
      {
        name: "description",
        content:
          "Designing meaningful digital experiences through creativity, design and innovation. Brand identity, motion graphics, video editing and UI/UX.",
      },
      { property: "og:title", content: "Muhammed Midlaj KK — Graphic Designer & Video Editor" },
      {
        property: "og:description",
        content: "Brand identity, motion graphics, video editing and UI/UX design portfolio.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <section className="hero-aurora relative flex min-h-screen items-center overflow-hidden">
        <motion.div
          aria-hidden
          className="absolute -right-32 top-1/4 h-96 w-96 rounded-full bg-primary/10 blur-3xl"
          animate={{ y: [0, 30, 0], opacity: [0.5, 0.8, 0.5] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
        <div className="mx-auto w-full max-w-6xl px-5 pt-28 pb-20 md:px-8">
          <motion.p
            className="eyebrow"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.6 }}
          >
            {profile.role} · {profile.name}
          </motion.p>

          <h1 className="mt-6 max-w-4xl font-display text-[2.6rem] leading-[1.02] uppercase md:text-7xl">
            <RevealWords text={profile.headline} />
          </h1>

          <motion.p
            className="mt-7 max-w-lg text-base leading-relaxed text-muted-foreground md:text-lg"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            {profile.tagline}
          </motion.p>

          <motion.div
            className="mt-10 flex flex-wrap items-center gap-3"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.25, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <Link
              to="/portfolio"
              className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-all hover:bg-primary/90 hover:shadow-[0_18px_40px_-18px_var(--primary)]"
            >
              Explore My Work
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-medium text-foreground transition-colors hover:border-primary/60 hover:bg-accent/40"
            >
              Let&apos;s Connect
            </Link>
          </motion.div>

          <motion.div
            className="mt-14 flex flex-wrap gap-6 text-xs text-muted-foreground"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4, duration: 0.8 }}
          >
            {profile.socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer noopener"
                className="link-underline uppercase tracking-[0.18em] hover:text-foreground"
              >
                {s.label}
              </a>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="border-y border-border bg-surface/40">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 px-5 py-14 md:grid-cols-4 md:px-8">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i}>
              <p className="font-display text-4xl text-foreground md:text-5xl">
                <Counter value={s.value} suffix={s.suffix} />
              </p>
              <p className="mt-2 text-sm text-muted-foreground">{s.label}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-24 md:px-8">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="eyebrow">What I do</p>
            <h2 className="mt-3 font-display text-3xl md:text-4xl">Services</h2>
          </div>
          <Link to="/services" className="link-underline text-sm text-muted-foreground hover:text-foreground">
            All services
          </Link>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {services.slice(0, 4).map((service, i) => (
            <Reveal key={service.slug} delay={i}>
              <Link to="/services" className="surface-card block h-full p-6">
                <p className="font-display text-lg">{service.title}</p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {service.description}
                </p>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="border-t border-border">
        <div className="mx-auto max-w-6xl px-5 py-24 md:px-8">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="eyebrow">Selected work</p>
              <h2 className="mt-3 font-display text-3xl md:text-4xl">Recent projects</h2>
            </div>
            <Link
              to="/portfolio"
              className="link-underline text-sm text-muted-foreground hover:text-foreground"
            >
              View portfolio
            </Link>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {projects.slice(0, 4).map((project, i) => (
              <Reveal key={project.slug} delay={i}>
                <Link
                  to="/portfolio/$slug"
                  params={{ slug: project.slug }}
                  className="group block overflow-hidden rounded-2xl border border-border bg-surface"
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
                    </div>
                    <ArrowUpRight
                      size={18}
                      className="mt-1 shrink-0 text-muted-foreground transition-all group-hover:-translate-y-0.5 group-hover:text-primary"
                    />
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-surface/40">
        <div className="mx-auto max-w-6xl px-5 py-24 text-center md:px-8">
          <Reveal>
            <p className="eyebrow">Next step</p>
            <h2 className="mx-auto mt-4 max-w-2xl font-display text-3xl uppercase leading-tight md:text-5xl">
              Let&apos;s create something amazing
            </h2>
            <p className="mx-auto mt-5 max-w-lg text-muted-foreground">
              Have an idea or project in mind? Let&apos;s work together and bring your vision to life.
            </p>
            <Link
              to="/contact"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Start a conversation
              <ArrowRight size={16} />
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
