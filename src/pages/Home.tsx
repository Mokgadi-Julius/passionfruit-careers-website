import { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useInView, AnimatePresence } from 'framer-motion';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere, MeshDistortMaterial, Float, Stars } from '@react-three/drei';
import { Link } from 'react-router-dom';
import {
  Upload, Zap, Target, Award,
  ChevronRight, Star, Menu, X, ArrowRight, CheckCircle2,
  Sparkles, Globe, TrendingUp, Mail, Phone, MapPin,
  Linkedin, Twitter, Instagram, Facebook, Send, Play, FileText,
  Bot, BarChart3, Building2, Rocket
} from 'lucide-react';
import * as THREE from 'three';

// Import Logo
import logo from '../assets/logo.png';

// Import AI-Generated Images
import heroTeam from '../assets/generated/hero-team.png';
import heroAbstract from '../assets/generated/hero-abstract.png';
import aboutConnection from '../assets/generated/about-connection.png';
import serviceResume from '../assets/generated/service-resume.png';
import serviceMatching from '../assets/generated/service-matching.png';
import serviceAutoapply from '../assets/generated/service-autoapply.png';
import serviceDashboard from '../assets/generated/service-dashboard.png';
import serviceInsights from '../assets/generated/service-insights.png';
import serviceGlobal from '../assets/generated/service-global.png';
import successHired from '../assets/generated/success-hired.png';
import stepUpload from '../assets/generated/step-upload.png';
import stepMatching from '../assets/generated/step-matching.png';
import stepApply from '../assets/generated/step-apply.png';
import testimonialThabo from '../assets/generated/testimonial-thabo.png';
import testimonialSarah from '../assets/generated/testimonial-sarah.png';
import testimonialSipho from '../assets/generated/testimonial-sipho.png';
import testimonialPrecious from '../assets/generated/testimonial-precious.png';
import officeTeam from '../assets/generated/office-team.png';
import johannesburgFuture from '../assets/generated/johannesburg-future.png';


// ============ 3D COMPONENTS ============
const AnimatedSphere = () => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.2;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.3;
    }
  });

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <Sphere ref={meshRef} args={[1, 100, 200]} scale={2}>
        <MeshDistortMaterial
          color="#F4E04D"
          attach="material"
          distort={0.4}
          speed={2}
          roughness={0.2}
          metalness={0.8}
        />
      </Sphere>
    </Float>
  );
};

const ParticleField = () => {
  const points = useRef<THREE.Points>(null);
  const particleCount = 1500;

  const positions = new Float32Array(particleCount * 3);
  for (let i = 0; i < particleCount * 3; i++) {
    positions[i] = (Math.random() - 0.5) * 15;
  }

  useFrame((state) => {
    if (points.current) {
      points.current.rotation.y = state.clock.elapsedTime * 0.03;
      points.current.rotation.x = state.clock.elapsedTime * 0.01;
    }
  });

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial size={0.015} color="#F4E04D" transparent opacity={0.5} />
    </points>
  );
};

// ============ NAVBAR ============
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#how-it-works', label: 'How It Works' },
    { href: '#services', label: 'Services' },
    { href: '#pricing', label: 'Pricing' },
    { href: '#testimonials', label: 'Testimonials' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled ? 'bg-black/95 backdrop-blur-xl shadow-lg shadow-primary/10' : 'bg-transparent'
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <motion.a
          href="#home"
          whileHover={{ scale: 1.05 }}
          className="flex items-center gap-3"
        >
          <img src={logo} alt="Passionfruit" className="h-12 w-auto" />
        </motion.a>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <motion.a
              key={link.href}
              href={link.href}
              whileHover={{ y: -2 }}
              className="text-gray-300 hover:text-primary transition-colors font-medium text-sm"
            >
              {link.label}
            </motion.a>
          ))}
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(244, 224, 77, 0.4)' }}
            whileTap={{ scale: 0.95 }}
            className="bg-primary text-black px-6 py-2.5 rounded-full font-bold hover:bg-primary-light transition-colors ml-4"
          >
            Get Started
          </motion.a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-white p-2"
        >
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
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block text-gray-300 hover:text-primary transition-colors font-medium py-2"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
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

