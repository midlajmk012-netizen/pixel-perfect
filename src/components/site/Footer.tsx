import { Link } from "@tanstack/react-router";
import { Mail } from "lucide-react";
import { profile } from "@/data/portfolio";

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface/40">
      <div className="mx-auto max-w-6xl px-5 py-14 md:px-8">
        <div className="flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="eyebrow">Available for work</p>
            <h2 className="mt-3 max-w-md font-display text-3xl leading-tight md:text-4xl">
              Let&apos;s create something amazing.
            </h2>
            <a
              href={`mailto:${profile.email}`}
              className="link-underline mt-5 inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
            >
              <Mail size={15} />
              {profile.email}
            </a>
          </div>

          <div className="flex flex-col gap-3 text-sm">
            <Link to="/portfolio" className="link-underline w-fit text-muted-foreground hover:text-foreground">
              Portfolio
            </Link>
            <Link to="/services" className="link-underline w-fit text-muted-foreground hover:text-foreground">
              Services
            </Link>
            <Link to="/contact" className="link-underline w-fit text-muted-foreground hover:text-foreground">
              Contact
            </Link>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {profile.name}
          </p>
          <div className="flex gap-5">
            {profile.socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer noopener"
                className="link-underline hover:text-foreground"
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
