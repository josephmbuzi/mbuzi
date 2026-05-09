import Link from "next/link";
import { siteConfig } from "../lib/site";

export function WhatsAppLink() {
  return (
    <Link
      href={siteConfig.whatsapp}
      aria-label="Chat with Joseph Mbuzi on WhatsApp"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 z-30 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25d366] text-white shadow-lg shadow-black/30 transition-transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#25d366] focus:ring-offset-2 focus:ring-offset-black sm:bottom-6 sm:right-6"
    >
      <svg
        aria-hidden="true"
        viewBox="0 0 32 32"
        className="h-7 w-7"
        fill="currentColor"
      >
        <path d="M16.02 3.2A12.73 12.73 0 0 0 5.1 22.49L3.6 28.8l6.46-1.48A12.74 12.74 0 1 0 16.02 3.2Zm0 2.35a10.39 10.39 0 0 1 8.86 15.82 10.37 10.37 0 0 1-13.93 3.74l-.4-.22-3.87.9.9-3.78-.25-.42A10.38 10.38 0 0 1 16.02 5.55Zm-4.4 4.75c-.23 0-.6.09-.92.43-.31.34-1.2 1.17-1.2 2.86s1.23 3.32 1.4 3.55c.17.23 2.37 3.8 5.87 5.18 2.9 1.14 3.5.91 4.13.85.63-.05 2.04-.83 2.33-1.63.28-.8.28-1.49.2-1.63-.09-.14-.31-.23-.66-.4-.34-.17-2.04-1.01-2.36-1.12-.31-.12-.54-.17-.77.17-.23.34-.89 1.12-1.09 1.35-.2.23-.4.26-.74.09-.34-.17-1.45-.54-2.76-1.7a10.3 10.3 0 0 1-1.9-2.36c-.2-.34-.02-.53.15-.7.15-.15.34-.4.51-.6.17-.2.23-.34.34-.57.12-.23.06-.43-.03-.6-.09-.17-.77-1.86-1.06-2.55-.28-.67-.57-.58-.77-.6h-.66Z" />
      </svg>
    </Link>
  );
}
