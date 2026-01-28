
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Shield, Mail, CheckCircle2, FileText, Users, Lock, Eye, Database } from 'lucide-react';
import { Layout, PageHeader } from '../components/Layout';

const POPIA = () => {
  const rights = [
    { icon: <Eye className="w-6 h-6" />, title: 'Right to Access', desc: 'Request access to your personal information' },
    { icon: <FileText className="w-6 h-6" />, title: 'Right to Correction', desc: 'Request correction of inaccurate information' },
    { icon: <Database className="w-6 h-6" />, title: 'Right to Deletion', desc: 'Request deletion of your personal information' },
    { icon: <Lock className="w-6 h-6" />, title: 'Right to Object', desc: 'Object to processing of your information' },
  ];

  const sections = [
    {
      title: '1. Introduction',
      content: `Passionfruit Careers (Pty) Ltd ("Passionfruit", "we", "us", or "our") is committed to protecting your personal information and complying with the Protection of Personal Information Act 4 of 2013 ("POPIA").

This POPIA Compliance Notice explains how we collect, use, store, and protect your personal information in accordance with South African data protection law.`,
    },
    {
      title: '2. Responsible Party',
      content: `The responsible party for the processing of your personal information is:

**Passionfruit Careers (Pty) Ltd**
Registration Number: 2022/123456/07
Cape Town, South Africa

**Information Officer:**
Name: Thandi Nkosi
Email: privacy@passionfruit.careers
Phone: +27 11 123 4567`,
    },
    {
      title: '3. Purpose of Processing',
      content: `We process your personal information for the following purposes:

**For Job Seekers:**
• Creating and managing your account
• Analysing your resume and skills
• Matching you with suitable job opportunities
• Submitting job applications on your behalf
• Communicating about your applications
• Providing career insights and recommendations

**For Employers:**
• Creating and managing employer accounts
• Posting and managing job listings
• Providing matched candidate profiles
• Facilitating communication with candidates
• Processing payments for services

**For All Users:**
• Improving our services
• Ensuring platform security
• Complying with legal obligations
• Sending service notifications`,
    },
    {
      title: '4. Categories of Personal Information',
      content: `We collect and process the following categories of personal information:

**Identity Information:**
• Name, surname, and ID number
• Date of birth and gender
• Profile photographs

**Contact Information:**
• Email address and phone number
• Physical address

**Professional Information:**
• Resume/CV details
• Work experience and education
• Skills and qualifications
• Salary expectations

**Technical Information:**
• IP address and device information
• Browser type and settings
• Usage data and preferences

**Financial Information (Employers):**
• Billing details
• Payment history`,
    },
    {
      title: '5. Legal Basis for Processing',
      content: `We process your personal information based on the following legal grounds under POPIA:

**Consent:** Where you have given us explicit consent to process your information for specific purposes.

**Contractual Necessity:** Where processing is necessary to perform our contract with you (providing our services).

**Legal Obligation:** Where we are required by law to process your information.

**Legitimate Interest:** Where processing is necessary for our legitimate business interests, balanced against your rights.`,
    },
    {
      title: '6. Sharing of Personal Information',
      content: `We may share your personal information with:

**Employers (for job seekers):** When you apply for jobs or make your profile searchable, relevant employers can view your information.

**Service Providers:** Third parties who help us operate our platform, including:
• Cloud hosting providers
• Payment processors
• Email service providers
• Analytics services

**Legal Authorities:** When required by law or to protect our legal rights.

All third parties are required to process your information in accordance with POPIA and our data protection standards.`,
    },
    {
      title: '7. Cross-Border Transfers',
      content: `Your personal information may be transferred to and processed in countries outside South Africa. When we transfer your information internationally, we ensure that:

• The recipient country has adequate data protection laws, or
• We have appropriate safeguards in place (such as contractual clauses), or
• You have consented to the transfer

We primarily use service providers located in South Africa, the European Union, and the United States, all of which have adequate data protection frameworks.`,
    },
    {
      title: '8. Security Measures',
      content: `We implement appropriate technical and organizational measures to protect your personal information, including:

• Encryption of data at rest and in transit
• Secure access controls and authentication
• Regular security assessments and audits
• Employee training on data protection
• Incident response procedures
• Regular backups and disaster recovery

Despite our efforts, no method of transmission or storage is 100% secure. We will notify you and the Information Regulator of any data breach as required by POPIA.`,
    },
    {
      title: '9. Retention Period',
      content: `We retain your personal information for as long as necessary to:

• Provide our services to you
• Comply with legal obligations
• Resolve disputes
• Enforce our agreements

**Specific retention periods:**
• Active account data: Duration of account plus 2 years
• Application history: 3 years from application date
• Financial records: 5 years as required by law
• Marketing consent records: Duration of consent plus 1 year

When your information is no longer needed, we securely delete or anonymize it.`,
    },
    {
      title: '10. Your Rights Under POPIA',
      content: `Under POPIA, you have the following rights regarding your personal information:

**Right to Access:** Request confirmation of whether we hold your personal information and access to that information.

**Right to Correction:** Request correction or deletion of inaccurate, irrelevant, or excessive personal information.

**Right to Deletion:** Request destruction or deletion of your personal information (subject to legal requirements).

**Right to Object:** Object to the processing of your personal information on reasonable grounds.

**Right to Withdraw Consent:** Withdraw your consent to processing at any time (where consent is the legal basis).

**Right to Data Portability:** Request a copy of your personal information in a structured, commonly used format.

**Right to Lodge a Complaint:** Lodge a complaint with the Information Regulator.`,
    },
    {
      title: '11. Exercising Your Rights',
      content: `To exercise any of your rights, you can:

**Contact our Information Officer:**
Email: privacy@passionfruit.careers
Address: Cape Town, South Africa

**Use self-service options:**
• Download your data from Account Settings
• Update your information in your Profile
• Delete your account through Settings

**Submit a formal request:**
We will respond to your request within 30 days as required by POPIA. We may request verification of your identity before processing your request.`,
    },
    {
      title: '12. Direct Marketing',
      content: `We will only send you direct marketing communications if:

• You have given us your explicit consent, or
• You are an existing customer and the marketing relates to similar products/services

You can opt out of marketing communications at any time by:
• Clicking "Unsubscribe" in our emails
• Updating your preferences in Account Settings
• Contacting us at privacy@passionfruit.careers`,
    },
    {
      title: '13. Automated Decision-Making',
      content: `Our AI-powered job matching involves automated processing of your personal information. This includes:

• Analyzing your resume and skills
• Matching you with relevant job opportunities
• Ranking candidates for employers

You have the right to:
• Request human intervention in significant automated decisions
• Express your point of view
• Contest automated decisions

Our AI matching is designed to assist, not replace, human decision-making in the recruitment process.`,
    },
    {
      title: '14. Children\'s Information',
      content: `Our services are not intended for individuals under 18 years of age. We do not knowingly collect personal information from children. If we become aware that we have collected information from a child, we will take steps to delete it promptly.`,
    },
    {
      title: '15. Information Regulator',
      content: `If you are not satisfied with our response to your request or have concerns about our data practices, you have the right to lodge a complaint with:

**The Information Regulator (South Africa)**
Address: JD House, 27 Stiemens Street, Braamfontein, Johannesburg
Phone: +27 10 023 5200
Email: inforeg@justice.gov.za
Website: www.justice.gov.za/inforeg`,
    },
    {
      title: '16. Updates to This Notice',
      content: `We may update this POPIA Compliance Notice from time to time. We will notify you of significant changes by:

• Posting the updated notice on our website
• Sending you an email notification
• Displaying a notice when you log in

The "Last Updated" date at the top indicates when the notice was last revised.`,
    },
  ];

  return (
    <Layout>
      <PageHeader
        tag="Legal"
        title="POPIA Compliance"
        subtitle="How Passionfruit Careers complies with the Protection of Personal Information Act (POPIA)."
      />

      {/* Your Rights Summary */}
      <section className="py-16 bg-black border-b border-gray-800">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-black text-white mb-4">Your Rights Under POPIA</h2>
            <p className="text-gray-400">As a data subject, you have the following rights</p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-6">
            {rights.map((right, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="bg-gray-900/50 border border-gray-800 rounded-2xl p-6 text-center"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary mx-auto mb-4">
                  {right.icon}
                </div>
                <h3 className="text-white font-bold mb-2">{right.title}</h3>
                <p className="text-gray-400 text-sm">{right.desc}</p>
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

      {/* POPIA Content */}
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
          <Shield className="w-16 h-16 text-black mx-auto mb-6" />
          <h2 className="text-4xl font-black text-black mb-4">Exercise Your Rights</h2>
          <p className="text-black/70 text-lg mb-8">
            Contact our Information Officer to exercise your rights under POPIA or if you have any questions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:privacy@passionfruit.careers"
              className="inline-flex items-center gap-2 bg-black text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-gray-800 transition-all"
            >
              <Mail className="w-5 h-5" />
              Contact Information Officer
            </a>
            <Link
              to="/privacy"
              className="inline-flex items-center gap-2 border-2 border-black text-black px-10 py-5 rounded-full font-bold text-lg hover:bg-black hover:text-white transition-all"
            >
              View Privacy Policy
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default POPIA;
