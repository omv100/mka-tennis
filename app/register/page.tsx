"use client";

import { FormEvent, useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

type Event = {
  id: string;
  title: string;
  description: string | null;
  event_date: string;
  location: string | null;
  capacity: number | null;
};

export default function RegisterPage() {
  const [event, setEvent] = useState<Event | null>(null);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [message, setMessage] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    age: "",
    skill_level: "",
  });

  useEffect(() => {
    async function loadEvent() {
      const { data, error } = await supabase
        .from("events")
        .select("*")
        .order("event_date", { ascending: true })
        .limit(1);

      console.log("EVENT DATA:", data);
      console.log("EVENT ERROR:", error);

      if (error) {
        setMessage("Unable to load the event.");
      } else if (!data || data.length === 0) {
        setMessage("No upcoming event found.");
      } else {
        setEvent(data[0]);
      }

      setLoading(false);
    }

    loadEvent();
  }, []);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!event) {
      setMessage("No event available for registration.");
      return;
    }

    setSubmitting(true);
    setMessage("");

    const { error } = await supabase.from("registrations").insert({
      event_id: event.id,
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      age: Number(formData.age),
      skill_level: formData.skill_level,
    });

    if (error) {
      console.error("REGISTRATION ERROR:", error);
      setMessage("Something went wrong. Please try again.");
    } else {
      setMessage("Registration successful!");

      setFormData({
        name: "",
        email: "",
        phone: "",
        age: "",
        skill_level: "",
      });
    }

    setSubmitting(false);
  }

  if (loading) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-slate-50">
        <p className="text-lg text-slate-700">Loading event...</p>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-slate-50 px-6 py-16">
      <div className="mx-auto max-w-3xl">
        <a
          href="/"
          className="text-sm font-semibold text-green-700 hover:text-green-800"
        >
          ← Back to MKA Tennis
        </a>

        <div className="mt-8 rounded-3xl bg-white p-8 shadow-sm">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-green-700">
            Tournament Registration
          </p>

          <h1 className="mt-3 text-4xl font-bold text-slate-900">
            {event?.title || "MKA Tennis Event"}
          </h1>

          {event && (
            <div className="mt-5 space-y-2 text-slate-600">
              {event.description && <p>{event.description}</p>}

              <p>
                <strong>Date:</strong> {event.event_date}
              </p>

              <p>
                <strong>Location:</strong> {event.location || "TBD"}
              </p>

              <p>
                <strong>Capacity:</strong> {event.capacity ?? "TBD"}
              </p>
            </div>
          )}

          {!event && (
            <p className="mt-6 rounded-xl bg-red-50 p-4 text-red-700">
              {message || "No event is currently available."}
            </p>
          )}

          {event && (
            <form onSubmit={handleSubmit} className="mt-10 space-y-6">
              <div>
                <label className="mb-2 block text-sm font-semibold">
                  Full Name
                </label>

                <input
                  required
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-green-700"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold">
                  Email
                </label>

                <input
                  required
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-green-700"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold">
                  Phone
                </label>

                <input
                  required
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-green-700"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold">
                  Age
                </label>

                <input
                  required
                  type="number"
                  name="age"
                  min="5"
                  max="100"
                  value={formData.age}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-green-700"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold">
                  Skill Level
                </label>

                <select
                  required
                  name="skill_level"
                  value={formData.skill_level}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-green-700"
                >
                  <option value="">Select your level</option>
                  <option value="Beginner">Beginner</option>
                  <option value="Intermediate">Intermediate</option>
                  <option value="Advanced">Advanced</option>
                  <option value="Competitive">Competitive</option>
                </select>
              </div>

              <button
                disabled={submitting}
                type="submit"
                className="w-full rounded-xl bg-green-700 px-6 py-3.5 font-semibold text-white transition hover:bg-green-800 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {submitting ? "Submitting..." : "Register"}
              </button>

              {message && (
                <p className="text-center font-medium text-slate-700">
                  {message}
                </p>
              )}
            </form>
          )}
        </div>
      </div>
    </main>
  );
}