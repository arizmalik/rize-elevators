import ServiceCard from "@/components/ui/service-card";
import { PenTool, ShieldCheck, TrendingUp, Home, Building2, Wrench, Package } from "lucide-react";
import installationImg from "@assets/generated_images/elevator_installation_engineers.png";
import maintenanceImg from "@assets/generated_images/elevator_maintenance_technician.png";
import luxuryImg from "@assets/generated_images/luxury_elevator_interior.png";
import modernizationImg from "@assets/generated_images/elevator_cop_touch_panel_interface.png";
import repairImg from "@assets/generated_images/technician_at_elevator_control_panel.png";
import residentialImg from "@assets/generated_images/modern_home_elevator_in_residence.png";
import freightImg from "@assets/generated_images/industrial_heavy-duty_freight_elevator_interior.png";

export default function Services() {
  const services = [
    {
      title: "Commercial Elevators",
      desc: "Our commercial elevator solutions are engineered for high-traffic environments such as corporate offices, shopping malls, and luxury hotels. We prioritize rapid transit times, superior ride quality, and advanced traffic management systems to ensure seamless floor-to-floor mobility for your visitors and employees.",
      icon: Building2,
      image: luxuryImg,
      details: [
        "High-speed operation (up to 4.0 m/s)",
        "Destination Control Systems (DCS)",
        "Advanced traffic management algorithms",
        "Energy-efficient regenerative drives",
        "Premium cabin interior finishes",
        "Group control for multiple elevators"
      ]
    },
    {
      title: "Residential Elevators",
      desc: "Elevate your living experience with our bespoke home elevators. Designed to integrate seamlessly with your home's architecture, our residential lifts offer quiet operation, space-saving designs, and customizable luxury finishes. Perfect for multi-story villas, penthouses, and high-end apartment complexes.",
      icon: Home,
      image: residentialImg,
      details: [
        "Minimal pit and headroom requirements",
        "Ultra-quiet gearless traction technology",
        "Customizable interior aesthetics",
        "Battery backup for power failures",
        "Single-phase power compatibility",
        "Compact machine-room-less (MRL) design"
      ]
    },
    {
      title: "Freight Elevators",
      desc: "Built for the most demanding industrial environments, our freight elevators are designed to transport heavy loads with maximum durability and safety. Ideal for warehouses, factories, and logistics centers, these lifts feature rugged construction and high weight capacities to streamline your material handling operations.",
      icon: Package,
      image: freightImg,
      details: [
        "High load capacity (up to 5,000kg+)",
        "Reinforced stainless steel checkered flooring",
        "Heavy-duty vertical or horizontal sliding doors",
        "Rugged wall protection bumpers",
        "Precision leveling for forklift loading",
        "Explosion-proof options for chemical plants"
      ]
    },
    {
      title: "Installation Services",
      desc: "We provide end-to-end installation services managed by senior project engineers. Our process includes rigorous site surveys, precision shaft preparation, and a commitment to completing every project on schedule while strictly adhering to international safety standards and local building codes.",
      icon: PenTool,
      image: installationImg,
      details: [
        "Full project management from start to finish",
        "Certified professional installation teams",
        "Comprehensive safety audits",
        "Final commissioning and load testing",
        "Training for building staff",
        "Warranty and initial maintenance coverage"
      ]
    },
    {
      title: "Maintenance & AMC",
      desc: "Protect your investment with our comprehensive Annual Maintenance Contracts (AMC). Our preventive maintenance program includes 24/7 technical support, regular lubrication, critical component testing, and proactive part replacement to maximize uptime and extend the lifespan of your vertical transportation assets.",
      icon: ShieldCheck,
      image: maintenanceImg,
      details: [
        "Regular monthly preventive inspections",
        "24/7 emergency breakdown support",
        "Priority response times",
        "Genuine spare parts availability",
        "Annual safety certifications",
        "Detailed digital maintenance logs"
      ]
    },
    {
      title: "Modernization",
      desc: "Transform your legacy elevators with our modernization packages. By upgrading aging control systems, installing energy-efficient drive units, and refreshing cabin interiors with touch-sensitive COP panels, we significantly improve safety, reliability, and the overall value of your building.",
      icon: TrendingUp,
      image: modernizationImg,
      details: [
        "Full controller and drive system upgrades",
        "Aesthetic cabin interior renovation",
        "New high-tech touch COP/LOP panels",
        "Compliance with latest safety codes",
        "Significant energy savings (up to 40%)",
        "Improved ride quality and leveling accuracy"
      ]
    },
    {
      title: "Repair & Troubleshooting",
      desc: "Our rapid-response breakdown team is equipped with the latest diagnostic tools to resolve technical issues swiftly. We specialize in troubleshooting complex electronic and mechanical failures across all major elevator brands, ensuring your system is back in operation with minimal disruption.",
      icon: Wrench,
      image: repairImg,
      details: [
        "On-site diagnostic within hours",
        "Specialists in multi-brand systems",
        "Advanced electronic PCB repair",
        "Mechanical drive and motor overhaul",
        "Quick sourcing of rare spare parts",
        "Root cause analysis to prevent recurrence"
      ]
    }
  ];

  return (
    <div className="pt-24 pb-16">
      <div className="container px-4 mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-bold font-display mb-6">Our Services</h1>
          <p className="text-lg text-muted-foreground">
            From precision installation to 24/7 technical support, we offer a complete range of vertical transportation solutions customized for every building type across India.
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
              details={service.details}
              className="h-full"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
