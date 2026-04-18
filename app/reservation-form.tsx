"use client";

import { ValidationError, useForm } from "@formspree/react";
import { useMemo, useState } from "react";

/** Field names submitted to Formspree — keep in sync with each input `name`. */
type ReservationFields = {
  name: string;
  date: string;
  time: string;
  guests: string;
};

const FORMSPREE_FORM_KEY = "xqewqjek";

export function ReservationForm() {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState("2");

  const extraData = useMemo(
    () => ({
      _subject: () =>
        `Bella Vita reservation — ${name} (${guests} guests, ${date} ${time})`,
    }),
    [name, date, time, guests],
  );

  const [state, handleSubmit, resetFormspree] = useForm<ReservationFields>(FORMSPREE_FORM_KEY, {
    data: extraData,
  });

  function resetAll() {
    resetFormspree();
    setName("");
    setDate("");
    setTime("");
    setGuests("2");
  }

  if (state.succeeded) {
    return (
      <div className="rounded-2xl border border-stone-200 bg-white p-10 text-center shadow-sm shadow-stone-200/40">
        <p className="font-display text-2xl font-semibold text-stone-900">Grazie, {name.split(" ")[0] || "friend"}</p>
        <p className="mt-3 text-stone-600">
          We have received your request for {guests} guest{guests === "1" ? "" : "s"} on{" "}
          <span className="font-medium text-stone-800">{date}</span> at{" "}
          <span className="font-medium text-stone-800">{time}</span>. We will confirm by phone shortly.
        </p>
        <button
          type="button"
          onClick={resetAll}
          className="mt-8 rounded-full border border-stone-300 bg-white px-6 py-2.5 text-sm font-semibold text-stone-800 transition hover:border-amber-700 hover:text-amber-900"
        >
          Book another table
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl border border-stone-100 bg-stone-50/80 p-8 shadow-sm shadow-stone-200/40 sm:p-10"
    >
      <div className="grid gap-6 sm:grid-cols-2">
        <div className="sm:col-span-2">
          <label htmlFor="res-name" className="block text-xs font-semibold uppercase tracking-wider text-stone-500">
            Full name
          </label>
          <input
            id="res-name"
            name="name"
            type="text"
            autoComplete="name"
            required
            disabled={state.submitting}
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="e.g. Sofia Romano"
            className="mt-2 w-full rounded-xl border border-stone-200 bg-white px-4 py-3 text-stone-900 shadow-inner shadow-stone-100/50 outline-none transition placeholder:text-stone-400 focus:border-amber-700/60 focus:ring-2 focus:ring-amber-600/25 disabled:opacity-60"
          />
          <ValidationError
            field="name"
            errors={state.errors}
            className="mt-2 text-sm text-red-800"
          />
        </div>
        <div>
          <label htmlFor="res-date" className="block text-xs font-semibold uppercase tracking-wider text-stone-500">
            Date
          </label>
          <input
            id="res-date"
            name="date"
            type="date"
            required
            disabled={state.submitting}
            min={new Date().toISOString().split("T")[0]}
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="mt-2 w-full rounded-xl border border-stone-200 bg-white px-4 py-3 text-stone-900 shadow-inner shadow-stone-100/50 outline-none transition focus:border-amber-700/60 focus:ring-2 focus:ring-amber-600/25 disabled:opacity-60"
          />
          <ValidationError
            field="date"
            errors={state.errors}
            className="mt-2 text-sm text-red-800"
          />
        </div>
        <div>
          <label htmlFor="res-time" className="block text-xs font-semibold uppercase tracking-wider text-stone-500">
            Time
          </label>
          <input
            id="res-time"
            name="time"
            type="time"
            required
            disabled={state.submitting}
            value={time}
            onChange={(e) => setTime(e.target.value)}
            className="mt-2 w-full rounded-xl border border-stone-200 bg-white px-4 py-3 text-stone-900 shadow-inner shadow-stone-100/50 outline-none transition focus:border-amber-700/60 focus:ring-2 focus:ring-amber-600/25 disabled:opacity-60"
          />
          <ValidationError
            field="time"
            errors={state.errors}
            className="mt-2 text-sm text-red-800"
          />
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="res-guests" className="block text-xs font-semibold uppercase tracking-wider text-stone-500">
            Number of guests
          </label>
          <select
            id="res-guests"
            name="guests"
            required
            disabled={state.submitting}
            value={guests}
            onChange={(e) => setGuests(e.target.value)}
            className="mt-2 w-full rounded-xl border border-stone-200 bg-white px-4 py-3 text-stone-900 shadow-inner shadow-stone-100/50 outline-none transition focus:border-amber-700/60 focus:ring-2 focus:ring-amber-600/25 disabled:opacity-60 sm:max-w-xs"
          >
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((n) => (
              <option key={n} value={String(n)}>
                {n} {n === 1 ? "guest" : "guests"}
              </option>
            ))}
            <option value="13+">13 or more — please call</option>
          </select>
          <ValidationError
            field="guests"
            errors={state.errors}
            className="mt-2 text-sm text-red-800"
          />
        </div>
      </div>
      <ValidationError errors={state.errors} className="mt-6 text-sm text-red-800" />
      <div className="mt-8 flex flex-col items-stretch gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-stone-500">Same-day bookings subject to availability.</p>
        <button
          type="submit"
          disabled={state.submitting}
          aria-busy={state.submitting}
          className="inline-flex min-h-[48px] items-center justify-center rounded-full bg-amber-500 px-10 py-3 text-sm font-semibold text-stone-950 shadow-lg shadow-amber-900/15 transition hover:bg-amber-400 enabled:cursor-pointer disabled:cursor-wait disabled:opacity-80 sm:shrink-0"
        >
          {state.submitting ? "Sending…" : "Request a table"}
        </button>
      </div>
    </form>
  );
}
