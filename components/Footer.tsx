import Link from "next/link";
import { TykarkoMark } from "./Logo";

export function Footer() {
  return (
    <footer className="footer" id="support">
      <TykarkoMark className="footer-mark" />
      <span>Tykarko &copy; {new Date().getFullYear()}</span>
      <Link href="/legal">Legal</Link>
      <Link href="/legal/privacy">Privacy</Link>
      <Link href="/legal/terms">Terms</Link>
      <Link href="/legal/cookies">Cookies</Link>
      <Link href="/legal/vehicle-disclaimer">Vehicle Disclaimer</Link>
    </footer>
  );
}
