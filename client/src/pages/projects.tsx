import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function Projects() {
  const projects = [
    { name: "Skyline Towers", type: "Commercial", location: "Mumbai", status: "Completed" },
    { name: "Green Valley Residency", type: "Residential", location: "Pune", status: "Completed" },
    { name: "Tech Park One", type: "Office Complex", location: "Bangalore", status: "Ongoing" },
    { name: "City Mall Upgrade", type: "Modernization", location: "Delhi", status: "Completed" },
    { name: "Ocean Heights", type: "Luxury Apartments", location: "Mumbai", status: "Completed" },
    { name: "Hospitality Hub", type: "Hotel", location: "Goa", status: "Ongoing" }
  ];

  return (
    <div className="pt-24 pb-16">
      <div className="container px-4 mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-bold font-display mb-6">Our Projects</h1>
          <p className="text-lg text-muted-foreground">
             A showcase of our recent installations and modernization projects across India.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <div key={i} className="group relative overflow-hidden rounded-xl bg-slate-100 dark:bg-slate-800 aspect-[4/3]">
              {/* Placeholder for Project Image */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent z-10" />
              <div className="absolute inset-0 bg-slate-300 dark:bg-slate-700 group-hover:scale-105 transition-transform duration-500" />
              
              <div className="absolute bottom-0 left-0 p-6 z-20 w-full">
                <div className="flex justify-between items-end mb-2">
                   <h3 className="text-xl font-bold text-white">{project.name}</h3>
                   <span className="text-xs font-semibold px-2 py-1 bg-primary text-white rounded-full">{project.status}</span>
                </div>
                <p className="text-slate-300 text-sm">{project.type} • {project.location}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 bg-primary/5 rounded-2xl p-8 md:p-12 text-center">
            <h2 className="text-2xl font-bold mb-4">Have a project in mind?</h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                We work with builders, architects, and property managers to deliver optimal vertical transportation solutions.
            </p>
            <Link href="/contact">
                <Button size="lg">Discuss Your Project</Button>
            </Link>
        </div>
      </div>
    </div>
  );
}
