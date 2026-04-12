import { motion } from "motion/react";
import { Navigation } from "../components/Navigation";
import { Check, Bell } from "lucide-react";
import { useState } from "react";

export default function Pricing() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulated subscription - in production, this would connect to an email service
    setSubscribed(true);
    setEmail("");
  };

  const features = [
    "All 4 vehicle simulations",
    "Career progression system",
    "Mission replay system",
    "Hand tracking support",
    "HOTAS controller support",
    "Regular content updates",
    "Cloud save synchronization",
    "Achievement system",
    "Lifetime access"
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />

      {/* Hero */}
      <section className="pt-32 pb-16 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-950/30 via-black to-black" aria-hidden="true" />

        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl mb-6 bg-gradient-to-r from-blue-400 via-orange-400 to-yellow-300 bg-clip-text text-transparent"
          >
            Get Terminal Guidance
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-300"
          >
            One-time purchase. Lifetime access. No subscriptions.
          </motion.p>
        </div>
      </section>

      {/* Pricing Card */}
      <section className="py-12 px-6">
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-gradient-to-br from-blue-900/20 to-indigo-900/20 p-8 md:p-12 rounded-sm border-2 border-blue-600"
          >
            <div className="text-center mb-8">
              <div className="text-sm text-blue-400 tracking-widest uppercase mb-2">Early Access</div>
              <div className="flex flex-col items-center gap-2 mb-4">
                <span className="text-3xl text-gray-500 line-through">$49.99</span>
                <div className="flex items-end justify-center gap-2">
                  <span className="text-6xl md:text-7xl text-orange-400">FREE</span>
                </div>
              </div>
              <p className="text-gray-300 text-lg">
                Free for early access! Limited time only.
              </p>
            </div>

            <div className="space-y-4 mb-8">
              {features.map((feature, index) => (
                <div key={feature} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center flex-shrink-0">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <span className={`text-gray-200 ${index !== 0 ? 'line-through opacity-50' : ''}`}>{feature}</span>
                </div>
              ))}
            </div>

            <a
              href="https://claude.ai/public/artifacts/7cb9ad61-e2ea-4a9a-a7aa-c0a0fc975d9a"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full py-4 bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-orange-600 hover:to-orange-700 text-white text-center rounded-sm text-lg transition-all shadow-lg shadow-blue-900/50 hover:shadow-orange-900/50 focus:outline-none focus:ring-4 focus:ring-blue-400"
            >
              Get Early Access
            </a>

            <p className="text-center text-gray-400 text-sm mt-4">
              30-day money-back guarantee. Compatible with Meta Quest, Valve Index, and more.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 px-6 bg-zinc-950">
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <Bell className="w-12 h-12 text-blue-400 mx-auto mb-4" />
            <h2 className="text-3xl md:text-4xl mb-4">Stay Updated</h2>
            <p className="text-gray-300 mb-8 text-lg">
              Get notified about new features, vehicle releases, and special offers
            </p>

            {!subscribed ? (
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="flex-1 px-6 py-3 bg-zinc-900 border border-zinc-700 rounded-sm text-white placeholder-gray-500 focus:outline-none focus:ring-4 focus:ring-blue-400 focus:border-blue-600"
                  aria-label="Email address"
                />
                <button
                  type="submit"
                  className="px-8 py-3 bg-blue-600 hover:bg-orange-600 text-white rounded-sm transition-colors focus:outline-none focus:ring-4 focus:ring-blue-400 whitespace-nowrap"
                >
                  Subscribe
                </button>
              </form>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-6 bg-green-950/20 border border-green-900/30 rounded-sm max-w-lg mx-auto"
              >
                <div className="flex items-center justify-center gap-3 text-green-400">
                  <Check className="w-6 h-6" />
                  <span className="text-lg">Thanks for subscribing!</span>
                </div>
                <p className="text-gray-300 mt-2">Check your email for confirmation.</p>
              </motion.div>
            )}

            <p className="text-gray-500 text-sm mt-4">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </motion.div>
        </div>
      </section>

      {/* FAQ Preview */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl mb-4">Questions?</h2>
            <p className="text-gray-300 text-lg">
              Check out our comprehensive FAQ or contact support
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <a
              href="/faq"
              className="p-6 bg-zinc-900 border border-zinc-800 hover:border-blue-700 rounded-sm transition-colors focus:outline-none focus:ring-4 focus:ring-blue-400"
            >
              <h3 className="text-xl mb-2 text-blue-400">View FAQ</h3>
              <p className="text-gray-400">Find answers to common questions about requirements, gameplay, and more</p>
            </a>

            <a
              href="https://linkedin.com/in/gilbertanderson"
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 bg-zinc-900 border border-zinc-800 hover:border-blue-700 rounded-sm transition-colors focus:outline-none focus:ring-4 focus:ring-blue-400"
            >
              <h3 className="text-xl mb-2 text-blue-400">Contact Support</h3>
              <p className="text-gray-400">Get help from our team for technical or account issues</p>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-blue-900/30 py-8 px-6 bg-gradient-to-b from-black via-blue-950/20 to-zinc-950">
        <div className="max-w-7xl mx-auto text-center text-sm text-gray-500">
          <p>TERMINAL GUIDANCE © 2026</p>
        </div>
      </footer>
    </div>
  );
}
