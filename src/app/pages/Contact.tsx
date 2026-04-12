import { motion } from "motion/react";
import { Plane, Mail, MessageSquare, Globe, Send } from "lucide-react";
import { Navigation } from "../components/Navigation";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // This is a demo - in production, this would send to an API
    console.log("Form submitted:", formData);
    alert("Thank you for your message! This is a demo, so your message wasn't actually sent.");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactMethods = [
    {
      icon: Mail,
      title: "Email Support",
      description: "Get help with technical issues and account questions",
      contact: "support@terminalguidance.com",
      availability: "Response within 24 hours"
    },
    {
      icon: MessageSquare,
      title: "Community Discord",
      description: "Join our active community for tips, tricks, and discussions",
      contact: "discord.gg/terminalguidance",
      availability: "Active 24/7"
    },
    {
      icon: Globe,
      title: "Developer Blog",
      description: "Stay updated with development progress and announcements",
      contact: "blog.terminalguidance.com",
      availability: "Weekly updates"
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-950/40 via-black to-black" />
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-1/3 w-96 h-96 bg-blue-600 rounded-full blur-[120px]" />
          <div className="absolute bottom-20 right-1/3 w-96 h-96 bg-orange-600 rounded-full blur-[120px]" />
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
              <MessageSquare className="w-10 h-10 text-white" />
            </div>
          </motion.div>

          <h1 className="text-5xl md:text-7xl mb-6 bg-gradient-to-r from-blue-400 via-orange-400 to-yellow-300 bg-clip-text text-transparent">
            Contact Us
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
            We're here to help. Reach out with questions, feedback, or just to say hello.
          </p>
        </motion.div>
      </section>

      {/* Contact Methods */}
      <section className="py-20 px-6 bg-gradient-to-b from-black via-blue-950/10 to-black">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {contactMethods.map((method, index) => (
              <motion.div
                key={method.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-br from-blue-950/20 to-transparent border border-blue-900/30 rounded-lg p-6 hover:border-orange-500/50 transition-all hover:shadow-lg hover:shadow-orange-500/10"
              >
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-600 to-indigo-700 flex items-center justify-center mb-4">
                  <method.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl mb-2 text-blue-300">{method.title}</h3>
                <p className="text-gray-400 mb-4 leading-relaxed">{method.description}</p>
                <div className="space-y-2">
                  <p className="text-orange-400 font-medium">{method.contact}</p>
                  <p className="text-sm text-gray-500">{method.availability}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 text-center"
          >
            <h2 className="text-4xl md:text-5xl mb-4 bg-gradient-to-r from-blue-400 to-orange-400 bg-clip-text text-transparent">
              Send Us a Message
            </h2>
            <p className="text-xl text-gray-400">
              Fill out the form below and we'll get back to you as soon as possible
            </p>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            onSubmit={handleSubmit}
            className="bg-gradient-to-br from-blue-950/20 to-transparent border border-blue-900/30 rounded-lg p-8 space-y-6"
          >
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-black/50 border border-blue-900/50 rounded-sm text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-black/50 border border-blue-900/50 rounded-sm text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  placeholder="your@email.com"
                />
              </div>
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                Subject *
              </label>
              <select
                id="subject"
                name="subject"
                required
                value={formData.subject}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-black/50 border border-blue-900/50 rounded-sm text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              >
                <option value="">Select a topic</option>
                <option value="technical">Technical Support</option>
                <option value="feedback">Feedback & Suggestions</option>
                <option value="bug">Bug Report</option>
                <option value="feature">Feature Request</option>
                <option value="business">Business Inquiry</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                required
                value={formData.message}
                onChange={handleChange}
                rows={6}
                className="w-full px-4 py-3 bg-black/50 border border-blue-900/50 rounded-sm text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                placeholder="Tell us how we can help..."
              />
            </div>

            <div className="flex items-start gap-3">
              <input
                type="checkbox"
                id="newsletter"
                className="mt-1 w-4 h-4 rounded bg-black/50 border-blue-900/50 text-blue-600 focus:ring-2 focus:ring-blue-500"
              />
              <label htmlFor="newsletter" className="text-sm text-gray-400">
                I'd like to receive updates about Terminal Guidance development and early access opportunities
              </label>
            </div>

            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-orange-600 hover:to-orange-700 text-white rounded-sm transition-all text-lg font-medium focus:outline-none focus:ring-4 focus:ring-blue-400"
            >
              <Send className="w-5 h-5" />
              Send Message
            </button>

            <p className="text-sm text-gray-500 text-center">
              * Required fields. We typically respond within 24 hours.
            </p>
          </motion.form>
        </div>
      </section>

      {/* FAQ Link */}
      <section className="py-20 px-6 bg-gradient-to-b from-black via-blue-950/10 to-black">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl mb-4 text-blue-300">
            Looking for Quick Answers?
          </h2>
          <p className="text-lg text-gray-400 mb-6">
            Check out our FAQ page for answers to common questions about Terminal Guidance
          </p>
          <a
            href="/faq"
            className="inline-block px-8 py-3 bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-orange-600 hover:to-orange-700 text-white rounded-sm transition-all focus:outline-none focus:ring-4 focus:ring-blue-400"
          >
            Visit FAQ
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
              Support
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
