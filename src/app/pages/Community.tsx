import { motion } from "motion/react";
import { Plane, Users, MessageSquare, Twitch, Calendar, Heart, Trophy } from "lucide-react";
import { Navigation } from "../components/Navigation";
import { Link } from "react-router-dom";

export default function Community() {
  const channels = [
    {
      icon: MessageSquare,
      title: "Discord Community",
      description: "Join 5,000+ pilots in our active Discord server. Get help, share screenshots, and connect with fellow aviators.",
      link: "discord.gg/terminalguidance",
      cta: "Join Discord",
      members: "5,247 members"
    },
    {
      icon: Twitch,
      title: "Dev Streams",
      description: "Watch live development every Thursday at 7 PM EST. See new features, vote on priorities, and ask questions directly.",
      link: "twitch.tv/terminalguidance",
      cta: "Follow on Twitch",
      members: "Weekly streams"
    },
    {
      icon: Calendar,
      title: "Community Events",
      description: "Participate in carrier landing competitions, formation flight challenges, and monthly mission scenarios.",
      link: "https://www.youtube.com/watch?v=zREUU0KrRyM",
      cta: "View Events",
      members: "Monthly events"
    }
  ];

  const contributors = [
    {
      role: "Top Contributor",
      name: "Callsign: Maverick",
      contribution: "Reported 47 bugs, contributed to flight model improvements, created landing tutorial series"
    },
    {
      role: "Community Manager",
      name: "Callsign: Tower",
      contribution: "Organizes weekly events, moderates Discord, helps new pilots get started"
    },
    {
      role: "Content Creator",
      name: "Callsign: Viper",
      contribution: "Creates YouTube tutorials, streams gameplay, builds community excitement"
    },
    {
      role: "Beta Tester",
      name: "Callsign: Iceman",
      contribution: "Tests pre-release builds, provides detailed feedback on physics and controls"
    }
  ];

  const stats = [
    { number: "5,000+", label: "Active Pilots" },
    { number: "250+", label: "Bug Reports" },
    { number: "1,200+", label: "Feature Requests" },
    { number: "50+", label: "Community Events" }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-950/40 via-black to-black" />
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-1/4 w-96 h-96 bg-blue-600 rounded-full blur-[120px]" />
          <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-orange-600 rounded-full blur-[120px]" />
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
              <Users className="w-10 h-10 text-white" />
            </div>
          </motion.div>

          <h1 className="text-5xl md:text-7xl mb-6 bg-gradient-to-r from-blue-400 via-orange-400 to-yellow-300 bg-clip-text text-transparent">
            Join Our Community
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
            Connect with thousands of pilots, shape the future of Terminal Guidance, and be part of something extraordinary.
          </p>
        </motion.div>
      </section>

      {/* Community Stats */}
      <section className="py-20 px-6 bg-gradient-to-b from-black via-blue-950/10 to-black">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-orange-400 bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Channels */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl mb-16 text-center bg-gradient-to-r from-blue-400 to-orange-400 bg-clip-text text-transparent"
          >
            How to Get Involved
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-8">
            {channels.map((channel, index) => (
              <motion.div
                key={channel.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-br from-blue-950/20 to-transparent border border-blue-900/30 rounded-lg p-8 hover:border-orange-500/50 transition-all hover:shadow-lg hover:shadow-orange-500/10"
              >
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-600 to-indigo-700 flex items-center justify-center mb-6">
                  <channel.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl mb-3 text-blue-300">{channel.title}</h3>
                <p className="text-gray-400 mb-4 leading-relaxed">{channel.description}</p>
                <div className="text-sm text-gray-500 mb-4">{channel.members}</div>
                <a
                  href={channel.link.startsWith('/') || channel.link.startsWith('http://') || channel.link.startsWith('https://') ? channel.link : `https://${channel.link}`}
                  target={channel.link.startsWith('/') ? undefined : "_blank"}
                  rel={channel.link.startsWith('/') ? undefined : "noopener noreferrer"}
                  className="inline-block px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-orange-600 hover:to-orange-700 text-white rounded-sm transition-all focus:outline-none focus:ring-4 focus:ring-blue-400"
                >
                  {channel.cta}
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Contributors */}
      <section className="py-20 px-6 bg-gradient-to-b from-black via-blue-950/10 to-black">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl mb-16 text-center bg-gradient-to-r from-blue-400 to-orange-400 bg-clip-text text-transparent"
          >
            Featured Community Members
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-8">
            {contributors.map((contributor, index) => (
              <motion.div
                key={contributor.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-br from-blue-950/20 to-transparent border border-blue-900/30 rounded-lg p-6 hover:border-orange-500/50 transition-all"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-orange-600 to-orange-700 flex items-center justify-center">
                      <Trophy className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="text-sm text-orange-400 mb-1">{contributor.role}</div>
                    <h3 className="text-xl mb-2 text-blue-300">{contributor.name}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">{contributor.contribution}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Guidelines */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-blue-950/30 to-transparent border border-blue-900/30 rounded-lg p-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <Heart className="w-8 h-8 text-orange-400" />
              <h2 className="text-3xl text-blue-300">Community Guidelines</h2>
            </div>
            <div className="space-y-4 text-gray-400 leading-relaxed">
              <p>
                <strong className="text-blue-300">Be Respectful:</strong> Treat fellow pilots with courtesy and respect. We're all here to learn and improve.
              </p>
              <p>
                <strong className="text-blue-300">Share Knowledge:</strong> Help newcomers, answer questions, and contribute to tutorials and guides.
              </p>
              <p>
                <strong className="text-blue-300">Give Constructive Feedback:</strong> Your input shapes Terminal Guidance. Be specific, thoughtful, and solution-focused.
              </p>
              <p>
                <strong className="text-blue-300">Stay On Topic:</strong> Keep discussions relevant to flight simulation, aerospace, and Terminal Guidance.
              </p>
              <p>
                <strong className="text-blue-300">No Toxicity:</strong> Harassment, hate speech, and toxic behavior will not be tolerated.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-4xl md:text-5xl mb-6 bg-gradient-to-r from-blue-400 to-orange-400 bg-clip-text text-transparent">
            Ready to Join?
          </h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Get early access to Terminal Guidance and become part of our growing community of pilots.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/pricing"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-orange-600 hover:to-orange-700 text-white rounded-sm transition-all text-lg focus:outline-none focus:ring-4 focus:ring-blue-400"
            >
              Get Early Access
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-orange-600 hover:to-orange-700 text-white rounded-sm transition-all text-lg focus:outline-none focus:ring-4 focus:ring-blue-400"
            >
              Contact Us
            </Link>
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
          <div className="flex gap-6 text-gray-400">
            <a href="#" className="hover:text-blue-400 transition-colors focus:outline-none focus:text-blue-400">
              Privacy
            </a>
            <a href="#" className="hover:text-blue-400 transition-colors focus:outline-none focus:text-blue-400">
              Terms
            </a>
            <Link to="/contact" className="hover:text-blue-400 transition-colors focus:outline-none focus:text-blue-400">
              Contact
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
