import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { motion } from "framer-motion";
import resBuilding1 from "@assets/generated_images/modern_indian_6-story_residential_apartment_building.png";
import commComplex1 from "@assets/generated_images/elegant_5-story_commercial_complex_in_india.png";
import luxBuilding1 from "@assets/generated_images/modern_8-story_luxury_apartment_in_india.png";
import boutiqueHotel from "@assets/generated_images/modern_indian_4-story_boutique_hotel_architecture.png";
import corporateOffice from "@assets/generated_images/sleek_7-story_indian_corporate_office_building.png";
import educationalInst from "@assets/generated_images/contemporary_5-story_indian_educational_institution_building.png";
// import testModule

export default function Projects() {
  const projects = [
    { 
      name: "Sapphire Heights", 
      type: "Residential", 
      location: "Lucknow", 
      floors: "6 Floors",
      status: "Ongoing",
      image: resBuilding1,
      details: "A premium 6-story residential project featuring our smooth traction elevators with bespoke cabin interiors and touch COP panels."
    },
    { 
      name: "Unity Commercial Hub", 
      type: "Commercial", 
      location: "Lucknow", 
      floors: "5 Floors",
      status: "Completed",
      image: commComplex1,
      details: "State-of-the-art 5-story commercial complex equipped with high-speed glass elevators for a premium visitor experience."
    },
    { 
      name: "Varanasi Heritage Hotel", 
      type: "Boutique Hotel", 
      location: "Varanasi", 
      floors: "4 Floors",
      status: "Completed",
      image: boutiqueHotel,
      details: "Elegant 4-story boutique hotel featuring our ultra-quiet hydraulic passenger lifts with gold-tinted stainless steel finishes."
    },
    { 
      name: "Sunrise Apartments", 
      type: "Residential", 
      location: "Kanpur", 
      floors: "4 Floors",
      status: "Ongoing",
      image: educationalInst,
      details: "Ongoing installation of our quiet-operation home elevators for this modern 4-story residential development."
    },
    { 
      name: "Global Tech Park", 
      type: "Office Complex", 
      location: "Agra", 
      floors: "7 Floors",
      status: "Completed",
      image: corporateOffice,
      details: "Modern 7-story office space with high-traffic commercial elevators featuring advanced destination control systems."
    },
    { 
      name: "The Pearl Residency", 
      type: "Luxury Living", 
      location: "Kanpur", 
      floors: "6 Floors",
      status: "Ongoing",
      image: luxBuilding1,
      details: "Bespoke 6-story project featuring our signature designer cabins and ultra-smooth ride technology."
    }
  ];

  return (
    <div className="pt-24 pb-16">
      <div className="container px-4 mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold font-display mb-6"
          >
            Our Projects
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-muted-foreground"
          >
             A showcase of our specialized installations for mid-rise buildings, tailored for modern Indian urban architecture.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              className="group flex flex-col overflow-hidden rounded-2xl bg-white dark:bg-slate-900 shadow-lg border border-slate-100 dark:border-slate-800 transition-all hover:shadow-2xl"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.name} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-60" />
                <div className="absolute top-4 right-4 flex gap-2">
                  <span className="text-[10px] uppercase font-black px-3 py-1 bg-white/90 text-primary rounded-full shadow-sm">
                    {project.floors}
                  </span>
                  <span className="text-[10px] uppercase font-black px-3 py-1 bg-primary text-white rounded-full shadow-sm">
                    {project.status}
                  </span>
                </div>
              </div>
              
              <div className="p-6 flex flex-col flex-grow">
                <div className="mb-4">
                  <span className="text-[10px] font-bold tracking-widest uppercase text-primary mb-1 block">
                    {project.type} • {project.location}
                  </span>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-primary transition-colors">
                    {project.name}
                  </h3>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                  {project.details}
                </p>
                <div className="mt-auto pt-4 border-t border-slate-50 dark:border-slate-800">
                  <Link href="/contact">
                    <span className="text-xs font-bold text-primary cursor-pointer hover:underline inline-flex items-center gap-2">
                      Request Similar Solution
                    </span>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-20 bg-slate-950 rounded-3xl p-8 md:p-16 text-center relative overflow-hidden">
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary via-transparent to-transparent" />
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Have a similar project in mind?</h2>
              <p className="text-slate-400 mb-10 max-w-2xl mx-auto text-lg">
                  We specialize in vertical mobility for mid-rise developments. From 4-story luxury villas to 8-story commercial hubs, we have the perfect lift for your building.
              </p>
              <Link href="/contact">
                  <Button size="lg" className="h-14 px-10 rounded-full font-bold text-lg shadow-2xl shadow-primary/20">
                    Discuss Your Project
                  </Button>
              </Link>
            </div>
        </div>
      </div>
    </div>
  );
}
