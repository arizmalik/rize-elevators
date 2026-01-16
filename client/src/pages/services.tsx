import ServiceCard from "@/components/ui/service-card";
import { PenTool, ShieldCheck, TrendingUp, Home, Building2, Wrench } from "lucide-react";
import installationImg from "@assets/generated_images/elevator_installation_engineers.png";
import maintenanceImg from "@assets/generated_images/elevator_maintenance_technician.png";
import luxuryImg from "@assets/generated_images/luxury_elevator_interior.png";
import modernizationImg from "@assets/generated_images/modernized_elevator_touch_panel.png";
import repairImg from "@assets/generated_images/technician_at_elevator_control_panel.png";
import residentialImg from "@assets/generated_images/modern_home_elevator_in_residence.png";

export default function Services() {
  const services = [
    {
      title: "Commercial Elevators",
      desc: "High-speed, high-capacity elevators designed for office buildings, malls, and hotels. Optimized for traffic flow and energy efficiency.",
      icon: Building2,
      image: luxuryImg
    },
    {
      title: "Residential Elevators",
      desc: "Compact, quiet, and stylish lifts for apartments and private homes. Custom finishes to match your interior design.",
      icon: Home,
      image: residentialImg
    },
    {
      title: "Installation Services",
      desc: "End-to-end installation managed by certified engineers. We ensure timely completion and strict adherence to safety codes.",
      icon: PenTool,
      image: installationImg
    },
    {
      title: "Maintenance & AMC",
      desc: "Comprehensive Annual Maintenance Contracts. Regular inspections, lubrication, and adjustments to prevent breakdowns.",
      icon: ShieldCheck,
      image: maintenanceImg
    },
    {
      title: "Modernization",
      desc: "Revamp your old elevators. We upgrade control systems, cabin aesthetics, and door operators to make them feel brand new.",
      icon: TrendingUp,
      image: modernizationImg
    },
    {
      title: "Repair & Troubleshooting",
      desc: "Fast response breakdown service. Our expert technicians can diagnose and fix issues with any elevator brand.",
      icon: Wrench,
      image: repairImg
    }
  ];

  return (
    <div className="pt-24 pb-16">
      <div className="container px-4 mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-bold font-display mb-6">Our Services</h1>
          <p className="text-lg text-muted-foreground">
            From installation to maintenance, we offer a complete range of vertical transportation solutions customized for your building.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.desc}
              icon={service.icon}
              image={service.image}
              className="h-full"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
