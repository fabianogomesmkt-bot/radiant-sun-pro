import { waLink } from "@/lib/whatsapp";

export function WhatsAppFloat() {
  return (
    <a
      href={waLink()}
      target="_blank"
      rel="noreferrer"
      aria-label="Fale conosco no WhatsApp"
      className="fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[var(--color-whatsapp)] text-white shadow-glow transition-transform hover:scale-110"
    >
      <svg viewBox="0 0 32 32" className="h-7 w-7" fill="currentColor" aria-hidden>
        <path d="M19.11 17.21c-.3-.15-1.76-.87-2.04-.97-.27-.1-.47-.15-.67.15s-.77.97-.94 1.17c-.17.2-.35.22-.65.07-.3-.15-1.26-.47-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51l-.57-.01c-.2 0-.52.07-.79.37s-1.04 1.02-1.04 2.49 1.07 2.89 1.22 3.09c.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.63.71.23 1.36.2 1.87.12.57-.08 1.76-.72 2.01-1.41.25-.69.25-1.28.17-1.41-.07-.12-.27-.2-.57-.35zM16.02 5.33c-5.9 0-10.69 4.79-10.69 10.69 0 1.88.49 3.72 1.42 5.34L5 27l5.78-1.52a10.66 10.66 0 0 0 5.24 1.34h.01c5.9 0 10.69-4.79 10.69-10.69 0-2.86-1.11-5.55-3.13-7.57a10.62 10.62 0 0 0-7.57-3.13z" />
      </svg>
    </a>
  );
}
