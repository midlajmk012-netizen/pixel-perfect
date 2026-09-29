import { createFileRoute } from "@tanstack/react-router";
import { Mail, MessageCircle } from "lucide-react";
import { useState } from "react";
import { profile } from "@/data/portfolio";
import { PageHeader } from "@/components/site/PageHeader";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Muhammed Midlaj KK" },
      {
        name: "description",
        content:
          "Have an idea or project in mind? Get in touch with designer and video editor Muhammed Midlaj KK.",
      },
      { property: "og:title", content: "Contact — Muhammed Midlaj KK" },
      {
        property: "og:description",
        content: "Start a project conversation with Muhammed Midlaj KK.",
      },
    ],
  }),
  component: Contact,
});

type Fields = { name: string; email: string; subject: string; message: string };
type Errors = Partial<Record<keyof Fields, string>>;

function Contact() {
  const [values, setValues] = useState<Fields>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState<Errors>({});
  const [opened, setOpened] = useState(false);

  const update = (key: keyof Fields) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setValues((v) => ({ ...v, [key]: e.target.value }));
    setErrors((prev) => ({ ...prev, [key]: undefined }));
  };

  const validate = () => {
    const next: Errors = {};
    if (values.name.trim().length < 2) next.name = "Please enter your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) next.email = "Enter a valid email address.";
    if (values.subject.trim().length < 3) next.subject = "Add a short subject.";
    if (values.message.trim().length < 10) next.message = "Tell me a little more (10+ characters).";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    const body = `${values.message}\n\n— ${values.name} (${values.email})`;
    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(values.subject)}&body=${encodeURIComponent(body)}`;
    setOpened(true);
  };

  const field =
    "w-full rounded-xl border border-border bg-surface px-4 py-3 text-sm text-foreground outline-none transition-all placeholder:text-muted-foreground/70 focus:border-primary/70 focus:ring-2 focus:ring-primary/25";

  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Let's create something amazing"
        description="Have an idea or project in mind? Let's work together and bring your vision to life."
      />

      <section className="mx-auto max-w-6xl px-5 py-20 md:px-8">
        <div className="grid gap-12 md:grid-cols-[1.2fr_0.8fr]">
          <Reveal>
            <form onSubmit={onSubmit} noValidate className="space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="eyebrow">
                    Name
                  </label>
                  <input
                    id="name"
                    className={`mt-2 ${field}`}
                    value={values.name}
                    onChange={update("name")}
                    placeholder="Your name"
                  />
                  {errors.name && <p className="mt-2 text-xs text-destructive">{errors.name}</p>}
                </div>
                <div>
                  <label htmlFor="email" className="eyebrow">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    className={`mt-2 ${field}`}
                    value={values.email}
                    onChange={update("email")}
                    placeholder="you@email.com"
                  />
                  {errors.email && <p className="mt-2 text-xs text-destructive">{errors.email}</p>}
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="eyebrow">
                  Subject
                </label>
                <input
                  id="subject"
                  className={`mt-2 ${field}`}
                  value={values.subject}
                  onChange={update("subject")}
                  placeholder="What is it about?"
                />
                {errors.subject && <p className="mt-2 text-xs text-destructive">{errors.subject}</p>}
              </div>

              <div>
                <label htmlFor="message" className="eyebrow">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={6}
                  className={`mt-2 resize-none ${field}`}
                  value={values.message}
                  onChange={update("message")}
                  placeholder="Tell me about your project…"
                />
                {errors.message && <p className="mt-2 text-xs text-destructive">{errors.message}</p>}
              </div>

              <button
                type="submit"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-all hover:bg-primary/90 hover:shadow-[0_18px_40px_-18px_var(--primary)]"
              >
                Open email with this message
              </button>

              {opened && (
                <p className="text-sm text-muted-foreground">
                  Your email app should now be open with the message ready — press send there and
                  it reaches me directly.
                </p>
              )}
              <p className="text-xs text-muted-foreground">
                This form hands the message to your email app. Direct sending from the site can be
                switched on later.
              </p>
            </form>
          </Reveal>

          <Reveal>
            <div className="surface-card space-y-6 p-7">
              <div>
                <p className="eyebrow">Email</p>
                <a
                  href={`mailto:${profile.email}`}
                  className="link-underline mt-2 inline-flex items-center gap-2 text-sm"
                >
                  <Mail size={15} className="text-primary" />
                  {profile.email}
                </a>
              </div>
              <div>
                <p className="eyebrow">WhatsApp</p>
                <p className="mt-2 inline-flex items-center gap-2 text-sm text-muted-foreground">
                  <MessageCircle size={15} className="text-primary" />
                  Share your number and I&apos;ll add the direct link.
                </p>
              </div>
              <div>
                <p className="eyebrow">Elsewhere</p>
                <div className="mt-3 flex flex-col gap-2 text-sm">
                  {profile.socials.map((s) => (
                    <a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="link-underline w-fit text-muted-foreground hover:text-foreground"
                    >
                      {s.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
