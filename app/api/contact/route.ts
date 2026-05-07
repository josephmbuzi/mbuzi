import { NextResponse } from "next/server";
import { siteConfig } from "../../lib/site";

const MAILTRAP_API_URL = "https://send.api.mailtrap.io/api/send";

type ContactPayload = {
  name?: unknown;
  email?: unknown;
  projectType?: unknown;
  timeline?: unknown;
  message?: unknown;
  website?: unknown;
};

function getText(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export async function POST(request: Request) {
  let payload: ContactPayload;

  try {
    payload = (await request.json()) as ContactPayload;
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const name = getText(payload.name);
  const email = getText(payload.email);
  const projectType = getText(payload.projectType);
  const timeline = getText(payload.timeline);
  const message = getText(payload.message);
  const website = getText(payload.website);

  if (website) {
    return NextResponse.json({ ok: true });
  }

  if (!name || !email || !projectType || !message) {
    return NextResponse.json(
      { error: "Please complete the required fields." },
      { status: 400 },
    );
  }

  if (!isValidEmail(email)) {
    return NextResponse.json(
      { error: "Please enter a valid email address." },
      { status: 400 },
    );
  }

  if (message.length > 4000) {
    return NextResponse.json(
      { error: "Please keep your message under 4000 characters." },
      { status: 400 },
    );
  }

  const apiKey = process.env.MAILTRAP_API_TOKEN;
  const toEmail = process.env.CONTACT_TO_EMAIL ?? siteConfig.email;
  const fromEmail = process.env.CONTACT_FROM_EMAIL;

  if (!apiKey || !fromEmail) {
    return NextResponse.json(
      { error: "Email delivery is not configured yet." },
      { status: 500 },
    );
  }

  const response = await fetch(MAILTRAP_API_URL, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: {
        email: fromEmail,
        name: siteConfig.name,
      },
      to: [
        {
          email: toEmail,
        },
      ],
      reply_to: email,
      subject: `Project inquiry from ${name}`,
      text: [
        `Name: ${name}`,
        `Email: ${email}`,
        `Project type: ${projectType}`,
        `Timeline: ${timeline || "Not specified"}`,
        "",
        "Project details:",
        message,
      ].join("\n"),
    }),
  });

  if (!response.ok) {
    return NextResponse.json(
      { error: "The message could not be sent. Please try again." },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
