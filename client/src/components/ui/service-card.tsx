import React from "react";
import { Link } from "wouter";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Dialog, 
  DialogContent, 
  DialogDescription, 
  DialogHeader, 
  DialogTitle, 
  DialogTrigger 
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ElementType;
  className?: string;
  image?: string;
  details?: string[];
}

export default function ServiceCard({ title, description, icon: Icon, className, image, details }: ServiceCardProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="h-full">
          <Card className={cn("group overflow-hidden border-none shadow-md hover:shadow-xl transition-all duration-300 h-full cursor-pointer", className)}>
            <div className="relative h-48 overflow-hidden">
              <div className="absolute inset-0 bg-slate-900/40 group-hover:bg-slate-900/20 transition-all z-10" />
              {image ? (
                  <img 
                  src={image} 
                  alt={title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 pointer-events-none" 
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
              <span className="inline-flex items-center text-sm font-semibold text-primary hover:text-primary/80 transition-colors">
                Learn More <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
            </CardContent>
          </Card>
        </div>
      </DialogTrigger>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <div className="flex items-center gap-3 mb-2">
            <div className="bg-primary/10 p-2 rounded-lg">
              <Icon className="h-6 w-6 text-primary" />
            </div>
            <DialogTitle className="text-2xl font-bold">{title}</DialogTitle>
          </div>
          <DialogDescription className="text-base leading-relaxed text-foreground/80 pt-2">
            {description}
          </DialogDescription>
        </DialogHeader>
        {details && (
          <div className="mt-6 space-y-4">
            <h4 className="font-bold text-lg border-b pb-2">Key Features & Benefits</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {details.map((detail, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-sm">{detail}</span>
                </div>
              ))}
            </div>
          </div>
        )}
        <div className="mt-8 flex justify-end">
          <Link href="/contact">
            <Button className="font-bold cursor-pointer">Get a Quote for This Service</Button>
          </Link>
        </div>
      </DialogContent>
    </Dialog>
  );
}
