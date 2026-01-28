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
        "relative flex items-center justify-center transition-all duration-300 group-hover:scale-105",
        "w-10 h-10 rounded-lg overflow-hidden"
      )}>
        {/* The "R" shape with integrated arrow inspired by the reference image */}
        <svg 
          viewBox="0 0 100 100" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg" 
          className={isFooter ? "w-10 h-10" : "w-8 h-8"}
        >
          {/* Main 'R' body - using Primary Blue or White depending on context */}
          <path 
            d="M20 10H65C80 10 90 22 90 35C90 48 80 60 65 60H50L85 90H65L35 60H20V90H10V10H20Z" 
            fill={isFooter || !scrolled ? "white" : "currentColor"} 
            className={cn(!isFooter && scrolled && "text-primary")}
          />
          
          {/* Transparent cutout/border area */}
          <path 
            d="M45 85L45 45L30 45L55 15L80 45L65 45L65 85H45Z" 
            fill={isFooter || !scrolled ? "#0f172a" : "white"}
          />
          
          {/* Inner arrow */}
          <path 
            d="M50 80L50 48L38 48L55 25L72 48L60 48L60 80H50Z" 
            fill="#94a3b8"
          />
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
