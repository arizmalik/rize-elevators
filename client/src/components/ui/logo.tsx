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
          {/* Dark Blue R Background - perfectly matching the reference proportions */}
          <path 
            d="M 28 28 H 65 C 85 28 85 38 85 48 C 85 58 80 62 68 62 L 85 85 H 65 L 50 62 L 45 62 V 85 H 28 Z M 45 42 V 50 H 65 C 70 50 70 42 65 42 Z" 
            fill={mainColor} 
            fillRule="evenodd" 
          />
          
          {/* White Cutout Area for Arrow - high triangle tip, wide base */}
          <path 
            d="M 46 22 L 32 45 H 38 L 33 85 H 59 L 54 45 H 60 Z" 
            fill={contrastColor} 
          />
          
          {/* Left Side of Arrow - Light Grey */}
          <path 
            d="M 46 28 L 36 42 H 40 L 35 85 H 45.5 Z" 
            fill="#cbd5e1" 
          />
          
          {/* Right Side of Arrow - Dark Grey */}
          <path 
            d="M 46 28 L 56 42 H 52 L 57 85 H 46.5 Z" 
            fill="#64748b" 
          />
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