// ============ HERO SECTION ============
const HeroSection = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section id="home" ref={containerRef} className="relative min-h-screen flex items-center overflow-hidden bg-black">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroAbstract}
          alt="AI Recruitment"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />
      </div>

      {/* 3D Elements */}
      <div className="absolute inset-0 z-5 opacity-60">
        <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
          <ambientLight intensity={0.4} />
          <pointLight position={[10, 10, 10]} intensity={0.8} />
          <pointLight position={[-10, -10, -10]} color="#F4E04D" intensity={0.4} />
          <AnimatedSphere />
          <ParticleField />
          <Stars radius={100} depth={50} count={3000} factor={4} saturation={0} fade speed={1} />
        </Canvas>
      </div>

      {/* Grid Overlay */}
      <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-10 z-10" />

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-12 items-center min-h-screen">
        <motion.div style={{ y, opacity }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 bg-primary/10 border border-primary/30 rounded-full px-4 py-2 mb-6"
          >
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-primary text-sm font-medium">AI-Powered Recruitment Platform</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-6 leading-[1.1]"
          >
            Find Your
            <span className="block text-primary drop-shadow-[0_0_30px_rgba(244,224,77,0.5)]">Dream Career</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-gray-400 mb-8 max-w-xl"
          >
            Upload your resume and let our AI match you with perfect opportunities.
            We analyze <span className="text-primary font-semibold">50+ data points</span> to ensure the best fit for your career.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <motion.a
              href="https://app.passionfruitcareers.com"
              whileHover={{ scale: 1.05, boxShadow: '0 0 40px rgba(244, 224, 77, 0.5)' }}
              whileTap={{ scale: 0.95 }}
              className="group bg-primary text-black px-8 py-4 rounded-full font-bold text-lg flex items-center justify-center gap-2 hover:bg-primary-light transition-all"
            >
              <Rocket className="w-5 h-5" />
              Get Started
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.a>

            <motion.a
              href="#how-it-works"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group border-2 border-white/30 text-white px-8 py-4 rounded-full font-bold text-lg flex items-center justify-center gap-2 hover:border-primary hover:text-primary transition-all"
            >
              <Play className="w-5 h-5" />
              See How It Works
            </motion.a>
          </motion.div>

          {/* Quick Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-wrap gap-8 mt-12 pt-8 border-t border-white/10"
          >
            {[
              { value: '50K+', label: 'Active Users' },
              { value: '95%', label: 'Match Rate' },
              { value: '10K+', label: 'Companies' },
            ].map((stat, i) => (
              <div key={i}>
                <div className="text-2xl md:text-3xl font-black text-primary">{stat.value}</div>
                <div className="text-gray-500 text-sm">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Hero Image */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="hidden lg:block relative"
        >
          <div className="relative">
            <img
              src={heroTeam}
              alt="Successful Professionals"
              className="rounded-3xl shadow-2xl shadow-primary/20 border border-white/10"
            />
            <div className="absolute -bottom-6 -left-6 bg-black/90 backdrop-blur-xl border border-primary/30 rounded-2xl p-4 shadow-xl">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                  <CheckCircle2 className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <div className="text-white font-bold">Dream Job Found!</div>
                  <div className="text-gray-400 text-sm">95% Match Score</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-primary rounded-full animate-bounce" />
        </div>
      </motion.div>
    </section>
  );
};

