import type { CSSProperties } from "react";
import { Car } from "@/components/Car";
import { TykarkoLogo, TykarkoMark } from "@/components/Logo";
import { Nav } from "@/components/Nav";
import { ReserveForm } from "@/components/ReserveForm";
import { RevealOnScroll } from "@/components/RevealOnScroll";

type Panel = {
  id: string;
  title: string;
  subtitle: string;
  bg: [string, string];
  car: string;
  dark?: boolean;
  primary: { label: string; href: string };
  secondary: { label: string; href: string };
  extra?: "pin" | "road";
};

const PANELS: Panel[] = [
  {
    id: "one",
    title: "Tykarko One",
    subtitle: "Fully Autonomous. No steering wheel required.",
    bg: ["#cfd6de", "#7c8794"],
    car: "#f4f5f7",
    primary: { label: "Reserve Now", href: "#reserve" },
    secondary: { label: "Watch the Demo", href: "#autonomy" },
  },
  {
    id: "pickup",
    title: "AI Pickup",
    subtitle: "Tap once. Your Tykarko finds you, wherever you are.",
    bg: ["#1b2a3d", "#0b1220"],
    car: "#1d1f24",
    dark: true,
    extra: "pin",
    primary: { label: "Reserve Now", href: "#reserve" },
    secondary: { label: "Learn More", href: "#features" },
  },
  {
    id: "doors",
    title: "Smart Doors",
    subtitle: "Recognizes you on approach and opens the door for you.",
    bg: ["#e9e4dc", "#a99e8e"],
    car: "#8c1c24",
    primary: { label: "Reserve Now", href: "#reserve" },
    secondary: { label: "Learn More", href: "#features" },
  },
  {
    id: "autonomy",
    title: "Full Autonomy",
    subtitle: "Door to door, end to end. It handles the driving.",
    bg: ["#2b2f36", "#0d0f12"],
    car: "#2f6fd6",
    dark: true,
    extra: "road",
    primary: { label: "Experience Autonomy", href: "#reserve" },
    secondary: { label: "Safety Report", href: "#features" },
  },
];

const FEATURES = [
  ["AI Pickup", "Summon from the app or by voice. It plans the route, parks, and waits at the curb."],
  ["Door Opening", "Face and phone recognition open the right door as you walk up, then close it once you're seated."],
  ["Autonomous Driving", "360° cameras, radar, and an onboard AI computer handle highways, city streets, and parking."],
  ["Self-Parking & Charging", "Drops you off, finds a spot, and plugs itself in when the battery runs low."],
  ["Cabin Assistant", "Sets climate, seats, and music to your profile. Just ask it to change anything."],
  ["Over-the-Air Updates", "New features and better driving arrive overnight, while it's parked."],
];

const STATS = [
  ["0", "Hands on the wheel"],
  ["360°", "Sensor coverage"],
  ["24/7", "On-demand pickup"],
];

function bg([top, bottom]: [string, string]) {
  return { "--bg-top": top, "--bg-bottom": bottom } as CSSProperties;
}

export default function Home() {
  return (
    <>
      <Nav />
      <RevealOnScroll />

      <main id="top">
        {PANELS.map((p, i) => {
          const Heading = i === 0 ? "h1" : "h2";
          return (
            <section key={p.id} id={p.id} className="panel" style={bg(p.bg)} data-dark={p.dark || undefined}>
              <div className="panel-text">
                <Heading>{p.title}</Heading>
                <p>{p.subtitle}</p>
              </div>
              {p.extra === "pin" && (
                <div className="pin" aria-hidden="true">
                  <span />
                </div>
              )}
              {p.extra === "road" && <div className="road" aria-hidden="true" />}
              <Car color={p.car} className={p.extra === "pin" ? "car car-drive" : "car"} />
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
          <h2>Built to drive itself. Designed around you.</h2>
          <div className="grid">
            {FEATURES.map(([title, body]) => (
              <article key={title}>
                <h3>{title}</h3>
                <p>{body}</p>
              </article>
            ))}
          </div>
          <dl className="stats">
            {STATS.map(([value, label]) => (
              <div key={label}>
                <dt>{value}</dt>
                <dd>{label}</dd>
              </div>
            ))}
          </dl>
        </section>

        <section className="panel reserve" id="reserve" style={bg(["#f4f4f4", "#d9d9d9"])}>
          <TykarkoLogo className="reserve-logo" title="Tykarko" />
          <div className="panel-text">
            <h2>Reserve Your Tykarko</h2>
            <p>Be first in line when autonomous pickup comes to your city.</p>
          </div>
          <ReserveForm />
        </section>
      </main>

      <footer className="footer" id="support">
        <TykarkoMark className="footer-mark" />
        <span>Tykarko &copy; {new Date().getFullYear()}</span>
        <a href="#">Privacy &amp; Legal</a>
        <a href="#">Contact</a>
        <a href="#">Careers</a>
        <a href="#">Locations</a>
      </footer>
    </>
  );
}
