import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone } from "lucide-react";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import logoImg from "@assets/generated_images/pure_vector_rize_elevators_logo_isolated_on_transparent_background.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [location, setLocation] = useLocation();

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

  const handleNavClick = (href: string) => {
    setLocation(href);
    setIsOpen(false);
  };

  return (
    <nav
      className={cn(
        "fixed w-full z-50 transition-all duration-300",
        scrolled
          ? "bg-white/95 dark:bg-slate-900/95 backdrop-blur-md shadow-lg py-3"
          : "bg-transparent py-6"
      )}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <Link href="/">
          <span className="flex items-center cursor-pointer group">
            <img 
              src={logoImg} 
              alt="Rize Elevators" 
              className={cn(
                "h-12 md:h-14 w-auto transition-all duration-300",
                !scrolled && "brightness-0 invert"
              )}
            />
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <div 
              key={link.name} 
              onClick={() => handleNavClick(link.href)}
              className={cn(
                "text-sm font-bold tracking-wide transition-all cursor-pointer relative py-2",
                scrolled 
                  ? (location === link.href ? "text-primary after:bg-primary" : "text-foreground/70 hover:text-primary")
                  : (location === link.href ? "text-white after:bg-white" : "text-white/80 hover:text-white"),
                location === link.href && "after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5"
              )}
            >
              {link.name}
            </div>
          ))}
          <Button 
            size="sm" 
            variant={scrolled ? "default" : "secondary"}
            onClick={() => handleNavClick("/contact")}
            className={cn(
              "gap-2 shadow-lg hover:-translate-y-0.5 transition-all cursor-pointer font-bold px-6",
              !scrolled && "bg-white text-primary hover:bg-white/90"
            )}
          >
            <Phone className="h-4 w-4" /> Get a Quote
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className={cn(
            "md:hidden p-2 transition-colors duration-300",
            scrolled ? "text-foreground" : "text-white"
          )}
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
              <div
                key={link.name}
                className={cn(
                  "text-lg font-bold p-3 rounded-xl transition-all cursor-pointer block",
                  location === link.href ? "bg-primary/10 text-primary" : "hover:bg-muted"
                )}
                onClick={() => handleNavClick(link.href)}
              >
                {link.name}
              </div>
            ))}
            <Button 
              className="w-full mt-4 h-14 text-lg font-bold shadow-xl cursor-pointer" 
              onClick={() => handleNavClick("/contact")}
            >
              Get a Quote
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
