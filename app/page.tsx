import { Fragment, type CSSProperties, type ReactNode } from "react";
import { Car } from "@/components/Car";
import { Footer } from "@/components/Footer";
import { TykarkoLogo, TykarkoMark, TykarkoWordmark } from "@/components/Logo";
import { Nav } from "@/components/Nav";
import { ReserveForm } from "@/components/ReserveForm";
import { ScrollEffects } from "@/components/ScrollEffects";
import { SectionDots } from "@/components/SectionDots";

type Panel = {
  id: string;
  title: string;
  subtitle: string;
  bg: [string, string];
  car: string;
  carClass?: string;
  dark?: boolean;
  door?: boolean;
  lights?: boolean;
  extras?: ("pin" | "route" | "road" | "scan")[];
  primary: { label: string; href: string };
  secondary: { label: string; href: string };
};

const PANELS: Panel[] = [
  {
    id: "one",
    title: "Tykarko One",
    subtitle: "Fully Autonomous. No steering wheel required.",
    bg: ["#cfd6de", "#7c8794"],
    car: "#f4f5f7",
    primary: { label: "Reserve Now", href: "#reserve" },
    secondary: { label: "Explore Features", href: "#features" },
  },
  {
    id: "pickup",
    title: "AI Pickup",
    subtitle: "Tap once. Your Tykarko finds you, wherever you are.",
    bg: ["#1b2a3d", "#0b1220"],
    car: "#1d1f24",
    carClass: "car-drive",
    dark: true,
    extras: ["route", "pin"],
    primary: { label: "Reserve Now", href: "#reserve" },
    secondary: { label: "Learn More", href: "#features" },
  },
  {
    id: "doors",
    title: "Smart Doors",
    subtitle: "Recognizes you on approach and opens the door for you.",
    bg: ["#e9e4dc", "#a99e8e"],
    car: "#8c1c24",
    door: true,
    primary: { label: "Reserve Now", href: "#reserve" },
    secondary: { label: "Learn More", href: "#features" },
  },
  {
    id: "autonomy",
    title: "Full Autonomy",
    subtitle: "Door to door, end to end. It handles the driving.",
    bg: ["#2b2f36", "#0d0f12"],
    car: "#2f6fd6",
    carClass: "car-cruise",
    dark: true,
    lights: true,
    extras: ["scan", "road"],
    primary: { label: "Reserve Now", href: "#reserve" },
    secondary: { label: "Our Approach to Safety", href: "/safety" },
  },
];

const ICON: Record<string, ReactNode> = {
  pin: <path d="M12 21s-7-6.2-7-11.5a7 7 0 0 1 14 0C19 14.8 12 21 12 21zm0-9a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z" />,
  door: <path d="M5 21V5l9-2v18M14 5h5v16M3 21h18M11 12v1" />,
  eye: <path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7S2 12 2 12zm10 3a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />,
  plug: <path d="M9 2v6M15 2v6M6 8h12v3a6 6 0 0 1-12 0zM12 17v5" />,
  chat: <path d="M4 5h16v11H9l-5 4zM8 10h8M8 13h5" />,
  sync: <path d="M20 11a8 8 0 0 0-14.3-4.9L4 8M4 4v4h4M4 13a8 8 0 0 0 14.3 4.9L20 16M20 20v-4h-4" />,
};

const FEATURES = [
  ["pin", "AI Pickup", "Summon from the app or by voice. It plans the route, parks, and waits at the curb."],
  ["door", "Door Opening", "Face and phone recognition open the right door as you walk up, then close it once you're seated."],
  ["eye", "Autonomous Driving", "360° cameras, radar, and an onboard AI computer handle highways, city streets, and parking."],
  ["plug", "Self-Parking & Charging", "Drops you off, finds a spot, and plugs itself in when the battery runs low."],
  ["chat", "Cabin Assistant", "Sets climate, seats, and music to your profile. Just ask it to change anything."],
  ["sync", "Over-the-Air Updates", "New features and better driving arrive overnight, while it's parked."],
];

