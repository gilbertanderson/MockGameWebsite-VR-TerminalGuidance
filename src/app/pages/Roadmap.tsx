import { motion } from "motion/react";
import { Plane, Check, Clock, Sparkles, ChevronRight } from "lucide-react";
import { Navigation } from "../components/Navigation";

export default function Roadmap() {
  const phases = [
    {
      phase: "Phase 1",
      title: "Early Access Launch",
      status: "current",
      quarter: "Q2 2026",
      description: "Initial release with core aircraft and training missions",
      features: [
        { name: "F/A-18 Super Hornet - Complete carrier operations", completed: true },
        { name: "C-130 Hercules - Cargo and tactical missions", completed: true },
        { name: "UH-60 Black Hawk - Helicopter flight dynamics", completed: true },
        { name: "Orion Spacecraft - Artemis II lunar mission", completed: true },
        { name: "Career progression system", completed: true },
        { name: "VR optimization for Meta Quest 3 & PSVR2", completed: false }
      ]
    },
    {
      phase: "Phase 2",
      title: "Expanded Training",
      status: "planned",
      quarter: "Q3 2026",
      description: "Additional aircraft variants and advanced scenarios",
      features: [
        { name: "F-35C Lightning II - Next-gen carrier operations", completed: false },
        { name: "KC-135 Stratotanker - Aerial refueling missions", completed: false },
        { name: "Test Pilot School curriculum expansion", completed: false },
        { name: "Weather system with realistic flight conditions", completed: false },
        { name: "Night vision and instrument-only flight modes", completed: false },
        { name: "Advanced failure simulation and emergency procedures", completed: false }
      ]
    },
    {
      phase: "Phase 3",
      title: "Multiplayer Training",
      status: "planned",
      quarter: "Q4 2026",
      description: "Cooperative and competitive flight training",
      features: [
        { name: "2-4 player cooperative missions", completed: false },
        { name: "Formation flying with real-time communication", completed: false },
        { name: "Competitive carrier landing challenges", completed: false },
        { name: "Instructor-student training mode", completed: false },
        { name: "Global leaderboards and achievements", completed: false },
        { name: "Replay system with camera controls", completed: false }
      ]
    },
    {
      phase: "Phase 4",
      title: "Extended Missions",
      status: "future",
      quarter: "2027",
      description: "New spacecraft and advanced space operations",
      features: [
        { name: "ISS docking operations with Dragon capsule", completed: false },
        { name: "Space Shuttle legacy missions", completed: false },
        { name: "Mars mission scenarios with Starship", completed: false },
        { name: "EVA (spacewalk) training simulations", completed: false },
        { name: "Mission editor for custom scenarios", completed: false },
        { name: "Historical mission recreations", completed: false }
      ]
    }
  ];

  const communityRequests = [
    "Additional helicopter variants (CH-47 Chinook, AH-64 Apache)",
    "Full cockpit interaction in VR with hand tracking",
    "Dynamic campaign mode with branching career paths",
    "Support for flight sim peripherals (HOTAS, rudder pedals)",
    "Photo mode with free camera and filters"
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-950/40 via-black to-black" />
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 right-1/4 w-96 h-96 bg-orange-600 rounded-full blur-[120px]" />
          <div className="absolute bottom-20 left-1/4 w-96 h-96 bg-blue-600 rounded-full blur-[120px]" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative max-w-4xl mx-auto text-center"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-block mb-6"
          >
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-600 to-orange-600 flex items-center justify-center">
              <Sparkles className="w-10 h-10 text-white" />
            </div>
          </motion.div>

          <h1 className="text-5xl md:text-7xl mb-6 bg-gradient-to-r from-blue-400 via-orange-400 to-yellow-300 bg-clip-text text-transparent">
            Development Roadmap
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
            Our commitment to creating the ultimate VR flight simulation experience
          </p>
        </motion.div>
      </section>

      {/* Timeline */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          {phases.map((phase, phaseIndex) => (
            <motion.div
              key={phase.phase}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: phaseIndex * 0.1 }}
              className="mb-16 last:mb-0"
            >
              {/* Phase Header */}
              <div className="flex flex-col md:flex-row items-start md:items-center gap-4 mb-6">
                <div className="flex items-center gap-4">
                  <div className={`w-3 h-3 rounded-full ${
                    phase.status === 'current' ? 'bg-orange-500 animate-pulse' :
                    phase.status === 'planned' ? 'bg-blue-500' :
                    'bg-gray-600'
                  }`} />
                  <span className="text-sm uppercase tracking-wider text-gray-400">{phase.phase}</span>
                </div>
                <ChevronRight className="hidden md:block w-5 h-5 text-gray-600" />
                <h2 className="text-3xl md:text-4xl text-blue-300">{phase.title}</h2>
                <div className="ml-auto">
                  <span className={`px-4 py-2 rounded-full text-sm ${
                    phase.status === 'current' ? 'bg-orange-600/20 text-orange-400 border border-orange-600/30' :
                    phase.status === 'planned' ? 'bg-blue-600/20 text-blue-400 border border-blue-600/30' :
                    'bg-gray-600/20 text-gray-400 border border-gray-600/30'
                  }`}>
                    {phase.quarter}
                  </span>
                </div>
              </div>

              <p className="text-xl text-gray-400 mb-6">{phase.description}</p>

              {/* Features Grid */}
              <div className="bg-gradient-to-br from-blue-950/20 to-transparent border border-blue-900/30 rounded-lg p-8">
                <div className="grid md:grid-cols-2 gap-4">
                  {phase.features.map((feature, index) => (
                    <motion.div
                      key={feature.name}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.05 }}
                      className="flex items-start gap-3"
                    >
                      <div className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center ${
                        feature.completed ? 'bg-green-600' : 'bg-gray-700'
                      }`}>
                        {feature.completed ? (
                          <Check className="w-4 h-4 text-white" />
                        ) : (
                          <Clock className="w-3 h-3 text-gray-400" />
                        )}
                      </div>
                      <span className={`${
                        feature.completed ? 'text-gray-300' : 'text-gray-500'
                      }`}>
                        {feature.name}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Community Requests */}
      <section className="py-20 px-6 bg-gradient-to-b from-black via-blue-950/10 to-black">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl mb-4 bg-gradient-to-r from-blue-400 to-orange-400 bg-clip-text text-transparent">
              Community Requests
            </h2>
            <p className="text-xl text-gray-400">
              Top features requested by our early access community
            </p>
          </motion.div>

          <div className="space-y-4">
            {communityRequests.map((request, index) => (
              <motion.div
                key={request}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-center gap-4 bg-gradient-to-r from-orange-950/20 to-transparent border border-orange-900/30 rounded-lg p-4 hover:border-orange-500/50 transition-colors"
              >
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-orange-600 to-orange-700 flex items-center justify-center">
                  <span className="text-white font-bold text-sm">{index + 1}</span>
                </div>
                <span className="text-gray-300">{request}</span>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <p className="text-lg text-gray-400 mb-6">
              Have a feature suggestion? Join our community and let us know!
            </p>
            <a
              href="/contact"
              className="inline-block px-8 py-3 bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-orange-600 hover:to-orange-700 text-white rounded-sm transition-all focus:outline-none focus:ring-4 focus:ring-blue-400"
            >
              Share Your Ideas
            </a>
          </motion.div>
        </div>
      </section>

      {/* Transparency Note */}
      <section className="py-20 px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto bg-gradient-to-br from-blue-950/30 to-transparent border border-blue-900/30 rounded-lg p-8"
        >
          <h3 className="text-2xl mb-4 text-blue-300">Our Commitment to Transparency</h3>
          <p className="text-gray-400 leading-relaxed mb-4">
            This roadmap represents our current development priorities and goals. However, game development is an iterative process, and timelines may shift based on technical challenges, community feedback, and quality standards.
          </p>
          <p className="text-gray-400 leading-relaxed">
            We're committed to regular updates and open communication with our community. Follow our development progress through our monthly dev streams and community Discord.
          </p>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="border-t border-blue-900/30 py-8 px-6 bg-gradient-to-b from-black via-blue-950/20 to-zinc-950">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <div className="flex flex-col items-center md:items-start gap-1">
            <div className="flex items-center gap-2">
              <Plane className="w-5 h-5 text-blue-500" aria-hidden="true" />
              <span>TERMINAL GUIDANCE © 2026</span>
            </div>
            <span className="text-xs text-gray-600 italic">For demo purposes only</span>
          </div>
          <div className="flex gap-6 text-gray-400">
            <a href="#" className="hover:text-blue-400 transition-colors focus:outline-none focus:text-blue-400">
              Privacy
            </a>
            <a href="#" className="hover:text-blue-400 transition-colors focus:outline-none focus:text-blue-400">
              Terms
            </a>
            <a href="#" className="hover:text-blue-400 transition-colors focus:outline-none focus:text-blue-400">
              Contact
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
