import { motion } from "framer-motion";
import { CheckCircle2, Shield, Users, Target } from "lucide-react";

export default function About() {
  return (
    <div className="pt-24 pb-16">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold font-display mb-6">About Rize Elevators</h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            We are a leading elevator solutions provider committed to delivering safety, innovation, and reliability in every vertical journey.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Our Story</h2>
            <p className="text-muted-foreground leading-relaxed">
              Founded with a vision to revolutionize the vertical transportation industry in India, Rize Elevators has grown from a small service provider to a trusted name in the sector. 
              <br /><br />
              With over 15 years of industry experience, our team of dedicated engineers and technicians understands the complexities of modern buildings. We don't just install lifts; we engineer experiences that are smooth, safe, and efficient.
            </p>
            <div className="grid grid-cols-2 gap-6 pt-4">
               <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-lg">
                 <h3 className="font-bold text-3xl text-primary mb-1">15+</h3>
                 <p className="text-sm text-muted-foreground">Years Experience</p>
               </div>
               <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-lg">
                 <h3 className="font-bold text-3xl text-primary mb-1">500+</h3>
                 <p className="text-sm text-muted-foreground">Projects Delivered</p>
               </div>
            </div>
          </div>
          <div className="bg-slate-200 h-[400px] rounded-2xl overflow-hidden relative">
            {/* Placeholder for About Us Image - or re-use existing one */}
             <div className="absolute inset-0 bg-gradient-to-br from-slate-300 to-slate-400 flex items-center justify-center">
                <span className="text-slate-500 font-bold text-xl">About Us Image</span>
             </div>
          </div>
        </div>

        {/* Mission Vision Values */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Our Mission",
              icon: Target,
              desc: "To provide safe, efficient, and reliable vertical transportation solutions that enhance the quality of life for our customers."
            },
            {
              title: "Our Vision",
              icon: Users,
              desc: "To be the most trusted elevator company in India, known for technical excellence and unwavering commitment to safety."
            },
            {
              title: "Core Values",
              icon: Shield,
              desc: "Integrity, Safety, Quality, and Customer Satisfaction are at the heart of everything we do."
            }
          ].map((item, i) => (
            <div key={i} className="p-8 rounded-2xl border border-slate-100 dark:border-slate-800 hover:shadow-lg transition-all bg-white dark:bg-slate-900">
              <div className="h-12 w-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                <item.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">{item.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
