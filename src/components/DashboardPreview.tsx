import React from 'react';
import { motion } from 'framer-motion';

const DashboardPreview = () => {
    return (
        <div className="bg-[#0B1437] p-4 rounded-xl border border-white/10 shadow-2xl max-w-5xl mx-auto overflow-hidden">
            {/* Top Bar */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
                <div>
                    <h2 className="text-xl text-gray-400">Good Evening,</h2>
                    <h1 className="text-2xl font-bold text-white">Stanton, Ruecker and Senger</h1>
                </div>
                <div className="flex items-center gap-3 bg-white/5 px-4 py-2 rounded-lg border border-white/10">
                    <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
                    <span className="text-white">1 applicant waiting for review</span>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

                {/* Main Column */}
                <div className="lg:col-span-2 space-y-6">
                    {/* Quick Actions */}
                    <div className="grid grid-cols-2 gap-4">
                        <button className="bg-primary text-secondary p-4 rounded-xl font-bold hover:bg-yellow-300 transition-colors">
                            + Post Job
                        </button>
                        <button className="bg-white/5 text-white p-4 rounded-xl font-bold border border-white/10 hover:bg-white/10">
                            View Applicants
                        </button>
                    </div>

                    {/* Analytics Cards */}
                    <div className="grid grid-cols-3 gap-4">
                        <MetricCard label="Active Jobs" value="2" change="+0%" />
                        <MetricCard label="Total Applicants" value="1" change="+0%" highlight />
                        <MetricCard label="Pending Reviews" value="1" subtext="Avg Match: 0%" />
                    </div>

                    {/* Recent Applicants Table */}
                    <div className="bg-white/5 rounded-2xl border border-white/10 p-6">
                        <div className="flex justify-between items-center mb-4">
                            <h3 className="font-bold text-white">Recent Applicants</h3>
                            <span className="text-xs text-gray-400 cursor-pointer">View All</span>
                        </div>
                        <div className="flex items-center gap-4 p-3 bg-white/5 rounded-xl border border-white/5 hover:border-primary/50 transition-colors cursor-pointer">
                            <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 font-bold">W</div>
                            <div className="flex-1">
                                <div className="text-white font-medium">Wilbert Pfeffer</div>
                                <div className="text-xs text-gray-400">Applied to <span className="text-white">Test</span> • 1d ago</div>
                            </div>
                            <div className="text-primary font-bold">0% Match</div>
                        </div>
                    </div>
                </div>

                {/* Sidebar Column */}
                <div className="space-y-6">

                    {/* Credits Card */}
                    <div className="bg-gradient-to-br from-primary/20 to-secondary rounded-2xl border border-primary/30 p-6 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-2xl -mr-16 -mt-16 pointer-events-none"></div>
                        <h3 className="text-gray-300 mb-2">Available Credits</h3>
                        <div className="text-5xl font-bold text-white mb-1">140</div>
                        <div className="text-sm text-gray-400 mb-6">10 Used this month</div>

                        <div className="space-y-3 mb-6">
                            <div className="flex justify-between text-sm">
                                <span className="text-gray-400">Job Postings</span>
                                <span className="text-white">10 credits</span>
                            </div>
                            <div className="flex justify-between text-sm">
                                <span className="text-gray-400">Premium Features</span>
                                <span className="text-white">0 credits</span>
                            </div>
                        </div>
                        <button className="w-full py-2 bg-white/10 text-white rounded-lg text-sm font-bold border border-white/10 hover:bg-white/20">
                            Purchase Credits
                        </button>
                    </div>

                    {/* Recent Activity */}
                    <div className="bg-white/5 rounded-2xl border border-white/10 p-6">
                        <h3 className="font-bold text-white mb-4">Recent Activity</h3>
                        <div className="space-y-4 relative">
                            <div className="absolute left-2 top-2 bottom-2 w-0.5 bg-white/10"></div>

                            <ActivityItem
                                title="Wilbert Pfeffer applied"
                                desc="for Test position"
                                time="1 day ago"
                            />
                            <ActivityItem
                                title="Test position published"
                                desc="Job is now live"
                                time="4 days ago"
                            />
                            <ActivityItem
                                title="Data Scientist published"
                                desc="Job is now live"
                                time="32 days ago"
                            />
                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
};

const MetricCard = ({ label, value, change, subtext, highlight }: any) => (
    <div className={`p-4 rounded-xl border ${highlight ? 'bg-primary/10 border-primary/30' : 'bg-white/5 border-white/10'}`}>
        <div className="text-gray-400 text-xs mb-1">{label}</div>
        <div className={`text-2xl font-bold ${highlight ? 'text-primary' : 'text-white'}`}>{value}</div>
        {change && <div className="text-xs text-green-400 mt-1">{change}</div>}
        {subtext && <div className="text-xs text-gray-500 mt-1">{subtext}</div>}
    </div>
);

const ActivityItem = ({ title, desc, time }: any) => (
    <div className="flex gap-4 relative pl-2">
        <div className="w-2 h-2 rounded-full bg-primary mt-1.5 relative z-10 box-content border-2 border-[#0B1437]"></div>
        <div>
            <div className="text-white text-sm font-medium">{title}</div>
            <div className="text-gray-500 text-xs">{desc}</div>
            <div className="text-gray-600 text-[10px] mt-0.5">{time}</div>
        </div>
    </div>
);

export default DashboardPreview;
