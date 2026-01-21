import React from 'react';
import { motion } from 'framer-motion';

const packages = [
    {
        name: 'Starter',
        credits: 10,
        price: 'R200',
        perCredit: 'R20.00',
        features: ['Post 1 job', 'Basic analytics', 'Email support'],
        popular: false,
    },
    {
        name: 'Growth',
        credits: 50,
        price: 'R900',
        perCredit: 'R18.00',
        features: ['Post up to 5 jobs', 'Advanced matching', 'Priority support'],
        popular: true, // "Most Popular"
    },
    {
        name: 'Business',
        credits: 150,
        price: 'R2,400',
        perCredit: 'R16.00',
        features: ['Post up to 15 jobs', 'Full analytics', 'Dedicated account manager'],
        popular: false,
    },
    {
        name: 'Enterprise',
        credits: 500,
        price: 'R7,500',
        perCredit: 'R15.00',
        features: ['Post up to 50 jobs', 'API access', 'White-label options'],
        popular: false,
    },
];

const Pricing = () => {
    return (
        <section className="py-20 px-8 relative overflow-hidden">
            <div className="max-w-7xl mx-auto relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        Simple, Transparent <span className="text-primary">Credits</span>
                    </h2>
                    <p className="text-gray-400 text-lg">
                        Pay as you go. Credits never expire. 1 Job Post = 10 Credits.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {packages.map((pkg, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className={`relative p-8 rounded-3xl border ${pkg.popular
                                    ? 'bg-white/10 border-primary shadow-[0_0_30px_rgba(244,224,77,0.2)]'
                                    : 'bg-white/5 border-white/10 hover:border-white/20'
                                } backdrop-blur-md flex flex-col transition-all duration-300 hover:-translate-y-2`}
                        >
                            {pkg.popular && (
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-secondary px-4 py-1 rounded-full text-sm font-bold shadow-lg">
                                    Most Popular
                                </div>
                            )}

                            <div className="mb-8">
                                <h3 className="text-xl font-semibold text-white mb-2">{pkg.name}</h3>
                                <div className="flex items-baseline gap-1">
                                    <span className="text-4xl font-bold text-primary">{pkg.credits}</span>
                                    <span className="text-gray-400">Credits</span>
                                </div>
                                <div className="mt-4 pb-4 border-b border-white/10">
                                    <div className="text-3xl font-bold text-white">{pkg.price}</div>
                                    <div className="text-sm text-gray-400">{pkg.perCredit} per credit</div>
                                </div>
                            </div>

                            <ul className="space-y-4 mb-8 flex-1">
                                {pkg.features.map((feature, i) => (
                                    <li key={i} className="flex items-start gap-3 text-gray-300 text-sm">
                                        <span className="text-primary mt-1">✓</span>
                                        {feature}
                                    </li>
                                ))}
                            </ul>

                            <button className={`w-full py-3 rounded-xl font-bold transition-colors ${pkg.popular
                                    ? 'bg-primary text-secondary hover:bg-yellow-300'
                                    : 'bg-white/10 text-white hover:bg-white/20'
                                }`}>
                                Purchase Package
                            </button>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Pricing;
