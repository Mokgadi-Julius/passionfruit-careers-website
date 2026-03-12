import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
    MapPin, Briefcase, Clock, Building2, ExternalLink,
    Share2, ArrowLeft, Users, Eye, Sparkles, CheckCircle2, Copy, Check
} from 'lucide-react';
import { Layout } from '../components/Layout';

interface Job {
    id: string;
    title: string;
    description: string;
    requirements: string;
    responsibilities: string;
    benefits: string;
    location: string;
    jobType: string;
    salaryMin: number;
    salaryMax: number;
    salaryCurrency: string;
    experienceLevel: string;
    status: string;
    viewsCount: number;
    applicationsCount: number;
    createdAt: string;
    expiresAt: string;
    company: string;
    companyLogo: string;
    companyDescription: string;
    companyWebsite: string;
}

const JobPage = () => {
    const { id } = useParams<{ id: string }>();
    const [job, setJob] = useState<Job | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [copied, setCopied] = useState(false);

    useEffect(() => {
        const fetchJob = async () => {
            try {
                setLoading(true);
                const response = await fetch(`/api/jobs/${id}`);
                if (!response.ok) {
                    throw new Error('Job not found');
                }
                const data = await response.json();
                setJob(data);
                // Update page title
                document.title = `${data.title} at ${data.company} — Passionfruit Careers`;
            } catch (err: any) {
                setError(err.message || 'Failed to load job');
            } finally {
                setLoading(false);
            }
        };
        fetchJob();
    }, [id]);

    const formatSalary = (min: number, max: number, currency: string) => {
        if (!min && !max) return null;
        const fmt = (n: number) => Number(n).toLocaleString();
        const cur = currency || 'ZAR';
        if (min && max) return `${cur} ${fmt(min)} – ${fmt(max)}`;
        if (min) return `From ${cur} ${fmt(min)}`;
        return `Up to ${cur} ${fmt(max)}`;
    };

    const formatDate = (date: string) => {
        const d = new Date(date);
        const now = new Date();
        const diffMs = now.getTime() - d.getTime();
        const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));
        if (diffDays === 0) return 'Today';
        if (diffDays === 1) return 'Yesterday';
        if (diffDays < 7) return `${diffDays} days ago`;
        if (diffDays < 30) return `${Math.floor(diffDays / 7)} weeks ago`;
        return d.toLocaleDateString('en-ZA', { day: 'numeric', month: 'short', year: 'numeric' });
    };

    const formatJobType = (type: string) => {
        if (!type) return null;
        return type.replace('-', ' ').replace(/\b\w/g, c => c.toUpperCase());
    };

    const formatExperience = (level: string) => {
        if (!level) return null;
        return level.charAt(0).toUpperCase() + level.slice(1) + ' Level';
    };

    const shareUrl = typeof window !== 'undefined' ? window.location.href : '';

    const handleCopyLink = () => {
        navigator.clipboard.writeText(shareUrl).then(() => {
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        });
    };

    const handleShare = async () => {
        if (navigator.share) {
            try {
                await navigator.share({
                    title: `${job?.title} at ${job?.company}`,
                    text: `Check out this job opportunity: ${job?.title} at ${job?.company}`,
                    url: shareUrl,
                });
            } catch (err) {
                // User cancelled or share failed, fall back to copy
                handleCopyLink();
            }
        } else {
            handleCopyLink();
        }
    };

    const renderSection = (title: string, content: string | null) => {
        if (!content) return null;
        return (
            <div className="mb-8">
                <h3 className="text-xl font-bold text-white mb-4">{title}</h3>
                <div className="text-gray-300 leading-relaxed whitespace-pre-line">
                    {content}
                </div>
            </div>
        );
    };

    if (loading) {
        return (
            <Layout>
                <div className="pt-32 pb-20 min-h-screen flex items-center justify-center">
                    <div className="text-center">
                        <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4" />
                        <p className="text-gray-400">Loading job details...</p>
                    </div>
                </div>
            </Layout>
        );
    }

    if (error || !job) {
        return (
            <Layout>
                <div className="pt-32 pb-20 min-h-screen flex items-center justify-center">
                    <div className="text-center max-w-md">
                        <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                            <Briefcase className="w-8 h-8 text-red-400" />
                        </div>
                        <h2 className="text-2xl font-bold text-white mb-4">Job Not Found</h2>
                        <p className="text-gray-400 mb-8">
                            This job may have been removed or is no longer available.
                        </p>
                        <Link
                            to="/"
                            className="inline-flex items-center gap-2 bg-primary text-black px-6 py-3 rounded-full font-bold hover:bg-primary-light transition-colors"
                        >
                            <ArrowLeft className="w-4 h-4" />
                            Back to Home
                        </Link>
                    </div>
                </div>
            </Layout>
        );
    }

    const salary = formatSalary(job.salaryMin, job.salaryMax, job.salaryCurrency);

    return (
        <Layout>
            {/* Hero */}
            <div className="pt-28 pb-12 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden">
                <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-5" />
                <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />

                <div className="max-w-5xl mx-auto px-6 relative z-10">
                    <Link
                        to="/"
                        className="inline-flex items-center gap-2 text-gray-400 hover:text-primary transition-colors mb-8 text-sm"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        All Jobs
                    </Link>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex flex-col md:flex-row md:items-start gap-6"
                    >
                        {/* Company Logo */}
                        <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-gray-800 border border-gray-700 flex items-center justify-center overflow-hidden flex-shrink-0">
                            {job.companyLogo ? (
                                <img src={job.companyLogo} alt={job.company} className="w-full h-full object-cover" />
                            ) : (
                                <Building2 className="w-8 h-8 text-gray-500" />
                            )}
                        </div>

                        <div className="flex-1">
                            <h1 className="text-3xl md:text-4xl font-black text-white mb-2">
                                {job.title}
                            </h1>
                            <p className="text-xl text-primary font-semibold mb-4">{job.company}</p>

                            {/* Tags */}
                            <div className="flex flex-wrap gap-3 mb-6">
                                {job.location && (
                                    <span className="inline-flex items-center gap-1.5 bg-gray-800 text-gray-300 px-3 py-1.5 rounded-full text-sm">
                                        <MapPin className="w-3.5 h-3.5" />
                                        {job.location}
                                    </span>
                                )}
                                {formatJobType(job.jobType) && (
                                    <span className="inline-flex items-center gap-1.5 bg-gray-800 text-gray-300 px-3 py-1.5 rounded-full text-sm">
                                        <Briefcase className="w-3.5 h-3.5" />
                                        {formatJobType(job.jobType)}
                                    </span>
                                )}
                                {formatExperience(job.experienceLevel) && (
                                    <span className="inline-flex items-center gap-1.5 bg-gray-800 text-gray-300 px-3 py-1.5 rounded-full text-sm">
                                        <Sparkles className="w-3.5 h-3.5" />
                                        {formatExperience(job.experienceLevel)}
                                    </span>
                                )}
                                {salary && (
                                    <span className="inline-flex items-center gap-1.5 bg-primary/20 text-primary px-3 py-1.5 rounded-full text-sm font-medium">
                                        <span className="font-bold text-xs">R</span>
                                        {salary}
                                    </span>
                                )}
                            </div>

                            {/* Meta info */}
                            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">
                                <span className="flex items-center gap-1.5">
                                    <Clock className="w-3.5 h-3.5" />
                                    Posted {formatDate(job.createdAt)}
                                </span>
                                <span className="flex items-center gap-1.5">
                                    <Eye className="w-3.5 h-3.5" />
                                    {job.viewsCount} views
                                </span>
                                <span className="flex items-center gap-1.5">
                                    <Users className="w-3.5 h-3.5" />
                                    {job.applicationsCount} applicants
                                </span>
                            </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex flex-col gap-3 md:items-end flex-shrink-0">
                            <a
                                href="https://app.passionfruitcareers.com"
                                className="inline-flex items-center justify-center gap-2 bg-primary text-black px-8 py-3 rounded-full font-bold hover:bg-primary-light transition-all hover:shadow-lg hover:shadow-primary/30"
                            >
                                <CheckCircle2 className="w-5 h-5" />
                                Apply Now
                            </a>
                            <button
                                onClick={handleShare}
                                className="inline-flex items-center justify-center gap-2 bg-gray-800 text-gray-300 px-6 py-3 rounded-full font-medium hover:bg-gray-700 hover:text-white transition-colors"
                            >
                                {copied ? <Check className="w-4 h-4 text-green-400" /> : <Share2 className="w-4 h-4" />}
                                {copied ? 'Link Copied!' : 'Share Job'}
                            </button>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Content */}
            <div className="max-w-5xl mx-auto px-6 py-12">
                <div className="grid lg:grid-cols-3 gap-12">

                    {/* Main Content */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="lg:col-span-2"
                    >
                        {renderSection('About the Role', job.description)}
                        {renderSection('Responsibilities', job.responsibilities)}
                        {renderSection('Requirements', job.requirements)}
                        {renderSection('Benefits', job.benefits)}
                    </motion.div>

                    {/* Sidebar */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="space-y-6"
                    >
                        {/* Quick Apply Card */}
                        <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl border border-gray-700 p-6">
                            <h3 className="text-lg font-bold text-white mb-4">Interested in this role?</h3>
                            <p className="text-gray-400 text-sm mb-6">
                                Sign up on Passionfruit Careers to apply and get AI-powered match scores for this and other jobs.
                            </p>
                            <a
                                href="https://app.passionfruitcareers.com"
                                className="block w-full text-center bg-primary text-black py-3 rounded-full font-bold hover:bg-primary-light transition-colors mb-3"
                            >
                                Apply on Passionfruit
                            </a>
                            <button
                                onClick={handleCopyLink}
                                className="w-full flex items-center justify-center gap-2 border border-gray-600 text-gray-300 py-3 rounded-full font-medium hover:bg-gray-800 transition-colors text-sm"
                            >
                                {copied ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4" />}
                                {copied ? 'Copied!' : 'Copy Link to Share'}
                            </button>
                        </div>

                        {/* Company Info Card */}
                        <div className="bg-gray-800/50 rounded-2xl border border-gray-700 p-6">
                            <h3 className="text-lg font-bold text-white mb-4">About {job.company}</h3>
                            {job.companyDescription && (
                                <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                                    {job.companyDescription.length > 200
                                        ? job.companyDescription.substring(0, 200) + '...'
                                        : job.companyDescription}
                                </p>
                            )}
                            {job.companyWebsite && (
                                <a
                                    href={job.companyWebsite}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-1.5 text-primary text-sm hover:underline"
                                >
                                    <ExternalLink className="w-3.5 h-3.5" />
                                    Visit Website
                                </a>
                            )}
                        </div>

                        {/* Share Card */}
                        <div className="bg-gray-800/50 rounded-2xl border border-gray-700 p-6">
                            <h3 className="text-lg font-bold text-white mb-4">Share this Job</h3>
                            <p className="text-gray-400 text-sm mb-4">Know someone who'd be great for this role?</p>
                            <div className="flex gap-2">
                                <a
                                    href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex-1 flex items-center justify-center gap-1.5 bg-[#0077B5] text-white py-2.5 rounded-lg text-sm font-medium hover:opacity-90 transition-opacity"
                                >
                                    LinkedIn
                                </a>
                                <a
                                    href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(`${job.title} at ${job.company} — `)}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex-1 flex items-center justify-center gap-1.5 bg-black border border-gray-600 text-white py-2.5 rounded-lg text-sm font-medium hover:bg-gray-900 transition-colors"
                                >
                                    𝕏 / Twitter
                                </a>
                                <a
                                    href={`https://wa.me/?text=${encodeURIComponent(`${job.title} at ${job.company}: ${shareUrl}`)}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex-1 flex items-center justify-center gap-1.5 bg-[#25D366] text-white py-2.5 rounded-lg text-sm font-medium hover:opacity-90 transition-opacity"
                                >
                                    WhatsApp
                                </a>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </Layout>
    );
};

export default JobPage;
