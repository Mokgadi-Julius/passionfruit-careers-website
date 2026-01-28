import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  MapPin, Clock, Briefcase, Heart, Coffee, Globe,
  TrendingUp, Users, Zap, CheckCircle2, ArrowRight, Search, Loader2
} from 'lucide-react';
import { Layout, PageHeader } from '../components/Layout';

// Import images
import careersOffice from '../assets/generated/hero-careers.png';
import careersCulture from '../assets/generated/testimonial-thabo.png';

interface Job {
  id: string;
  title: string;
  company: string;
  location: string | null;
  jobType: string | null;
  salaryMin: string | null;
  salaryMax: string | null;
  salaryCurrency: string | null;
  experienceLevel: string | null;
  description: string;
}

const Careers = () => {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedType, setSelectedType] = useState('All');

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await fetch('https://adequate-rejoicing-production-b4ba.up.railway.app/api/jobs');
        if (response.ok) {
          const data = await response.json();
          setJobs(data);
        }
      } catch (error) {
        console.error('Failed to fetch jobs:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, []);

  const benefits = [
    { icon: <Heart className="w-6 h-6" />, title: 'Health & Wellness', desc: 'Medical aid, gym membership, mental health support' },
    { icon: <Coffee className="w-6 h-6" />, title: 'Flexible Work', desc: 'Remote-first with flexible hours' },
    { icon: <TrendingUp className="w-6 h-6" />, title: 'Growth', desc: 'Learning budget and career development' },
    { icon: <Users className="w-6 h-6" />, title: 'Team Culture', desc: 'Regular team events and offsites' },
    { icon: <Globe className="w-6 h-6" />, title: 'Leave', desc: '25 days annual leave + birthday off' },
    { icon: <Zap className="w-6 h-6" />, title: 'Equipment', desc: 'Latest MacBook + home office setup' },
  ];

  // Derive job types from data
  // const jobTypes = ['All', ...Array.from(new Set(jobs.map(j => j.jobType).filter(Boolean)))];
  // Simplification for now, we can add logic if needed, but let's stick to a clean list first
  // Actually, let's keep it simple and just show "All" if we don't have many categories yet

  const formatSalary = (min: string | null, max: string | null, currency: string | null) => {
    if (!min && !max) return 'Competitive';
    const curr = currency || 'R';
    // Simple formatting
    const formatNum = (num: string) => {
      const n = parseInt(num);
      return n > 999 ? (n / 1000).toFixed(0) + 'k' : n;
    };

    if (min && max) return `${curr}${formatNum(min)} - ${curr}${formatNum(max)}`;
    if (min) return `${curr}${formatNum(min)}+`;
    return 'Competitive';
  };

  const values = [
    { title: 'Move Fast', desc: 'We ship quickly, learn from feedback, and iterate constantly.' },
    { title: 'Be Transparent', desc: 'We share information openly and communicate directly.' },
    { title: 'Think Big', desc: 'We set ambitious goals and find creative ways to achieve them.' },
    { title: 'Care Deeply', desc: 'We genuinely care about our users, our team, and our mission.' },
  ];

  return (
    <Layout>
      <PageHeader
        tag="Careers"
        title="Join Our Mission"
        subtitle="Help us transform how South Africa finds work. We're building something special, and we want you to be part of it."
      />

      {/* Hero Images */}
      <section className="py-12 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-6">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              className="rounded-3xl overflow-hidden h-72"
            >
              <img src={careersOffice} alt="Our Office" className="w-full h-full object-cover" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              className="rounded-3xl overflow-hidden h-72"
            >
              <img src={careersCulture} alt="Team Culture" className="w-full h-full object-cover" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-black text-white mb-4">Why Passionfruit?</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              We offer more than just a job - we offer a chance to make real impact
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-gray-900/50 border border-gray-800 rounded-2xl p-6"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-white font-bold text-lg mb-2">{benefit.title}</h3>
                <p className="text-gray-400 text-sm">{benefit.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-24 bg-gray-900">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-black text-white mb-4">Our Values</h2>
            <p className="text-gray-400 text-lg">What drives us every day</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {values.map((value, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-gray-800/50 border border-gray-700 rounded-2xl p-6 flex items-start gap-4"
              >
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-black font-bold flex-shrink-0">
                  {i + 1}
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg mb-1">{value.title}</h3>
                  <p className="text-gray-400">{value.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-24 bg-black">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-black text-white mb-4">Open Positions</h2>
            <p className="text-gray-400 text-lg">Find your next role at Passionfruit</p>
          </motion.div>

          {/* Job Listings */}
          {loading ? (
            <div className="flex justify-center py-12">
              <Loader2 className="w-10 h-10 text-primary animate-spin" />
            </div>
          ) : (
            <div className="space-y-4">
              {jobs.map((job, i) => (
                <motion.div
                  key={job.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                  whileHover={{ x: 5 }}
                  className="bg-gray-900/50 border border-gray-800 rounded-2xl p-6 hover:border-primary/50 transition-all cursor-pointer"
                >
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div>
                      <h3 className="text-white font-bold text-lg mb-2">{job.title}</h3>
                      <div className="flex flex-wrap items-center gap-4 text-sm">
                        <span className="flex items-center gap-1 text-gray-400">
                          <Briefcase className="w-4 h-4" />
                          {job.company || 'Passionfruit'}
                        </span>
                        {job.location && (
                          <span className="flex items-center gap-1 text-gray-400">
                            <MapPin className="w-4 h-4" />
                            {job.location}
                          </span>
                        )}
                        {job.jobType && (
                          <span className="flex items-center gap-1 text-gray-400">
                            <Clock className="w-4 h-4" />
                            {job.jobType}
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className="text-primary font-bold">
                        {formatSalary(job.salaryMin, job.salaryMax, job.salaryCurrency)}
                      </span>
                      <a
                        href={`https://app.passionfruitcareers.com/job/${job.id}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-primary text-black px-4 py-2 rounded-full font-bold hover:bg-primary-light transition-all flex items-center gap-1"
                      >
                        Apply <ArrowRight className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}

          {!loading && jobs.length === 0 && (
            <div className="text-center py-12">
              <Search className="w-12 h-12 text-gray-600 mx-auto mb-4" />
              <p className="text-gray-400">No positions found currently.</p>
            </div>
          )}
        </div>
      </section>

      {/* Application Process */}
      <section className="py-24 bg-gray-900">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-black text-white mb-4">Our Hiring Process</h2>
            <p className="text-gray-400 text-lg">What to expect when you apply</p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: '1', title: 'Apply', desc: 'Submit your application and CV' },
              { step: '2', title: 'Screen', desc: 'Quick chat with our recruiting team' },
              { step: '3', title: 'Interview', desc: 'Technical and culture interviews' },
              { step: '4', title: 'Offer', desc: 'Welcome to the team!' },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <div className="w-12 h-12 bg-primary text-black font-black text-xl rounded-full flex items-center justify-center mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-white font-bold mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-primary">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-black text-black mb-6">Don't See Your Role?</h2>
          <p className="text-black/70 text-xl mb-10">
            We're always looking for talented people. Send us your CV and we'll keep you in mind for future opportunities.
          </p>
          <a
            href="mailto:careers@passionfruit.careers"
            className="inline-block bg-black text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-gray-800 transition-all"
          >
            Send Your CV
          </a>
        </div>
      </section>
    </Layout>
  );
};

export default Careers;
