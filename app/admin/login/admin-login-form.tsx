"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { FormEvent, useEffect, useState } from "react";
import { getStoredAdminSession, signInAdmin } from "../../lib/supabase-auth";

export function AdminLoginForm() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isSigningIn, setIsSigningIn] = useState(false);

  useEffect(() => {
    if (getStoredAdminSession()) {
      router.replace("/admin/blogs");
    }
  }, [router]);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");
    setIsSigningIn(true);

    try {
      await signInAdmin(email, password);
      router.replace("/admin/blogs");
    } catch (loginError) {
      setError(
        loginError instanceof Error
          ? loginError.message
          : "Unable to sign in.",
      );
    } finally {
      setIsSigningIn(false);
    }
  }

  return (
    <main className="min-h-screen bg-black text-white">
      <section className="relative isolate overflow-hidden px-5 pb-16 pt-28 sm:px-8 sm:pt-32 lg:px-12">
        <div className="absolute inset-x-0 top-0 h-96 bg-gradient-to-b from-zinc-900/60 to-transparent" />
        <div className="absolute right-0 top-20 h-px w-2/3 bg-gradient-to-l from-[#e4db55]/50 to-transparent" />

        <div className="relative z-10 mx-auto w-full max-w-140">
          <Link
            href="/"
            className="text-sm font-medium text-zinc-500 transition-colors hover:text-white"
          >
            Joseph Mbuzi
          </Link>

          <form
            onSubmit={handleSubmit}
            className="mt-12 border border-white/10 bg-zinc-950/70 p-5"
          >
            <label className="block text-sm font-medium text-zinc-300">
              Email
              <input
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                className="mt-2 w-full border border-white/10 bg-black px-4 py-3 text-white outline-none transition-colors focus:border-[#e4db55]/60"
                required
              />
            </label>

            <label className="mt-4 block text-sm font-medium text-zinc-300">
              Password
              <input
                type="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                className="mt-2 w-full border border-white/10 bg-black px-4 py-3 text-white outline-none transition-colors focus:border-[#e4db55]/60"
                required
              />
            </label>

            <button
              type="submit"
              disabled={isSigningIn}
              className="mt-5 bg-[#e4db55] px-5 py-3 text-sm font-semibold text-black transition-colors hover:bg-white disabled:cursor-not-allowed disabled:opacity-60"
            >
              {isSigningIn ? "Signing in..." : "Sign in"}
            </button>

            {error ? (
              <p className="mt-4 text-sm leading-6 text-red-300">{error}</p>
            ) : null}
          </form>
        </div>
      </section>
    </main>
  );
}