// ============ MARQUEE ============
const Marquee = () => {
  const items = ['AI-POWERED MATCHING', 'RESUME UPLOAD', 'AUTO-APPLY', 'CAREER GROWTH', 'TOP COMPANIES', 'SMART RECRUITMENT'];

  return (
    <div className="bg-primary py-4 overflow-hidden">
      <div className="flex animate-marquee whitespace-nowrap">
        {[...items, ...items, ...items].map((item, i) => (
          <span key={i} className="text-black font-black text-lg mx-8 flex items-center gap-4">
            {item}
            <Star className="w-4 h-4 fill-black" />
          </span>
        ))}
      </div>
    </div>
  );
};

// ============ ABOUT SECTION ============
const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" ref={ref} className="py-24 bg-gray-900 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <img
              src={aboutConnection}
              alt="AI Matching"
              className="rounded-3xl shadow-2xl shadow-primary/10 border border-gray-800"
            />
            <div className="absolute -bottom-6 -right-6 bg-primary text-black p-6 rounded-2xl shadow-xl">
              <div className="text-4xl font-black">95%</div>
              <div className="text-sm font-bold">Match Rate</div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="text-primary font-bold text-sm tracking-wider uppercase">About Passionfruit</span>
            <h2 className="text-4xl md:text-5xl font-black text-white mt-4 mb-6 leading-tight">
              Revolutionizing
              <span className="text-primary"> Recruitment</span>
            </h2>
            <p className="text-gray-400 text-lg mb-6 leading-relaxed">
              Passionfruit Careers is South Africa's leading AI-powered recruitment platform.
              We're eliminating the friction between talented candidates and their dream jobs
              through cutting-edge technology and human-centric design.
            </p>
            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
              <span className="text-white font-semibold">No more endless scrolling.</span> No more generic applications.
              Upload your resume once, and let our AI find the perfect opportunities matched specifically to your skills,
              experience, and career goals.
            </p>

            <div className="grid grid-cols-2 gap-6 mb-8">
              {[
                { icon: <FileText className="w-5 h-5" />, label: 'Resume Analysis' },
                { icon: <Target className="w-5 h-5" />, label: '50+ Data Points' },
                { icon: <Bot className="w-5 h-5" />, label: 'AI Auto-Apply' },
                { icon: <BarChart3 className="w-5 h-5" />, label: 'Career Insights' },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 text-gray-300">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
                    {item.icon}
                  </div>
                  <span className="font-medium">{item.label}</span>
                </div>
              ))}
            </div>

            <motion.a
              href="https://app.passionfruitcareers.com"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 bg-black text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-900 transition-colors"
            >
              Get Started Now <ArrowRight className="w-5 h-5" />
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// ============ HOW IT WORKS ============
const HowItWorksSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const steps = [
    {
      number: '01',
      title: 'Upload Your Resume',
      description: 'Simply upload your CV and our AI instantly analyzes your skills, experience, and career goals.',
      icon: <Upload className="w-8 h-8" />,
      image: stepUpload,
    },
    {
      number: '02',
      title: 'AI Matches You',
      description: 'Our algorithm analyzes 50+ data points to find jobs that match your profile perfectly.',
      icon: <Target className="w-8 h-8" />,
      image: stepMatching,
    },
    {
      number: '03',
      title: 'Auto-Apply Daily',
      description: 'Your AI agent applies to 3 perfect positions every day on your behalf with personalized cover letters.',
      icon: <Zap className="w-8 h-8" />,
      image: stepApply,
    },
    {
      number: '04',
      title: 'Land Your Dream Job',
      description: 'Get interview invites and land your dream career faster than ever before.',
      icon: <Award className="w-8 h-8" />,
      image: successHired,
    },
  ];

  return (
    <section id="how-it-works" ref={ref} className="py-24 bg-black relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-5" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-bold text-sm tracking-wider uppercase">How It Works</span>
          <h2 className="text-4xl md:text-5xl font-black text-white mt-4 mb-6">
            Your Journey To
            <span className="text-primary"> Success</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Four simple steps to transform your job search with AI-powered precision.
          </p>
        </motion.div>

        <div className="space-y-24">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              className={`grid lg:grid-cols-2 gap-12 items-center ${i % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
            >
              <div className={i % 2 === 1 ? 'lg:order-2' : ''}>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary">
                    {step.icon}
                  </div>
                  <span className="text-6xl font-black text-primary/20">{step.number}</span>
                </div>
                <h3 className="text-3xl font-black text-white mb-4">{step.title}</h3>
                <p className="text-gray-400 text-lg leading-relaxed">{step.description}</p>
              </div>
              <div className={i % 2 === 1 ? 'lg:order-1' : ''}>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="relative rounded-3xl overflow-hidden border border-gray-800 shadow-xl shadow-primary/10"
                >
                  <img src={step.image} alt={step.title} className="w-full h-auto" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ============ SERVICES SECTION ============
const ServicesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const services = [
    {
      icon: <FileText className="w-8 h-8" />,
      title: 'Resume Upload & Analysis',
      desc: 'Our AI extracts skills, experience, and career goals to create your perfect profile.',
      features: ['AI-powered parsing', 'Skills extraction', 'Experience analysis'],
      image: serviceResume,
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: 'Smart Job Matching',
      desc: 'Match with jobs based on 50+ compatibility factors beyond just keywords.',
      features: ['50+ data points', 'Culture fit', 'Salary matching'],
      image: serviceMatching,
    },
    {
      icon: <Bot className="w-8 h-8" />,
      title: 'Auto-Apply Agents',
      desc: 'Your AI recruiter applies to 3 perfect positions daily on your behalf.',
      features: ['Daily applications', 'Custom cover letters', 'Tracking'],
      image: serviceAutoapply,
    },
    {
      icon: <Building2 className="w-8 h-8" />,
      title: 'Employer Dashboard',
      desc: 'Companies access pre-vetted candidates with compatibility scores.',
      features: ['Candidate scoring', 'Bulk hiring', 'Analytics'],
      image: serviceDashboard,
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: 'Career Insights',
      desc: 'Personalized recommendations for skills and career paths.',
      features: ['Market trends', 'Skill gaps', 'Salary insights'],
      image: serviceInsights,
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: 'Local & Remote Jobs',
      desc: 'Access opportunities from top SA companies and global remote positions.',
      features: ['Local jobs', 'Remote work', 'Hybrid options'],
      image: serviceGlobal,
    },
  ];

  return (
    <section id="services" ref={ref} className="py-24 bg-gray-900 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-bold text-sm tracking-wider uppercase">Our Services</span>
          <h2 className="text-4xl md:text-5xl font-black text-white mt-4 mb-6">
            Everything You Need To
            <span className="text-primary"> Get Hired</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            From resume upload to job offer, we've got every step covered with cutting-edge AI.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -10 }}
              className="group bg-gray-800/50 backdrop-blur border border-gray-700 rounded-3xl overflow-hidden hover:border-primary/50 transition-all"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-4 -mt-14 relative z-10 border-4 border-gray-800 group-hover:bg-primary group-hover:text-black transition-all">
                  {service.icon}
                </div>
                <h3 className="text-white font-bold text-xl mb-2">{service.title}</h3>
                <p className="text-gray-400 text-sm mb-4">{service.desc}</p>
                <ul className="space-y-1">
                  {service.features.map((feature, j) => (
                    <li key={j} className="flex items-center gap-2 text-xs text-gray-500">
                      <CheckCircle2 className="w-3 h-3 text-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ============ PRICING SECTION ============
const PricingSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [pricingMode, setPricingMode] = useState<'seeker' | 'employer'>('seeker');

  const plans = [
    {
      type: 'seeker',
      name: 'Job Seeker',
      price: 'Free',
      period: 'Forever',
      desc: 'Perfect for individuals looking for their next opportunity',
      features: [
        'Upload unlimited resumes',
        'AI-powered job matching',
        'Apply to unlimited jobs',
        'Career insights & tips',
        'Email support',
      ],
      cta: 'Get Started Free',
      popular: false,
    },
    {
      type: 'seeker',
      name: 'Pro Seeker',
      price: 'R99',
      period: '/month',
      desc: 'For serious job seekers who want an edge',
      features: [
        'Everything in Free',
        'Auto-apply to 3 jobs daily',
        'Priority in employer searches',
        'Resume optimization tips',
        'Interview preparation AI',
        'Priority support',
      ],
      cta: 'Start Pro Trial',
      popular: true,
    },
    {
      type: 'employer',
      name: 'Employer',
      price: 'R15',
      period: '/credit',
      desc: 'For companies looking to hire top talent',
      features: [
        'Post unlimited jobs',
        'AI candidate matching',
        'Applicant tracking system',
        'Company branding',
        'Analytics dashboard',
        'Dedicated account manager',
      ],
      cta: 'Contact Sales',
      popular: false, // Changed to false for consistency in data structure, logic handles styling
    },
    {
      type: 'employer',
      name: 'Enterprise',
      price: 'Custom',
      period: '',
      desc: 'For large organizations with high volume hiring needs',
      features: [
        'Unlimited job postings',
        'Custom AI model training',
        'API access',
        'White-label options',
        'SSO & Advanced Security',
        '24/7 Dedicated Support',
      ],
      cta: 'Contact Sales',
      popular: true,
    },
  ];

  const filteredPlans = plans.filter(plan => plan.type === pricingMode);

  return (
    <section id="pricing" ref={ref} className="py-24 bg-black relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-5" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <span className="text-primary font-bold text-sm tracking-wider uppercase">Pricing</span>
          <h2 className="text-4xl md:text-5xl font-black text-white mt-4 mb-6">
            Simple, Transparent
            <span className="text-primary"> Pricing</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-8">
            Start for free as a job seeker. Employers pay only for what they use.
          </p>

          {/* Toggle */}
          <div className="inline-flex bg-gray-900 border border-gray-800 rounded-full p-1 relative">
            <motion.div
              className="absolute top-1 bottom-1 bg-primary rounded-full z-0"
              initial={false}
              animate={{
                x: pricingMode === 'seeker' ? 0 : '100%',
                width: '50%'
              }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            />
            <button
              onClick={() => setPricingMode('seeker')}
              className={`relative z-10 px-8 py-3 rounded-full font-bold transition-colors ${pricingMode === 'seeker' ? 'text-black' : 'text-gray-400 hover:text-white'
                }`}
            >
              Job Seekers
            </button>
            <button
              onClick={() => setPricingMode('employer')}
              className={`relative z-10 px-8 py-3 rounded-full font-bold transition-colors ${pricingMode === 'employer' ? 'text-black' : 'text-gray-400 hover:text-white'
                }`}
            >
              Employers
            </button>
          </div>
        </motion.div>

        <div className={`grid md:grid-cols-${filteredPlans.length} gap-8 max-w-${filteredPlans.length === 2 ? '4xl' : '5xl'} mx-auto`}>
          <AnimatePresence mode='wait'>
            {filteredPlans.map((plan, i) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.95 }}
                transition={{ duration: 0.3, delay: i * 0.1 }}
                className={`relative bg-gray-900/50 backdrop-blur border rounded-3xl p-8 ${plan.popular ? 'border-primary shadow-xl shadow-primary/20 transform md:-translate-y-4' : 'border-gray-800'
                  }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-black px-4 py-1 rounded-full text-sm font-bold shadow-lg">
                    Most Popular
                  </div>
                )}
                <h3 className="text-white font-bold text-2xl mb-2">{plan.name}</h3>
                <p className="text-gray-400 text-sm mb-6">{plan.desc}</p>
                <div className="mb-6">
                  <span className="text-5xl font-black text-white">{plan.price}</span>
                  <span className="text-gray-400">{plan.period}</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, j) => (
                    <li key={j} className="flex items-center gap-3 text-gray-300 text-sm">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <motion.a
                  href="https://app.passionfruitcareers.com"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`block w-full text-center py-4 rounded-full font-bold transition-all ${plan.popular
                    ? 'bg-primary text-black hover:bg-primary-light'
                    : 'border-2 border-gray-700 text-white hover:border-primary hover:text-primary'
                    }`}
                >
                  {plan.cta}
                </motion.a>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

