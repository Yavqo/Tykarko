import { Footer } from "./Footer";
import { Nav } from "./Nav";

/** Nav + footer around a standalone content page (Support, Safety). */
export function PageShell({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Nav />
      <main className="page">{children}</main>
      <Footer />
    </>
  );
}
