import { useState } from 'react';
import { motion } from 'framer-motion';
import { Cookie, Settings, CheckCircle2, X, Mail } from 'lucide-react';
import { Layout, PageHeader } from '../components/Layout';

const Cookies = () => {
  const [preferences, setPreferences] = useState({
    essential: true,
    analytics: true,
    marketing: false,
    functional: true,
  });

  const cookieTypes = [
    {
      name: 'Essential Cookies',
      key: 'essential',
      required: true,
      description: 'These cookies are necessary for the website to function and cannot be switched off. They are usually only set in response to actions made by you such as setting your privacy preferences, logging in, or filling in forms.',
      examples: ['Session cookies', 'Authentication cookies', 'Security cookies'],
    },
    {
      name: 'Analytics Cookies',
      key: 'analytics',
      required: false,
      description: 'These cookies allow us to count visits and traffic sources so we can measure and improve the performance of our site. They help us know which pages are the most and least popular and see how visitors move around the site.',
      examples: ['Google Analytics', 'Performance monitoring', 'Usage statistics'],
    },
    {
      name: 'Functional Cookies',
      key: 'functional',
      required: false,
      description: 'These cookies enable the website to provide enhanced functionality and personalization. They may be set by us or by third-party providers whose services we have added to our pages.',
      examples: ['Language preferences', 'Region settings', 'Saved job searches'],
    },
    {
      name: 'Marketing Cookies',
      key: 'marketing',
      required: false,
      description: 'These cookies may be set through our site by our advertising partners. They may be used by those companies to build a profile of your interests and show you relevant adverts on other sites.',
      examples: ['Retargeting cookies', 'Social media cookies', 'Advertising cookies'],
    },
  ];

  const sections = [
    {
      title: 'What Are Cookies?',
      content: `Cookies are small text files that are placed on your device when you visit a website. They are widely used to make websites work more efficiently and to provide information to the owners of the site.

Cookies can be "persistent" or "session" cookies. Persistent cookies remain on your device after you close your browser, while session cookies are deleted when you close your browser.`,
    },
    {
      title: 'How We Use Cookies',
      content: `We use cookies for several purposes, including:

• **Authentication:** To keep you logged in as you navigate our site
• **Preferences:** To remember your settings and preferences
• **Analytics:** To understand how visitors use our site
• **Performance:** To optimize and improve our services
• **Security:** To detect and prevent fraudulent activity`,
    },
    {
      title: 'Third-Party Cookies',
      content: `Some cookies are placed by third parties on our behalf. These third parties may include:

• Analytics providers (Google Analytics)
• Social media platforms
• Advertising networks

These third parties have their own privacy policies governing their use of cookies.`,
    },
    {
      title: 'Managing Cookies',
      content: `You can control and manage cookies in several ways:

**Browser Settings:**
Most browsers allow you to refuse cookies or delete existing cookies. The exact process varies by browser:
• Chrome: Settings > Privacy and Security > Cookies
• Firefox: Options > Privacy & Security > Cookies
• Safari: Preferences > Privacy > Cookies
• Edge: Settings > Privacy, Search and Services > Cookies

**Our Cookie Settings:**
Use the cookie preference center above to customize which non-essential cookies you accept on our site.

**Opt-Out Links:**
• Google Analytics: tools.google.com/dlpage/gaoptout

Note: Blocking cookies may impact your experience on our site and limit the functionality available to you.`,
    },
    {
      title: 'Cookie Retention',
      content: `Different cookies have different lifespans:

• Session cookies: Deleted when you close your browser
• Persistent cookies: May remain for up to 2 years
• Analytics cookies: Typically retained for 26 months

You can delete cookies at any time through your browser settings.`,
    },
    {
      title: 'Updates to This Policy',
      content: `We may update this Cookie Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. The "Last Updated" date at the top of this policy indicates when it was last revised.`,
    },
  ];

  const handleToggle = (key: string) => {
    if (key === 'essential') return; // Can't toggle essential cookies
    setPreferences(prev => ({ ...prev, [key]: !prev[key as keyof typeof prev] }));
  };

  return (
    <Layout>
      <PageHeader
        tag="Legal"
        title="Cookie Policy"
        subtitle="Learn about how we use cookies and similar technologies on our website."
      />

      {/* Cookie Preferences */}
      <section className="py-16 bg-black border-b border-gray-800">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-gray-900/50 border border-gray-800 rounded-3xl p-8"
          >
            <div className="flex items-center gap-4 mb-6">
              <Settings className="w-8 h-8 text-primary" />
              <h2 className="text-2xl font-bold text-white">Cookie Preferences</h2>
            </div>
            <p className="text-gray-400 mb-8">
              Manage your cookie preferences below. Essential cookies cannot be disabled as they are required for the website to function.
            </p>

            <div className="space-y-4">
              {cookieTypes.map((cookie, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-gray-800/50 border border-gray-700 rounded-2xl p-6"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className="text-white font-bold">{cookie.name}</h3>
                        {cookie.required && (
                          <span className="text-xs bg-primary/20 text-primary px-2 py-1 rounded-full">Required</span>
                        )}
                      </div>
                      <p className="text-gray-400 text-sm mb-3">{cookie.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {cookie.examples.map((example, j) => (
                          <span key={j} className="text-xs bg-gray-700 text-gray-300 px-2 py-1 rounded">
                            {example}
                          </span>
                        ))}
                      </div>
                    </div>
                    <button
                      onClick={() => handleToggle(cookie.key)}
                      disabled={cookie.required}
                      className={`relative w-14 h-7 rounded-full transition-colors ${
                        preferences[cookie.key as keyof typeof preferences]
                          ? 'bg-primary'
                          : 'bg-gray-600'
                      } ${cookie.required ? 'opacity-50 cursor-not-allowed' : ''}`}
                    >
                      <div
                        className={`absolute top-1 w-5 h-5 rounded-full bg-white transition-transform ${
                          preferences[cookie.key as keyof typeof preferences] ? 'translate-x-8' : 'translate-x-1'
                        }`}
                      />
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <button className="bg-primary text-black px-6 py-3 rounded-full font-bold hover:bg-primary-light transition-all">
                Save Preferences
              </button>
              <button className="border border-gray-600 text-white px-6 py-3 rounded-full font-bold hover:border-primary hover:text-primary transition-all">
                Accept All
              </button>
              <button className="border border-gray-600 text-white px-6 py-3 rounded-full font-bold hover:border-primary hover:text-primary transition-all">
                Reject Non-Essential
              </button>
            </div>
          </motion.div>
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

      {/* Policy Content */}
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
          <Cookie className="w-16 h-16 text-black mx-auto mb-6" />
          <h2 className="text-4xl font-black text-black mb-4">Questions About Cookies?</h2>
          <p className="text-black/70 text-lg mb-8">
            Contact us if you have any questions about our use of cookies.
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

export default Cookies;
