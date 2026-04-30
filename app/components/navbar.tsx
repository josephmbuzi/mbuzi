import Link from "next/link";

const navItems = [
  { label: "GitHub", href: "https://github.com" },
  { label: "Medium", href: "https://medium.com/@josephmbuzi9" },
  { label: "Newsletter", href: "/#newsletter", emphasis: true },
];

export function Navbar() {
  return (
    <header className="absolute inset-x-0 top-0 z-20">
      <nav
        aria-label="Primary navigation"
        className="mx-auto flex h-16 w-full max-w-[1840px] items-center justify-end gap-5 px-5 text-sm font-medium text-zinc-400 sm:h-20 sm:gap-8 sm:px-8 lg:px-12"
      >
        <div className="hidden items-center gap-5 sm:flex sm:gap-8">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className={`transition-colors hover:text-white ${
                item.emphasis ? "font-semibold text-zinc-200" : ""
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
