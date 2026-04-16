import { motion } from "motion/react";
import { Navigation } from "../components/Navigation";
import { Play, ExternalLink } from "lucide-react";

export default function Demo() {
  const videos = [
    {
      title: "F/A-18 Super Hornet Carrier Landing",
      description: "Experience the precision required for a perfect trap on a carrier deck",
      thumbnail: "https://images.unsplash.com/photo-1763992526383-64872e7f3d68?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800",
      url: "https://www.youtube.com/shorts/hrJ5idq8Oys"
    },
    {
      title: "Helicopter Precision Maneuvers",
      description: "Master rotorcraft control in tactical flight scenarios",
      thumbnail: "https://images.unsplash.com/photo-1765043129875-8bd5d5bffd5b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800",
      url: "https://www.youtube.com/shorts/2D3TIUh7wjE"
    },
    {
      title: "Cargo Plane Operations",
      description: "Navigate heavy transport through challenging conditions",
      thumbnail: "https://images.unsplash.com/photo-1768519647735-149a54d924f6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800",
      url: "https://www.youtube.com/shorts/RCMefJS99ss"
    },
    {
      title: "Orion Spacecraft Docking",
      description: "Execute manual docking maneuvers in lunar orbit",
      thumbnail: "https://images.unsplash.com/photo-1614729375290-b2a429db839b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800",
      url: "https://youtube.com/clip/UgkxiqGbKbtwkbxjrHeJNpgrMgYtkRQkAAZF?si=aWaJkvd3qvIgl5go"
    }
  ];

  const features = [
    "10,000+ hours of flight training completed",
    "4 authentic vehicle simulations",
    "NASA-inspired orbital mechanics",
    "Real ATC communications",
    "Mission replay system",
    "VR hand tracking support"
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
            See It In Action
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-300 mb-8"
          >
            Watch real gameplay footage and experience the precision of Terminal Guidance
          </motion.p>

          <motion.a
            href="https://www.youtube.com/watch?v=H9dj35PMKyE&t=445s"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="inline-flex items-center gap-3 px-10 py-4 bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-orange-600 hover:to-orange-700 text-white rounded-sm text-lg transition-all shadow-lg shadow-blue-900/50 hover:shadow-orange-900/50 focus:outline-none focus:ring-4 focus:ring-blue-400"
          >
            <Play className="w-5 h-5" />
            Watch Full Trailer
          </motion.a>
        </div>
      </section>

      {/* Video Grid */}
      <section className="py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl mb-12 text-center">Vehicle Demonstrations</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {videos.map((video, index) => (
              <motion.article
                key={video.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative bg-zinc-900 rounded-sm overflow-hidden border border-zinc-800 hover:border-blue-700 transition-colors"
              >
                <a
                  href={video.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block focus:outline-none focus:ring-4 focus:ring-blue-400 focus:ring-inset"
                >
                  <div className="aspect-video relative overflow-hidden">
                    <img
                      src={video.thumbnail}
                      alt={video.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                      <div className="w-16 h-16 rounded-full bg-blue-600 group-hover:bg-orange-600 flex items-center justify-center transition-colors">
                        <Play className="w-8 h-8 text-white ml-1" />
                      </div>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-2xl mb-2 group-hover:text-blue-400 transition-colors">{video.title}</h3>
                    <p className="text-gray-400">{video.description}</p>
                    <div className="mt-4 flex items-center gap-2 text-blue-400 group-hover:text-orange-400 transition-colors">
                      <span className="text-sm">Watch on YouTube</span>
                      <ExternalLink className="w-4 h-4" />
                    </div>
                  </div>
                </a>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 px-6 bg-zinc-950">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl mb-4">Why Terminal Guidance?</h2>
            <p className="text-gray-400 text-lg">Join the most realistic VR flight training experience</p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-zinc-900 p-6 rounded-sm border border-zinc-800 text-center"
              >
                <div className="w-3 h-3 bg-blue-500 rounded-full mx-auto mb-3"></div>
                <p className="text-gray-300">{feature}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl mb-6">Ready to Begin Training?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Experience the career progression from carrier deck to lunar orbit
            </p>
            <a
              href="https://rosebud.ai/p/project-lunar-leap"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-10 py-4 bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-orange-600 hover:to-orange-700 text-white rounded-sm text-lg transition-all shadow-lg shadow-blue-900/50 hover:shadow-orange-900/50 focus:outline-none focus:ring-4 focus:ring-blue-400"
            >
              Get Started
            </a>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-blue-900/30 py-8 px-6 bg-gradient-to-b from-black via-blue-950/20 to-zinc-950">
        <div className="max-w-7xl mx-auto text-center text-sm text-gray-500">
          <p>TERMINAL GUIDANCE © 2026</p>
          <p className="text-xs text-gray-600 italic mt-2">For demo purposes only</p>
        </div>
      </footer>
    </div>
  );
}
