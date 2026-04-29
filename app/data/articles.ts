export type Article = {
  slug: string;
  title: string;
  date: string;
  imageTitle: string;
  imageSrc?: string;
  featured?: boolean;
  sections: {
    heading?: string;
    paragraphs: string[];
  }[];
};

export const articles: Article[] = [
  {
    slug: "factory-model-coding-agents",
    title: "The Factory Model: How Coding Agents Changed Software Engineering",
    date: "February 25, 2026",
    imageTitle: "The Factory Model",
    imageSrc: "/joseph.png",
    sections: [
      {
        paragraphs: [
          "Something shifted recently with agentic engineering that feels like the level of abstraction changed again. Not the usual kind of shift where tools get marginally better and workflows gradually evolve. A step change. Developers who have been writing software for decades are describing it the same way: the center of gravity of the craft moved.",
          "The most useful thing you can do right now is hold two ideas in tension simultaneously. Coding has changed dramatically. Software engineering, at its core, has not. That gap between the two is where the interesting story lives, and understanding it clearly is the difference between engineers who thrive in this era and engineers who get left behind by it.",
          "I was reading Michael Truell's thoughts on this and wanted to expand on them.",
        ],
      },
      {
        heading: "The arc of abstractions",
        paragraphs: [
          "The history of software engineering is the history of raising abstraction. We moved from bits to instructions, from instructions to functions, from functions to objects, from objects to services, from services to distributed systems. Every jump in the stack made individual developers more productive and expanded the total population of people who could participate in building software.",
          "Coding agents are another jump. The difference is that this one does not merely hide machine detail. It changes the unit of work. The engineer is no longer only typing the implementation. The engineer is shaping intent, creating constraints, reviewing output, and deciding where human judgment still matters.",
        ],
      },
      {
        heading: "The factory model",
        paragraphs: [
          "A strong engineering team increasingly looks less like a room of people each holding one keyboard and more like a factory floor of coordinated agents, checks, review loops, and human decision points. The output is still software, but the operating model has changed.",
          "That model rewards engineers who can decompose work, write clear specifications, verify behavior, and keep systems coherent as more implementation gets delegated. The valuable skill is not disappearing. It is moving up a level.",
        ],
      },
    ],
  },
  {
    slug: "stop-using-init-for-agents-md",
    title: "Stop Using /init for AGENTS.md",
    date: "February 18, 2026",
    imageTitle: "Stop Using /init for AGENTS.md",
    imageSrc: "/joseph.png",
    sections: [
      {
        paragraphs: [
          "A useful AGENTS.md file is not a generic project summary. It is a compact operating manual for how agents should safely change the codebase.",
          "The best versions capture local rules, known traps, verification commands, and the boundaries that matter when editing production code.",
        ],
      },
    ],
  },
  {
    slug: "claude-code-swarms",
    title: "Claude Code Swarms",
    date: "February 11, 2026",
    imageTitle: "Claude Code Swarms",
    imageSrc: "/joseph.png",
    featured: true,
    sections: [
      {
        paragraphs: [
          "Parallel coding agents are useful when the work can be split cleanly and reviewed with discipline.",
          "The real leverage comes from giving each agent a bounded job, a clear ownership area, and verification expectations that can be checked independently.",
        ],
      },
    ],
  },
  {
    slug: "agentic-engineering",
    title: "Agentic Engineering",
    date: "February 4, 2026",
    imageTitle: "Agentic Engineering",
    imageSrc: "/joseph.png",
    sections: [
      {
        paragraphs: [
          "Agentic engineering is the practice of designing work so agents can execute meaningful slices while humans preserve direction and quality.",
          "It is less about prompts in isolation and more about systems, feedback loops, and review culture.",
        ],
      },
    ],
  },
  {
    slug: "self-improving-coding-agents",
    title: "Self-Improving Coding Agents",
    date: "January 28, 2026",
    imageTitle: "Self-Improving Coding Agents",
    imageSrc: "/joseph.png",
    sections: [
      {
        paragraphs: [
          "The most interesting agents are not just faster autocomplete. They observe failure, adjust procedures, and make the next run less fragile.",
          "That improvement loop depends on durable project knowledge and tests that expose the behavior people actually care about.",
        ],
      },
    ],
  },
  {
    slug: "writing-a-good-spec-for-ai-agents",
    title: "Writing a good spec for AI Agents",
    date: "January 21, 2026",
    imageTitle: "Writing a good spec for AI Agents",
    imageSrc: "/joseph.png",
    sections: [
      {
        paragraphs: [
          "A good agent spec says what success looks like, what constraints cannot move, and how the result should be verified.",
          "Ambiguity is expensive. Clear specs reduce rework and make review sharper.",
        ],
      },
    ],
  },
  {
    slug: "ai-coding-agents-need-a-manager",
    title: "Your AI coding agents need a manager",
    date: "January 14, 2026",
    imageTitle: "Your AI coding agents need a manager",
    imageSrc: "/joseph.png",
    sections: [
      {
        paragraphs: [
          "Agents need scope, sequencing, and feedback. Without that management layer, parallel effort turns into scattered patches.",
          "The manager role can be a person, a process, or tooling, but the responsibility does not disappear.",
        ],
      },
    ],
  },
  {
    slug: "code-review-in-the-age-of-ai",
    title: "Code Review in the age of AI",
    date: "January 7, 2026",
    imageTitle: "Code Review in the age of AI",
    imageSrc: "/joseph.png",
    sections: [
      {
        paragraphs: [
          "AI-generated code raises the importance of code review. The reviewer's job shifts toward intent, architecture, edge cases, and verification quality.",
          "Style comments matter less than identifying where the code can fail in production.",
        ],
      },
    ],
  },
  {
    slug: "next-two-years-software-engineering",
    title: "The Next Two Years of Software Engineering",
    date: "December 17, 2025",
    imageTitle: "The Next Two Years of Software Engineering",
    imageSrc: "/joseph.png",
    sections: [
      {
        paragraphs: [
          "The next two years will reward teams that redesign their workflows around agent capability instead of treating agents as a faster text editor.",
          "The biggest gains will come from better decomposition, stronger tests, and tighter review loops.",
        ],
      },
    ],
  },
  {
    slug: "where-can-ai-improve-developer-experience",
    title: "Where can AI improve developer experience?",
    date: "December 10, 2025",
    imageTitle: "Where can AI improve DX?",
    imageSrc: "/joseph.png",
    sections: [
      {
        paragraphs: [
          "AI can improve developer experience anywhere the work has repeatable context, expensive switching costs, or a slow feedback loop.",
          "The highest-value opportunities are often around tests, migrations, documentation, review support, and operational diagnosis.",
        ],
      },
    ],
  },
];

export function getArticle(slug: string) {
  return articles.find((article) => article.slug === slug);
}
