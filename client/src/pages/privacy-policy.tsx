import { motion } from "framer-motion";

export default function PrivacyPolicy() {
  return (
    <div className="pt-24 pb-16">
      <div className="container px-4 mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white dark:bg-slate-900 p-8 md:p-12 rounded-2xl shadow-xl border border-slate-100 dark:border-slate-800"
        >
          <h1 className="text-3xl md:text-4xl font-bold font-display mb-8">Privacy Policy</h1>
          <p className="text-sm text-muted-foreground mb-8 text-right">Last Updated: January 17, 2026</p>
          
          <div className="space-y-8 text-slate-700 dark:text-slate-300 leading-relaxed">
            <section>
              <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-4">1. Information We Collect</h2>
              <p>At Rize Elevators, we collect information that you provide directly to us when you request a quote, schedule maintenance, or contact our support team. This may include your name, email address, phone number, and building location.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-4">2. How We Use Your Information</h2>
              <p>We use the collected information to:</p>
              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li>Provide and maintain our elevator services.</li>
                <li>Process service requests and send related information.</li>
                <li>Communicate with you about updates, safety alerts, and promotions.</li>
                <li>Improve our website and customer service experience.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-4">3. Data Security</h2>
              <p>We implement industry-standard security measures to protect your personal information. However, no method of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee absolute security.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-4">4. Sharing of Information</h2>
              <p>We do not sell or rent your personal information to third parties. We may share information with trusted service providers who assist us in operating our business, so long as those parties agree to keep this information confidential.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-4">5. Your Rights</h2>
              <p>You have the right to request access to the personal information we hold about you and to ask for corrections or deletion of your data. Please contact us at info@rizeelevators.com for such requests.</p>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
