import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  scrolled?: boolean;
  isFooter?: boolean;
}

export default function Logo({ className, scrolled, isFooter }: LogoProps) {
  return (
    <div
      className={cn(
        "flex items-center cursor-pointer group",
        className
      )}
    >
      <img
        src="/logo.png"
        alt="Rize Elevators"
        className={cn(
          "object-contain transition-all duration-300 group-hover:scale-105",
          isFooter ? "h-12 w-auto" : "h-12 w-auto"
        )}
      />
    </div>
  );
}
