import { motion } from "framer-motion";

export default function TermsOfService() {
  return (
    <div className="pt-24 pb-16">
      <div className="container px-4 mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white dark:bg-slate-900 p-8 md:p-12 rounded-2xl shadow-xl border border-slate-100 dark:border-slate-800"
        >
          <h1 className="text-3xl md:text-4xl font-bold font-display mb-8">Terms of Service</h1>
          <p className="text-sm text-muted-foreground mb-8 text-right">Last Updated: January 17, 2026</p>
          
          <div className="space-y-8 text-slate-700 dark:text-slate-300 leading-relaxed">
            <section>
              <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-4">1. Acceptance of Terms</h2>
              <p>By accessing or using the Rize Elevators website and services, you agree to be bound by these Terms of Service. If you do not agree with any part of these terms, you may not use our services.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-4">2. Service Description</h2>
              <p>Rize Elevators provides elevator installation, maintenance, repair, and modernization services. All services are subject to specific contract agreements which override these general website terms in case of conflict.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-4">3. User Responsibilities</h2>
              <p>Users agree to provide accurate and complete information when requesting quotes or services. Misuse of the website or interference with its operation is strictly prohibited.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-4">4. Intellectual Property</h2>
              <p>All content on this website, including text, graphics, logos, and images, is the property of Rize Elevators and is protected by intellectual property laws. Unauthorized use of this content is prohibited.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-4">5. Limitation of Liability</h2>
              <p>Rize Elevators shall not be liable for any indirect, incidental, or consequential damages arising out of the use or inability to use our website or services.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-4">6. Governing Law</h2>
              <p>These terms shall be governed by and construed in accordance with the laws of India. Any disputes arising under these terms shall be subject to the exclusive jurisdiction of the courts in Kanpur.</p>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
