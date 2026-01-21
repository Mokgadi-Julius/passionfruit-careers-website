
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Target, Heart, Users, Globe, Award, TrendingUp,
  CheckCircle2, ArrowRight, Sparkles, Rocket
} from 'lucide-react';
import { Layout, PageHeader } from '../components/Layout';

// Import images
import aboutHero from '../assets/pages/about-hero.png';
import aboutFounder from '../assets/pages/about-founder.png';
import aboutValues from '../assets/pages/about-values.png';

const About = () => {
  const values = [
    {
      icon: <Heart className="w-8 h-8" />,
      title: 'People First',
      desc: 'We believe in putting people at the center of everything we do. Every feature is designed with job seekers and employers in mind.',
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: 'Precision Matching',
      desc: 'We go beyond keywords to understand the full picture - skills, culture fit, and career aspirations.',
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: 'Local Impact',
      desc: 'Proudly South African, we understand the local job market and are committed to reducing unemployment in our country.',
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: 'Innovation',
      desc: 'We leverage cutting-edge AI to solve real problems and continuously improve our matching algorithms.',
    },
  ];

  const stats = [
    { value: '50K+', label: 'Active Users' },
    { value: '10K+', label: 'Partner Companies' },
    { value: '95%', label: 'Match Accuracy' },
    { value: '25K+', label: 'Jobs Filled' },
  ];

  const team = [
    { name: 'Thandi Nkosi', role: 'CEO & Co-Founder', bio: 'Former HR Director with 15 years in talent acquisition' },
    { name: 'James Williams', role: 'CTO & Co-Founder', bio: 'Ex-Google engineer specializing in ML and AI systems' },
    { name: 'Priya Patel', role: 'Head of Product', bio: 'Product leader from LinkedIn and Microsoft' },
    { name: 'David Okonkwo', role: 'Head of AI', bio: 'PhD in Machine Learning from UCT' },
  ];

  const timeline = [
    { year: '2022', event: 'Passionfruit founded in Cape Town' },
    { year: '2023', event: 'Launched AI matching algorithm' },
    { year: '2024', event: 'Reached 25,000 successful placements' },
    { year: '2025', event: 'Expanded to 10,000+ partner companies' },
    { year: '2026', event: 'Launched Auto-Apply AI Agents' },
  ];

  return (
    <Layout>
      <PageHeader
        tag="About Us"
        title="Transforming Careers Through AI"
        subtitle="We're on a mission to eliminate the friction between talented people and their dream careers using cutting-edge technology."
      />

      {/* Hero Image Section */}
      <section className="relative h-[50vh] overflow-hidden">
        <img
          src={aboutHero}
          alt="Passionfruit Team in Cape Town"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
      </section>

      {/* Mission Section */}
      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-primary font-bold text-sm tracking-wider uppercase">Our Mission</span>
              <h2 className="text-4xl md:text-5xl font-black text-white mt-4 mb-6 leading-tight">
                Making Job Search
                <span className="text-primary"> Effortless</span>
              </h2>
              <p className="text-gray-400 text-lg mb-6 leading-relaxed">
                We started Passionfruit because we experienced firsthand the frustration of traditional job hunting -
                endless applications, no responses, and mismatched opportunities. We knew there had to be a better way.
              </p>
              <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                Today, our AI-powered platform has helped tens of thousands of South Africans find meaningful work
                while enabling companies to discover perfect-fit candidates faster than ever before.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/careers"
                  className="bg-primary text-black px-6 py-3 rounded-full font-bold flex items-center gap-2 hover:bg-primary-light transition-all"
                >
                  Join Our Team <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  to="/features"
                  className="border-2 border-gray-700 text-white px-6 py-3 rounded-full font-bold hover:border-primary hover:text-primary transition-all"
                >
                  Learn More
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-primary/20 to-transparent rounded-3xl p-8 border border-primary/20">
                <div className="grid grid-cols-2 gap-6">
                  {stats.map((stat, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      className="text-center p-6 bg-black/50 rounded-2xl"
                    >
                      <div className="text-4xl font-black text-primary mb-2">{stat.value}</div>
                      <div className="text-gray-400">{stat.label}</div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-gray-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <img
                src={aboutValues}
                alt="Innovation and Connection"
                className="rounded-3xl shadow-2xl shadow-primary/20"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-black text-white mb-4">Our Values</h2>
              <p className="text-gray-400 text-lg">
                The principles that guide everything we do
              </p>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-gray-800/50 border border-gray-700 rounded-2xl p-6 hover:border-primary/50 transition-all"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-4">
                  {value.icon}
                </div>
                <h3 className="text-white font-bold text-xl mb-2">{value.title}</h3>
                <p className="text-gray-400 text-sm">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 bg-black">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-black text-white mb-4">Our Journey</h2>
            <p className="text-gray-400 text-lg">From idea to industry leader</p>
          </motion.div>

          <div className="relative">
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gray-800" />
            {timeline.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className={`relative flex items-center mb-8 ${i % 2 === 0 ? 'justify-start' : 'justify-end'}`}
              >
                <div className={`w-5/12 ${i % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                  <div className="text-primary font-black text-2xl mb-1">{item.year}</div>
                  <div className="text-gray-300">{item.event}</div>
                </div>
                <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 bg-primary rounded-full" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 bg-gray-900">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-black text-white mb-4">Leadership Team</h2>
            <p className="text-gray-400 text-lg">Meet the people behind Passionfruit</p>
          </motion.div>

          {/* Featured Founder */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-primary/20 to-transparent border border-primary/30 rounded-3xl p-8 mb-12"
          >
            <div className="grid md:grid-cols-3 gap-8 items-center">
              <div className="md:col-span-1">
                <img
                  src={aboutFounder}
                  alt="Thandi Nkosi - CEO & Co-Founder"
                  className="rounded-2xl w-full shadow-xl"
                />
              </div>
              <div className="md:col-span-2">
                <h3 className="text-white font-bold text-2xl mb-2">Thandi Nkosi</h3>
                <div className="text-primary font-medium mb-4">CEO & Co-Founder</div>
                <p className="text-gray-400 leading-relaxed">
                  "We started Passionfruit because we believe everyone deserves access to opportunities that match their true potential.
                  Our AI doesn't just match keywords - it understands careers, aspirations, and what makes people thrive.
                  After 15 years in talent acquisition, I knew there had to be a better way."
                </p>
              </div>
            </div>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {team.slice(1).map((member, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-gray-800/50 border border-gray-700 rounded-2xl p-6 text-center hover:border-primary/50 transition-all"
              >
                <div className="w-24 h-24 bg-primary/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Users className="w-10 h-10 text-primary" />
                </div>
                <h3 className="text-white font-bold text-lg">{member.name}</h3>
                <div className="text-primary font-medium text-sm mb-2">{member.role}</div>
                <p className="text-gray-400 text-sm">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-primary">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <Rocket className="w-16 h-16 text-black mx-auto mb-6" />
          <h2 className="text-4xl font-black text-black mb-6">Join the Passionfruit Family</h2>
          <p className="text-black/70 text-xl mb-10">
            Whether you're looking for your dream job or your next great hire, we're here to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/"
              className="bg-black text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-gray-800 transition-all"
            >
              Get Started
            </Link>
            <Link
              to="/careers"
              className="border-2 border-black text-black px-10 py-5 rounded-full font-bold text-lg hover:bg-black hover:text-white transition-all"
            >
              We're Hiring
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
