import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { CheckCircle2, X, HelpCircle } from 'lucide-react';
import { Layout, PageHeader } from '../components/Layout';

const Pricing = () => {
  const [isAnnual, setIsAnnual] = useState(false);

  const plans = [
    {
      name: 'Job Seeker',
      price: 'Free',
      period: 'Forever',
      desc: 'Perfect for individuals looking for their next opportunity',
      features: [
        { text: 'Upload unlimited resumes', included: true },
        { text: 'AI-powered job matching', included: true },
        { text: 'Apply to unlimited jobs', included: true },
        { text: 'Career insights & tips', included: true },
        { text: 'Email support', included: true },
        { text: 'Auto-apply agents', included: false },
        { text: 'Priority in employer searches', included: false },
        { text: 'Resume optimization', included: false },
      ],
      cta: 'Get Started Free',
      popular: false,
    },
    {
      name: 'Pro Seeker',
      price: isAnnual ? 'R79' : 'R99',
      period: '/month',
      desc: 'For serious job seekers who want an edge',
      features: [
        { text: 'Everything in Free', included: true },
        { text: 'Auto-apply to 3 jobs daily', included: true },
        { text: 'Priority in employer searches', included: true },
        { text: 'Resume optimization tips', included: true },
        { text: 'Interview preparation AI', included: true },
        { text: 'Priority support', included: true },
        { text: 'Salary insights', included: true },
        { text: 'Career coaching sessions', included: false },
      ],
      cta: 'Start Pro Trial',
      popular: true,
    },
    {
      name: 'Employer',
      price: 'R15',
      period: '/credit',
      desc: 'For companies looking to hire top talent',
      features: [
        { text: 'Post unlimited jobs', included: true },
        { text: 'AI candidate matching', included: true },
        { text: 'Applicant tracking system', included: true },
        { text: 'Company branding', included: true },
        { text: 'Analytics dashboard', included: true },
        { text: 'Bulk hiring tools', included: true },
        { text: 'API access', included: true },
        { text: 'Dedicated account manager', included: true },
      ],
      cta: 'Contact Sales',
      popular: false,
    },
  ];

  const faqs = [
    {
      q: 'How does the free plan work?',
      a: 'The free plan gives you unlimited access to job searching, resume uploads, and AI-powered matching. You can apply to as many jobs as you want manually.',
    },
    {
      q: 'What are auto-apply agents?',
      a: 'Auto-apply agents are AI assistants that automatically apply to 3 perfectly matched jobs per day on your behalf, complete with customized cover letters.',
    },
    {
      q: 'How do employer credits work?',
      a: 'Each credit allows you to view a candidate\'s full profile and contact information. Credits never expire and can be purchased in bulk for discounts.',
    },
    {
      q: 'Can I cancel my subscription anytime?',
      a: 'Yes, you can cancel your Pro Seeker subscription at any time. You\'ll continue to have access until the end of your billing period.',
    },
    {
      q: 'Is my data secure?',
      a: 'Absolutely. We use bank-level encryption and comply with POPIA regulations. Your data is never shared without your explicit consent.',
    },
    {
      q: 'Do you offer refunds?',
      a: 'We offer a 7-day money-back guarantee for Pro Seeker subscriptions if you\'re not satisfied with our service.',
    },
  ];

  return (
    <Layout>
      <PageHeader
        tag="Pricing"
        title="Simple, Transparent Pricing"
        subtitle="Start for free as a job seeker. Upgrade when you need more power. Employers pay only for what they use."
      />

      {/* Billing Toggle */}
      <section className="py-8 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-center gap-4">
            <span className={`font-medium ${!isAnnual ? 'text-white' : 'text-gray-500'}`}>Monthly</span>
            <button
              onClick={() => setIsAnnual(!isAnnual)}
              className={`relative w-14 h-7 rounded-full transition-colors ${isAnnual ? 'bg-primary' : 'bg-gray-700'}`}
            >
              <div
                className={`absolute top-1 w-5 h-5 rounded-full bg-white transition-transform ${isAnnual ? 'translate-x-8' : 'translate-x-1'
                  }`}
              />
            </button>
            <span className={`font-medium ${isAnnual ? 'text-white' : 'text-gray-500'}`}>
              Annual <span className="text-primary text-sm">(Save 20%)</span>
            </span>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-16 bg-black">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`relative bg-gray-900/50 backdrop-blur border rounded-3xl p-8 ${plan.popular ? 'border-primary scale-105 shadow-xl shadow-primary/20' : 'border-gray-800'
                  }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-black px-4 py-1 rounded-full text-sm font-bold">
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
                    <li key={j} className="flex items-center gap-3 text-sm">
                      {feature.included ? (
                        <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                      ) : (
                        <X className="w-5 h-5 text-gray-600 flex-shrink-0" />
                      )}
                      <span className={feature.included ? 'text-gray-300' : 'text-gray-600'}>{feature.text}</span>
                    </li>
                  ))}
                </ul>
                <motion.a
                  href={plan.name === 'Employer' ? 'mailto:sales@passionfruitcareers.com' : 'https://app.passionfruitcareers.com'}
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
          </div>
        </div>
      </section>

      {/* Feature Comparison */}
      <section className="py-24 bg-gray-900">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-black text-white mb-4">Compare Plans</h2>
            <p className="text-gray-400 text-lg">See what's included in each plan</p>
          </motion.div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-800">
                  <th className="text-left py-4 px-4 text-gray-400 font-medium">Feature</th>
                  <th className="text-center py-4 px-4 text-white font-bold">Free</th>
                  <th className="text-center py-4 px-4 text-primary font-bold">Pro Seeker</th>
                  <th className="text-center py-4 px-4 text-white font-bold">Employer</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Resume uploads', 'Unlimited', 'Unlimited', '-'],
                  ['Job applications', 'Unlimited', 'Unlimited', '-'],
                  ['AI matching', '✓', '✓', '✓'],
                  ['Auto-apply agents', '-', '3/day', '-'],
                  ['Priority listing', '-', '✓', '-'],
                  ['Job postings', '-', '-', 'Unlimited'],
                  ['Candidate search', '-', '-', '✓'],
                  ['Analytics', 'Basic', 'Advanced', 'Enterprise'],
                  ['Support', 'Email', 'Priority', 'Dedicated'],
                ].map(([feature, free, pro, employer], i) => (
                  <tr key={i} className="border-b border-gray-800/50">
                    <td className="py-4 px-4 text-gray-300">{feature}</td>
                    <td className="py-4 px-4 text-center text-gray-400">{free}</td>
                    <td className="py-4 px-4 text-center text-primary">{pro}</td>
                    <td className="py-4 px-4 text-center text-gray-400">{employer}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-24 bg-black">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-black text-white mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-400 text-lg">Got questions? We've got answers.</p>
          </motion.div>

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-gray-900/50 border border-gray-800 rounded-2xl p-6"
              >
                <div className="flex items-start gap-4">
                  <HelpCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-white font-bold text-lg mb-2">{faq.q}</h3>
                    <p className="text-gray-400">{faq.a}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-primary">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-black text-black mb-6">Ready to Get Started?</h2>
          <p className="text-black/70 text-xl mb-10">Join thousands who've found their dream careers with Passionfruit.</p>
          <a
            href="https://app.passionfruitcareers.com"
            className="inline-block bg-black text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-gray-800 transition-all"
          >
            Start Free Today
          </a>
        </div>
      </section>
    </Layout>
  );
};

export default Pricing;
