"use client";

import { type FormEvent, useState } from "react";

const projectTypes = [
  "Digital platform",
  "Business automation",
  "Developer experience",
  "Technical strategy",
];

type ContactFormProps = {
  email: string;
};

export function ContactForm({ email }: ContactFormProps) {
  const [status, setStatus] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const name = String(formData.get("name") ?? "").trim();
    const senderEmail = String(formData.get("email") ?? "").trim();
    const projectType = String(formData.get("projectType") ?? "").trim();
    const timeline = String(formData.get("timeline") ?? "").trim();
    const message = String(formData.get("message") ?? "").trim();

    const subject = encodeURIComponent(`Project inquiry from ${name}`);
    const body = encodeURIComponent(
      [
        `Name: ${name}`,
        `Email: ${senderEmail}`,
        `Project type: ${projectType}`,
        `Timeline: ${timeline || "Not specified"}`,
        "",
        "Project details:",
        message,
      ].join("\n"),
    );

    setStatus("Opening your email app...");
    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="border border-white/10 bg-zinc-950/70 p-5"
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block text-sm font-medium text-zinc-300">
          Name
          <input
            name="name"
            autoComplete="name"
            className="mt-2 w-full border border-white/10 bg-black px-4 py-3 text-white outline-none transition-colors focus:border-[#e4db55]/60"
            required
          />
        </label>

        <label className="block text-sm font-medium text-zinc-300">
          Email
          <input
            name="email"
            type="email"
            autoComplete="email"
            className="mt-2 w-full border border-white/10 bg-black px-4 py-3 text-white outline-none transition-colors focus:border-[#e4db55]/60"
            required
          />
        </label>
      </div>

      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        <label className="block text-sm font-medium text-zinc-300">
          Project type
          <select
            name="projectType"
            className="mt-2 w-full border border-white/10 bg-black px-4 py-3 text-white outline-none transition-colors focus:border-[#e4db55]/60"
            required
            defaultValue=""
          >
            <option value="" disabled>
              Select one
            </option>
            {projectTypes.map((projectType) => (
              <option key={projectType}>{projectType}</option>
            ))}
          </select>
        </label>

        <label className="block text-sm font-medium text-zinc-300">
          Timeline
          <input
            name="timeline"
            placeholder="This month, next quarter..."
            className="mt-2 w-full border border-white/10 bg-black px-4 py-3 text-white outline-none transition-colors focus:border-[#e4db55]/60"
          />
        </label>
      </div>

      <label className="mt-4 block text-sm font-medium text-zinc-300">
        Message
        <textarea
          name="message"
          className="mt-2 min-h-40 w-full resize-y border border-white/10 bg-black px-4 py-3 leading-6 text-white outline-none transition-colors focus:border-[#e4db55]/60"
          required
        />
      </label>

      <div className="mt-5 flex flex-wrap items-center gap-4">
        <button
          type="submit"
          className="inline-flex min-h-12 items-center justify-center border border-[#e4db55]/70 bg-[#e4db55] px-5 text-sm font-semibold text-black transition-colors hover:bg-white"
        >
          Send inquiry
        </button>
        <a
          href={`mailto:${email}`}
          className="text-sm font-medium text-zinc-500 transition-colors hover:text-white"
        >
          {email}
        </a>
        {status ? <p className="text-sm text-zinc-500">{status}</p> : null}
      </div>
    </form>
  );
}
