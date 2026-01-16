import { Link } from "wouter";
import { Facebook, Twitter, Instagram, Linkedin, MapPin, Phone, Mail } from "lucide-react";
import logoImg from "@assets/ChatGPT_Image_Jan_16,_2026,_10_09_42_PM_1768581594627.png";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-200 pt-20 pb-10 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="space-y-6">
            <Link href="/">
              <span className="flex items-center cursor-pointer group">
                <img 
                  src={logoImg} 
                  alt="Rize Elevators" 
                  className="h-16 w-auto object-contain brightness-0 invert"
                />
              </span>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
              Redefining vertical mobility across India with cutting-edge technology and an uncompromising commitment to passenger safety.
            </p>
            <div className="flex gap-4 pt-2">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="bg-slate-900 w-10 h-10 rounded-lg flex items-center justify-center text-slate-400 hover:text-white hover:bg-primary hover:-translate-y-1 transition-all"
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-white text-lg mb-8 relative inline-block">
              Navigation
              <span className="absolute -bottom-2 left-0 w-8 h-1 bg-primary rounded-full" />
            </h4>
            <ul className="space-y-4">
              {["Home", "About Us", "Services", "Projects", "Contact"].map((item) => (
                <li key={item}>
                  <Link href={item === "Home" ? "/" : `/${item.toLowerCase().replace(" ", "-")}`}>
                    <span className="text-slate-400 hover:text-primary hover:translate-x-1 transition-all text-sm cursor-pointer inline-block">
                      {item}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-white text-lg mb-8 relative inline-block">
              Solutions
              <span className="absolute -bottom-2 left-0 w-8 h-1 bg-primary rounded-full" />
            </h4>
            <ul className="space-y-4">
              {[
                "New Installations",
                "Maintenance & AMC",
                "Modernization",
                "Repair Services",
                "Home Elevators"
              ].map((item) => (
                <li key={item} className="text-slate-400 text-sm hover:text-primary cursor-pointer transition-all hover:translate-x-1">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-white text-lg mb-8 relative inline-block">
              Contact
              <span className="absolute -bottom-2 left-0 w-8 h-1 bg-primary rounded-full" />
            </h4>
            <ul className="space-y-5">
              <li className="flex items-start gap-4 group">
                <div className="bg-slate-900 p-2.5 rounded-lg text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                  <MapPin className="h-5 w-5 shrink-0" />
                </div>
                <span className="text-slate-400 text-sm pt-0.5">123 Business Park, Tech City,<br />Mumbai, India 400001</span>
              </li>
              <li className="flex items-center gap-4 group">
                <div className="bg-slate-900 p-2.5 rounded-lg text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                  <Phone className="h-5 w-5 shrink-0" />
                </div>
                <span className="text-slate-400 text-sm">+91 98765 43210</span>
              </li>
              <li className="flex items-center gap-4 group">
                <div className="bg-slate-900 p-2.5 rounded-lg text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                  <Mail className="h-5 w-5 shrink-0" />
                </div>
                <span className="text-slate-400 text-sm">info@rizeelevators.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-500 text-xs tracking-widest uppercase font-bold">
            © {new Date().getFullYear()} Rize Elevators. Vertical Standards Defined.
          </p>
          <div className="flex gap-8 text-xs font-bold text-slate-500 uppercase tracking-widest">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
