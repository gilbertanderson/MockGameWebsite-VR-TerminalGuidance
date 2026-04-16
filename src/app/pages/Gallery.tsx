import { motion } from "motion/react";
import { Plane, Camera } from "lucide-react";
import { Navigation } from "../components/Navigation";

export default function Gallery() {
  const categories = [
    {
      title: "F/A-18 Super Hornet",
      description: "Carrier operations and precision strike missions",
      images: [
        {
          caption: "Carrier deck takeoff at sunrise",
          url: "https://images.unsplash.com/photo-1585413912419-796160c7f2ed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxGLTE4JTIwU3VwZXIlMjBIb3JuZXQlMjBmaWdodGVyJTIwamV0JTIwYWlyY3JhZnQlMjBjYXJyaWVyfGVufDF8fHx8MTc3NTk5Nzk5M3ww&ixlib=rb-4.1.0&q=80&w=1080"
        },
        {
          caption: "Formation flight over the Pacific",
          url: "https://images.unsplash.com/photo-1726168167186-5f1f2a1c2346?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxGLTE4JTIwU3VwZXIlMjBIb3JuZXQlMjBmaWdodGVyJTIwamV0JTIwYWlyY3JhZnQlMjBjYXJyaWVyfGVufDF8fHx8MTc3NTk5Nzk5M3ww&ixlib=rb-4.1.0&q=80&w=1080"
        },
        {
          caption: "Night landing approach",
          url: "https://images.unsplash.com/photo-1504371311804-ca5cc55e57a8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxGLTE4JTIwU3VwZXIlMjBIb3JuZXQlMjBmaWdodGVyJTIwamV0JTIwYWlyY3JhZnQlMjBjYXJyaWVyfGVufDF8fHx8MTc3NTk5Nzk5M3ww&ixlib=rb-4.1.0&q=80&w=1080"
        },
        {
          caption: "Cockpit instrument panel detail",
          url: "https://images.unsplash.com/photo-1726168167208-19f06d68c94e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw0fHxGLTE4JTIwU3VwZXIlMjBIb3JuZXQlMjBmaWdodGVyJTIwamV0JTIwYWlyY3JhZnQlMjBjYXJyaWVyfGVufDF8fHx8MTc3NTk5Nzk5M3ww&ixlib=rb-4.1.0&q=80&w=1080"
        }
      ]
    },
    {
      title: "C-130 Hercules",
      description: "Strategic airlift and tactical operations",
      images: [
        {
          caption: "Low-altitude cargo deployment",
          url: "https://images.unsplash.com/photo-1773878186068-ecf7245f7da9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxDLTEzMCUyMEhlcmN1bGVzJTIwY2FyZ28lMjBwbGFuZSUyMG1pbGl0YXJ5JTIwYWlyY3JhZnR8ZW58MXx8fHwxNzc1OTk3OTk0fDA&ixlib=rb-4.1.0&q=80&w=1080"
        },
        {
          caption: "Desert airfield approach",
          url: "https://images.unsplash.com/photo-1750780115636-4965e2f4f59a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxDLTEzMCUyMEhlcmN1bGVzJTIwY2FyZ28lMjBwbGFuZSUyMG1pbGl0YXJ5JTIwYWlyY3JhZnR8ZW58MXx8fHwxNzc1OTk3OTk0fDA&ixlib=rb-4.1.0&q=80&w=1080"
        },
        {
          caption: "Crew coordination in flight deck",
          url: "https://images.unsplash.com/photo-1750780118010-2b3354c69462?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxDLTEzMCUyMEhlcmN1bGVzJTIwY2FyZ28lMjBwbGFuZSUyMG1pbGl0YXJ5JTIwYWlyY3JhZnR8ZW58MXx8fHwxNzc1OTk3OTk0fDA&ixlib=rb-4.1.0&q=80&w=1080"
        },
        {
          caption: "Mountain terrain navigation",
          url: "https://images.unsplash.com/photo-1706859225323-7ad742846d04?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw0fHxDLTEzMCUyMEhlcmN1bGVzJTIwY2FyZ28lMjBwbGFuZSUyMG1pbGl0YXJ5JTIwYWlyY3JhZnR8ZW58MXx8fHwxNzc1OTk3OTk0fDA&ixlib=rb-4.1.0&q=80&w=1080"
        }
      ]
    },
    {
      title: "UH-60 Black Hawk",
      description: "Tactical helicopter operations",
      images: [
        {
          caption: "Urban environment navigation",
          url: "https://images.unsplash.com/photo-1763992523215-80116aae405a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxVSC02MCUyMEJsYWNrJTIwSGF3ayUyMGhlbGljb3B0ZXIlMjBtaWxpdGFyeXxlbnwxfHx8fDE3NzU5OTc5OTR8MA&ixlib=rb-4.1.0&q=80&w=1080"
        },
        {
          caption: "Search and rescue mission",
          url: "https://images.unsplash.com/photo-1760899529516-4a99046f790a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxVSC02MCUyMEJsYWNrJTIwSGF3ayUyMGhlbGljb3B0ZXIlMjBtaWxpdGFyeXxlbnwxfHx8fDE3NzU5OTc5OTR8MA&ixlib=rb-4.1.0&q=80&w=1080"
        },
        {
          caption: "Cockpit systems and controls",
          url: "https://images.unsplash.com/photo-1708733818543-8a895c354151?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxVSC02MCUyMEJsYWNrJTIwSGF3ayUyMGhlbGljb3B0ZXIlMjBtaWxpdGFyeXxlbnwxfHx8fDE3NzU5OTc5OTR8MA&ixlib=rb-4.1.0&q=80&w=1080"
        },
        {
          caption: "Sunset patrol flight",
          url: "https://images.unsplash.com/photo-1728981850041-e3d9daffa910?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw0fHxVSC02MCUyMEJsYWNrJTIwSGF3ayUyMGhlbGljb3B0ZXIlMjBtaWxpdGFyeXxlbnwxfHx8fDE3NzU5OTc5OTR8MA&ixlib=rb-4.1.0&q=80&w=1080"
        }
      ]
    },
    {
      title: "Orion Spacecraft",
      description: "Artemis II lunar mission",
      images: [
        {
          caption: "Launch sequence from Cape Canaveral",
          url: "https://images.unsplash.com/photo-1767730347409-990339672312?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxOQVNBJTIwcm9ja2V0JTIwbGF1bmNoJTIwc3BhY2UlMjBzaHV0dGxlJTIwc3BhY2VjcmFmdHxlbnwxfHx8fDE3NzU5OTc5OTl8MA&ixlib=rb-4.1.0&q=80&w=1080"
        },
        {
          caption: "Earth departure trajectory",
          url: "https://images.unsplash.com/photo-1767730347428-620fff2e9e7b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxOQVNBJTIwcm9ja2V0JTIwbGF1bmNoJTIwc3BhY2UlMjBzaHV0dGxlJTIwc3BhY2VjcmFmdHxlbnwxfHx8fDE3NzU5OTc5OTl8MA&ixlib=rb-4.1.0&q=80&w=1080"
        },
        {
          caption: "Lunar flyby maneuver",
          url: "https://images.unsplash.com/photo-1767730157916-57b877c7d7f6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxOQVNBJTIwcm9ja2V0JTIwbGF1bmNoJTIwc3BhY2UlMjBzaHV0dGxlJTIwc3BhY2VjcmFmdHxlbnwxfHx8fDE3NzU5OTc5OTl8MA&ixlib=rb-4.1.0&q=80&w=1080"
        },
        {
          caption: "Capsule systems and mission control",
          url: "https://images.unsplash.com/photo-1767469194952-6b6720d8108e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw0fHxOQVNBJTIwcm9ja2V0JTIwbGF1bmNoJTIwc3BhY2UlMjBzaHV0dGxlJTIwc3BhY2VjcmFmdHxlbnwxfHx8fDE3NzU5OTc5OTl8MA&ixlib=rb-4.1.0&q=80&w=1080"
        }
      ]
    }
  ];

  const videos = [
    {
      title: "Naval Air Force VR",
      duration: "12:45",
      youtubeId: "Y52zflMX5ZI"
    },
    {
      title: "NASA Lunar Spacecraft VR",
      duration: "8:20",
      youtubeId: "rrlT-7RbO7o"
    },
    {
      title: "VR Showcase",
      duration: "6:15",
      youtubeId: "-6dhppeObas"
    },
    {
      title: "Artemis II Mission Highlight",
      duration: "15:30",
      youtubeId: "H9dj35PMKyE"
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-950/40 via-black to-black" />
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-1/3 w-96 h-96 bg-orange-600 rounded-full blur-[120px]" />
          <div className="absolute bottom-20 right-1/3 w-96 h-96 bg-blue-600 rounded-full blur-[120px]" />
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
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-orange-600 to-blue-600 flex items-center justify-center">
              <Camera className="w-10 h-10 text-white" />
            </div>
          </motion.div>

          <h1 className="text-5xl md:text-7xl mb-6 bg-gradient-to-r from-blue-400 via-orange-400 to-yellow-300 bg-clip-text text-transparent">
            Gallery
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
            Experience the stunning visuals and immersive environments of Terminal Guidance
          </p>
        </motion.div>
      </section>

      {/* Screenshots by Aircraft */}
      {categories.map((category, categoryIndex) => (
        <section key={category.title} className="py-20 px-6 bg-gradient-to-b from-black via-blue-950/10 to-black">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-12 text-center"
            >
              <h2 className="text-4xl md:text-5xl mb-4 bg-gradient-to-r from-blue-400 to-orange-400 bg-clip-text text-transparent">
                {category.title}
              </h2>
              <p className="text-xl text-gray-400">{category.description}</p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6">
              {category.images.map((image, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group relative overflow-hidden rounded-lg border border-blue-900/30 hover:border-orange-500/50 transition-all"
                >
                  <div className="aspect-video bg-gradient-to-br from-blue-950/40 to-zinc-900 relative overflow-hidden">
                    <img
                      src={image.url}
                      alt={image.caption}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-full group-hover:translate-y-0 transition-transform">
                    <p className="text-white font-medium">{image.caption}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Video Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-black via-blue-950/10 to-black">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 text-center"
          >
            <h2 className="text-4xl md:text-5xl mb-4 bg-gradient-to-r from-blue-400 to-orange-400 bg-clip-text text-transparent">
              Video Highlights
            </h2>
            <p className="text-xl text-gray-400">Watch gameplay footage and tutorials</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {videos.map((video, index) => (
              <motion.div
                key={video.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-lg border border-blue-900/30 hover:border-orange-500/50 transition-all"
              >
                <div className="aspect-video relative overflow-hidden">
                  <iframe
                    width="100%"
                    height="100%"
                    src={`https://www.youtube.com/embed/${video.youtubeId}`}
                    title={video.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                  />
                </div>
                <div className="p-6 bg-gradient-to-r from-blue-950/20 to-transparent">
                  <h3 className="text-xl text-white">{video.title}</h3>
                  <span className="text-sm text-gray-500">{video.duration}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Download CTA */}
      <section className="py-20 px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center bg-gradient-to-br from-blue-950/30 to-transparent border border-blue-900/30 rounded-lg p-12"
        >
          <h2 className="text-4xl md:text-5xl mb-6 bg-gradient-to-r from-blue-400 to-orange-400 bg-clip-text text-transparent">
            Experience It Yourself
          </h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Screenshots can't capture the full immersion. Download Terminal Guidance and feel the precision of real flight.
          </p>
          <a
            href="/pricing"
            className="inline-block px-8 py-4 bg-gradient-to-r from-orange-600 to-orange-700 hover:from-blue-600 hover:to-indigo-700 text-white rounded-sm transition-all text-lg focus:outline-none focus:ring-4 focus:ring-orange-400"
          >
            Get Early Access
          </a>
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
