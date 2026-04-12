import { motion } from "motion/react";
import { Plane } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

export function Navigation() {
  const location = useLocation();

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-lg border-b border-blue-900/30"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity focus:outline-none focus:ring-2 focus:ring-blue-400 rounded-sm">
          <Plane className="w-6 h-6 text-blue-500" aria-hidden="true" />
          <span className="text-xl font-medium bg-gradient-to-r from-blue-400 via-orange-400 to-yellow-300 bg-clip-text text-transparent">
            TERMINAL GUIDANCE
          </span>
        </Link>

        <ul className="flex gap-6 items-center text-sm">
          <li>
            <Link
              to="/features"
              className={`text-gray-300 hover:text-blue-400 transition-colors focus:outline-none focus:text-blue-400  ${
                location.pathname === '/features' ? 'text-orange-400' : ''
              }`}
            >
              Features
            </Link>
          </li>
          <li>
            <Link
              to="/gallery"
              className={`text-gray-300 hover:text-blue-400 transition-colors focus:outline-none focus:text-blue-400  ${
                location.pathname === '/gallery' ? 'text-orange-400' : ''
              }`}
            >
              Gallery
            </Link>
          </li>
          <li>
            <Link
              to="/roadmap"
              className={`text-gray-300 hover:text-blue-400 transition-colors focus:outline-none focus:text-blue-400  ${
                location.pathname === '/roadmap' ? 'text-orange-400' : ''
              }`}
            >
              Roadmap
            </Link>
          </li>
          <li>
            <Link
              to="/requirements"
              className={`text-gray-300 hover:text-blue-400 transition-colors focus:outline-none focus:text-blue-400  ${
                location.pathname === '/requirements' ? 'text-orange-400' : ''
              }`}
            >
              Requirements
            </Link>
          </li>
          <li>
            <Link
              to="/demo"
              className={`text-gray-300 hover:text-blue-400 transition-colors focus:outline-none focus:text-blue-400  ${
                location.pathname === '/demo' ? 'text-orange-400' : ''
              }`}
            >
              Demo
            </Link>
          </li>
          <li>
            <Link
              to="/community"
              className={`text-gray-300 hover:text-blue-400 transition-colors focus:outline-none focus:text-blue-400  ${
                location.pathname === '/community' ? 'text-orange-400' : ''
              }`}
            >
              Community
            </Link>
          </li>
          <li>
            <Link
              to="/faq"
              className={`text-gray-300 hover:text-blue-400 transition-colors focus:outline-none focus:text-blue-400  ${
                location.pathname === '/faq' ? 'text-orange-400' : ''
              }`}
            >
              FAQ
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className={`text-gray-300 hover:text-blue-400 transition-colors focus:outline-none focus:text-blue-400  ${
                location.pathname === '/contact' ? 'text-orange-400' : ''
              }`}
            >
              Contact
            </Link>
          </li>
          <li>
            <Link
              to="/pricing"
              className="px-6 py-2 bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-orange-600 hover:to-orange-700 text-white rounded-sm transition-all focus:outline-none focus:ring-4 focus:ring-blue-400"
            >
              Get Started
            </Link>
          </li>
        </ul>
      </div>
    </motion.nav>
  );
}
