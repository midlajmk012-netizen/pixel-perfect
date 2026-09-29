import workBranding from "@/assets/work-branding.jpg";
import workMotion from "@/assets/work-motion.jpg";
import workUiux from "@/assets/work-uiux.jpg";
import workVideo from "@/assets/work-video.jpg";

export const profile = {
  name: "Muhammed Midlaj KK",
  shortName: "Midlaj",
  role: "Graphic Designer & Video Editor",
  tagline: "Designing meaningful digital experiences through creativity, design, and innovation.",
  headline: "Creative minds create extraordinary experiences",
  email: "muhammedmidlaj032@gmail.com",
  intro:
    "I craft brand identities, motion graphics and digital interfaces with a focus on clarity, rhythm and detail. Every project starts with a question: what should this make people feel?",
  socials: [
    { label: "Instagram", href: "https://instagram.com" },
    { label: "Behance", href: "https://behance.net" },
    { label: "LinkedIn", href: "https://linkedin.com" },
  ],
};

export type Service = {
  slug: string;
  title: string;
  icon: string;
  description: string;
  details: string[];
};

export const services: Service[] = [
  {
    slug: "graphic-design",
    title: "Graphic Design",
    icon: "PenTool",
    description: "Posters, print and digital layouts built on a strict typographic system.",
    details: ["Print & digital layout", "Typography systems", "Poster & campaign design"],
  },
  {
    slug: "video-editing",
    title: "Video Editing",
    icon: "Clapperboard",
    description: "Story-led edits with clean pacing, colour grading and sound balance.",
    details: ["Narrative editing", "Colour grading", "Sound balancing"],
  },
  {
    slug: "motion-graphics",
    title: "Motion Graphics",
    icon: "Waves",
    description: "Animated titles, explainers and logo reveals with premium timing.",
    details: ["Logo animation", "Explainer animation", "Kinetic typography"],
  },
  {
    slug: "brand-identity",
    title: "Brand Identity Design",
    icon: "Hexagon",
    description: "Marks, palettes and guidelines that keep a brand consistent everywhere.",
    details: ["Logo & mark design", "Colour & type systems", "Brand guidelines"],
  },
  {
    slug: "ui-ux-design",
    title: "UI/UX Design",
    icon: "LayoutDashboard",
    description: "Interfaces designed around real user flows, then handed off cleanly.",
    details: ["User flows & wireframes", "Design systems", "Prototyping in Figma"],
  },
  {
    slug: "web-design",
    title: "Web Design",
    icon: "Monitor",
    description: "Responsive website design that stays fast, readable and elegant.",
    details: ["Landing pages", "Responsive layouts", "Design-to-code handoff"],
  },
  {
    slug: "social-media-design",
    title: "Social Media Design",
    icon: "Share2",
    description: "Templates and campaign kits that make a feed instantly recognisable.",
    details: ["Post & story templates", "Campaign kits", "Ad creatives"],
  },
  {
    slug: "it-training",
    title: "IT Training",
    icon: "GraduationCap",
    description: "Hands-on sessions in design tools, editing workflows and fundamentals.",
    details: ["Adobe suite training", "Design fundamentals", "Workflow coaching"],
  },
];

export type Project = {
  slug: string;
  title: string;
  category: string;
  year: string;
  summary: string;
  description: string;
  software: string[];
  image: string;
};

export const categories = [
  "All Projects",
  "Graphic Design",
  "Branding",
  "Video Editing",
  "Motion Graphics",
  "Web Design",
] as const;

// Personal concept studies — not client work.
export const projects: Project[] = [
  {
    slug: "lumen-identity",
    title: "Lumen Identity System",
    category: "Branding",
    year: "2025",
    summary: "A monochrome identity with a single electric accent.",
    description:
      "A self-initiated identity study exploring how far one accent colour can carry a brand. The mark is built from a circle and an arc, then applied across stationery, packaging and social templates with a strict spacing grid.",
    software: ["Illustrator", "Photoshop", "Figma"],
    image: workBranding,
  },
  {
    slug: "flux-motion-reel",
    title: "Flux Motion Study",
    category: "Motion Graphics",
    year: "2025",
    summary: "Light-trail transitions and kinetic typography.",
    description:
      "A personal motion exploration built around easing curves and light trails. Each transition was timed to a beat grid so the reel keeps a steady rhythm from first frame to last.",
    software: ["After Effects", "Premiere Pro"],
    image: workMotion,
  },
  {
    slug: "sola-dashboard",
    title: "Sola Dashboard Concept",
    category: "Web Design",
    year: "2024",
    summary: "A dark analytics interface with a calm hierarchy.",
    description:
      "A concept product interface designed around one rule: never more than three levels of emphasis on screen. Built as a reusable Figma design system with tokens for colour, spacing and typography.",
    software: ["Figma", "React", "Tailwind CSS"],
    image: workUiux,
  },
  {
    slug: "nightfall-grade",
    title: "Nightfall Colour Grade",
    category: "Video Editing",
    year: "2024",
    summary: "A cinematic teal-and-blue grade for a short film study.",
    description:
      "An editing and grading exercise on a short night sequence. The cut favours long holds and negative space, with a grade that keeps skin tones readable inside a heavily blue palette.",
    software: ["Premiere Pro", "DaVinci Resolve"],
    image: workVideo,
  },
];

export const skills = [
  { name: "Adobe Photoshop", group: "Design" },
  { name: "Adobe Illustrator", group: "Design" },
  { name: "Figma", group: "Design" },
  { name: "UI/UX Design", group: "Design" },
  { name: "Adobe Premiere Pro", group: "Motion & Video" },
  { name: "Adobe After Effects", group: "Motion & Video" },
  { name: "Blender", group: "Motion & Video" },
  { name: "HTML", group: "Development" },
  { name: "CSS", group: "Development" },
  { name: "JavaScript", group: "Development" },
  { name: "React", group: "Development" },
];

export type TimelineItem = {
  period: string;
  title: string;
  place: string;
  kind: "Experience" | "Education" | "Certification";
  description: string;
};

export const timeline: TimelineItem[] = [
  {
    period: "2024 — Present",
    title: "Freelance Designer & Video Editor",
    place: "Independent",
    kind: "Experience",
    description:
      "Working directly with small brands and creators on identity, social campaigns and edited video content.",
  },
  {
    period: "2023 — 2024",
    title: "Graphic Design & Motion Practice",
    place: "Self-directed studio work",
    kind: "Experience",
    description:
      "Built a daily practice of concept studies across branding, poster design and motion graphics.",
  },
  {
    period: "2023",
    title: "Adobe Creative Suite",
    place: "Photoshop · Illustrator · Premiere Pro · After Effects",
    kind: "Certification",
    description: "Focused training across the core design and post-production toolset.",
  },
  {
    period: "2021 — 2023",
    title: "Studies in Design & IT",
    place: "Kerala, India",
    kind: "Education",
    description: "Foundation in visual communication, digital media and front-end fundamentals.",
  },
];

export const stats = [
  { value: 40, suffix: "+", label: "Projects & studies" },
  { value: 8, suffix: "", label: "Services offered" },
  { value: 4, suffix: "+", label: "Years designing" },
  { value: 11, suffix: "", label: "Tools mastered" },
];
