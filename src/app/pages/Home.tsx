import { motion, useScroll, useTransform } from "motion/react";
import { useRef, useState, useEffect } from "react";
import { Plane, ArrowRight, Volume2, VolumeX } from "lucide-react";
import spaceOdysseyAudio from "../../imports/spaceOdyssey.mp3";
import { Navigation } from "../components/Navigation";

export default function Home() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const audioRef = useRef<HTMLAudioElement>(null);
  const heroRef = useRef<HTMLElement>(null);
  const [isMuted, setIsMuted] = useState(true);
  const [audioLoaded, setAudioLoaded] = useState(false);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
    layoutEffect: false
  });

  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);

  useEffect(() => {
    // Auto-play audio when component mounts (user interaction required for most browsers)
    const playAudio = async () => {
      if (audioRef.current) {
        try {
          await audioRef.current.play();
          setAudioLoaded(true);
        } catch (error) {
          console.log("Audio autoplay prevented - user interaction required");
        }
      }
    };
    playAudio();
  }, []);

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !audioRef.current.muted;
      setIsMuted(!isMuted);

      // If audio hasn't started playing, try to play it
      if (!audioLoaded) {
        audioRef.current.play().then(() => {
          setAudioLoaded(true);
        }).catch(err => {
          console.log("Audio play failed:", err);
        });
      }
    }
  };

  const vehicles = [
    {
      name: "F/A-18 Super Hornet",
      stage: "Naval Aviation",
      description: "Master carrier operations and precision traps at 1:1 scale",
      image: "https://images.unsplash.com/photo-1763992526383-64872e7f3d68?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxmaWdodGVyJTIwamV0JTIwY29ja3BpdCUyMHBpbG90JTIwdmlld3xlbnwxfHx8fDE3NzU5NjYxOTd8MA&ixlib=rb-4.1.0&q=80&w=1080",
      url: "https://www.youtube.com/shorts/hrJ5idq8Oys",
      delay: 0.1
    },
    {
      name: "Cargo Plane",
      stage: "Advanced Training",
      description: "Push aircraft to their limits in experimental flight testing",
      image: "https://images.unsplash.com/photo-1768519647735-149a54d924f6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxtaWxpdGFyeSUyMGNhcmdvJTIwcGxhbmUlMjBhaXJjcmFmdHxlbnwxfHx8fDE3NzU5NjYxOTh8MA&ixlib=rb-4.1.0&q=80&w=1080",
      url: "https://www.youtube.com/shorts/RCMefJS99ss",
      delay: 0.2
    },
    {
      name: "Helicopter",
      stage: "NASA Selection",
      description: "Transition from military aviator to space mission specialist",
      image: "https://images.unsplash.com/photo-1765043129875-8bd5d5bffd5b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxoZWxpY29wdGVyJTIwZmxpZ2h0JTIwYXZpYXRpb258ZW58MXx8fHwxNzc1OTY2MTk4fDA&ixlib=rb-4.1.0&q=80&w=1080",
      url: "https://www.youtube.com/shorts/2D3TIUh7wjE",
      delay: 0.3
    },
    {
      name: "Orion Spacecraft",
      stage: "Artemis Mission",
      description: "Execute manual docking maneuvers in lunar orbit",
      image: "https://images.unsplash.com/photo-1614730321146-b6fa6a46bcb4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxzcGFjZSUyMHNodXR0bGUlMjByb2NrZXQlMjBsYXVuY2h8ZW58MXx8fHwxNzc1OTY2MTk5fDA&ixlib=rb-4.1.0&q=80&w=1080",
      url: "https://youtube.com/clip/UgkxiqGbKbtwkbxjrHeJNpgrMgYtkRQkAAZF?si=aWaJkvd3qvIgl5go",
      delay: 0.4
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <Navigation />

      {/* Skip to main content link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-6 focus:py-3 focus:bg-orange-600 focus:text-white focus:rounded-sm focus:outline-none focus:ring-4 focus:ring-orange-400"
      >
        Skip to main content
      </a>

      {/* Background Audio */}
      <audio
        ref={audioRef}
        loop
        muted
        preload="auto"
        src={spaceOdysseyAudio}
        aria-label="Background music"
      />

      {/* Hero Section */}
      <motion.section
        ref={heroRef}
        style={{ opacity: heroOpacity, scale: heroScale }}
        className="relative h-screen flex items-center justify-center overflow-hidden"
      >
        <div className="absolute inset-0 z-0">
          <video
            ref={videoRef}
            autoPlay
            loop
            muted
            playsInline
            aria-label="Background video of space and aircraft"
            className="w-full h-full object-cover"
          >
            <source src="https://videos.ctfassets.net/jv40w9pms0ga/E0xRBhEQpmEWzaw1YEMdj/29ae4dd55cd9dbd16fad4edb8204e420/_desktop.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black" aria-hidden="true" />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-950/30 via-orange-950/20 to-blue-950/30" aria-hidden="true" />
        </div>

        {/* Audio Control */}
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          onClick={toggleMute}
          aria-label={isMuted ? "Unmute background music" : "Mute background music"}
          aria-pressed={!isMuted}
          className="absolute top-8 right-8 z-20 p-3 rounded-full bg-black/50 backdrop-blur-sm border border-orange-500/30 hover:bg-black/70 hover:border-orange-500/50 focus:outline-none focus:ring-4 focus:ring-orange-400 transition-all"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          {isMuted ? (
            <VolumeX className="w-5 h-5 text-orange-400" aria-hidden="true" />
          ) : (
            <Volume2 className="w-5 h-5 text-orange-400" aria-hidden="true" />
          )}
        </motion.button>

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl mb-6 tracking-tight bg-gradient-to-r from-blue-400 via-orange-400 via-yellow-300 to-blue-400 bg-clip-text text-transparent"
          >
            TERMINAL GUIDANCE
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-orange-300 mb-6 tracking-wide uppercase"
          >
            Precision is the Only Option
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-base md:text-lg text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed"
          >
            From the Carrier Deck to the Lunar Orbit. Experience the high-stakes career of a modern pioneer. Master elite military jets, survive Test Pilot School, and earn your wings in the Astronaut Corps. From naval launches to ISS support, become a Terminal Guidance Guardian!
          </motion.p>

          <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.open('https://www.spaceforce.com/launch', '_blank')}
              aria-label="Launch - Opens in new window"
              className="bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-700 hover:from-orange-600 hover:via-orange-700 hover:to-orange-600 text-white px-10 py-4 rounded-sm text-lg inline-flex items-center gap-3 transition-all shadow-lg shadow-blue-900/50 hover:shadow-orange-900/50 focus:outline-none focus:ring-4 focus:ring-blue-400"
            >
              Launch
            </motion.button>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          aria-hidden="true"
        >
          <span className="text-sm text-blue-400/80 tracking-widest uppercase">Scroll to Explore</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-px h-12 bg-gradient-to-b from-blue-400 to-transparent"
          />
        </motion.div>
      </motion.section>

      {/* Vehicles Section */}
      <section id="main-content" className="py-24 px-6 relative z-20 bg-black" aria-labelledby="career-heading">
        <div className="relative max-w-7xl mx-auto">
          {/* Earth Background */}
          <div className="absolute inset-0 z-0 opacity-20">
            <img
              src="https://images.unsplash.com/photo-1614730321146-b6fa6a46bcb4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxlYXJ0aCUyMGZyb20lMjBzcGFjZXxlbnwxfHx8fDE3NzU5OTE5NDh8MA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Earth from space"
              className="w-full h-full object-cover object-center"
            />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="relative z-10 text-center mb-20"
          >
            <h2 id="career-heading" className="text-4xl md:text-5xl mb-4">The Career Progression</h2>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto">
              Command a 1:1 scale simulation of the world's most advanced aircraft and spacecraft. Physics and training are your only allies.
            </p>
          </motion.div>

          <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8">
            {vehicles.map((vehicle, index) => (
              <motion.article
                key={vehicle.name}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: vehicle.delay }}
                whileHover={{ y: -8 }}
                className="group relative overflow-hidden bg-zinc-900"
              >
                <a
                  href={vehicle.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Learn more about ${vehicle.name} - ${vehicle.description}. Opens in new window.`}
                  className="block focus:outline-none focus:ring-4 focus:ring-orange-400 focus:ring-inset"
                >
                  <div className="aspect-[16/10] overflow-hidden">
                    <motion.img
                      src={vehicle.image}
                      alt={`${vehicle.name} - ${vehicle.stage}`}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.6 }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" aria-hidden="true" />
                  </div>

                  <div className="absolute bottom-0 left-0 right-0 p-8">
                    <div className="text-blue-400 group-hover:text-orange-400 text-sm tracking-widest mb-2 uppercase transition-colors">{vehicle.stage}</div>
                    <h3 className="text-2xl md:text-3xl mb-2">{vehicle.name}</h3>
                    <p className="text-gray-400">{vehicle.description}</p>
                  </div>

                  <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    className="absolute top-6 right-6 w-12 h-12 bg-gradient-to-br from-blue-600 to-indigo-700 flex items-center justify-center"
                    aria-hidden="true"
                  >
                    <ArrowRight className="w-6 h-6" />
                  </motion.div>
                </a>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-6 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1614728263952-84ea256f9679?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxzcGFjZSUyMHNodXR0bGUlMjByb2NrZXQlMjBsYXVuY2h8ZW58MXx8fHwxNzc1OTY2MTk5fDA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Space shuttle launch"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/70" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative z-10 max-w-3xl mx-auto text-center"
        >
          <h2 className="text-4xl md:text-6xl mb-6">Are You Ready?</h2>
          <p className="text-lg text-gray-300 mb-12">
            Terminal Guidance delivers a NASA-inspired VR journey where precision and training are your only allies
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.open('https://gilbertanderson.my.canva.site/terminal-guidance-ssp', '_blank')}
              aria-label="Simulator 1 - Opens in new window"
              className="bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-700 hover:from-orange-600 hover:via-orange-700 hover:to-orange-600 text-white px-10 py-4 rounded-sm text-lg text-center inline-flex items-center justify-center gap-3 transition-all shadow-lg shadow-blue-900/50 hover:shadow-orange-900/50 focus:outline-none focus:ring-4 focus:ring-blue-400"
            >
              Simulator 1
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.open('https://www.youtube.com/watch?v=H9dj35PMKyE&t=445s', '_blank')}
              aria-label="Watch Terminal Guidance trailer on YouTube - Opens in new window"
              className="border-2 border-blue-500/50 hover:border-orange-500 hover:bg-orange-500/10 text-white px-10 py-4 rounded-sm text-lg transition-all focus:outline-none focus:ring-4 focus:ring-blue-400"
            >
              Watch Trailer
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.open('https://rosebud.ai/p/project-lunar-leap', '_blank')}
              aria-label="Simulator 2 - Opens in new window"
              className="bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-700 hover:from-orange-600 hover:via-orange-700 hover:to-orange-600 text-white px-10 py-4 rounded-sm text-lg transition-all shadow-lg shadow-blue-900/50 hover:shadow-orange-900/50 focus:outline-none focus:ring-4 focus:ring-blue-400"
            >
              Simulator 2
            </motion.button>
          </div>
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
          <nav aria-label="Footer navigation">
            <ul className="flex gap-4">
              <li><button onClick={() => window.open('https://linkedin.com/in/gilbertanderson', '_blank')} aria-label="About - Visit LinkedIn profile (opens in new window)" className="px-4 py-1 bg-blue-500 hover:bg-amber-600 text-white rounded-sm transition-colors focus:outline-none focus:ring-4 focus:ring-blue-400">About</button></li>
              <li><button onClick={() => window.open('https://gilbertanderson.my.canva.site/wcag-color-access-sim', '_blank')} aria-label="Compliance - View WCAG accessibility information (opens in new window)" className="px-4 py-1 bg-blue-600 hover:bg-orange-600 text-white rounded-sm transition-colors focus:outline-none focus:ring-4 focus:ring-blue-400">Compliance</button></li>
              <li><button onClick={() => window.open('https://stitch.withgoogle.com/projects/5942991417588545660', '_blank')} aria-label="Design - Visit Stitch website (opens in new window)" className="px-4 py-1 bg-indigo-700 hover:bg-orange-800 text-white rounded-sm transition-colors focus:outline-none focus:ring-4 focus:ring-indigo-400">Design</button></li>
            </ul>
          </nav>
        </div>
      </footer>
    </div>
  );
}