import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Menu, X, Facebook, Twitter, Linkedin, Instagram
} from 'lucide-react';
import logo from '../assets/logo.png';

// ============ NAVBAR ============
export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/features', label: 'Features' },
    { href: '/pricing', label: 'Pricing' },
    { href: '/careers', label: 'Careers' },
    { href: '/help', label: 'Help' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled ? 'bg-black/95 backdrop-blur-xl shadow-lg shadow-primary/10' : 'bg-transparent'
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <motion.div whileHover={{ scale: 1.05 }}>
          <Link to="/" className="flex items-center gap-3">
            <img src={logo} alt="Passionfruit" className="h-12 w-auto" />
          </Link>
        </motion.div>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <motion.div key={link.href} whileHover={{ y: -2 }}>
              <Link
                to={link.href}
                className={`transition-colors font-medium text-sm ${location.pathname === link.href ? 'text-primary' : 'text-gray-300 hover:text-primary'
                  }`}
              >
                {link.label}
              </Link>
            </motion.div>
          ))}
          <motion.div whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(244, 224, 77, 0.4)' }} whileTap={{ scale: 0.95 }}>
            <a
              href="https://passionfruit-careers-production.up.railway.app"
              className="bg-primary text-black px-6 py-2.5 rounded-full font-bold hover:bg-primary-light transition-colors ml-4"
            >
              Get Started
            </a>
          </motion.div>
        </div>

        {/* Mobile Menu Button */}
        <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden text-white p-2">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-gray-900/98 backdrop-blur-xl border-t border-gray-800"
          >
            <div className="px-6 py-4 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`block transition-colors font-medium py-2 ${location.pathname === link.href ? 'text-primary' : 'text-gray-300 hover:text-primary'
                    }`}
                >
                  {link.label}
                </Link>
              ))}
              <a
                href="https://passionfruit-careers-production.up.railway.app"
                onClick={() => setIsOpen(false)}
                className="block bg-primary text-black px-6 py-3 rounded-full font-bold text-center"
              >
                Get Started
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

// ============ FOOTER ============
export const Footer = () => {
  const footerLinks = {
    'Product': [
      { label: 'Features', href: '/features' },
      { label: 'Pricing', href: '/pricing' },
      { label: 'API', href: '/api' },
      { label: 'Integrations', href: '/integrations' },
    ],
    'Company': [
      { label: 'About', href: '/about' },
      { label: 'Careers', href: '/careers' },
      { label: 'Press', href: '/press' },
      { label: 'Blog', href: '/blog' },
    ],
    'Resources': [
      { label: 'Help Center', href: '/help' },
      { label: 'Community', href: '/community' },
      { label: 'Status', href: '/status' },
      { label: 'Terms', href: '/terms' },
    ],
    'Legal': [
      { label: 'Privacy', href: '/privacy' },
      { label: 'Terms', href: '/terms' },
      { label: 'Cookie Policy', href: '/cookies' },
      { label: 'POPIA', href: '/popia' },
    ],
  };

  return (
    <footer className="bg-black border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-12">
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-3 mb-6">
              <img src={logo} alt="Passionfruit" className="h-12 w-auto" />
            </Link>
            <p className="text-gray-400 mb-6 text-sm">
              South Africa's leading AI-powered recruitment platform.
              Connecting talent with opportunity through cutting-edge technology.
            </p>
            <div className="flex gap-4">
              {[Facebook, Twitter, Linkedin, Instagram].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 bg-gray-800 text-gray-400 rounded-full flex items-center justify-center hover:bg-primary hover:text-black transition-all"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-white font-bold mb-4">{title}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link to={link.href} className="text-gray-400 hover:text-primary transition-colors text-sm">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            &copy; 2026 Passionfruit Careers. All rights reserved.
          </p>
          <p className="text-gray-500 text-sm">
            Built with passion by <span className="text-primary font-medium">WriteNow Agency</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

// ============ PAGE LAYOUT ============
interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="bg-black text-white min-h-screen">
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

// ============ PAGE HEADER COMPONENT ============
interface PageHeaderProps {
  title: string;
  subtitle: string;
  tag?: string;
}

export const PageHeader: React.FC<PageHeaderProps> = ({ title, subtitle, tag }) => {
  return (
    <div className="pt-32 pb-16 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-5" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {tag && (
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-primary font-bold text-sm tracking-wider uppercase"
          >
            {tag}
          </motion.span>
        )}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-6xl font-black text-white mt-4 mb-6"
        >
          {title}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-gray-400 text-xl max-w-2xl"
        >
          {subtitle}
        </motion.p>
      </div>
    </div>
  );
};

export default Layout;
