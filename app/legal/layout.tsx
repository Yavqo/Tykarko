import { Footer } from "@/components/Footer";
import { LegalNav } from "@/components/LegalNav";
import { Nav } from "@/components/Nav";

export default function LegalLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Nav />
      <div className="legal">
        <aside className="legal-aside">
          <p className="legal-eyebrow">Legal</p>
          <LegalNav />
        </aside>
        <main className="legal-main">{children}</main>
      </div>
      <Footer />
    </>
  );
}
