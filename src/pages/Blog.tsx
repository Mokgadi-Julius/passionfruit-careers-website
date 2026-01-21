import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Calendar, Clock, User, ArrowRight, Search, Tag,
  TrendingUp, Bookmark, Share2
} from 'lucide-react';
import { Layout, PageHeader } from '../components/Layout';

// Import images
import blogAiFuture from '../assets/pages/blog-ai-future.png';
import blogInterview from '../assets/pages/blog-interview.png';
import blogResume from '../assets/pages/blog-resume.png';

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Career Tips', 'Industry News', 'Product Updates', 'Company Culture', 'AI & Tech'];

  const featuredPost = {
    title: 'How AI is Revolutionizing the Job Search in South Africa',
    excerpt: 'Discover how artificial intelligence is transforming the recruitment landscape and what it means for job seekers and employers alike.',
    author: 'Thandi Nkosi',
    date: 'January 15, 2026',
    readTime: '8 min read',
    category: 'AI & Tech',
    image: blogAiFuture,
  };

  // Map images to posts
  const postImages = [blogResume, blogInterview, blogAiFuture, null, blogInterview, blogResume];

  const posts = [
    {
      title: '10 Resume Tips That Will Get You Noticed by AI Recruiters',
      excerpt: 'Learn how to optimize your resume for both human recruiters and AI screening systems.',
      author: 'Sarah van der Berg',
      date: 'January 12, 2026',
      readTime: '5 min read',
      category: 'Career Tips',
    },
    {
      title: 'The Rise of Remote Work in South Africa: 2026 Trends',
      excerpt: 'Explore the latest remote work statistics and what they mean for SA professionals.',
      author: 'James Williams',
      date: 'January 10, 2026',
      readTime: '6 min read',
      category: 'Industry News',
    },
    {
      title: 'Introducing Auto-Apply: Your AI Job Application Assistant',
      excerpt: 'Meet your new personal recruiter that applies to 3 perfect jobs daily on your behalf.',
      author: 'Priya Patel',
      date: 'January 8, 2026',
      readTime: '4 min read',
      category: 'Product Updates',
    },
    {
      title: 'Interview with Our CTO: Building AI That Cares',
      excerpt: 'James Williams shares insights on developing ethical AI for recruitment.',
      author: 'Editorial Team',
      date: 'January 5, 2026',
      readTime: '10 min read',
      category: 'Company Culture',
    },
    {
      title: 'Top 5 Skills South African Employers Are Looking For in 2026',
      excerpt: 'Data-driven insights into the most in-demand skills in the SA job market.',
      author: 'David Okonkwo',
      date: 'January 3, 2026',
      readTime: '7 min read',
      category: 'Industry News',
    },
    {
      title: 'How to Negotiate Your Salary: A Complete Guide',
      excerpt: 'Expert tips on salary negotiation that can increase your offer by 10-20%.',
      author: 'Thandi Nkosi',
      date: 'December 28, 2025',
      readTime: '9 min read',
      category: 'Career Tips',
    },
  ];

  const filteredPosts = selectedCategory === 'All'
    ? posts
    : posts.filter(post => post.category === selectedCategory);

  return (
    <Layout>
      <PageHeader
        tag="Blog"
        title="Insights & Resources"
        subtitle="Expert advice, industry trends, and the latest updates from the Passionfruit team."
      />

      {/* Featured Post */}
      <section className="py-16 bg-black">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700 rounded-3xl overflow-hidden"
          >
            <div className="grid md:grid-cols-2 gap-0">
              <div className="h-64 md:h-auto overflow-hidden">
                <img src={featuredPost.image} alt={featuredPost.title} className="w-full h-full object-cover" />
              </div>
              <div className="p-8 md:p-12">
                <span className="text-primary text-sm font-bold uppercase tracking-wider">{featuredPost.category}</span>
                <h2 className="text-2xl md:text-3xl font-black text-white mt-2 mb-4">{featuredPost.title}</h2>
                <p className="text-gray-400 mb-6">{featuredPost.excerpt}</p>
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-6">
                  <span className="flex items-center gap-1">
                    <User className="w-4 h-4" />
                    {featuredPost.author}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {featuredPost.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {featuredPost.readTime}
                  </span>
                </div>
                <button className="bg-primary text-black px-6 py-3 rounded-full font-bold flex items-center gap-2 hover:bg-primary-light transition-all">
                  Read Article <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-gray-900 border-y border-gray-800 sticky top-20 z-40">
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    selectedCategory === cat
                      ? 'bg-primary text-black'
                      : 'bg-gray-800 text-gray-400 hover:text-white'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
              <input
                type="text"
                placeholder="Search articles..."
                className="bg-gray-800 border border-gray-700 rounded-full pl-10 pr-4 py-2 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-primary"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16 bg-black">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-6">
            {filteredPosts.map((post, i) => (
              <motion.article
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-gray-900/50 border border-gray-800 rounded-2xl overflow-hidden hover:border-primary/50 transition-all cursor-pointer"
              >
                <div className="h-48 overflow-hidden">
                  {postImages[i] ? (
                    <img src={postImages[i]} alt={post.title} className="w-full h-full object-cover" />
                  ) : (
                    <div className="w-full h-full bg-gray-800 flex items-center justify-center">
                      <Tag className="w-12 h-12 text-gray-600" />
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-primary text-xs font-bold uppercase tracking-wider">{post.category}</span>
                    <div className="flex gap-2">
                      <button className="text-gray-500 hover:text-primary transition-colors">
                        <Bookmark className="w-4 h-4" />
                      </button>
                      <button className="text-gray-500 hover:text-primary transition-colors">
                        <Share2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                  <h3 className="text-white font-bold text-lg mb-2 line-clamp-2">{post.title}</h3>
                  <p className="text-gray-400 text-sm mb-4 line-clamp-2">{post.excerpt}</p>
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <span className="flex items-center gap-1">
                      <User className="w-3 h-3" />
                      {post.author}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {post.readTime}
                    </span>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <div className="text-center py-12">
              <Search className="w-12 h-12 text-gray-600 mx-auto mb-4" />
              <p className="text-gray-400">No articles found in this category.</p>
            </div>
          )}

          {/* Load More */}
          <div className="text-center mt-12">
            <button className="border-2 border-gray-700 text-white px-8 py-3 rounded-full font-bold hover:border-primary hover:text-primary transition-all">
              Load More Articles
            </button>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-24 bg-primary">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-black text-black mb-4">Stay Updated</h2>
          <p className="text-black/70 text-lg mb-8">
            Subscribe to our newsletter for the latest career tips and industry insights.
          </p>
          <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 bg-white/20 border-2 border-black/20 rounded-full px-6 py-4 text-black placeholder-black/50 focus:outline-none focus:border-black"
            />
            <button
              type="submit"
              className="bg-black text-white px-8 py-4 rounded-full font-bold hover:bg-gray-800 transition-all"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </Layout>
  );
};

export default Blog;
