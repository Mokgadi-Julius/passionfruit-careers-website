import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Search, HelpCircle, Book, MessageSquare, Mail, Phone,
  ChevronRight, ChevronDown, FileText, Users, Settings,
  CreditCard, Shield, Zap, ArrowRight
} from 'lucide-react';
import { Layout, PageHeader } from '../components/Layout';

// Import images
import helpHero from '../assets/generated/hero-help.png';

const Help = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const categories = [
    { icon: <FileText className="w-6 h-6" />, title: 'Getting Started', desc: 'Learn the basics of using Passionfruit', count: 12 },
    { icon: <Users className="w-6 h-6" />, title: 'Account & Profile', desc: 'Manage your account settings', count: 8 },
    { icon: <Zap className="w-6 h-6" />, title: 'Job Matching', desc: 'How our AI matching works', count: 15 },
    { icon: <Settings className="w-6 h-6" />, title: 'Auto-Apply', desc: 'Set up automatic applications', count: 10 },
    { icon: <CreditCard className="w-6 h-6" />, title: 'Billing & Plans', desc: 'Payments and subscriptions', count: 7 },
    { icon: <Shield className="w-6 h-6" />, title: 'Privacy & Security', desc: 'Keep your data safe', count: 6 },
  ];

  const faqs = [
    {
      q: 'How does the AI job matching work?',
      a: 'Our AI analyzes over 50 data points from your resume including skills, experience, education, and career goals. It then compares these against job requirements to find the best matches, considering factors like culture fit, salary expectations, and location preferences.',
    },
    {
      q: 'Is my personal data safe?',
      a: 'Absolutely. We use bank-level encryption to protect your data, comply with POPIA regulations, and never share your information with third parties without your explicit consent. You can also delete your data at any time.',
    },
    {
      q: 'How do Auto-Apply agents work?',
      a: 'Auto-Apply agents are AI assistants that automatically apply to up to 3 perfectly matched jobs per day on your behalf. They customize cover letters for each application based on your profile and the job requirements.',
    },
    {
      q: 'Can employers see my profile without my consent?',
      a: 'No. Your profile is only visible to employers when you apply to their jobs or explicitly make your profile searchable. You have full control over your visibility settings.',
    },
    {
      q: 'How do I cancel my subscription?',
      a: 'You can cancel your Pro subscription anytime from your account settings. Your subscription will remain active until the end of your current billing period, and you\'ll continue to have access to all Pro features until then.',
    },
    {
      q: 'What happens if I don\'t find a job?',
      a: 'We offer a satisfaction guarantee. If you\'re a Pro member and don\'t receive any interview invitations within 30 days, contact our support team and we\'ll work with you to improve your profile or provide a full refund.',
    },
  ];

  const popularArticles = [
    'How to optimize your resume for AI matching',
    'Setting up Auto-Apply for the first time',
    'Understanding your match score',
    'How to update your job preferences',
    'Managing notification settings',
  ];

  return (
    <Layout>
      <PageHeader
        tag="Help Center"
        title="How Can We Help?"
        subtitle="Find answers, guides, and support resources to get the most out of Passionfruit."
      />

      {/* Hero Image */}
      <section className="py-12 bg-black">
        <div className="max-w-md mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="rounded-3xl overflow-hidden"
          >
            <img src={helpHero} alt="Help Assistant" className="w-full h-64 object-cover" />
          </motion.div>
        </div>
      </section>

      {/* Search */}
      <section className="py-12 bg-black">
        <div className="max-w-2xl mx-auto px-6">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
            <input
              type="text"
              placeholder="Search for help articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-gray-900 border border-gray-800 rounded-full pl-12 pr-6 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-primary"
            />
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-3xl font-black text-white mb-4">Browse by Category</h2>
            <p className="text-gray-400">Find help articles organized by topic</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((cat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-gray-800/50 border border-gray-700 rounded-2xl p-6 hover:border-primary/50 transition-all cursor-pointer"
              >
                <div className="flex items-start justify-between">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-4">
                    {cat.icon}
                  </div>
                  <span className="text-gray-500 text-sm">{cat.count} articles</span>
                </div>
                <h3 className="text-white font-bold text-lg mb-1">{cat.title}</h3>
                <p className="text-gray-400 text-sm mb-3">{cat.desc}</p>
                <span className="text-primary font-medium text-sm flex items-center gap-1">
                  Browse articles <ChevronRight className="w-4 h-4" />
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Articles */}
      <section className="py-16 bg-black">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-black text-white mb-6">Popular Articles</h2>
              <div className="space-y-3">
                {popularArticles.map((article, i) => (
                  <motion.a
                    key={i}
                    href="#"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center gap-3 text-gray-300 hover:text-primary transition-colors p-3 rounded-lg hover:bg-gray-900/50"
                  >
                    <Book className="w-5 h-5 text-gray-500" />
                    {article}
                  </motion.a>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-black text-white mb-6">Video Tutorials</h2>
              <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-6">
                <div className="aspect-video bg-gray-800 rounded-xl flex items-center justify-center mb-4">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-transform">
                    <div className="w-0 h-0 border-l-[20px] border-l-black border-y-[12px] border-y-transparent ml-1" />
                  </div>
                </div>
                <h3 className="text-white font-bold mb-2">Getting Started with Passionfruit</h3>
                <p className="text-gray-400 text-sm">A quick walkthrough of all the features you need to know.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-3xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-black text-white mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-400">Quick answers to common questions</p>
          </motion.div>

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="bg-gray-800/50 border border-gray-700 rounded-2xl overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full p-6 text-left flex items-center justify-between"
                >
                  <span className="text-white font-bold pr-4">{faq.q}</span>
                  <ChevronDown className={`w-5 h-5 text-primary flex-shrink-0 transition-transform ${openFaq === i ? 'rotate-180' : ''}`} />
                </button>
                {openFaq === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    className="px-6 pb-6"
                  >
                    <p className="text-gray-400">{faq.a}</p>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Support */}
      <section className="py-24 bg-primary">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-black text-black mb-4">Still Need Help?</h2>
            <p className="text-black/70 text-lg">Our support team is here to assist you</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <motion.div
              whileHover={{ y: -5 }}
              className="bg-black rounded-2xl p-6 text-center"
            >
              <MessageSquare className="w-10 h-10 text-primary mx-auto mb-4" />
              <h3 className="text-white font-bold mb-2">Live Chat</h3>
              <p className="text-gray-400 text-sm mb-4">Chat with our support team in real-time</p>
              <button className="text-primary font-bold">Start Chat</button>
            </motion.div>

            <motion.div
              whileHover={{ y: -5 }}
              className="bg-black rounded-2xl p-6 text-center"
            >
              <Mail className="w-10 h-10 text-primary mx-auto mb-4" />
              <h3 className="text-white font-bold mb-2">Email Support</h3>
              <p className="text-gray-400 text-sm mb-4">Get help via email within 24 hours</p>
              <a href="mailto:support@passionfruit.careers" className="text-primary font-bold">Send Email</a>
            </motion.div>

            <motion.div
              whileHover={{ y: -5 }}
              className="bg-black rounded-2xl p-6 text-center"
            >
              <Phone className="w-10 h-10 text-primary mx-auto mb-4" />
              <h3 className="text-white font-bold mb-2">Phone Support</h3>

            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Help;
