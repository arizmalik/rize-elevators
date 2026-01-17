import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, Phone, ShieldCheck, Users, PenTool, TrendingUp, Clock } from "lucide-react";
import { Link } from "wouter";
import ServiceCard from "@/components/ui/service-card";
import elevatorHero from "@assets/generated_images/modern_glass_elevator_in_high-rise.png";
import installationImg from "@assets/generated_images/elevator_installation_engineers.png";
import maintenanceImg from "@assets/generated_images/elevator_maintenance_technician.png";
import luxuryImg from "@assets/generated_images/luxury_elevator_interior.png";

export default function Home() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
        {/* Background Image with Slow Zoom & Pan Animation */}
        <div className="absolute inset-0 z-0">
          <motion.img
            src={elevatorHero}
            alt="Modern Elevator"
            className="w-full h-full object-cover"
            animate={{
              scale: [1, 1.1, 1],
              x: [0, -20, 0],
              y: [0, -10, 0],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
          />
          <div className="absolute inset-0 bg-slate-900/60 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />
        </div>

        {/* Content */}
        <div className="container relative z-10 px-4 text-center md:text-left pt-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-3xl"
          >
            <div className="inline-block px-4 py-1.5 mb-6 border border-white/30 rounded-full bg-white/10 backdrop-blur-sm">
              <span className="text-primary-foreground font-medium text-sm tracking-wide uppercase">
                Premier Elevator Solutions
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-white mb-6 leading-tight">
              Rising Standards in <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-200">
                Vertical Transportation
              </span>
            </h1>
            <p className="text-lg md:text-xl text-slate-200 mb-8 max-w-2xl font-light leading-relaxed">
              We provide world-class elevator installation, maintenance, and modernization services. Experience safety, comfort, and reliability with Rize Elevators.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Link href="/contact">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-8 h-12 text-lg rounded-full cursor-pointer">
                  Get a Free Quote
                </Button>
              </Link>
              <Link href="/projects">
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-slate-900 px-8 h-12 text-lg rounded-full backdrop-blur-sm bg-white/5 cursor-pointer">
                  View Our Projects
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Intro Stats Section */}
      <section className="py-12 bg-white dark:bg-slate-900 relative z-20 -mt-10 mx-4 md:mx-auto max-w-6xl rounded-2xl shadow-xl border border-slate-100 dark:border-slate-800">
        <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-slate-100 dark:divide-slate-800">
          {[
            { label: "Years Experience", value: "15+", icon: Clock },
            { label: "Projects Completed", value: "500+", icon: CheckCircle2 },
            { label: "Happy Clients", value: "100%", icon: Users },
            { label: "Safety Rating", value: "A+", icon: ShieldCheck },
          ].map((stat, i) => (
            <div key={i} className="flex flex-col items-center justify-center p-4 text-center">
              <stat.icon className="h-8 w-8 text-primary mb-3 opacity-80" />
              <span className="text-3xl font-bold text-slate-900 dark:text-white mb-1 block">{stat.value}</span>
              <span className="text-sm text-muted-foreground uppercase tracking-wider font-medium">{stat.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-24 bg-slate-50 dark:bg-slate-950">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900 dark:text-white">Our Core Services</h2>
            <p className="text-muted-foreground text-lg">
              Comprehensive elevator solutions tailored to your specific needs, from residential lifts to commercial skyscrapers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ServiceCard
              title="Installation"
              description="Expert installation of passenger, freight, and home elevators. We ensure precision engineering and strict safety compliance."
              icon={PenTool}
              image={installationImg}
            />
            <ServiceCard
              title="Maintenance & AMC"
              description="24/7 support and preventive maintenance packages to keep your elevators running smoothly and minimize downtime."
              icon={ShieldCheck}
              image={maintenanceImg}
            />
            <ServiceCard
              title="Modernization"
              description="Upgrade your aging elevators with the latest technology, improved aesthetics, and energy-efficient systems."
              icon={TrendingUp}
              image={luxuryImg}
            />
          </div>
          
          <div className="mt-12 text-center">
             <Link href="/services">
                <Button variant="outline" size="lg" className="group cursor-pointer">
                  View All Services <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
             </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-white dark:bg-slate-900">
        <div className="container px-4 mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">
            <div className="w-full md:w-1/2">
               <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                 <img src={maintenanceImg} alt="Technician working" className="w-full h-auto object-cover" />
                 <div className="absolute inset-0 bg-primary/10 mix-blend-overlay" />
               </div>
            </div>
            <div className="w-full md:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-900 dark:text-white">
                Why Choose <span className="text-primary">Rize Elevators?</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                We don't just sell elevators; we build long-term relationships based on trust, quality, and exceptional service.
              </p>

              <div className="space-y-6">
                {[
                  { title: "Safety First", desc: "Rigorous safety protocols and regular inspections." },
                  { title: "Expert Engineers", desc: "Highly trained and certified technical team." },
                  { title: "24/7 Support", desc: "Round-the-clock emergency assistance." },
                  { title: "Premium Quality", desc: "Top-tier components and materials used." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <CheckCircle2 className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-1">{item.title}</h4>
                      <p className="text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pattern-grid-lg" /> 
        <div className="container px-4 mx-auto relative z-10 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Ready to Elevate Your Building?</h2>
          <p className="text-blue-100 text-xl max-w-2xl mx-auto mb-10">
            Contact us today for a free consultation and quote. Let's discuss your vertical transportation needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" variant="secondary" className="h-14 px-8 text-lg font-bold cursor-pointer">
                Get a Quote
              </Button>
            </Link>
            <Button size="lg" variant="outline" className="h-14 px-8 text-lg text-white border-white hover:bg-white hover:text-primary backdrop-blur-sm bg-white/10">
              <Phone className="mr-2 h-5 w-5" /> Call +91 70525 49235
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
