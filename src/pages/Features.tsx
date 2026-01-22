import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  FileText, Target, Bot, Building2, TrendingUp, Globe,
  CheckCircle2, Zap, Shield, Clock, Users, BarChart3,
  Sparkles, Brain, Rocket, ArrowRight
} from 'lucide-react';
import { Layout, PageHeader } from '../components/Layout';

// Import images
import featuresMatching from '../assets/generated/step-matching.png';
import featuresAutoapply from '../assets/generated/step-apply.png';
import featuresAnalytics from '../assets/generated/service-insights.png';

const Features = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const featureImages = [null, featuresMatching, featuresAutoapply, featuresAnalytics];

  const mainFeatures = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: 'AI-Powered Resume Analysis',
      description: 'Our advanced AI reads and understands your resume like a human recruiter, extracting skills, experience, and career aspirations to create your perfect profile.',
      benefits: ['Instant skill extraction', 'Experience mapping', 'Career goal identification', 'Qualification matching'],
      image: null,
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: 'Smart Job Matching',
      description: 'Beyond keyword matching, our algorithm analyzes 50+ compatibility factors to find jobs that truly fit your profile, culture preferences, and growth aspirations.',
      benefits: ['50+ data points analyzed', 'Culture fit scoring', 'Salary expectation matching', 'Location preferences'],
      image: featuresMatching,
    },
    {
      icon: <Bot className="w-8 h-8" />,
      title: 'Auto-Apply Agents',
      description: 'Your personal AI recruiter works 24/7, automatically applying to 3 perfectly matched positions daily with customized cover letters tailored to each role.',
      benefits: ['3 daily applications', 'Custom cover letters', 'Application tracking', 'Interview scheduling'],
      image: featuresAutoapply,
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: 'Career Analytics Dashboard',
      description: 'Get deep insights into your job search performance, market trends, and personalized recommendations to optimize your career trajectory.',
      benefits: ['Application analytics', 'Market insights', 'Skill gap analysis', 'Salary benchmarks'],
      image: featuresAnalytics,
    },
  ];

  const additionalFeatures = [
    { icon: <Shield className="w-6 h-6" />, title: 'Data Privacy', desc: 'Your data is encrypted and never shared without consent' },
    { icon: <Clock className="w-6 h-6" />, title: 'Real-time Updates', desc: 'Get instant notifications on application status changes' },
    { icon: <Users className="w-6 h-6" />, title: 'Team Collaboration', desc: 'Employers can collaborate on candidate evaluation' },
    { icon: <Globe className="w-6 h-6" />, title: 'Global Reach', desc: 'Access opportunities from local and international companies' },
    { icon: <Zap className="w-6 h-6" />, title: 'Instant Matching', desc: 'Get matched with relevant jobs within seconds' },
    { icon: <Sparkles className="w-6 h-6" />, title: 'AI Recommendations', desc: 'Personalized job and skill recommendations' },
  ];

  return (
    <Layout>
      <PageHeader
        tag="Features"
        title="Powerful Features for Your Career"
        subtitle="Discover how our AI-powered platform revolutionizes the way you find and land your dream job."
      />

      {/* Main Features */}
      <section ref={ref} className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="space-y-24">
            {mainFeatures.map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className={`grid lg:grid-cols-2 gap-12 items-center ${i % 2 === 1 ? '' : ''}`}
              >
                <div className={i % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-6">
                    {feature.icon}
                  </div>
                  <h3 className="text-3xl font-black text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-400 text-lg mb-6 leading-relaxed">{feature.description}</p>
                  <ul className="grid grid-cols-2 gap-3">
                    {feature.benefits.map((benefit, j) => (
                      <li key={j} className="flex items-center gap-2 text-gray-300">
                        <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={`${i % 2 === 1 ? 'lg:order-1' : ''}`}>
                  {feature.image ? (
                    <div className="rounded-3xl overflow-hidden shadow-2xl shadow-primary/10">
                      <img
                        src={feature.image}
                        alt={feature.title}
                        className="w-full h-80 object-cover"
                      />
                    </div>
                  ) : (
                    <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur border border-gray-700 rounded-3xl p-8 h-80 flex items-center justify-center">
                      <div className="w-32 h-32 bg-primary/20 rounded-full flex items-center justify-center text-primary animate-pulse">
                        {React.cloneElement(feature.icon, { className: 'w-16 h-16' })}
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Features Grid */}
      <section className="py-24 bg-gray-900">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-black text-white mb-4">And Much More</h2>
            <p className="text-gray-400 text-lg">Everything you need for a successful job search</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {additionalFeatures.map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-gray-800/50 backdrop-blur border border-gray-700 rounded-2xl p-6 hover:border-primary/50 transition-all"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-white font-bold text-lg mb-2">{feature.title}</h3>
                <p className="text-gray-400 text-sm">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-black text-black mb-6">
              Ready to Experience These Features?
            </h2>
            <p className="text-black/70 text-xl mb-10">
              Join thousands of job seekers who've transformed their careers with Passionfruit.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/"
                className="bg-black text-white px-10 py-5 rounded-full font-bold text-lg flex items-center justify-center gap-2 hover:bg-gray-800 transition-all"
              >
                <Rocket className="w-5 h-5" />
                Get Started Free
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/pricing"
                className="border-2 border-black text-black px-10 py-5 rounded-full font-bold text-lg hover:bg-black hover:text-white transition-all"
              >
                View Pricing
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Features;
