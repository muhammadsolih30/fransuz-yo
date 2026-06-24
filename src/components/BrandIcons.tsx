import type { SVGProps } from "react";

export function TelegramIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
      <path d="M21.94 4.6 18.6 20.36c-.25 1.11-.92 1.39-1.86.86l-5.14-3.79-2.48 2.39c-.28.28-.5.5-1.02.5l.37-5.23 9.52-8.6c.41-.37-.09-.58-.64-.21L5.58 13.2l-5.07-1.59c-1.1-.34-1.12-1.1.23-1.63L20.52 2.3c.92-.34 1.72.21 1.42 2.3Z" />
    </svg>
  );
}

export function InstagramIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" aria-hidden {...props}>
      <rect x="2" y="2" width="20" height="20" rx="5.5" />
      <circle cx="12" cy="12" r="4.2" />
      <circle cx="17.4" cy="6.6" r="1.1" fill="currentColor" stroke="none" />
    </svg>
  );
}
