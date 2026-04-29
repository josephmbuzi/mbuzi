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
        className={`relative aspect-[0.7] w-full overflow-hidden rounded bg-zinc-100 shadow-[0_10px_26px_rgba(0,0,0,0.24)] ${variantStyles[variant]}`}
      >
        <div className="absolute inset-x-0 top-0 h-5 border-b border-black/10 bg-white/45" />
        <div
          className="absolute left-0 top-0 h-full w-1"
          style={{ backgroundColor: accent }}
        />

        <div className="flex h-full flex-col justify-between p-3.5 pt-6.5">
          <div>
            <p className="text-[9px] font-bold uppercase text-red-500">Mbuzi</p>
            <h3 className="mt-3 text-[clamp(0.95rem,1.35vw,1.3rem)] font-semibold leading-[0.98]">
              {title}
            </h3>
          </div>

          <p className="text-[9px] font-semibold">{kicker}</p>
        </div>
      </div>

      <h3 className="mt-3 text-[0.92rem] font-normal leading-[1.15] text-zinc-500 transition-colors group-hover:text-zinc-200">
        {title}
      </h3>
    </article>
  );
}
