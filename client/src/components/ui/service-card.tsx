import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import { Link } from "wouter";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ElementType;
  className?: string;
  image?: string;
}

export default function ServiceCard({ title, description, icon: Icon, className, image }: ServiceCardProps) {
  return (
    <Card className={cn("group overflow-hidden border-none shadow-md hover:shadow-xl transition-all duration-300", className)}>
      <div className="relative h-48 overflow-hidden">
        <div className="absolute inset-0 bg-slate-900/40 group-hover:bg-slate-900/20 transition-all z-10" />
        {image ? (
            <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
            />
        ) : (
            <div className="w-full h-full bg-slate-200 dark:bg-slate-800 flex items-center justify-center">
                <Icon className="h-16 w-16 text-muted-foreground/20" />
            </div>
        )}
        <div className="absolute bottom-4 left-4 z-20 bg-white dark:bg-slate-900 p-3 rounded-lg shadow-lg">
          <Icon className="h-6 w-6 text-primary" />
        </div>
      </div>
      <CardHeader className="pb-2">
        <CardTitle className="text-xl font-bold group-hover:text-primary transition-colors">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-base mb-4 line-clamp-3">
          {description}
        </CardDescription>
        <Link href="/services">
          <span className="inline-flex items-center text-sm font-semibold text-primary hover:text-primary/80 transition-colors cursor-pointer">
            Learn More <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </span>
        </Link>
      </CardContent>
    </Card>
  );
}
