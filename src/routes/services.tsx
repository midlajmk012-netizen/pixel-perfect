import { createFileRoute, Link } from "@tanstack/react-router";
import { AnimatePresence, motion } from "motion/react";
import {
  Clapperboard,
  GraduationCap,
  Hexagon,
  LayoutDashboard,
  Monitor,
  PenTool,
  Plus,
  Share2,
  Waves,
  type LucideIcon,
} from "lucide-react";
import { useState } from "react";
import { services } from "@/data/portfolio";
import { PageHeader } from "@/components/site/PageHeader";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Muhammed Midlaj KK" },
      {
        name: "description",
        content:
          "Graphic design, video editing, motion graphics, brand identity, UI/UX, web design, social media design and IT training.",
      },
      { property: "og:title", content: "Services — Muhammed Midlaj KK" },
      {
        property: "og:description",
        content: "Design, motion and video services for brands, creators and teams.",
      },
    ],
  }),
  component: Services,
});

const icons: Record<string, LucideIcon> = {
  PenTool,
  Clapperboard,
  Waves,
  Hexagon,
  LayoutDashboard,
  Monitor,
  Share2,
  GraduationCap,
};

function Services() {
  const [open, setOpen] = useState<string | null>(null);

  return (
    <>
      <PageHeader
        eyebrow="Services"
        title="Design, motion and video — end to end"
        description="From a single poster to a full identity system with matching motion and social kits. Pick what you need, or bring the whole project."
      />

      <section className="mx-auto max-w-6xl px-5 py-20 md:px-8">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => {
            const Icon = icons[service.icon] ?? PenTool;
            const isOpen = open === service.slug;
            return (
              <Reveal key={service.slug} delay={i % 3}>
                <div className="surface-card flex h-full flex-col p-6">
                  <Icon size={22} className="text-primary" />
                  <h2 className="mt-5 font-display text-xl">{service.title}</h2>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {service.description}
                  </p>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.ul
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden text-sm text-muted-foreground"
                      >
                        {service.details.map((d) => (
                          <li key={d} className="mt-2 flex gap-2">
                            <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary" />
                            {d}
                          </li>
                        ))}
                      </motion.ul>
                    )}
                  </AnimatePresence>

                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : service.slug)}
                    aria-expanded={isOpen}
                    className="mt-6 inline-flex w-fit items-center gap-2 text-sm text-foreground"
                  >
                    <span className="link-underline">{isOpen ? "Show less" : "Learn more"}</span>
                    <Plus
                      size={14}
                      className={`text-primary transition-transform duration-300 ${isOpen ? "rotate-45" : ""}`}
                    />
                  </button>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal>
          <div className="mt-14 flex flex-wrap items-center justify-between gap-6 rounded-3xl border border-border bg-surface p-8">
            <div>
              <h2 className="font-display text-2xl">Not sure which one you need?</h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Tell me about the project and I&apos;ll suggest the right scope.
              </p>
            </div>
            <Link
              to="/contact"
              className="rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Get in touch
            </Link>
          </div>
        </Reveal>
      </section>
    </>
  );
}
