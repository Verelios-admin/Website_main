import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/sections/Footer";

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 text-white">
      <Navigation />

      {/* Header */}
      <section className="pt-32 pb-16 px-6 text-center">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">
          Privacy Policy
        </h1>
        <p className="text-slate-400 text-sm">
          Last Updated: January 2026
        </p>
      </section>

      {/* Content */}
      <section className="px-6 pb-24">
        <div className="max-w-5xl mx-auto space-y-8 text-slate-300 leading-relaxed">

          <div>
            <h2 className="text-2xl font-semibold text-white mb-2">1. Introduction</h2>
            <p>
              Verelios Labs is committed to respecting and protecting your privacy.
              This Privacy Policy explains how we collect, use, store, and safeguard your
              personal information when you interact with our website or use our services,
              including SMS and email communications, appointment reminders, and website analytics tools.
            </p>
            <p className="mt-2">
              By accessing our website, submitting your information, or opting into our communications,
              you agree to the practices described in this Privacy Policy and our Terms and Conditions.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-white mb-2">2. Information We Collect</h2>

            <p className="font-medium text-white mt-4">Contact Information</p>
            <p>
              We may collect your name, email address, phone number, and mailing address when you submit
              forms, book appointments, request information, or otherwise provide it to us.
            </p>

            <p className="font-medium text-white mt-4">Communications Data</p>
            <p>
              If you opt in, we collect your messaging preferences and maintain records of consent
              and opt-out activity related to SMS and email communications.
            </p>

            <p className="font-medium text-white mt-4">Usage and Device Information</p>
            <p>
              We may use cookies, pixels, and analytics tools to collect information about how you
              use our website, including IP address, browser type, pages visited, and interaction data.
            </p>

            <p className="font-medium text-white mt-4">Appointment and Service Data</p>
            <p>
              If you schedule appointments or use our services, we may collect details associated
              with those interactions.
            </p>

            <p className="font-medium text-white mt-4">Automated & Analytical Data</p>
            <p>
              We may use automated tools, CRM systems, and analytics platforms to analyze user behavior,
              improve services, and enhance marketing performance.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-white mb-2">3. How We Use Your Information</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Provide requested services and customer support</li>
              <li>Send appointment confirmations and reminders</li>
              <li>Send SMS and email communications you have consented to receive</li>
              <li>Improve website and marketing performance</li>
              <li>Maintain compliance and consent records</li>
              <li>Protect our business, users, and systems</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-white mb-2">4. Cookies and Tracking Technologies</h2>
            <p>
              We use cookies and similar technologies to personalize your experience and understand how
              our website is used. You can control cookies through your browser settings.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-white mb-2">5. How We Share Your Information</h2>
            <p>
              We do not sell your personal information. No mobile information will be shared with
              third parties for marketing or promotional purposes.
            </p>
            <p className="mt-2">
              Information may be shared with trusted service providers strictly for operational support,
              legal compliance, or business transfers, in accordance with applicable laws.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-white mb-2">6. Your Choices</h2>

            <p className="font-medium text-white mt-4">SMS Opt-Out</p>
            <p>
              You may opt out at any time by replying <strong>STOP</strong>.
              Message frequency may vary. Message and data rates may apply.
            </p>

            <p className="font-medium text-white mt-4">Email Opt-Out</p>
            <p>
              You may unsubscribe from marketing emails using the unsubscribe link provided.
            </p>

            <p className="font-medium text-white mt-4">Access & Correction</p>
            <p>
              You may request access, correction, or deletion of your personal data subject to law.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-white mb-2">7. Data Security</h2>
            <p>
              We use reasonable administrative, technical, and physical safeguards to protect your
              information. However, no system is completely secure.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-white mb-2">8. Children’s Privacy</h2>
            <p>
              Our services are not intended for children under 13. We do not knowingly collect
              personal data from children.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-white mb-2">9. Updates to This Policy</h2>
            <p>
              We may update this policy periodically. The revised version will be posted with a new
              effective date.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-white mb-2">10. Contact Us</h2>
            <p>
              Compliance Officer<br />
              Email: <a href="mailto:contact@verelios.com" className="text-blue-400 hover:underline">
                contact@verelios.com
              </a><br />
              Response Time: 7 business days
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-white mb-2">11. Consent & Acceptance</h2>
            <p>
              By using our website or services, you confirm that you have read and agreed to this
              Privacy Policy.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-white mb-2">12. Governing Law</h2>
            <p>
              This Privacy Policy is governed by the laws of India. Any disputes shall fall under
              the jurisdiction of Indian courts.
            </p>
          </div>

        </div>
      </section>

      <Footer />
    </main>
  );
}
