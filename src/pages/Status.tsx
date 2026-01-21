
import { motion } from 'framer-motion';
import {
  CheckCircle2, AlertCircle, Clock, Activity, Server,
  Database, Globe, Zap, RefreshCw, Shield
} from 'lucide-react';
import { Layout, PageHeader } from '../components/Layout';

const Status = () => {
  const systems = [
    { name: 'Website', status: 'operational', uptime: '99.99%', icon: <Globe className="w-5 h-5" /> },
    { name: 'API', status: 'operational', uptime: '99.98%', icon: <Zap className="w-5 h-5" /> },
    { name: 'Job Matching Engine', status: 'operational', uptime: '99.97%', icon: <Activity className="w-5 h-5" /> },
    { name: 'Auto-Apply Service', status: 'operational', uptime: '99.95%', icon: <RefreshCw className="w-5 h-5" /> },
    { name: 'Database', status: 'operational', uptime: '99.99%', icon: <Database className="w-5 h-5" /> },
    { name: 'Authentication', status: 'operational', uptime: '99.99%', icon: <Shield className="w-5 h-5" /> },
  ];

  const incidents = [
    {
      date: 'January 10, 2026',
      title: 'Scheduled Maintenance Completed',
      status: 'resolved',
      duration: '2 hours',
      description: 'Planned database maintenance and performance optimizations were completed successfully.',
    },
    {
      date: 'December 28, 2025',
      title: 'API Latency Issue',
      status: 'resolved',
      duration: '45 minutes',
      description: 'Some users experienced slower API response times. Issue was identified and resolved by scaling up servers.',
    },
    {
      date: 'December 15, 2025',
      title: 'Job Matching Delay',
      status: 'resolved',
      duration: '1 hour',
      description: 'Job matching results were delayed due to high traffic. Additional capacity was added to handle the load.',
    },
  ];

  const uptimeData = [
    { date: 'Jan 14', status: 'up' },
    { date: 'Jan 13', status: 'up' },
    { date: 'Jan 12', status: 'up' },
    { date: 'Jan 11', status: 'up' },
    { date: 'Jan 10', status: 'partial' },
    { date: 'Jan 9', status: 'up' },
    { date: 'Jan 8', status: 'up' },
    { date: 'Jan 7', status: 'up' },
    { date: 'Jan 6', status: 'up' },
    { date: 'Jan 5', status: 'up' },
    { date: 'Jan 4', status: 'up' },
    { date: 'Jan 3', status: 'up' },
    { date: 'Jan 2', status: 'up' },
    { date: 'Jan 1', status: 'up' },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'operational':
        return 'text-green-400 bg-green-500/20';
      case 'degraded':
        return 'text-yellow-400 bg-yellow-500/20';
      case 'outage':
        return 'text-red-400 bg-red-500/20';
      default:
        return 'text-gray-400 bg-gray-500/20';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'operational':
        return <CheckCircle2 className="w-5 h-5 text-green-400" />;
      case 'degraded':
        return <AlertCircle className="w-5 h-5 text-yellow-400" />;
      case 'outage':
        return <AlertCircle className="w-5 h-5 text-red-400" />;
      default:
        return <Clock className="w-5 h-5 text-gray-400" />;
    }
  };

  return (
    <Layout>
      <PageHeader
        tag="System Status"
        title="All Systems Operational"
        subtitle="Real-time status and uptime information for all Passionfruit services."
      />

      {/* Overall Status */}
      <section className="py-12 bg-black">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-green-500/10 border border-green-500/30 rounded-2xl p-6 flex items-center gap-4"
          >
            <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center">
              <CheckCircle2 className="w-6 h-6 text-green-400" />
            </div>
            <div>
              <h2 className="text-green-400 font-bold text-xl">All Systems Operational</h2>
              <p className="text-gray-400">Last updated: January 15, 2026 at 14:30 SAST</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Uptime Graph */}
      <section className="py-12 bg-gray-900">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl font-black text-white mb-6">90-Day Uptime</h2>
          <div className="bg-gray-800/50 border border-gray-700 rounded-2xl p-6">
            <div className="flex items-end justify-between gap-1 h-16 mb-4">
              {uptimeData.map((day, i) => (
                <div
                  key={i}
                  className={`flex-1 rounded-t transition-all hover:opacity-80 ${
                    day.status === 'up' ? 'bg-green-500 h-full' : 'bg-yellow-500 h-3/4'
                  }`}
                  title={`${day.date}: ${day.status === 'up' ? '100%' : '99.5%'}`}
                />
              ))}
            </div>
            <div className="flex justify-between text-xs text-gray-500">
              <span>14 days ago</span>
              <span>Today</span>
            </div>
            <div className="mt-4 pt-4 border-t border-gray-700 flex items-center gap-6">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-green-500 rounded" />
                <span className="text-gray-400 text-sm">Operational</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-yellow-500 rounded" />
                <span className="text-gray-400 text-sm">Partial Outage</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-red-500 rounded" />
                <span className="text-gray-400 text-sm">Major Outage</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* System Status */}
      <section className="py-12 bg-black">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl font-black text-white mb-6">System Status</h2>
          <div className="space-y-3">
            {systems.map((system, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 }}
                className="bg-gray-900/50 border border-gray-800 rounded-xl p-4 flex items-center justify-between"
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400">
                    {system.icon}
                  </div>
                  <span className="text-white font-medium">{system.name}</span>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-gray-500 text-sm hidden md:block">{system.uptime} uptime</span>
                  <div className={`flex items-center gap-2 px-3 py-1 rounded-full ${getStatusColor(system.status)}`}>
                    {getStatusIcon(system.status)}
                    <span className="capitalize text-sm font-medium">{system.status}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Metrics */}
      <section className="py-12 bg-gray-900">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl font-black text-white mb-6">Performance Metrics</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { label: 'API Response Time', value: '45ms', status: 'Excellent' },
              { label: 'Page Load Time', value: '1.2s', status: 'Good' },
              { label: 'Error Rate', value: '0.01%', status: 'Excellent' },
            ].map((metric, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-gray-800/50 border border-gray-700 rounded-2xl p-6 text-center"
              >
                <div className="text-4xl font-black text-primary mb-2">{metric.value}</div>
                <div className="text-white font-medium mb-1">{metric.label}</div>
                <div className="text-green-400 text-sm">{metric.status}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Incidents */}
      <section className="py-12 bg-black">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl font-black text-white mb-6">Recent Incidents</h2>
          <div className="space-y-4">
            {incidents.map((incident, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-gray-900/50 border border-gray-800 rounded-2xl p-6"
              >
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="text-white font-bold">{incident.title}</h3>
                    <p className="text-gray-500 text-sm">{incident.date}</p>
                  </div>
                  <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-sm font-medium capitalize">
                    {incident.status}
                  </span>
                </div>
                <p className="text-gray-400 text-sm mb-2">{incident.description}</p>
                <p className="text-gray-500 text-sm">Duration: {incident.duration}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Subscribe */}
      <section className="py-24 bg-primary">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <Activity className="w-16 h-16 text-black mx-auto mb-6" />
          <h2 className="text-4xl font-black text-black mb-4">Stay Informed</h2>
          <p className="text-black/70 text-lg mb-8">
            Subscribe to receive status updates and maintenance notifications.
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

export default Status;
