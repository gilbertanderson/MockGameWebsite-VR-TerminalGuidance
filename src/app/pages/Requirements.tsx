import { motion } from "motion/react";
import { Navigation } from "../components/Navigation";
import { CheckCircle2, AlertCircle } from "lucide-react";

export default function Requirements() {
  const vrHeadsets = [
    { name: "Meta Quest 3", status: "Recommended", color: "text-green-400" },
    { name: "Meta Quest 2", status: "Supported", color: "text-blue-400" },
    { name: "Meta Quest Pro", status: "Supported", color: "text-blue-400" },
    { name: "Valve Index", status: "Supported", color: "text-blue-400" },
    { name: "HTC Vive Pro 2", status: "Supported", color: "text-blue-400" },
    { name: "Pico 4", status: "Coming Soon", color: "text-orange-400" }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />

      {/* Hero */}
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl mb-6 bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent"
          >
            System Requirements
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-300"
          >
            What you need to run Terminal Guidance
          </motion.p>
        </div>
      </section>

      {/* VR Headsets */}
      <section className="py-12 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl mb-8">Supported VR Headsets</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {vrHeadsets.map((headset) => (
                <div
                  key={headset.name}
                  className="bg-zinc-900 p-6 rounded-sm border border-zinc-800 flex items-center justify-between"
                >
                  <span className="text-lg">{headset.name}</span>
                  <span className={`${headset.color} text-sm tracking-wide uppercase`}>
                    {headset.status}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-8 p-6 bg-blue-950/20 border border-blue-900/30 rounded-sm">
              <div className="flex gap-3">
                <AlertCircle className="w-6 h-6 text-blue-400 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg mb-2 text-blue-400">Hand Tracking Required</h3>
                  <p className="text-gray-300">
                    Terminal Guidance uses hand tracking for cockpit interaction. Ensure your headset supports hand tracking or use VR controllers with finger tracking.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* PC Requirements */}
      <section className="py-12 px-6 bg-zinc-950">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl mb-12">PC Specifications</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Minimum */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-zinc-900 p-8 rounded-sm border border-zinc-800"
            >
              <h3 className="text-2xl mb-6 text-orange-400">Minimum</h3>

              <div className="space-y-4">
                <div>
                  <div className="text-sm text-gray-500 mb-1">Operating System</div>
                  <div className="text-gray-200">Windows 10 64-bit</div>
                </div>
                <div>
                  <div className="text-sm text-gray-500 mb-1">Processor</div>
                  <div className="text-gray-200">Intel Core i5-9600K / AMD Ryzen 5 3600</div>
                </div>
                <div>
                  <div className="text-sm text-gray-500 mb-1">Memory</div>
                  <div className="text-gray-200">16 GB RAM</div>
                </div>
                <div>
                  <div className="text-sm text-gray-500 mb-1">Graphics</div>
                  <div className="text-gray-200">NVIDIA RTX 2070 / AMD RX 5700 XT</div>
                </div>
                <div>
                  <div className="text-sm text-gray-500 mb-1">Storage</div>
                  <div className="text-gray-200">75 GB available space (SSD required)</div>
                </div>
              </div>
            </motion.div>

            {/* Recommended */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-blue-900/20 to-indigo-900/20 p-8 rounded-sm border border-blue-700"
            >
              <h3 className="text-2xl mb-6 text-blue-400">Recommended</h3>

              <div className="space-y-4">
                <div>
                  <div className="text-sm text-gray-500 mb-1">Operating System</div>
                  <div className="text-gray-200">Windows 11 64-bit</div>
                </div>
                <div>
                  <div className="text-sm text-gray-500 mb-1">Processor</div>
                  <div className="text-gray-200">Intel Core i7-12700K / AMD Ryzen 7 5800X3D</div>
                </div>
                <div>
                  <div className="text-sm text-gray-500 mb-1">Memory</div>
                  <div className="text-gray-200">32 GB RAM</div>
                </div>
                <div>
                  <div className="text-sm text-gray-500 mb-1">Graphics</div>
                  <div className="text-gray-200">NVIDIA RTX 4070 Ti / AMD RX 7900 XT</div>
                </div>
                <div>
                  <div className="text-sm text-gray-500 mb-1">Storage</div>
                  <div className="text-gray-200">75 GB available space (NVMe SSD required)</div>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-8 p-6 bg-green-950/20 border border-green-900/30 rounded-sm"
          >
            <div className="flex gap-3">
              <CheckCircle2 className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg mb-2 text-green-400">Performance Tip</h3>
                <p className="text-gray-300">
                  For the best experience at 90 FPS with high settings, we recommend an RTX 4080 or higher. The Orion spacecraft docking module is particularly GPU-intensive due to real-time lighting calculations.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Additional Requirements */}
      <section className="py-12 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl mb-8">Additional Requirements</h2>

            <div className="space-y-6">
              <div className="bg-zinc-900 p-6 rounded-sm">
                <h3 className="text-xl mb-3 text-blue-400">Internet Connection</h3>
                <p className="text-gray-300">Broadband internet connection required for initial download and updates. Offline play supported after installation.</p>
              </div>

              <div className="bg-zinc-900 p-6 rounded-sm">
                <h3 className="text-xl mb-3 text-blue-400">HOTAS Support (Optional)</h3>
                <p className="text-gray-300">Thrustmaster T.16000M, Logitech X56, or similar HOTAS setups supported for enhanced immersion. Not required but highly recommended for fixed-wing aircraft.</p>
              </div>

              <div className="bg-zinc-900 p-6 rounded-sm">
                <h3 className="text-xl mb-3 text-blue-400">Audio</h3>
                <p className="text-gray-300">Spatial audio headphones recommended. DirectSound compatible audio device required.</p>
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
