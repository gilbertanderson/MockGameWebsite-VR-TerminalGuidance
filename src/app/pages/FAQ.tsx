import { motion } from "motion/react";
import { Navigation } from "../components/Navigation";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "Do I need VR flight experience to play Terminal Guidance?",
      answer: "No prior VR or flight sim experience required. Terminal Guidance includes comprehensive tutorials that teach you aircraft systems, procedures, and controls step-by-step. We recommend starting with the F/A-18 training missions before progressing to more complex vehicles."
    },
    {
      question: "Can I play without a VR headset?",
      answer: "Terminal Guidance is VR-only. The hand tracking, spatial awareness, and immersive cockpit interaction are core to the experience. We do not support traditional monitor-based play."
    },
    {
      question: "How long does it take to master each vehicle?",
      answer: "Most pilots spend 5-10 hours on each aircraft before feeling confident with basic operations. Full mastery—including emergency procedures and advanced techniques—can take 20-40 hours per vehicle. The Orion spacecraft has the steepest learning curve due to orbital mechanics."
    },
    {
      question: "Is multiplayer or co-op supported?",
      answer: "Currently, Terminal Guidance is a single-player experience focused on individual training progression. Multiplayer features are planned for future updates, including formation flying and shared carrier operations."
    },
    {
      question: "Do I need a HOTAS controller?",
      answer: "HOTAS (Hands On Throttle And Stick) is optional but recommended for fixed-wing aircraft. Hand tracking and VR controllers work well for all vehicles, but a HOTAS setup provides more precise control for jets and cargo planes. Helicopters and spacecraft work great with hand tracking alone."
    },
    {
      question: "Can I skip vehicles or do I need to complete them in order?",
      answer: "You must progress through the career path in order: F/A-18 → Cargo Plane → Helicopter → Orion. Each vehicle builds on skills from the previous one. This progression mirrors real pilot training pipelines."
    },
    {
      question: "How realistic are the physics?",
      answer: "Terminal Guidance uses a high-fidelity flight model based on real aerodynamics data, weight-and-balance calculations, and engine performance curves. Orbital mechanics for the Orion spacecraft use the same math NASA applies to real missions. While not a certified flight trainer, it's among the most realistic consumer flight sims available."
    },
    {
      question: "Will there be additional aircraft in the future?",
      answer: "Yes! We're exploring additional military jets, transport aircraft, and future spacecraft. Community feedback will help prioritize which vehicles we add next."
    },
    {
      question: "What if I get motion sick in VR?",
      answer: "Terminal Guidance includes comfort options like vignette effects, snap turning, and adjustable FOV. Aircraft cockpits provide a stationary reference frame that helps reduce motion sickness. We recommend starting with short sessions and gradually increasing playtime as you acclimate."
    },
    {
      question: "Is there a demo or free trial?",
      answer: "We're currently working on a limited demo featuring the F/A-18 takeoff and landing tutorial. Sign up for our newsletter to be notified when the demo launches."
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />

      {/* Hero */}
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl mb-6 bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent"
          >
            Frequently Asked Questions
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-300"
          >
            Everything you need to know about Terminal Guidance
          </motion.p>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="py-12 px-6 pb-24">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className="bg-zinc-900 border border-zinc-800 rounded-sm overflow-hidden"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-zinc-800 transition-colors focus:outline-none focus:ring-4 focus:ring-inset focus:ring-blue-400"
                  aria-expanded={openIndex === index}
                >
                  <span className="text-lg md:text-xl pr-4">{faq.question}</span>
                  <ChevronDown
                    className={`w-6 h-6 flex-shrink-0 text-blue-400 transition-transform ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <motion.div
                  initial={false}
                  animate={{
                    height: openIndex === index ? "auto" : 0,
                    opacity: openIndex === index ? 1 : 0
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="px-6 py-5 text-gray-300 leading-relaxed border-t border-zinc-800">
                    {faq.answer}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="py-16 px-6 bg-zinc-950">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl mb-6">Still Have Questions?</h2>
            <p className="text-gray-300 mb-8 text-lg">
              Join our community or reach out to our support team
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://gilbertanderson.my.canva.site/wcag-color-access-sim"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 bg-blue-600 hover:bg-orange-600 text-white rounded-sm transition-colors focus:outline-none focus:ring-4 focus:ring-blue-400"
              >
                View Compliance Docs
              </a>
              <a
                href="https://linkedin.com/in/gilbertanderson"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 border-2 border-blue-500 hover:border-orange-500 hover:bg-orange-500/10 text-white rounded-sm transition-all focus:outline-none focus:ring-4 focus:ring-blue-400"
              >
                Contact Us
              </a>
            </div>
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
