
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Download, ExternalLink, Calendar, FileText, Image,
  Mail, MessageSquare, Award, TrendingUp
} from 'lucide-react';
import { Layout, PageHeader } from '../components/Layout';

// Import images
import pressHero from '../assets/pages/press-hero.png';

const Press = () => {
  const pressReleases = [
    {
      date: 'January 15, 2026',
      title: 'Passionfruit Launches Revolutionary AI Auto-Apply Feature',
      summary: 'New feature enables job seekers to automatically apply to perfectly matched positions daily.',
      link: '#',
    },
    {
      date: 'December 1, 2025',
      title: 'Passionfruit Reaches 50,000 Active Users',
      summary: 'South African recruitment platform celebrates milestone of connecting thousands with their dream careers.',
      link: '#',
    },
    {
      date: 'September 20, 2025',
      title: 'Passionfruit Partners with Major SA Corporations',
      summary: 'Leading companies join the platform to access AI-matched talent pool.',
      link: '#',
    },
    {
      date: 'June 10, 2025',
      title: 'Passionfruit Secures R50M Series A Funding',
      summary: 'Investment to accelerate AI development and expand across Southern Africa.',
      link: '#',
    },
  ];

  const mediaFeatures = [
    { outlet: 'TechCentral', title: 'How Passionfruit is Revolutionizing SA Recruitment', date: 'Jan 2026' },
    { outlet: 'Business Day', title: 'AI-Powered Job Matching: The Future of Hiring', date: 'Dec 2025' },
    { outlet: 'Daily Maverick', title: 'Cape Town Startup Tackles Unemployment with AI', date: 'Nov 2025' },
    { outlet: 'ITWeb', title: 'Passionfruit\'s Machine Learning Approach to Recruitment', date: 'Oct 2025' },
  ];

  const awards = [
    { title: 'Best HR Tech Startup', org: 'SA Tech Awards 2025', icon: <Award className="w-6 h-6" /> },
    { title: 'Innovation Award', org: 'Cape Town Tech Week 2025', icon: <TrendingUp className="w-6 h-6" /> },
    { title: 'Top 50 Startups', org: 'Ventureburn 2025', icon: <Award className="w-6 h-6" /> },
  ];

  const stats = [
    { value: '50K+', label: 'Active Users' },
    { value: '10K+', label: 'Companies' },
    { value: '25K+', label: 'Jobs Filled' },
    { value: '95%', label: 'Match Rate' },
  ];

  return (
    <Layout>
      <PageHeader
        tag="Press"
        title="Passionfruit in the News"
        subtitle="Media resources, press releases, and company news for journalists and media professionals."
      />

      {/* Hero Image */}
      <section className="relative h-[40vh] overflow-hidden">
        <img
          src={pressHero}
          alt="Press Room"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
      </section>

      {/* Key Stats */}
      <section className="py-16 bg-black border-b border-gray-800">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="text-4xl font-black text-primary mb-1">{stat.value}</div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Press Releases */}
      <section className="py-24 bg-black">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-3xl font-black text-white mb-4">Press Releases</h2>
            <p className="text-gray-400">Latest news and announcements from Passionfruit</p>
          </motion.div>

          <div className="space-y-6">
            {pressReleases.map((release, i) => (
              <motion.a
                key={i}
                href={release.link}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ x: 5 }}
                className="block bg-gray-900/50 border border-gray-800 rounded-2xl p-6 hover:border-primary/50 transition-all"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-2 text-gray-500 text-sm mb-2">
                      <Calendar className="w-4 h-4" />
                      {release.date}
                    </div>
                    <h3 className="text-white font-bold text-lg mb-2">{release.title}</h3>
                    <p className="text-gray-400">{release.summary}</p>
                  </div>
                  <ExternalLink className="w-5 h-5 text-gray-500 flex-shrink-0" />
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Media Coverage */}
      <section className="py-24 bg-gray-900">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-3xl font-black text-white mb-4">Media Coverage</h2>
            <p className="text-gray-400">Passionfruit in the press</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {mediaFeatures.map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-gray-800/50 border border-gray-700 rounded-2xl p-6"
              >
                <div className="text-primary font-bold text-sm mb-2">{feature.outlet}</div>
                <h3 className="text-white font-bold mb-2">{feature.title}</h3>
                <div className="text-gray-500 text-sm">{feature.date}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards */}
      <section className="py-24 bg-black">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-black text-white mb-4">Awards & Recognition</h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {awards.map((award, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-gradient-to-br from-primary/20 to-transparent border border-primary/30 rounded-2xl p-6 text-center"
              >
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center text-primary mx-auto mb-4">
                  {award.icon}
                </div>
                <h3 className="text-white font-bold mb-1">{award.title}</h3>
                <div className="text-gray-400 text-sm">{award.org}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Brand Assets */}
      <section className="py-24 bg-gray-900">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-3xl font-black text-white mb-4">Brand Assets</h2>
            <p className="text-gray-400">Download logos and brand materials for press use</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: 'Logo Pack', desc: 'All logo variations (PNG, SVG)', icon: <Image className="w-6 h-6" /> },
              { title: 'Brand Guidelines', desc: 'Colors, typography, usage', icon: <FileText className="w-6 h-6" /> },
              { title: 'Press Kit', desc: 'Complete media kit with bios', icon: <Download className="w-6 h-6" /> },
            ].map((asset, i) => (
              <motion.button
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-gray-800/50 border border-gray-700 rounded-2xl p-6 text-left hover:border-primary/50 transition-all"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-4">
                  {asset.icon}
                </div>
                <h3 className="text-white font-bold mb-1">{asset.title}</h3>
                <p className="text-gray-400 text-sm mb-3">{asset.desc}</p>
                <span className="text-primary font-medium text-sm flex items-center gap-1">
                  Download <Download className="w-4 h-4" />
                </span>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-24 bg-primary">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <MessageSquare className="w-16 h-16 text-black mx-auto mb-6" />
          <h2 className="text-4xl font-black text-black mb-6">Media Inquiries</h2>
          <p className="text-black/70 text-xl mb-8">
            For press inquiries, interviews, or additional information, please contact our communications team.
          </p>
          <a
            href="mailto:press@passionfruit.careers"
            className="inline-flex items-center gap-2 bg-black text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-gray-800 transition-all"
          >
            <Mail className="w-5 h-5" />
            press@passionfruit.careers
          </a>
        </div>
      </section>
    </Layout>
  );
};

export default Press;
