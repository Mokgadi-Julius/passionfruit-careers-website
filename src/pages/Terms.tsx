
import { motion } from 'framer-motion';
import { FileText, Mail } from 'lucide-react';
import { Layout, PageHeader } from '../components/Layout';

const Terms = () => {
  const sections = [
    {
      title: '1. Acceptance of Terms',
      content: `By accessing and using the Passionfruit Careers platform ("Service"), you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, please do not use our Service.

These Terms apply to all visitors, users, and others who access or use the Service, including job seekers and employers.`,
    },
    {
      title: '2. Description of Service',
      content: `Passionfruit Careers provides an AI-powered recruitment platform that connects job seekers with potential employers. Our services include:

• Resume upload and AI analysis
• AI-powered job matching
• Automated job applications (Auto-Apply)
• Career insights and recommendations
• Employer candidate search and management tools

We reserve the right to modify, suspend, or discontinue any aspect of the Service at any time.`,
    },
    {
      title: '3. User Accounts',
      content: `To access certain features of the Service, you must create an account. You agree to:

• Provide accurate, current, and complete information during registration
• Maintain and promptly update your account information
• Keep your password secure and confidential
• Accept responsibility for all activities under your account
• Notify us immediately of any unauthorized use of your account

We reserve the right to suspend or terminate accounts that violate these Terms.`,
    },
    {
      title: '4. User Content',
      content: `You retain ownership of content you submit to the Service ("User Content"), including resumes, profiles, and messages. By submitting User Content, you grant Passionfruit a worldwide, non-exclusive, royalty-free license to use, copy, modify, and display such content for the purpose of providing and improving our Service.

You represent and warrant that:
• You own or have the right to submit all User Content
• Your User Content does not violate any third-party rights
• Your User Content is accurate and not misleading`,
    },
    {
      title: '5. Prohibited Activities',
      content: `You agree not to:

• Use the Service for any unlawful purpose
• Submit false or misleading information
• Impersonate any person or entity
• Interfere with or disrupt the Service
• Attempt to gain unauthorized access to our systems
• Use automated systems to access the Service without permission
• Harvest or collect user information without consent
• Post discriminatory or harassing content
• Use the Service to spam or send unsolicited messages`,
    },
    {
      title: '6. Subscription and Payments',
      content: `Some features of the Service require a paid subscription. By subscribing, you agree to:

• Pay all fees associated with your subscription
• Provide accurate billing information
• Accept that subscriptions auto-renew unless cancelled

Refunds are provided according to our refund policy. You may cancel your subscription at any time through your account settings.`,
    },
    {
      title: '7. Intellectual Property',
      content: `The Service and its original content, features, and functionality are owned by Passionfruit Careers and are protected by international copyright, trademark, patent, trade secret, and other intellectual property laws.

You may not copy, modify, distribute, sell, or lease any part of our Service without prior written consent.`,
    },
    {
      title: '8. Privacy',
      content: `Your use of the Service is also governed by our Privacy Policy, which describes how we collect, use, and protect your personal information. By using the Service, you consent to our data practices as described in the Privacy Policy.`,
    },
    {
      title: '9. Disclaimer of Warranties',
      content: `THE SERVICE IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED. WE DO NOT GUARANTEE THAT:

• The Service will be uninterrupted or error-free
• Results obtained from the Service will be accurate
• Job seekers will find employment
• Employers will find suitable candidates

We do not guarantee any specific outcomes from using our Service.`,
    },
    {
      title: '10. Limitation of Liability',
      content: `TO THE MAXIMUM EXTENT PERMITTED BY LAW, PASSIONFRUIT CAREERS SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING LOSS OF PROFITS, DATA, OR OTHER INTANGIBLE LOSSES, RESULTING FROM:

• Your use or inability to use the Service
• Any unauthorized access to your data
• Any third-party conduct on the Service
• Any content obtained from the Service`,
    },
    {
      title: '11. Indemnification',
      content: `You agree to indemnify, defend, and hold harmless Passionfruit Careers and its officers, directors, employees, and agents from any claims, damages, losses, liabilities, and expenses (including legal fees) arising from:

• Your use of the Service
• Your violation of these Terms
• Your violation of any third-party rights`,
    },
    {
      title: '12. Governing Law',
      content: `These Terms shall be governed by and construed in accordance with the laws of the Republic of South Africa, without regard to its conflict of law provisions. Any disputes shall be resolved in the courts of South Africa.`,
    },
    {
      title: '13. Changes to Terms',
      content: `We reserve the right to modify these Terms at any time. We will notify users of significant changes via email or through the Service. Your continued use of the Service after changes constitutes acceptance of the modified Terms.`,
    },
    {
      title: '14. Contact Information',
      content: `If you have any questions about these Terms, please contact us at:

Passionfruit Careers (Pty) Ltd
Cape Town, South Africa
Email: legal@passionfruit.careers`,
    },
  ];

  return (
    <Layout>
      <PageHeader
        tag="Legal"
        title="Terms of Service"
        subtitle="Please read these terms carefully before using our service."
      />

      {/* Last Updated */}
      <section className="py-8 bg-black border-b border-gray-800">
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-gray-400">
            <strong className="text-white">Last Updated:</strong> January 1, 2026
          </p>
        </div>
      </section>

      {/* Terms Content */}
      <section className="py-16 bg-black">
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
                <div className="text-gray-400 whitespace-pre-line leading-relaxed">
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
          <FileText className="w-16 h-16 text-black mx-auto mb-6" />
          <h2 className="text-4xl font-black text-black mb-4">Questions About Our Terms?</h2>
          <p className="text-black/70 text-lg mb-8">
            If you have any questions about these Terms of Service, please contact our legal team.
          </p>
          <a
            href="mailto:legal@passionfruit.careers"
            className="inline-flex items-center gap-2 bg-black text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-gray-800 transition-all"
          >
            <Mail className="w-5 h-5" />
            legal@passionfruit.careers
          </a>
        </div>
      </section>
    </Layout>
  );
};

export default Terms;
