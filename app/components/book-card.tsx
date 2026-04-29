type BookCardProps = {
  title: string;
  kicker?: string;
  accent?: string;
  variant?: "light" | "dark" | "cream" | "blue" | "yellow";
};

const variantStyles = {
  light: "bg-zinc-100 text-zinc-950",
  dark: "bg-zinc-950 text-white ring-1 ring-white/10",
  cream: "bg-[#f4efd9] text-zinc-950",
  blue: "bg-[#24364d] text-white",
  yellow: "bg-[#f4d247] text-zinc-950",
};

export function BookCard({
  title,
  kicker = "Joseph Mbuzi",
  accent = "#6aa8e8",
  variant = "light",
}: BookCardProps) {
  return (
    <article className="group">
      <div
        className={`relative aspect-[0.64] w-full overflow-hidden rounded bg-zinc-100 shadow-[0_18px_45px_rgba(0,0,0,0.32)] ${variantStyles[variant]}`}
      >
        <div className="absolute inset-x-0 top-0 h-7 border-b border-black/10 bg-white/45" />
        <div
          className="absolute left-0 top-0 h-full w-2"
          style={{ backgroundColor: accent }}
        />

        <div className="flex h-full flex-col justify-between p-5 pt-10">
          <div>
            <p className="text-xs font-bold uppercase text-red-500">Mbuzi</p>
            <h3 className="mt-5 text-[clamp(1.35rem,2vw,2rem)] font-semibold leading-[0.94]">
              {title}
            </h3>
          </div>

          <div className="relative h-28">
            <div
              className="absolute bottom-2 right-2 h-24 w-24 rounded-full opacity-90"
              style={{ backgroundColor: accent }}
            />
            <div className="absolute bottom-9 right-13 h-20 w-20 rotate-45 rounded bg-black/10" />
            <div className="absolute bottom-0 left-0 h-2 w-22 rounded-full bg-black/15" />
          </div>

          <p className="text-xs font-semibold">{kicker}</p>
        </div>
      </div>

      <h3 className="mt-5 text-[1.35rem] font-normal leading-[1.08] text-zinc-500 transition-colors group-hover:text-zinc-200">
        {title}
      </h3>
    </article>
  );
}