// Rendered with final values; ScrollEffects counts from `from` to `to` when visible
const STATS = [
  { from: 10, to: 0, suffix: "", label: "Hands on the wheel" },
  { from: 0, to: 360, suffix: "°", label: "Sensor coverage" },
  { from: 0, to: 24, suffix: "/7", label: "On-demand pickup" },
];

const SECTIONS = [
  ...PANELS.map((p) => ({ id: p.id, label: p.title })),
  { id: "features", label: "Features" },
  { id: "reserve", label: "Reserve" },
];

const vars = (v: Record<string, string | number>) => v as CSSProperties;

/** Splits a heading into masked words that slide up one after another. */
function Words({ text }: { text: string }) {
  return text.split(" ").map((word, i) => (
    <Fragment key={i}>
      {i > 0 && " "}
      <span className="word" aria-hidden="true">
        <span style={vars({ "--i": i })}>{word}</span>
      </span>
    </Fragment>
  ));
}

export default function Home() {
  return (
    <>
      <div className="intro" aria-hidden="true">
        <TykarkoMark className="intro-mark" />
        <TykarkoWordmark className="intro-word" />
      </div>
      <div className="progress" aria-hidden="true" />
      <Nav />
      <SectionDots sections={SECTIONS} />
      <ScrollEffects />

      <main id="top">
        {PANELS.map((p, i) => {
          const Heading = i === 0 ? "h1" : "h2";
          return (
            <section
              key={p.id}
              id={p.id}
              className="panel"
              style={vars({ "--bg-top": p.bg[0], "--bg-bottom": p.bg[1] })}
              data-dark={p.dark || undefined}
            >
              <div className="panel-text">
                <Heading aria-label={p.title}>
                  <Words text={p.title} />
                </Heading>
                <p>{p.subtitle}</p>
              </div>
              {p.extras?.includes("scan") && <div className="scan" aria-hidden="true" />}
              {p.extras?.includes("road") && <div className="road" aria-hidden="true" />}
              {p.extras?.includes("route") && <div className="route" aria-hidden="true" />}
              {p.extras?.includes("pin") && (
                <div className="pin" aria-hidden="true">
                  <span />
                </div>
              )}
              <div className="car-wrap">
                <Car color={p.car} className={`car ${p.carClass ?? ""}`} door={p.door} lights={p.lights} />
              </div>
              <div className="ctas">
                <a className="btn btn-primary" href={p.primary.href}>
                  {p.primary.label}
                </a>
                <a className="btn btn-secondary" href={p.secondary.href}>
                  {p.secondary.label}
                </a>
              </div>
            </section>
          );
        })}

        <section className="features" id="features">
          <h2 className="reveal">Built to drive itself. Designed around you.</h2>
          <div className="grid">
            {FEATURES.map(([icon, title, body], i) => (
              <article key={title} className="reveal tilt" style={vars({ "--i": i })}>
                <svg className="feature-icon" viewBox="0 0 24 24" aria-hidden="true">
                  {ICON[icon]}
                </svg>
                <h3>{title}</h3>
                <p>{body}</p>
              </article>
            ))}
          </div>
          <dl className="stats reveal">
            {STATS.map((s) => (
              <div key={s.label}>
                <dt data-from={s.from} data-to={s.to} data-suffix={s.suffix}>
                  {s.to}
                  {s.suffix}
                </dt>
                <dd>{s.label}</dd>
              </div>
            ))}
          </dl>
        </section>

        <section className="panel reserve" id="reserve" style={vars({ "--bg-top": "#f4f4f4", "--bg-bottom": "#d9d9d9" })}>
          <TykarkoLogo className="reserve-logo" title="Tykarko" />
          <div className="panel-text">
            <h2 aria-label="Reserve Your Tykarko">
              <Words text="Reserve Your Tykarko" />
            </h2>
            <p>Be first in line when autonomous pickup comes to your city.</p>
          </div>
          <ReserveForm />
        </section>
      </main>

      <Footer />
    </>
  );
}
