import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  scrolled?: boolean;
  isFooter?: boolean;
}

export default function Logo({ className, scrolled, isFooter }: LogoProps) {
  return (
    <div className={cn("flex items-center gap-1.5 cursor-pointer group", className)}>
      <div className={cn(
        "relative flex items-center justify-center transition-all duration-300 group-hover:scale-105",
        "w-9 h-9 overflow-hidden"
      )}>
        {/* The "R" shape with integrated arrow inspired by the reference image */}
        <svg 
          viewBox="0 0 100 100" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg" 
          className={isFooter ? "w-10 h-10" : "w-8 h-8"}
        >
          {/* Main 'R' body */}
          <path 
            d="M20 10H65C80 10 90 22 90 35C90 48 80 60 65 60H50L85 90H65L35 60H20V90H10V10H20Z" 
            fill={isFooter || !scrolled ? "white" : "currentColor"} 
            className={cn(!isFooter && scrolled && "text-primary")}
          />
          
          {/* Transparent cutout/border area with curved edges for motion effect */}
          <path 
            d="M45 85C42 70 42 60 45 45L30 45C40 35 45 25 55 15C65 25 70 35 80 45L65 45C68 60 68 70 65 85H45Z" 
            fill={isFooter || !scrolled ? "#0f172a" : "white"}
          />
          
          {/* Inner arrow with subtle outward curve for moving effect */}
          <path 
            d="M50 80C48 70 48 60 50 48L38 48C45 40 50 32 55 25C60 32 65 40 72 48L60 48C62 60 62 70 60 80H50Z" 
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
