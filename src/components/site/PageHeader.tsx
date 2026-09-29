import { RevealWords } from "./Reveal";

export function PageHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <section className="hero-aurora border-b border-border">
      <div className="mx-auto max-w-6xl px-5 pt-32 pb-16 md:px-8 md:pt-40 md:pb-24">
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="mt-4 max-w-3xl font-display text-4xl leading-[1.05] md:text-6xl">
          <RevealWords text={title} />
        </h1>
        {description && (
          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground">
            {description}
          </p>
        )}
      </div>
    </section>
  );
}
