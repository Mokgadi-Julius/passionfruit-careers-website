
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Puzzle, CheckCircle2, ArrowRight, Zap, RefreshCw, Shield,
  MessageSquare, Calendar, FileSpreadsheet, Mail, Users, BarChart3
} from 'lucide-react';
import { Layout, PageHeader } from '../components/Layout';

// Import images
import integrationsHero from '../assets/generated/hero-integrations.png';

const Integrations = () => {
  const integrations = [
    {
      category: 'Communication',
      items: [
        { name: 'Slack', desc: 'Get notifications and updates directly in Slack', icon: <MessageSquare className="w-6 h-6" />, status: 'Available' },
        { name: 'Microsoft Teams', desc: 'Collaborate on hiring within Teams', icon: <Users className="w-6 h-6" />, status: 'Available' },
        { name: 'WhatsApp Business', desc: 'Communicate with candidates via WhatsApp', icon: <MessageSquare className="w-6 h-6" />, status: 'Coming Soon' },
      ],
    },
    {
      category: 'HR & ATS',
      items: [
        { name: 'BambooHR', desc: 'Sync candidate data with BambooHR', icon: <Users className="w-6 h-6" />, status: 'Available' },
        { name: 'Workday', desc: 'Enterprise HR integration', icon: <FileSpreadsheet className="w-6 h-6" />, status: 'Available' },
        { name: 'SAP SuccessFactors', desc: 'Connect with SAP HR suite', icon: <BarChart3 className="w-6 h-6" />, status: 'Coming Soon' },
      ],
    },
    {
      category: 'Productivity',
      items: [
        { name: 'Google Workspace', desc: 'Sync with Google Calendar & Gmail', icon: <Mail className="w-6 h-6" />, status: 'Available' },
        { name: 'Microsoft 365', desc: 'Integrate with Outlook & Calendar', icon: <Calendar className="w-6 h-6" />, status: 'Available' },
        { name: 'Notion', desc: 'Track hiring in Notion databases', icon: <FileSpreadsheet className="w-6 h-6" />, status: 'Available' },
      ],
    },
    {
      category: 'Job Boards',
      items: [
        { name: 'LinkedIn', desc: 'Post jobs and source candidates', icon: <Users className="w-6 h-6" />, status: 'Available' },
        { name: 'Indeed', desc: 'Automatically post to Indeed', icon: <FileSpreadsheet className="w-6 h-6" />, status: 'Available' },
        { name: 'Careers24', desc: 'South African job board integration', icon: <BarChart3 className="w-6 h-6" />, status: 'Available' },
      ],
    },
  ];

  const benefits = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Streamlined Workflow',
      desc: 'Connect your existing tools and automate repetitive tasks across your hiring process.',
    },
    {
      icon: <RefreshCw className="w-8 h-8" />,
      title: 'Real-time Sync',
      desc: 'Keep all your systems up to date with bidirectional data synchronization.',
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Secure Connections',
      desc: 'Enterprise-grade security with OAuth 2.0 and encrypted data transfer.',
    },
  ];

  return (
    <Layout>
      <PageHeader
        tag="Integrations"
        title="Connect Your Tools"
        subtitle="Integrate Passionfruit with your favorite tools to create a seamless hiring workflow."
      />

      {/* Hero Image */}
      <section className="py-12 bg-black">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="rounded-3xl overflow-hidden shadow-2xl shadow-primary/20"
          >
            <img src={integrationsHero} alt="Connected Apps and Platforms" className="w-full h-72 object-cover" />
          </motion.div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {benefits.map((benefit, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mx-auto mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-white font-bold text-xl mb-2">{benefit.title}</h3>
                <p className="text-gray-400">{benefit.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations Grid */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-6">
          {integrations.map((category, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <h2 className="text-2xl font-black text-white mb-8">{category.category}</h2>
              <div className="grid md:grid-cols-3 gap-6">
                {category.items.map((item, j) => (
                  <motion.div
                    key={j}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: j * 0.1 }}
                    whileHover={{ y: -5 }}
                    className="bg-gray-800/50 border border-gray-700 rounded-2xl p-6 hover:border-primary/50 transition-all"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary">
                        {item.icon}
                      </div>
                      <span className={`px-3 py-1 rounded-full text-xs font-bold ${item.status === 'Available' ? 'bg-green-500/20 text-green-400' : 'bg-yellow-500/20 text-yellow-400'
                        }`}>
                        {item.status}
                      </span>
                    </div>
                    <h3 className="text-white font-bold text-lg mb-2">{item.name}</h3>
                    <p className="text-gray-400 text-sm mb-4">{item.desc}</p>
                    <button className="text-primary font-medium text-sm flex items-center gap-1 hover:gap-2 transition-all">
                      {item.status === 'Available' ? 'Connect' : 'Notify Me'}
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Custom Integration */}
      <section className="py-24 bg-black">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700 rounded-3xl p-12 text-center"
          >
            <Puzzle className="w-16 h-16 text-primary mx-auto mb-6" />
            <h2 className="text-3xl font-black text-white mb-4">Need a Custom Integration?</h2>
            <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
              Can't find the integration you need? Our API allows you to build custom integrations, or our team can help create one for you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/api"
                className="bg-primary text-black px-8 py-4 rounded-full font-bold hover:bg-primary-light transition-all"
              >
                Explore API
              </Link>
              <Link
                to="/help"
                className="border-2 border-gray-600 text-white px-8 py-4 rounded-full font-bold hover:border-primary hover:text-primary transition-all"
              >
                Contact Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Integration Stats */}
      <section className="py-24 bg-gray-900">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { value: '25+', label: 'Integrations' },
              { value: '99.9%', label: 'Uptime' },
              { value: '1M+', label: 'Syncs/Day' },
              { value: '500+', label: 'Companies' },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="text-4xl md:text-5xl font-black text-primary mb-2">{stat.value}</div>
                <div className="text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-primary">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-black text-black mb-6">Ready to Connect?</h2>
          <p className="text-black/70 text-xl mb-10">
            Start integrating your tools with Passionfruit today.
          </p>
          <a
            href="https://app.passionfruitcareers.com"
            className="inline-block bg-black text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-gray-800 transition-all"
          >
            Get Started
          </a>
        </div>
      </section>
    </Layout>
  );
};

export default Integrations;
