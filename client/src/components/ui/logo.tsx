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
        isFooter ? "w-12 h-12 bg-primary rounded-xl shadow-lg shadow-primary/20" : "w-10 h-10 bg-primary rounded-lg shadow-md"
      )}>
        <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-inherit" />
        <svg 
          viewBox="0 0 24 24" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg" 
          className={cn("text-white", isFooter ? "w-7 h-7" : "w-6 h-6")}
        >
          <path 
            d="M7 21V3H13.5C16.4822 3 18.9 5.41777 18.9 8.4C18.9 10.932 17.1522 13.0562 14.8015 13.627L19 21H15.5L11.75 13.8H10V21H7ZM10 11.2H13.5C15.0464 11.2 16.3 9.9464 16.3 8.4C16.3 6.8536 15.0464 5.6 13.5 5.6H10V11.2Z" 
            fill="currentColor"
          />
          <path 
            d="M12 18L14 16L16 18" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
            className="animate-bounce"
          />
          <path 
            d="M14 16V21" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round"
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
