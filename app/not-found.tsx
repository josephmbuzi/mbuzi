import Link from "next/link";
import { Navbar } from "./components/navbar";

export default function NotFound() {
  return (
    <>
      <Navbar />
      <main className="relative isolate flex min-h-screen items-center overflow-hidden bg-black px-5 py-28 text-white sm:px-8 lg:px-12">
        <div className="absolute inset-x-0 top-0 h-96 bg-gradient-to-b from-zinc-900/70 to-transparent" />
        <div className="absolute left-0 top-36 h-px w-2/3 bg-gradient-to-r from-[#e4db55]/50 to-transparent" />
        <div className="absolute bottom-0 right-0 h-80 w-80 border border-white/10 bg-zinc-950/70" />

        <section className="relative z-10 mx-auto grid w-full max-w-350 gap-12 lg:grid-cols-[0.75fr_1fr] lg:items-end">
          <div>
            <p className="text-sm font-semibold uppercase text-[#e4db55]">
              404
            </p>
            <h1 className="mt-6 max-w-180 text-5xl font-medium leading-none text-white sm:text-7xl lg:text-8xl">
              Page not found.
            </h1>
          </div>

          <div className="border-t border-white/10 pt-8 lg:pt-10">
            <p className="max-w-150 text-lg leading-8 text-zinc-300">
              The page you are looking for may have moved, been removed, or
              never existed.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/"
                className="inline-flex min-h-11 items-center justify-center border border-[#e4db55]/70 bg-[#e4db55] px-5 text-sm font-semibold text-black transition-colors hover:bg-white"
              >
                Return home
              </Link>
              <Link
                href="/services"
                className="inline-flex min-h-11 items-center justify-center border border-white/15 px-5 text-sm font-semibold text-white transition-colors hover:border-white/40"
              >
                View services
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
