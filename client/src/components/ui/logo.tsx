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
        {/* The "R" shape with integrated arrow inspired by the reference image */}
        <svg 
          viewBox="0 0 100 100" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg" 
          className={isFooter ? "w-10 h-10" : "w-8 h-8"}
        >
          {/* Main 'R' body - Thickened left leg and refined geometry */}
          <path 
            d="M5 10H65C80 10 90 22 90 35C90 48 80 60 65 60H50L85 90H65L35 60H25V90H5V10Z" 
            fill={mainColor} 
          />
          
          {/* Transparent cutout/border area - centered better */}
          <path 
            d="M33 90L40 45L25 45L50 15L75 45L60 45L67 90H33Z" 
            fill={contrastColor}
          />
          
          {/* Inner arrow - centered better */}
          <path 
            d="M39 90L45 48L33 48L50 25L67 48L55 48L61 90H39Z" 
            fill="url(#arrow-grad)"
          />
          
          {/* Split line effect */}
          <path d="M49.5 25L49.5 90H50.5V25H49.5Z" fill="black" fillOpacity="0.1" />

          <defs>
            <linearGradient id="arrow-grad" x1="50" y1="25" x2="50" y2="90" gradientUnits="userSpaceOnUse">
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
