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
  const [searchTerm, setSearchTerm] = useState('');
  const [sortOption, setSortOption] = useState('Latest');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        // Use relative path to leverage proxy (dev) and redirects (prod)
        const response = await fetch('/api/jobs');
        if (response.ok) {
          const data = await response.json();
          // Assuming API returns items in "Latest" order by default, we preserve that as initial state
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

  // Filter and Sort Logic
  const filteredJobs = jobs.filter(job => {
    const term = searchTerm.toLowerCase();
    return (
      job.title.toLowerCase().includes(term) ||
      (job.company && job.company.toLowerCase().includes(term)) ||
      (job.location && job.location.toLowerCase().includes(term))
    );
  });

  const sortedJobs = [...filteredJobs].sort((a, b) => {
    if (sortOption === 'Latest') return 0; // Keep default API order (usually latest first) or strictly by ID if sequential
    if (sortOption === 'Oldest') return -1; // Reverse default

    const getSalary = (j: Job) => {
      if (!j.salaryMin) return 0;
      return parseInt(j.salaryMin) || 0;
    };

    if (sortOption === 'SalaryHigh') return getSalary(b) - getSalary(a);
    if (sortOption === 'SalaryLow') return getSalary(a) - getSalary(b);

    return 0;
  });

  // Pagination Logic
  const indexOfLastJob = currentPage * itemsPerPage;
  const indexOfFirstJob = indexOfLastJob - itemsPerPage;
  const currentJobs = sortedJobs.slice(indexOfFirstJob, indexOfLastJob);
  const totalPages = Math.ceil(sortedJobs.length / itemsPerPage);

  const benefits = [
    { icon: <Heart className="w-6 h-6" />, title: 'Verified Benefits', desc: 'Find roles with medical aid and mental health support' },
    { icon: <Coffee className="w-6 h-6" />, title: 'Remote Options', desc: 'Filter for remote-first and flexible companies' },
    { icon: <TrendingUp className="w-6 h-6" />, title: 'Career Growth', desc: 'Employers that invest in your development' },
    { icon: <Users className="w-6 h-6" />, title: 'Great Culture', desc: 'Join teams with vetted work environments' },
    { icon: <Globe className="w-6 h-6" />, title: 'Work-Life Balance', desc: 'Competitive leave policies and flexibility' },
    { icon: <Zap className="w-6 h-6" />, title: 'Modern Tools', desc: 'Work with the latest tech and equipment' },
  ];

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
    { title: 'Speed', desc: 'Dynamic teams that ship fast and iterate constantly.' },
    { title: 'Transparency', desc: 'Companies that share information openly.' },
    { title: 'Innovation', desc: 'Ambitious goals and creative problem solving.' },
    { title: 'Impact', desc: 'Meaningful work that makes a difference.' },
  ];

  return (
    <Layout>
      <PageHeader
        tag="Careers"
        title="Explore Recent Careers"
        subtitle="Discover opportunities from top companies using Passionfruit's AI-powered platform."
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

          {/* Search and Filter Controls */}
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <div className="relative flex-grow">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search by title, company, or location..."
                className="w-full bg-gray-900 border border-gray-800 text-white pl-12 pr-4 py-3 rounded-xl focus:outline-none focus:border-primary transition-colors"
                value={searchTerm}
                onChange={(e) => {
                  setSearchTerm(e.target.value);
                  setCurrentPage(1); // Reset to first page on search
                }}
              />
            </div>
            <div className="relative min-w-[200px]">
              <select
                className="w-full bg-gray-900 border border-gray-800 text-white px-4 py-3 rounded-xl focus:outline-none focus:border-primary transition-colors appearance-none cursor-pointer"
                value={sortOption}
                onChange={(e) => {
                  setSortOption(e.target.value);
                  setCurrentPage(1);
                }}
              >
                <option value="Latest">Latest</option>
                <option value="Oldest">Oldest</option>
                <option value="SalaryHigh">Salary (High to Low)</option>
                <option value="SalaryLow">Salary (Low to High)</option>
              </select>
              <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none">
                <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
          </div>

          {/* Job Listings */}
          {loading ? (
            <div className="flex justify-center py-12">
              <Loader2 className="w-10 h-10 text-primary animate-spin" />
            </div>
          ) : (
            <>
              <div className="space-y-4">
                {currentJobs.map((job, i) => (
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

              {/* Pagination Controls */}
              {totalPages > 1 && (
                <div className="flex justify-center items-center gap-2 mt-12">
                  <button
                    onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                    disabled={currentPage === 1}
                    className="p-2 rounded-lg border border-gray-800 text-gray-400 hover:text-white hover:border-gray-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>

                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                    <button
                      key={page}
                      onClick={() => setCurrentPage(page)}
                      className={`w-10 h-10 rounded-lg border font-medium transition-colors ${currentPage === page
                        ? 'bg-primary border-primary text-black'
                        : 'bg-transparent border-gray-800 text-gray-400 hover:text-white hover:border-gray-700'
                        }`}
                    >
                      {page}
                    </button>
                  ))}

                  <button
                    onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                    disabled={currentPage === totalPages}
                    className="p-2 rounded-lg border border-gray-800 text-gray-400 hover:text-white hover:border-gray-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              )}
            </>
          )}

          {!loading && jobs.length > 0 && filteredJobs.length === 0 && (
            <div className="text-center py-12">
              <Search className="w-12 h-12 text-gray-600 mx-auto mb-4" />
              <p className="text-gray-400 text-lg mb-2">No matches found for "{searchTerm}"</p>
              <button
                onClick={() => setSearchTerm('')}
                className="text-primary font-bold hover:underline"
              >
                Clear search
              </button>
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

      {/* Why Use Our Platform */}
      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-black text-white mb-4">Why Use Our Platform?</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              We offer more than just a job board - we offer a chance to make real impact
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
            <h2 className="text-4xl font-black text-white mb-4">What Employers Value</h2>
            <p className="text-gray-400 text-lg">Qualities top companies look for</p>
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

      {/* CTA */}
      <section className="py-24 bg-primary">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-black text-black mb-6">Hiring?</h2>
          <p className="text-black/70 text-xl mb-10">
            Post your job on Passionfruit and reach thousands of qualified candidates today.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="mailto:hiring@passionfruit.careers"
              className="bg-black text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-800 transition-all flex items-center justify-center gap-2"
            >
              Post a Job
            </a>
            <a
              href="https://app.passionfruitcareers.com/register"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/20 border-2 border-black/10 text-black px-8 py-4 rounded-full font-bold text-lg hover:bg-white/30 transition-all"
            >
              Join Talent Pool
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Careers;
