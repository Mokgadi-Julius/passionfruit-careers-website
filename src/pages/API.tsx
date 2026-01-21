import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Code, Key, Zap, Shield, Globe, Book,
  CheckCircle2, Copy, Check, Terminal, Database, Webhook
} from 'lucide-react';
import { Layout, PageHeader } from '../components/Layout';

const API = () => {
  const [copied, setCopied] = useState<string | null>(null);

  const copyCode = (code: string, id: string) => {
    navigator.clipboard.writeText(code);
    setCopied(id);
    setTimeout(() => setCopied(null), 2000);
  };

  const codeExamples = {
    auth: `curl -X POST https://api.passionfruit.careers/v1/auth \\
  -H "Content-Type: application/json" \\
  -d '{"api_key": "your_api_key"}'`,
    jobs: `curl https://api.passionfruit.careers/v1/jobs \\
  -H "Authorization: Bearer YOUR_TOKEN" \\
  -H "Content-Type: application/json"`,
    candidates: `curl https://api.passionfruit.careers/v1/candidates/search \\
  -H "Authorization: Bearer YOUR_TOKEN" \\
  -d '{"skills": ["python", "react"], "experience": 3}'`,
  };

  const features = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: 'Lightning Fast',
      desc: 'Average response time under 100ms with 99.9% uptime guarantee.',
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'Secure by Default',
      desc: 'OAuth 2.0 authentication with rate limiting and encryption.',
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: 'Global CDN',
      desc: 'Distributed across multiple regions for low latency worldwide.',
    },
    {
      icon: <Book className="w-6 h-6" />,
      title: 'Comprehensive Docs',
      desc: 'Detailed documentation with examples in multiple languages.',
    },
  ];

  const endpoints = [
    { method: 'GET', path: '/v1/jobs', desc: 'List all available jobs' },
    { method: 'POST', path: '/v1/jobs', desc: 'Create a new job posting' },
    { method: 'GET', path: '/v1/candidates', desc: 'Search candidates' },
    { method: 'POST', path: '/v1/applications', desc: 'Submit an application' },
    { method: 'GET', path: '/v1/matches', desc: 'Get AI-matched candidates' },
    { method: 'POST', path: '/v1/webhooks', desc: 'Register a webhook' },
  ];

  const sdks = [
    { name: 'JavaScript/Node.js', color: 'bg-yellow-500' },
    { name: 'Python', color: 'bg-blue-500' },
    { name: 'Ruby', color: 'bg-red-500' },
    { name: 'PHP', color: 'bg-purple-500' },
    { name: 'Go', color: 'bg-cyan-500' },
    { name: 'Java', color: 'bg-orange-500' },
  ];

  return (
    <Layout>
      <PageHeader
        tag="API"
        title="Developer API"
        subtitle="Integrate Passionfruit's powerful recruitment AI into your applications with our RESTful API."
      />

      {/* API Features */}
      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {features.map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="bg-gray-900/50 border border-gray-800 rounded-2xl p-6"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-white font-bold text-lg mb-2">{feature.title}</h3>
                <p className="text-gray-400 text-sm">{feature.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Code Examples */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-3xl font-black text-white mb-8 text-center">Quick Start</h2>
            <div className="grid lg:grid-cols-3 gap-6">
              {Object.entries(codeExamples).map(([key, code]) => (
                <div key={key} className="bg-gray-900 border border-gray-800 rounded-2xl overflow-hidden">
                  <div className="flex items-center justify-between px-4 py-3 bg-gray-800/50 border-b border-gray-800">
                    <div className="flex items-center gap-2">
                      <Terminal className="w-4 h-4 text-primary" />
                      <span className="text-white font-medium capitalize">{key}</span>
                    </div>
                    <button
                      onClick={() => copyCode(code, key)}
                      className="text-gray-400 hover:text-primary transition-colors"
                    >
                      {copied === key ? <Check className="w-4 h-4 text-green-500" /> : <Copy className="w-4 h-4" />}
                    </button>
                  </div>
                  <pre className="p-4 text-sm text-gray-300 overflow-x-auto">
                    <code>{code}</code>
                  </pre>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Endpoints */}
      <section className="py-24 bg-gray-900">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-black text-white mb-4">API Endpoints</h2>
            <p className="text-gray-400 text-lg">Core endpoints to power your integration</p>
          </motion.div>

          <div className="space-y-4">
            {endpoints.map((endpoint, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-gray-800/50 border border-gray-700 rounded-xl p-4 flex items-center justify-between hover:border-primary/50 transition-all"
              >
                <div className="flex items-center gap-4">
                  <span className={`px-3 py-1 rounded-lg text-xs font-bold ${
                    endpoint.method === 'GET' ? 'bg-green-500/20 text-green-400' : 'bg-blue-500/20 text-blue-400'
                  }`}>
                    {endpoint.method}
                  </span>
                  <code className="text-primary font-mono">{endpoint.path}</code>
                </div>
                <span className="text-gray-400 text-sm hidden md:block">{endpoint.desc}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SDKs */}
      <section className="py-24 bg-black">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-black text-white mb-4">Official SDKs</h2>
            <p className="text-gray-400 text-lg">Get started quickly with our official libraries</p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {sdks.map((sdk, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="bg-gray-900 border border-gray-800 rounded-xl p-4 text-center hover:border-primary/50 transition-all cursor-pointer"
              >
                <div className={`w-10 h-10 ${sdk.color} rounded-lg mx-auto mb-3`} />
                <span className="text-white font-medium text-sm">{sdk.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-24 bg-gray-900">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-black text-white mb-4">API Pricing</h2>
            <p className="text-gray-400 text-lg">Flexible pricing that scales with your needs</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: 'Starter', calls: '10,000', price: 'Free', features: ['10K API calls/month', 'Basic endpoints', 'Email support'] },
              { name: 'Growth', calls: '100,000', price: 'R500', features: ['100K API calls/month', 'All endpoints', 'Priority support', 'Webhooks'] },
              { name: 'Enterprise', calls: 'Unlimited', price: 'Custom', features: ['Unlimited calls', 'Dedicated infrastructure', 'SLA guarantee', '24/7 support'] },
            ].map((plan, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`bg-gray-800/50 border rounded-2xl p-6 ${i === 1 ? 'border-primary' : 'border-gray-700'}`}
              >
                <h3 className="text-white font-bold text-xl mb-2">{plan.name}</h3>
                <div className="mb-4">
                  <span className="text-4xl font-black text-white">{plan.price}</span>
                  {plan.price !== 'Free' && plan.price !== 'Custom' && <span className="text-gray-400">/mo</span>}
                </div>
                <p className="text-primary font-medium mb-4">{plan.calls} calls/month</p>
                <ul className="space-y-2">
                  {plan.features.map((feature, j) => (
                    <li key={j} className="flex items-center gap-2 text-gray-300 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-primary">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="flex items-center justify-center gap-4 mb-6">
            <Key className="w-12 h-12 text-black" />
          </div>
          <h2 className="text-4xl font-black text-black mb-6">Ready to Build?</h2>
          <p className="text-black/70 text-xl mb-10">
            Get your API key and start integrating in minutes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/"
              className="bg-black text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-gray-800 transition-all"
            >
              Get API Key
            </Link>
            <a
              href="#"
              className="border-2 border-black text-black px-10 py-5 rounded-full font-bold text-lg hover:bg-black hover:text-white transition-all"
            >
              View Documentation
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default API;