// ============ TESTIMONIALS SECTION ============
const TestimonialsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const testimonials = [
    {
      name: 'Thabo Molefe',
      role: 'Software Developer',
      company: 'Hired at Standard Bank',
      content: 'I uploaded my resume on Monday and had 3 interviews lined up by Friday. The AI matching is incredibly accurate!',
      rating: 5,
      image: testimonialThabo,
    },
    {
      name: 'Sarah van der Berg',
      role: 'Marketing Manager',
      company: 'Found role at Woolworths',
      content: 'After months of applying manually with no luck, Passionfruit got me my dream job in just 2 weeks.',
      rating: 5,
      image: testimonialSarah,
    },
    {
      name: 'Sipho Ndlovu',
      role: 'HR Director',
      company: 'Discovery Limited',
      content: 'As an employer, the quality of candidates we receive through Passionfruit is unmatched. Worth every credit.',
      rating: 5,
      image: testimonialSipho,
    },
    {
      name: 'Precious Mokoena',
      role: 'Data Analyst',
      company: 'Hired at MTN',
      content: 'The auto-apply feature is a game changer. I was getting interviews without even actively searching.',
      rating: 5,
      image: testimonialPrecious,
    },
  ];

  return (
    <section id="testimonials" ref={ref} className="py-24 bg-gray-900 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-bold text-sm tracking-wider uppercase">Testimonials</span>
          <h2 className="text-4xl md:text-5xl font-black text-white mt-4 mb-6">
            Loved By
            <span className="text-primary"> Thousands</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Real stories from real people who found success with Passionfruit.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-gray-800/50 backdrop-blur border border-gray-700 p-8 rounded-3xl hover:border-primary/30 transition-all"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, j) => (
                  <Star key={j} className="w-5 h-5 text-primary fill-primary" />
                ))}
              </div>
              <p className="text-gray-300 text-lg mb-6 leading-relaxed">"{testimonial.content}"</p>
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-14 h-14 rounded-full object-cover border-2 border-primary/30"
                />
                <div>
                  <div className="text-white font-bold">{testimonial.name}</div>
                  <div className="text-gray-400 text-sm">{testimonial.role}</div>
                  <div className="text-primary text-sm font-medium">{testimonial.company}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ============ PARTNERS/COMPANIES SECTION ============
const CompaniesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-16 bg-black border-y border-gray-800">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-12"
        >
          <p className="text-gray-500 text-sm uppercase tracking-wider mb-4">Trusted by growing South African businesses</p>
          <div className="relative h-64 rounded-2xl overflow-hidden">
            <img src={officeTeam} alt="Partner Companies" className="w-full h-full object-cover opacity-60" />
            <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="flex flex-wrap justify-center gap-8 md:gap-12 text-xl md:text-2xl font-bold text-white/80 px-4">
                {['Halvecost', 'WriteNow Agency', 'TechStart SA', 'Cape Digital', 'Innovate Hub'].map((company, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ delay: i * 0.1 }}
                    className="hover:text-primary transition-colors"
                  >
                    {company}
                  </motion.span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// ============ CTA SECTION ============
const CTASection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 relative overflow-hidden">
      <div className="absolute inset-0">
        <img src={johannesburgFuture} alt="Cape Town" className="w-full h-full object-cover opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-black/80" />
      </div>

      <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight">
            Ready to Find Your
            <span className="text-primary block">Dream Career?</span>
          </h2>
          <p className="text-gray-400 text-xl mb-10 max-w-2xl mx-auto">
            Join thousands of professionals who've transformed their careers with Passionfruit's AI-powered matching.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a
              href="https://app.passionfruitcareers.com"
              whileHover={{ scale: 1.05, boxShadow: '0 0 40px rgba(244, 224, 77, 0.5)' }}
              whileTap={{ scale: 0.95 }}
              className="bg-primary text-black px-10 py-5 rounded-full font-bold text-lg flex items-center justify-center gap-2"
            >
              <Rocket className="w-5 h-5" />
              Get Started Free
            </motion.a>
            <motion.a
              href="#pricing"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-white/30 text-white px-10 py-5 rounded-full font-bold text-lg hover:border-primary hover:text-primary transition-all"
            >
              View Pricing
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// ============ CONTACT SECTION ============
const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" ref={ref} className="py-24 bg-primary relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-black/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-black/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-black text-black mb-6 leading-tight">
              Start Your Journey
              <span className="block">Today</span>
            </h2>
            <p className="text-black/70 text-lg mb-8">
              Upload your resume and let our AI find your perfect match.
              Or get in touch to learn more about how we can help.
            </p>

            <div className="space-y-4 mb-8">
              {[
                { icon: <Mail className="w-5 h-5" />, label: 'Email Us', value: 'hello@passionfruit.careers' },
                { icon: <Phone className="w-5 h-5" />, label: 'Call Us', value: '+27 11 123 4567' },
                { icon: <MapPin className="w-5 h-5" />, label: 'Visit Us', value: 'Cape Town, South Africa' },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4 text-black">
                  <div className="w-12 h-12 bg-black/10 rounded-full flex items-center justify-center">
                    {item.icon}
                  </div>
                  <div>
                    <div className="font-bold">{item.label}</div>
                    <div className="text-black/70">{item.value}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex gap-4">
              {[Facebook, Twitter, Linkedin, Instagram].map((Icon, i) => (
                <motion.a
                  key={i}
                  href="#"
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="w-12 h-12 bg-black text-primary rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors"
                >
                  <Icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-black rounded-3xl p-8"
          >
            <h3 className="text-white text-2xl font-bold mb-6">Send us a message</h3>
            <form className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="First Name"
                  className="w-full bg-gray-800 border border-gray-700 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-primary transition-colors"
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  className="w-full bg-gray-800 border border-gray-700 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-primary transition-colors"
                />
              </div>
              <input
                type="email"
                placeholder="Email Address"
                className="w-full bg-gray-800 border border-gray-700 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-primary transition-colors"
              />
              <select className="w-full bg-gray-800 border border-gray-700 rounded-xl px-4 py-3 text-gray-500 focus:outline-none focus:border-primary transition-colors">
                <option>I'm a Job Seeker</option>
                <option>I'm an Employer</option>
                <option>Partnership Inquiry</option>
                <option>Other</option>
              </select>
              <textarea
                rows={4}
                placeholder="Your Message"
                className="w-full bg-gray-800 border border-gray-700 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-primary resize-none transition-colors"
              />
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full bg-primary text-black py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-primary-light transition-colors"
              >
                Send Message <Send className="w-5 h-5" />
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// ============ FOOTER ============
const Footer = () => {
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
            <div className="flex items-center gap-3 mb-6">
              <img src={logo} alt="Passionfruit" className="h-12 w-auto" />
            </div>
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

// ============ MAIN HOME PAGE ============
import { Layout } from '../components/Layout';

const Home = () => {
  return (
    <Layout>
      <div className="bg-black text-white overflow-x-hidden">
        <HeroSection />
        <PricingSection />
        <Marquee />
        <AboutSection />
        <HowItWorksSection />
        <ServicesSection />
        <TestimonialsSection />
        <CompaniesSection />
        <CTASection />
        <ContactSection />
      </div>
    </Layout>
  );
};

export default Home;
