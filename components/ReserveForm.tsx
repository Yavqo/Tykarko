"use client";

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
      <p className="form-msg" role="status">
        {message}
      </p>
    </>
  );
}
