"use client";

import type { ReactNode } from "react";
import { useState } from "react";

type BlogContentProps = {
  content: string[];
  className?: string;
};

function CopyIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-4 w-4"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="9" y="9" width="10" height="10" rx="1.5" />
      <path d="M5 15V6.5A1.5 1.5 0 0 1 6.5 5H15" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-4 w-4"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m5 12 4 4L19 6" />
    </svg>
  );
}

function CodeBlock({ code, language }: { code: string; language?: string }) {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1600);
  }

  return (
    <figure className="overflow-hidden border border-white/10 bg-white/[0.035]">
      <div className="flex min-h-10 items-center justify-between border-b border-white/10 bg-white/[0.03] px-4">
        <figcaption className="text-xs font-semibold uppercase text-zinc-500">
          {language || "Code"}
        </figcaption>
        <button
          type="button"
          title={copied ? "Copied" : "Copy code"}
          aria-label={copied ? "Copied" : "Copy code"}
          onClick={handleCopy}
          className="inline-flex h-8 w-8 items-center justify-center text-zinc-500 transition-colors hover:text-white"
        >
          {copied ? <CheckIcon /> : <CopyIcon />}
        </button>
      </div>
      <pre className="overflow-x-auto p-4 text-sm leading-6 text-zinc-200">
        <code className="whitespace-pre font-mono">{code}</code>
      </pre>
    </figure>
  );
}

function isLikelyCodeBlock(block: string) {
  const lines = block.split("\n");

  if (lines.length < 2) {
    return false;
  }

  return (
    /^[{[]/.test(block.trim()) ||
    lines.some((line) => /^\s{2,}\S/.test(line)) ||
    lines.some((line) => /[;{}]$/.test(line.trim()))
  );
}

function renderInline(text: string): ReactNode[] {
  const nodes: ReactNode[] = [];
  const pattern =
    /(!\[(.*?)\]\((.*?)\))|(\[(.*?)\]\((.*?)\))|(`([^`]+)`)|(\*\*([^*]+)\*\*)|(\*([^*]+)\*)/g;
  let lastIndex = 0;
  let match: RegExpExecArray | null;

  while ((match = pattern.exec(text)) !== null) {
    if (match.index > lastIndex) {
      nodes.push(text.slice(lastIndex, match.index));
    }

    if (match[1]) {
      nodes.push(
        // eslint-disable-next-line @next/next/no-img-element
        <img
          key={`${match.index}-image`}
          src={match[3]}
          alt={match[2]}
          className="mt-5 aspect-video w-full border border-white/10 object-cover"
        />,
      );
    } else if (match[4]) {
      nodes.push(
        <a
          key={`${match.index}-link`}
          href={match[6]}
          className="text-[#e4db55] underline underline-offset-4 transition-colors hover:text-white"
          target="_blank"
          rel="noreferrer"
        >
          {match[5]}
        </a>,
      );
    } else if (match[7]) {
      nodes.push(
        <code
          key={`${match.index}-code`}
          className="border border-white/10 bg-white/[0.06] px-1.5 py-0.5 text-[0.92em] text-white"
        >
          {match[8]}
        </code>,
      );
    } else if (match[9]) {
      nodes.push(<strong key={`${match.index}-bold`}>{match[10]}</strong>);
    } else if (match[11]) {
      nodes.push(<em key={`${match.index}-italic`}>{match[12]}</em>);
    }

    lastIndex = pattern.lastIndex;
  }

  if (lastIndex < text.length) {
    nodes.push(text.slice(lastIndex));
  }

  return nodes;
}

function renderBlock(block: string) {
  const trimmedBlock = block.trim();

  if (trimmedBlock.startsWith("```")) {
    const lines = trimmedBlock.split("\n");
    const language = lines[0].replace("```", "").trim();
    const code = lines
      .slice(1, lines.at(-1) === "```" ? -1 : undefined)
      .join("\n");

    return <CodeBlock code={code} language={language} />;
  }

  if (isLikelyCodeBlock(trimmedBlock)) {
    return <CodeBlock code={trimmedBlock} />;
  }

  if (trimmedBlock.startsWith("## ")) {
    return (
      <h2 className="pt-3 text-3xl font-medium leading-tight text-white">
        {renderInline(trimmedBlock.replace(/^## /, ""))}
      </h2>
    );
  }

  if (trimmedBlock.startsWith("### ")) {
    return (
      <h3 className="pt-2 text-2xl font-medium leading-tight text-white">
        {renderInline(trimmedBlock.replace(/^### /, ""))}
      </h3>
    );
  }

  if (trimmedBlock.startsWith("> ")) {
    return (
      <blockquote className="border-l border-[#e4db55]/70 pl-4 text-zinc-300">
        {renderInline(trimmedBlock.replace(/^> /, ""))}
      </blockquote>
    );
  }

  if (/^!\[(.*?)\]\((.*?)\)$/.test(trimmedBlock)) {
    const image = trimmedBlock.match(/^!\[(.*?)\]\((.*?)\)$/);

    return (
      <figure>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={image?.[2]}
          alt={image?.[1] ?? ""}
          className="aspect-video w-full border border-white/10 object-cover"
        />
        {image?.[1] ? (
          <figcaption className="mt-2 text-xs leading-5 text-zinc-500">
            {image[1]}
          </figcaption>
        ) : null}
      </figure>
    );
  }

  if (trimmedBlock.split("\n").every((line) => line.startsWith("- "))) {
    return (
      <ul className="list-disc space-y-2 pl-5">
        {trimmedBlock.split("\n").map((line) => (
          <li key={line}>{renderInline(line.replace(/^- /, ""))}</li>
        ))}
      </ul>
    );
  }

  return <p>{renderInline(trimmedBlock)}</p>;
}

export function splitBlogContent(markdown: string) {
  const blocks: string[] = [];
  const currentBlock: string[] = [];
  let isCodeBlock = false;

  markdown.split("\n").forEach((line) => {
    if (line.startsWith("```")) {
      isCodeBlock = !isCodeBlock;
      currentBlock.push(line);
      return;
    }

    if (!isCodeBlock && line.trim() === "") {
      if (currentBlock.length > 0) {
        blocks.push(currentBlock.join("\n"));
        currentBlock.length = 0;
      }
      return;
    }

    currentBlock.push(line);
  });

  if (currentBlock.length > 0) {
    blocks.push(currentBlock.join("\n"));
  }

  return blocks.map((block) => block.trim()).filter(Boolean);
}

export function BlogContent({ content, className }: BlogContentProps) {
  return (
    <div className={className}>
      {content.map((block) => (
        <div key={block}>{renderBlock(block)}</div>
      ))}
    </div>
  );
}
