"use client";

import Link from "next/link";
import { useState, type FormEvent } from "react";

// No backend yet: confirms locally and clears the field.
export function ReserveForm() {
  const [message, setMessage] = useState("");

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const email = new FormData(e.currentTarget).get("email");
    setMessage(`Thanks! We'll email ${email} when Tykarko arrives in your city.`);
    e.currentTarget.reset();
  }

  return (
    <>
      <form className="reserve-form" onSubmit={onSubmit}>
        <label className="sr-only" htmlFor="email">
          Email
        </label>
        <input id="email" name="email" type="email" placeholder="Email address" required />
        <button className="btn btn-primary" type="submit">
          Join the Waitlist
        </button>
      </form>
      <p className="form-consent">
        By joining, you agree to our <Link href="/legal/terms">Terms</Link> and{" "}
        <Link href="/legal/privacy">Privacy Policy</Link>.
      </p>
      <p className="form-msg" role="status">
        {message}
      </p>
    </>
  );
}
