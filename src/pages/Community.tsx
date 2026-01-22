
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Users, MessageSquare, Calendar, MapPin, Award, Heart,
  TrendingUp, ExternalLink, ArrowRight, Star, Zap
} from 'lucide-react';
import { Layout, PageHeader } from '../components/Layout';

// Import images
import communityEvent from '../assets/generated/testimonial-sipho.png';
import communityOnline from '../assets/generated/hero-community.png';

const Community = () => {
  const stats = [
    { value: '50K+', label: 'Community Members' },
    { value: '500+', label: 'Monthly Discussions' },
    { value: '50+', label: 'Events Hosted' },
    { value: '95%', label: 'Satisfaction Rate' },
  ];

  const channels = [
    { name: 'Job Seekers', members: '32K', desc: 'Connect with fellow job seekers, share tips, and support each other', icon: <Users className="w-6 h-6" /> },
    { name: 'Tech Careers', members: '18K', desc: 'Discussions about careers in software, data, and IT', icon: <Zap className="w-6 h-6" /> },
    { name: 'Career Advice', members: '25K', desc: 'Get advice from experienced professionals and mentors', icon: <MessageSquare className="w-6 h-6" /> },
    { name: 'Interview Prep', members: '15K', desc: 'Practice interviews and share interview experiences', icon: <Star className="w-6 h-6" /> },
  ];

  const upcomingEvents = [
    { title: 'Virtual Career Fair 2026', date: 'February 15, 2026', time: '10:00 - 16:00 SAST', type: 'Virtual', attendees: 500 },
    { title: 'Tech Interview Workshop', date: 'February 20, 2026', time: '14:00 - 16:00 SAST', type: 'Virtual', attendees: 150 },
    { title: 'Cape Town Networking Mixer', date: 'February 28, 2026', time: '18:00 - 21:00 SAST', type: 'In-Person', attendees: 75 },
  ];

  const topContributors = [
    { name: 'Sarah M.', title: 'Career Coach', posts: 245, helpful: 1250 },
    { name: 'Thabo K.', title: 'Software Engineer', posts: 189, helpful: 980 },
    { name: 'Priya P.', title: 'HR Manager', posts: 156, helpful: 875 },
    { name: 'James W.', title: 'Recruiter', posts: 134, helpful: 720 },
  ];

  const successStories = [
    { name: 'Sipho N.', role: 'Software Developer', company: 'Amazon', quote: 'The community helped me prepare for my interviews and I landed my dream job!' },
    { name: 'Lerato M.', role: 'Data Analyst', company: 'Discovery', quote: 'Found an amazing mentor through the community who guided my career transition.' },
  ];

  return (
    <Layout>
      <PageHeader
        tag="Community"
        title="Join Our Community"
        subtitle="Connect with thousands of job seekers, share experiences, and grow together. You're not alone in your career journey."
      />

      {/* Hero Images */}
      <section className="py-12 bg-black">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-6">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              className="rounded-3xl overflow-hidden h-64"
            >
              <img src={communityOnline} alt="Online Community" className="w-full h-full object-cover" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              className="rounded-3xl overflow-hidden h-64"
            >
              <img src={communityEvent} alt="Community Event" className="w-full h-full object-cover" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats */}
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

      {/* Community Channels */}
      <section className="py-24 bg-black">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-black text-white mb-4">Community Channels</h2>
            <p className="text-gray-400">Join discussions that matter to you</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {channels.map((channel, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-gray-900/50 border border-gray-800 rounded-2xl p-6 hover:border-primary/50 transition-all cursor-pointer"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary">
                    {channel.icon}
                  </div>
                  <span className="text-primary font-bold">{channel.members} members</span>
                </div>
                <h3 className="text-white font-bold text-xl mb-2">{channel.name}</h3>
                <p className="text-gray-400 text-sm mb-4">{channel.desc}</p>
                <button className="text-primary font-bold flex items-center gap-1">
                  Join Channel <ArrowRight className="w-4 h-4" />
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-24 bg-gray-900">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-between mb-12"
          >
            <div>
              <h2 className="text-3xl font-black text-white mb-2">Upcoming Events</h2>
              <p className="text-gray-400">Learn, connect, and grow at our events</p>
            </div>
            <Link to="#" className="text-primary font-bold hidden md:flex items-center gap-1">
              View All Events <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>

          <div className="space-y-4">
            {upcomingEvents.map((event, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ x: 5 }}
                className="bg-gray-800/50 border border-gray-700 rounded-2xl p-6 hover:border-primary/50 transition-all"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div>
                    <h3 className="text-white font-bold text-lg mb-2">{event.title}</h3>
                    <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {event.date}
                      </span>
                      <span>{event.time}</span>
                      <span className={`px-2 py-1 rounded-full text-xs font-bold ${event.type === 'Virtual' ? 'bg-blue-500/20 text-blue-400' : 'bg-green-500/20 text-green-400'
                        }`}>
                        {event.type}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="text-gray-400 text-sm flex items-center gap-1">
                      <Users className="w-4 h-4" />
                      {event.attendees} attending
                    </span>
                    <button className="bg-primary text-black px-4 py-2 rounded-full font-bold hover:bg-primary-light transition-all">
                      RSVP
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Top Contributors */}
      <section className="py-24 bg-black">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-black text-white mb-4">Top Contributors</h2>
            <p className="text-gray-400">Community members who go above and beyond</p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-6">
            {topContributors.map((contributor, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-gray-900/50 border border-gray-800 rounded-2xl p-6 text-center"
              >
                <div className="w-16 h-16 bg-primary/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Award className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-white font-bold">{contributor.name}</h3>
                <p className="text-primary text-sm mb-3">{contributor.title}</p>
                <div className="flex justify-center gap-4 text-sm">
                  <span className="text-gray-400">{contributor.posts} posts</span>
                  <span className="text-gray-400 flex items-center gap-1">
                    <Heart className="w-3 h-3" />
                    {contributor.helpful}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-24 bg-gray-900">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-black text-white mb-4">Success Stories</h2>
            <p className="text-gray-400">Real stories from community members who landed their dream jobs</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {successStories.map((story, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-gradient-to-br from-primary/20 to-transparent border border-primary/30 rounded-2xl p-6"
              >
                <p className="text-gray-300 text-lg mb-6">"{story.quote}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-primary/30 rounded-full flex items-center justify-center">
                    <Users className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <div className="text-white font-bold">{story.name}</div>
                    <div className="text-gray-400 text-sm">{story.role} at {story.company}</div>
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
          <Users className="w-16 h-16 text-black mx-auto mb-6" />
          <h2 className="text-4xl font-black text-black mb-6">Join the Conversation</h2>
          <p className="text-black/70 text-xl mb-10">
            Be part of South Africa's most supportive career community. It's free to join!
          </p>
          <Link
            to="/"
            className="inline-block bg-black text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-gray-800 transition-all"
          >
            Join Community
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Community;
