"use client";

import { type FormEvent, useState } from "react";

const projectTypes = [
  "Build a web platform",
  "Automate a business workflow",
  "Improve an existing system",
  "Plan a technical direction",
  "Not sure yet",
];

type ContactFormProps = {
  email: string;
};

export function ContactForm({ email }: ContactFormProps) {
  const [status, setStatus] = useState<{
    type: "success" | "error" | "pending";
    message: string;
  } | null>(null);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);
    const name = String(formData.get("name") ?? "").trim();
    const senderEmail = String(formData.get("email") ?? "").trim();
    const projectType = String(formData.get("projectType") ?? "").trim();
    const timeline = String(formData.get("timeline") ?? "").trim();
    const message = String(formData.get("message") ?? "").trim();
    const website = String(formData.get("website") ?? "").trim();

    setStatus({ type: "pending", message: "Sending inquiry..." });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email: senderEmail,
          projectType,
          timeline,
          message,
          website,
        }),
      });

      const result = (await response.json()) as { error?: string };

      if (!response.ok) {
        throw new Error(result.error ?? "The message could not be sent.");
      }

      form.reset();
      setStatus({
        type: "success",
        message: "Inquiry sent. I will reply as soon as possible.",
      });
    } catch (error) {
      setStatus({
        type: "error",
        message:
          error instanceof Error
            ? error.message
            : "The message could not be sent.",
      });
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="border border-white/10 bg-zinc-950/70 p-5"
    >
      <input
        name="website"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden="true"
      />

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
          disabled={status?.type === "pending"}
          className="inline-flex min-h-12 items-center justify-center border border-[#e4db55]/70 bg-[#e4db55] px-5 text-sm font-semibold text-black transition-colors hover:bg-white"
        >
          {status?.type === "pending" ? "Sending..." : "Send inquiry"}
        </button>
        <a
          href={`mailto:${email}`}
          className="text-sm font-medium text-zinc-500 transition-colors hover:text-white"
        >
          {email}
        </a>
        {status ? (
          <p
            className={`text-sm ${
              status.type === "error" ? "text-red-300" : "text-zinc-500"
            }`}
            role={status.type === "error" ? "alert" : "status"}
          >
            {status.message}
          </p>
        ) : null}
      </div>
    </form>
  );
}
