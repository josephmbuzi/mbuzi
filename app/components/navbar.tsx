import Link from "next/link";

const navItems = [
  { label: "Services", href: "/services" },
  { label: "FAQ", href: "/faq" },
  { label: "Blogs", href: "/blogs" },
  { label: "GitHub", href: "https://github.com/josephmbuzi" },
];

export function Navbar() {
  return (
    <header className="absolute inset-x-0 top-0 z-20">
      <nav
        aria-label="Primary navigation"
        className="mx-auto flex w-full max-w-460 flex-wrap items-center justify-between gap-x-5 gap-y-3 px-5 py-4 text-sm font-medium text-zinc-400 sm:h-20 sm:flex-nowrap sm:justify-end sm:gap-8 sm:px-8 sm:py-0 lg:px-12"
      >
        <div className="flex min-w-0 flex-wrap items-center gap-x-5 gap-y-2 sm:gap-8">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className={`transition-colors hover:text-white `}
            >
              {item.label}
            </Link>
          ))}
        </div>
        <Link
          href="/services#contact"
          className="inline-flex min-h-10 items-center justify-center border border-[#e4db55]/70 bg-[#e4db55] px-4 text-sm font-semibold text-black transition-colors hover:bg-white"
        >
          Contact
        </Link>
      </nav>
    </header>
  );
}
