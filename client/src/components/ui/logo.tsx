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
        <svg 
          viewBox="0 0 100 100" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg" 
          className={isFooter ? "w-10 h-10" : "w-8 h-8"}
        >
          {/* Main 'R' body - Centered and widened for the larger arrow */}
          <path 
            d="M 10 15 H 75 C 100 15 100 35 100 50 C 100 65 90 70 70 70 L 90 100 H 65 L 45 70 H 40 V 100 H 10 Z M 40 35 V 50 H 75 C 85 50 85 35 75 35 Z" 
            fill={mainColor} 
            fillRule="evenodd" 
          />
          
          {/* White Cutout Area for Arrow - Large, perfectly centered at x=50 */}
          <path 
            d="M 50 0 L 15 45 H 30 L 15 100 H 85 L 70 45 H 85 Z" 
            fill={contrastColor} 
          />
          
          {/* Inner grey arrow - perfectly centered and scaled up */}
          <path 
            d="M 50 8 L 22 42 H 34 L 22 100 H 78 L 66 42 H 78 Z" 
            fill="url(#arrow-grad)" 
          />
          
          {/* Vertical split line in the center of the arrow */}
          <path d="M 49.5 8 V 100 H 50.5 V 8 Z" fill="black" fillOpacity="0.15" />

          <defs>
            <linearGradient id="arrow-grad" x1="50" y1="8" x2="50" y2="100" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#e5e7eb" />
              <stop offset="100%" stopColor="#9ca3af" />
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
