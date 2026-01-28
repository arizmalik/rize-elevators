import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  scrolled?: boolean;
  isFooter?: boolean;
}

export default function Logo({ className, scrolled, isFooter }: LogoProps) {
  return (
    <div className={cn("flex items-center gap-3 cursor-pointer group", className)}>
      <div className={cn(
        "relative flex items-center justify-center transition-all duration-300 group-hover:scale-105 overflow-hidden",
        isFooter ? "w-12 h-12 bg-[#1e293b] rounded-xl shadow-lg shadow-primary/20" : "w-10 h-10 bg-[#1e293b] rounded-lg shadow-md"
      )}>
        {/* The "R" shape with integrated arrow inspired by the reference image */}
        <svg 
          viewBox="0 0 100 100" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg" 
          className={isFooter ? "w-10 h-10" : "w-8 h-8"}
        >
          {/* Main Blue 'R' body */}
          <path 
            d="M20 10H65C80 10 90 22 90 35C90 48 80 60 65 60H50L85 90H65L35 60H20V90H10V10H20Z" 
            fill="#1e293b" 
          />
          
          {/* White border/glow around the arrow cutout area */}
          <path 
            d="M45 85L45 45L30 45L55 15L80 45L65 45L65 85H45Z" 
            fill="white"
          />
          
          {/* Inner grey arrow from the image */}
          <path 
            d="M50 80L50 48L38 48L55 25L72 48L60 48L60 80H50Z" 
            fill="#94a3b8"
          />
          
          {/* Subtle gradient for depth */}
          <defs>
            <linearGradient id="logo-grad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="white" stopOpacity="0.1" />
              <stop offset="100%" stopColor="transparent" />
            </linearGradient>
          </defs>
          <rect width="100" height="100" fill="url(#logo-grad)" pointerEvents="none" />
        </svg>
      </div>
      <div className="flex flex-col leading-none">
        <span className={cn(
          "font-black font-display tracking-tighter transition-colors duration-300",
          isFooter ? "text-2xl text-white" : (scrolled ? "text-primary text-xl" : "text-white text-xl")
        )}>
          RIZE
        </span>
        <span className={cn(
          "font-bold tracking-[0.2em] uppercase transition-colors duration-300",
          isFooter ? "text-xs text-primary" : (scrolled ? "text-foreground/70 text-[10px]" : "text-white/80 text-[10px]")
        )}>
          Elevators
        </span>
      </div>
    </div>
  );
}
