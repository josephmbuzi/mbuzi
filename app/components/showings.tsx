import { BookCard } from "./book-card";

const books = [
  {
    title: "Web Platform Engineering",
    accent: "#8db9e8",
    variant: "light" as const,
  },
  {
    title: "The Effective Software Engineer",
    accent: "#e56940",
    variant: "light" as const,
  },
  {
    title: "Beyond Vibe Coding",
    accent: "#c13c45",
    variant: "light" as const,
  },
  {
    title: "Effective Software Engineering Management",
    accent: "#e4db55",
    variant: "cream" as const,
  },
  {
    title: "Building Web Apps with AI",
    accent: "#b96f3f",
    variant: "light" as const,
  },
  {
    title: "Building large-scale web apps",
    accent: "#f3b949",
    variant: "dark" as const,
  },
  {
    title: "Effective Eng. Teams",
    accent: "#4f62d8",
    variant: "light" as const,
  },
  {
    title: "Product Engineering with AI",
    accent: "#e7722c",
    variant: "dark" as const,
  },
  {
    title: "JS Patterns: 2nd Edition",
    accent: "#79716b",
    variant: "light" as const,
  },
  {
    title: "Learning Patterns",
    accent: "#f4d247",
    variant: "yellow" as const,
  },
  {
    title: "Success at Scale",
    accent: "#7aa0c7",
    variant: "blue" as const,
  },
  {
    title: "Developer Experience",
    accent: "#22c55e",
    variant: "dark" as const,
  },
];

export function Showings() {
  return (
    <section id="books" className="bg-black px-5 text-white sm:px-12 lg:px-12">
      <div className="mx-auto w-full  max-w-350 items-start px-5 sm:px-8 sm:pb-16 lg:px-12">
        <h2 className="text-2xl font-bold leading-none text-zinc-400 sm:text-2xl">
          Books
        </h2>

        <div className="mt-8 grid grid-cols-2 gap-x-8 gap-y-18 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 xl:gap-x-14">
          {books.map((book) => (
            <BookCard key={book.title} {...book} />
          ))}
        </div>
      </div>
    </section>
  );
}
