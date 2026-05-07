export const blogTopics = [
  {
    title: "Systems notes",
    description:
      "Practical writing on how platforms, workflows, and operational habits become reliable systems.",
    eyebrow: "Engineering",
  },
  {
    title: "Product engineering",
    description:
      "Reflections on building useful web products, shaping technical decisions, and shipping with clarity.",
    eyebrow: "Product",
  },
  {
    title: "Developer experience",
    description:
      "Thoughts on tooling, documentation, automation, and the small details that help teams move well.",
    eyebrow: "DX",
  },
];

export const blogPosts = [
  {
    slug: "designing-systems-that-outlive-busy-weeks",
    title: "Designing systems that outlive busy weeks",
    date: "May 7, 2026",
    publishedAt: "2026-05-07",
    readTime: "4 min read",
    category: "Systems",
    excerpt:
      "A useful system is not the one with the most moving parts. It is the one that keeps decisions visible, reduces repeated explanation, and still works when the team is under pressure.",
    content: [
      "Busy weeks reveal whether a system is real. When people are under pressure, they stop following ceremony and start relying on the parts of the workflow that are obvious, trusted, and easy to repeat.",
      "That is why useful systems start with visible decisions. The team should be able to see what changed, why it changed, who owns the next action, and what tradeoff was accepted without needing another meeting to reconstruct the context.",
      "Reliability also comes from reducing repeated explanation. A strong workflow captures the shape of the work once, then makes the next similar decision faster. Documentation, automation, review habits, and naming all contribute to that memory.",
      "The goal is not to remove judgment. It is to protect judgment from avoidable noise, so the team can spend attention on the parts of the work that actually need care.",
    ],
  },
  {
    slug: "automation-should-remove-uncertainty-not-judgment",
    title: "Automation should remove uncertainty, not judgment",
    date: "April 28, 2026",
    publishedAt: "2026-04-28",
    readTime: "5 min read",
    category: "Automation",
    excerpt:
      "Good automation protects attention. It handles repeatable coordination, exposes the next action clearly, and leaves the human parts of the work where they belong.",
    content: [
      "Automation is most useful when it removes uncertainty from the edges of work. It should make status visible, move routine information to the right place, and make the next action hard to miss.",
      "The mistake is treating automation as a replacement for judgment. Real workflows still need people to interpret context, weigh tradeoffs, and decide when the normal path is not enough.",
      "Good automation has a narrow promise. It handles repeatable coordination, records what happened, and gives people better timing. It should make the work easier to reason about, not harder to inspect.",
      "When automation is designed this way, teams do not lose control. They gain a calmer operating surface where human attention is reserved for decisions that deserve it.",
    ],
  },
  {
    slug: "what-developer-experience-actually-changes",
    title: "What developer experience actually changes",
    date: "April 15, 2026",
    publishedAt: "2026-04-15",
    readTime: "3 min read",
    category: "Developer Experience",
    excerpt:
      "Developer experience is not polish for its own sake. It changes how quickly people can understand a system, trust their changes, and recover when something breaks.",
    content: [
      "Developer experience changes the speed of understanding. A clear codebase gives engineers quick answers about where behavior lives, how pieces fit together, and what a safe change looks like.",
      "It also changes confidence. Tests, local commands, readable errors, and predictable conventions help people trust their changes before the work reaches production.",
      "The strongest developer experience work often looks small from the outside. Better names, tighter setup, useful scripts, and fewer hidden assumptions all reduce the cost of moving through the system.",
      "That cost matters. Teams ship better when the system makes good decisions easier and recovery less dramatic.",
    ],
  },
  {
    slug: "a-product-is-also-an-operating-model",
    title: "A product is also an operating model",
    date: "March 31, 2026",
    publishedAt: "2026-03-31",
    readTime: "6 min read",
    category: "Product Engineering",
    excerpt:
      "Every product teaches its users and builders how work should move. The interface matters, but the operational assumptions behind it matter just as much.",
    content: [
      "A product is more than an interface. It is a set of assumptions about how work should move, who needs to know what, and where decisions become visible.",
      "Those assumptions become an operating model. A product can make handoffs clean, make ownership obvious, and make exceptions easier to handle. It can also hide context and create new coordination problems.",
      "Product engineering works best when the interface and operating model are designed together. The screens should reflect the real flow of work, not just the ideal path drawn at the start.",
      "When that alignment is present, the product does not only help users complete tasks. It teaches a better rhythm for the work itself.",
    ],
  },
];

export function getBlogPost(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}
