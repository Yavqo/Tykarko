const nav = document.getElementById("nav");
const drawer = document.getElementById("drawer");
const scrim = document.getElementById("scrim");
const menuBtn = document.getElementById("menuBtn");
const panels = document.querySelectorAll(".panel");

// Fade panel content in as it scrolls into view
const revealObserver = new IntersectionObserver(
  (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("in-view")),
  { threshold: 0.35 }
);
panels.forEach((p) => revealObserver.observe(p));

// Switch nav text to white over dark panels
function updateNavTheme() {
  const probe = nav.offsetHeight / 2;
  const current = [...panels].find((p) => {
    const r = p.getBoundingClientRect();
    return r.top <= probe && r.bottom > probe;
  });
  nav.classList.toggle("on-dark", Boolean(current && current.hasAttribute("data-dark")));
}
window.addEventListener("scroll", updateNavTheme, { passive: true });
updateNavTheme();

// Side drawer
function setDrawer(open) {
  drawer.classList.toggle("open", open);
  scrim.classList.toggle("open", open);
  drawer.setAttribute("aria-hidden", String(!open));
  menuBtn.setAttribute("aria-expanded", String(open));
}
menuBtn.addEventListener("click", () => setDrawer(true));
document.getElementById("drawerClose").addEventListener("click", () => setDrawer(false));
scrim.addEventListener("click", () => setDrawer(false));
drawer.querySelectorAll("a").forEach((a) => a.addEventListener("click", () => setDrawer(false)));
document.addEventListener("keydown", (e) => e.key === "Escape" && setDrawer(false));

// Waitlist form (no backend yet)
document.getElementById("reserveForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const email = document.getElementById("email");
  document.getElementById("formMsg").textContent = `Thanks! We'll email ${email.value} when Tykarko arrives in your city.`;
  e.target.reset();
});

document.getElementById("year").textContent = new Date().getFullYear();
