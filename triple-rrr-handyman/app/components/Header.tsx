import { Phone } from "lucide-react";

const NAV = [
  { label: "Services", href: "#services" },
  { label: "Gallery", href: "#gallery" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
        <a href="#top" className="flex items-baseline gap-2">
          <span className="text-lg font-bold tracking-tight text-text-primary">
            Triple RRR
          </span>
          <span className="text-lg font-medium text-primary">Handyman</span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-text-secondary transition-colors hover:text-text-primary"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href="tel:+61405520814"
          className="flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-semibold text-white shadow-[0_0_16px_rgba(77,105,255,0.3)] transition-transform hover:scale-105"
        >
          <Phone size={15} />
          <span className="hidden sm:inline">0405 520 814</span>
          <span className="sm:hidden">Call</span>
        </a>
      </div>
    </header>
  );
}
