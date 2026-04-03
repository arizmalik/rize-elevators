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
          {/* Main 'R' body with thicker left leg and correct geometry */}
          <path 
            d="M10 5 H65 C85 5 100 18 100 35 C100 52 95 65 85 65 L100 95 H72 L60 65 H32 V95 H10 V5 Z M32 25 V45 H60 C70 45 75 40 75 35 C75 30 70 25 60 25 H32 Z" 
            fill={mainColor} 
            fillRule="evenodd"
          />
          
          {/* White cutout area forming the 'path' for the arrow, centered at x=55 */}
          <path 
            d="M35 100 L55 25 L75 100 Z" 
            fill={contrastColor}
          />
          
          {/* Inner grey arrow perfectly centered */}
          <path 
            d="M42 95 L55 35 L68 95 Z" 
            fill="url(#arrow-grad)"
          />
          
          {/* Vertical split line in the center of the arrow */}
          <path d="M54.5 35 V95 H55.5 V35 Z" fill="black" fillOpacity="0.15" />

          <defs>
            <linearGradient id="arrow-grad" x1="55" y1="35" x2="55" y2="95" gradientUnits="userSpaceOnUse">
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
