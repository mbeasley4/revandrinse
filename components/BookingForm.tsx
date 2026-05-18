"use client";
import { useState } from "react";

const SERVICE_OPTIONS = [
  "Exterior Wash",
  "Interior Detail",
  "Steam Cleaning",
  "Clay Bar Treatment",
  "Carpet Shampooing",
  "Full Detail Package",
];

export default function BookingForm() {
  const [form, setForm] = useState({ name: "", phone: "", service: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    // TODO: wire to Twilio / email API
    console.log(form);
    setSubmitted(true);
  };

  return (
    <section
      id="booking"
      className="py-20 text-center"
      style={{
        background:
          "linear-gradient(180deg, #09090b 0%, #0d0015 50%, #09090b 100%)",
      }}
    >
      <p
        className="text-purple-400 text-sm tracking-[0.35em] uppercase mb-2"
        style={{ fontFamily: "var(--font-oswald)" }}
      >
        Get Started
      </p>
      <h2
        className="text-[clamp(2.5rem,8vw,5rem)] text-white leading-none mb-3"
        style={{ fontFamily: "var(--font-bebas)", letterSpacing: "0.05em" }}
      >
        Book Now
      </h2>
      <p
        className="text-white/40 text-sm mb-10 tracking-wide"
        style={{ fontFamily: "var(--font-oswald)" }}
      >
        The easiest way to book&nbsp;&mdash;&nbsp;text us at&nbsp;
        <a href="sms:+15134322052" className="text-purple-400 hover:text-purple-300 transition-colors font-semibold">
          (513) 432-2052
        </a>
      </p>

      {submitted ? (
        <div
          className="max-w-md mx-auto px-4 py-10 rounded-xl text-center"
          style={{ border: "1px solid rgba(109,40,217,0.4)", background: "rgba(109,40,217,0.08)" }}
        >
          <p
            className="text-4xl text-purple-300 mb-2"
            style={{ fontFamily: "var(--font-bebas)", letterSpacing: "0.1em" }}
          >
            Request Sent!
          </p>
          <p className="text-white/50 text-sm" style={{ fontFamily: "var(--font-oswald)" }}>
            We&apos;ll be in touch shortly to confirm your appointment.
          </p>
        </div>
      ) : (
        <form
          onSubmit={handleSubmit}
          className="max-w-md mx-auto px-4 space-y-4"
        >
          <input
            required
            placeholder="Your Name"
            value={form.name}
            className="input-purple w-full p-4 rounded-lg text-sm"
            style={{ fontFamily: "var(--font-oswald)" }}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />
          <input
            required
            type="tel"
            placeholder="Phone Number"
            value={form.phone}
            className="input-purple w-full p-4 rounded-lg text-sm"
            style={{ fontFamily: "var(--font-oswald)" }}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
          />
          <select
            required
            value={form.service}
            className="input-purple w-full p-4 rounded-lg text-sm"
            style={{ fontFamily: "var(--font-oswald)" }}
            onChange={(e) => setForm({ ...form, service: e.target.value })}
          >
            <option value="" disabled>
              Select a Service
            </option>
            {SERVICE_OPTIONS.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>

          <button
            type="submit"
            className="btn-glow w-full py-4 rounded-lg font-semibold tracking-widest uppercase text-sm text-white"
            style={{
              fontFamily: "var(--font-oswald)",
              background: "linear-gradient(135deg, #6d28d9, #7c3aed)",
            }}
          >
            Send Us a Message
          </button>
        </form>
      )}
    </section>
  );
}
