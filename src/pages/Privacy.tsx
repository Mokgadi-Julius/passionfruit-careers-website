
import { motion } from 'framer-motion';
import { Shield, Mail, Lock, Eye, Database, Trash2 } from 'lucide-react';
import { Layout, PageHeader } from '../components/Layout';

const Privacy = () => {
  const highlights = [
    { icon: <Lock className="w-6 h-6" />, title: 'Data Encryption', desc: 'All data is encrypted at rest and in transit' },
    { icon: <Eye className="w-6 h-6" />, title: 'Transparency', desc: 'We clearly explain what data we collect and why' },
    { icon: <Database className="w-6 h-6" />, title: 'Data Control', desc: 'You control your data and can export or delete it' },
    { icon: <Trash2 className="w-6 h-6" />, title: 'Right to Delete', desc: 'Request deletion of your data at any time' },
  ];

  const sections = [
    {
      title: '1. Information We Collect',
      content: `We collect information you provide directly to us, including:

**Account Information:**
• Name, email address, and password
• Phone number (optional)
• Profile photo (optional)

**Resume and Profile Data:**
• Work experience and employment history
• Education and qualifications
• Skills and certifications
• Career preferences and goals

**Usage Information:**
• Log data (IP address, browser type, pages visited)
• Device information
• Job search and application activity

**Communication Data:**
• Messages sent through our platform
• Support requests and feedback`,
    },
    {
      title: '2. How We Use Your Information',
      content: `We use the information we collect to:

• Provide, maintain, and improve our services
• Match you with relevant job opportunities
• Process job applications on your behalf
• Send you notifications about matches and applications
• Communicate with you about our services
• Personalize your experience
• Analyze usage patterns to improve our platform
• Detect and prevent fraud or abuse
• Comply with legal obligations`,
    },
    {
      title: '3. Information Sharing',
      content: `We may share your information in the following circumstances:

**With Employers:**
When you apply for a job or make your profile visible, employers can see your profile information as configured in your privacy settings.

**With Service Providers:**
We work with third-party service providers who assist us in operating our platform, including:
• Cloud hosting providers
• Analytics services
• Payment processors
• Email service providers

**For Legal Reasons:**
We may disclose your information if required by law or if we believe disclosure is necessary to protect our rights or the safety of others.

**With Your Consent:**
We may share your information for any other purpose with your explicit consent.`,
    },
    {
      title: '4. Data Security',
      content: `We implement industry-standard security measures to protect your data:

• AES-256 encryption for data at rest
• TLS 1.3 encryption for data in transit
• Regular security audits and penetration testing
• Access controls and authentication measures
• Employee security training

While we strive to protect your information, no method of transmission over the Internet is 100% secure. We cannot guarantee absolute security.`,
    },
    {
      title: '5. Your Rights and Choices',
      content: `You have the following rights regarding your personal information:

**Access:** Request a copy of the personal data we hold about you.

**Correction:** Update or correct inaccurate information.

**Deletion:** Request deletion of your personal data.

**Portability:** Request a machine-readable copy of your data.

**Objection:** Object to certain processing of your data.

**Restriction:** Request that we limit processing of your data.

To exercise these rights, contact us at privacy@passionfruit.careers or use the settings in your account dashboard.`,
    },
    {
      title: '6. Data Retention',
      content: `We retain your personal information for as long as necessary to:

• Provide our services
• Comply with legal obligations
• Resolve disputes
• Enforce our agreements

When you delete your account, we will delete or anonymize your personal information within 30 days, except where we are required to retain it for legal purposes.`,
    },
    {
      title: '7. Cookies and Tracking',
      content: `We use cookies and similar technologies to:

• Keep you logged in
• Remember your preferences
• Analyze how our service is used
• Personalize your experience

You can control cookies through your browser settings. For more information, see our Cookie Policy.`,
    },
    {
      title: '8. International Data Transfers',
      content: `Your information may be transferred to and processed in countries other than South Africa. When we transfer data internationally, we ensure appropriate safeguards are in place to protect your information in accordance with this Privacy Policy and applicable law.`,
    },
    {
      title: '9. Children\'s Privacy',
      content: `Our Service is not intended for individuals under the age of 18. We do not knowingly collect personal information from children. If we become aware that we have collected personal information from a child, we will take steps to delete such information.`,
    },
    {
      title: '10. Changes to This Policy',
      content: `We may update this Privacy Policy from time to time. We will notify you of any significant changes by:

• Posting the new policy on this page
• Updating the "Last Updated" date
• Sending you an email notification

We encourage you to review this Privacy Policy periodically.`,
    },
    {
      title: '11. Contact Us',
      content: `If you have questions about this Privacy Policy or our data practices, please contact us:

**Privacy Officer**
Passionfruit Careers (Pty) Ltd
Cape Town, South Africa

Email: privacy@passionfruit.careers
Phone: +27 11 123 4567

For POPIA-related inquiries, please see our POPIA Compliance page.`,
    },
  ];

  return (
    <Layout>
      <PageHeader
        tag="Legal"
        title="Privacy Policy"
        subtitle="Your privacy is important to us. This policy explains how we collect, use, and protect your personal information."
      />

      {/* Highlights */}
      <section className="py-16 bg-black border-b border-gray-800">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-6">
            {highlights.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary mx-auto mb-3">
                  {item.icon}
                </div>
                <h3 className="text-white font-bold mb-1">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Last Updated */}
      <section className="py-8 bg-gray-900">
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-gray-400">
            <strong className="text-white">Last Updated:</strong> January 1, 2026
          </p>
        </div>
      </section>

      {/* Privacy Content */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-4xl mx-auto px-6">
          <div className="space-y-12">
            {sections.map((section, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
              >
                <h2 className="text-2xl font-bold text-white mb-4">{section.title}</h2>
                <div className="text-gray-400 whitespace-pre-line leading-relaxed prose prose-invert max-w-none">
                  {section.content}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-24 bg-primary">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <Shield className="w-16 h-16 text-black mx-auto mb-6" />
          <h2 className="text-4xl font-black text-black mb-4">Privacy Questions?</h2>
          <p className="text-black/70 text-lg mb-8">
            Contact our privacy team if you have any questions or concerns about your data.
          </p>
          <a
            href="mailto:privacy@passionfruit.careers"
            className="inline-flex items-center gap-2 bg-black text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-gray-800 transition-all"
          >
            <Mail className="w-5 h-5" />
            privacy@passionfruit.careers
          </a>
        </div>
      </section>
    </Layout>
  );
};

export default Privacy;
