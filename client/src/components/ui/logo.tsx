import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  scrolled?: boolean;
  isFooter?: boolean;
}

export default function Logo({ className, scrolled, isFooter }: LogoProps) {
  const mainColor = isFooter || !scrolled ? "white" : "#1e293b";
  const contrastColor = isFooter || !scrolled ? "#0f172a" : "white";

  return (
    <div className={cn("flex items-center gap-1.5 cursor-pointer group", className)}>
      <div className={cn(
        "relative flex items-center justify-center transition-all duration-300 group-hover:scale-105",
        "w-9 h-9 overflow-hidden"
      )}>
        {/* The "R" shape with integrated arrow perfectly merged as per reference image */}
        <svg 
          viewBox="0 0 100 100" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg" 
          className={isFooter ? "w-10 h-10" : "w-8 h-8"}
        >
          {/* Main 'R' body - Bold Navy Blue */}
          <path 
            d="M20 10H65C80 10 90 22 90 35C90 48 80 60 65 60H50L85 90H65L35 60H20V90H10V10H20Z" 
            fill={mainColor} 
          />
          
          {/* Transparent cutout/border area that creates the white 'stroke' look around the arrow */}
          <path 
            d="M38 90L45 45L30 45L55 15L80 45L65 45L72 90H38Z" 
            fill={contrastColor}
          />
          
          {/* Inner arrow that merges into the R shape */}
          <path 
            d="M44 90L50 48L38 48L55 25L72 48L60 48L66 90H44Z" 
            fill="url(#arrow-grad)"
          />
          
          {/* The subtle split line effect from the image */}
          <path d="M54.5 25L54.5 90H55.5V25H54.5Z" fill="black" fillOpacity="0.1" />

          <defs>
            <linearGradient id="arrow-grad" x1="55" y1="25" x2="55" y2="90" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#d1d5db" />
              <stop offset="100%" stopColor="#6b7280" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="flex flex-col leading-none">
        <span className={cn(
          "font-black font-display tracking-tighter transition-colors duration-300",
          isFooter ? "text-2xl text-white" : (scrolled ? "text-[#1e293b] text-xl" : "text-white text-xl")
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
