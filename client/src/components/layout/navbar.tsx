import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone } from "lucide-react";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import logoImg from "@assets/rize_elevators_logo_1768581424254.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Projects", href: "/projects" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav
      className={cn(
        "fixed w-full z-50 transition-all duration-300",
        scrolled
          ? "bg-white/95 dark:bg-slate-900/95 backdrop-blur-md shadow-lg py-2"
          : "bg-transparent py-4"
      )}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <Link href="/">
          <span className="flex items-center cursor-pointer group">
            <img 
              src={logoImg} 
              alt="Rize Elevators" 
              className="h-12 md:h-16 w-auto object-contain mix-blend-multiply dark:brightness-200 dark:contrast-150"
            />
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link key={link.name} href={link.href}>
              <span
                className={cn(
                  "text-sm font-semibold tracking-wide transition-all hover:text-primary cursor-pointer relative py-2",
                  location === link.href
                    ? "text-primary after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-primary"
                    : "text-foreground/70"
                )}
              >
                {link.name}
              </span>
            </Link>
          ))}
          <Link href="/contact">
            <Button size="sm" className="gap-2 shadow-lg hover:shadow-primary/20 hover:-translate-y-0.5 transition-all cursor-pointer font-bold px-6">
              <Phone className="h-4 w-4" /> Get a Quote
            </Button>
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden p-2 text-foreground"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white dark:bg-slate-900 border-b border-border shadow-2xl animate-in slide-in-from-top-5">
          <div className="flex flex-col p-6 gap-4">
            {navLinks.map((link) => (
              <Link key={link.name} href={link.href}>
                <span
                  className={cn(
                    "text-lg font-bold p-3 rounded-xl transition-all cursor-pointer block",
                    location === link.href ? "bg-primary/10 text-primary" : "hover:bg-muted"
                  )}
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </span>
              </Link>
            ))}
            <Link href="/contact">
              <Button className="w-full mt-4 h-14 text-lg font-bold shadow-xl" onClick={() => setIsOpen(false)}>
                Get a Quote
              </Button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
