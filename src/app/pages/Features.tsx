import { motion } from "motion/react";
import { Navigation } from "../components/Navigation";
import { Gauge, Gamepad2, Globe, Cpu, Eye, Radio } from "lucide-react";

export default function Features() {
  const features = [
    {
      icon: Gauge,
      title: "1:1 Scale Simulation",
      description: "Every cockpit, instrument, and control is modeled to exact real-world specifications. Experience authentic military and space vehicle interfaces.",
      color: "from-blue-500 to-indigo-600"
    },
    {
      icon: Cpu,
      title: "Realistic Physics Engine",
      description: "Advanced aerodynamics, orbital mechanics, and atmospheric modeling. Physics and training are your only allies in mastering these machines.",
      color: "from-orange-500 to-amber-600"
    },
    {
      icon: Gamepad2,
      title: "VR-Optimized Controls",
      description: "Hand-tracking and HOTAS support for immersive control. Reach out and interact with switches, throttles, and navigation systems naturally.",
      color: "from-blue-600 to-blue-700"
    },
    {
      icon: Globe,
      title: "Global Environments",
      description: "Fly carrier operations in the Pacific, test flights over Edwards AFB, or dock with the Lunar Gateway in cislunar space.",
      color: "from-indigo-500 to-purple-600"
    },
    {
      icon: Eye,
      title: "Mission Replay System",
      description: "Review your performance from multiple camera angles. Analyze approach vectors, G-forces, and decision points frame-by-frame.",
      color: "from-orange-600 to-red-600"
    },
    {
      icon: Radio,
      title: "Air Traffic Control",
      description: "Realistic radio communications with procedural ATC. Follow clearances, read back instructions, and coordinate with tower and approach.",
      color: "from-blue-500 to-cyan-600"
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-950/50 via-black to-black" aria-hidden="true" />

        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl mb-6 bg-gradient-to-r from-blue-400 via-orange-400 to-yellow-300 bg-clip-text text-transparent"
          >
            Uncompromising Realism
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto"
          >
            Terminal Guidance delivers a NASA-inspired VR training experience where every system, procedure, and physical law matters.
          </motion.p>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.article
                  key={feature.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-zinc-900 p-8 rounded-sm border border-zinc-800 hover:border-blue-700 transition-colors"
                >
                  <div className={`w-14 h-14 rounded-sm bg-gradient-to-br ${feature.color} flex items-center justify-center mb-6`}>
                    <Icon className="w-7 h-7 text-white" aria-hidden="true" />
                  </div>
                  <h3 className="text-2xl mb-4">{feature.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{feature.description}</p>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Technical Details */}
      <section className="py-24 px-6 bg-zinc-950">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl mb-12 text-center">Built for Pilots, By Pilots</h2>

            <div className="space-y-8">
              <div className="border-l-4 border-blue-600 pl-6">
                <h3 className="text-2xl mb-3 text-blue-400">Authentic Flight Models</h3>
                <p className="text-gray-300 leading-relaxed">
                  Our physics engine simulates thrust vectoring, fly-by-wire systems, and center-of-gravity shifts.
                  The F/A-18 handles like the real aircraft—responsive, powerful, and unforgiving of sloppy inputs.
                </p>
              </div>

              <div className="border-l-4 border-orange-600 pl-6">
                <h3 className="text-2xl mb-3 text-orange-400">Procedural Training</h3>
                <p className="text-gray-300 leading-relaxed">
                  Master checklists for startup, taxi, takeoff, and emergency procedures. Skip a step or miss a callout,
                  and the simulation responds realistically—just like the real aircraft would.
                </p>
              </div>

              <div className="border-l-4 border-indigo-600 pl-6">
                <h3 className="text-2xl mb-3 text-indigo-400">Orbital Mechanics</h3>
                <p className="text-gray-300 leading-relaxed">
                  Navigate cislunar space using real Hohmann transfers, phasing orbits, and rendezvous profiles.
                  The Orion spacecraft docking module teaches the same procedures NASA astronauts use.
                </p>
              </div>
            </div>
          </motion.div>
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
