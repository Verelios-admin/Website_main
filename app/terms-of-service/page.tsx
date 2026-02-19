import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/sections/Footer";

export default function TermsOfServicePage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 text-white">
      <Navigation />

      {/* Header */}
      <section className="pt-32 pb-16 px-6 text-center">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">
          Terms and Conditions
        </h1>
        <p className="text-slate-400 text-sm">
          Last Updated: January 2026
        </p>
      </section>

      {/* Content */}
      <section className="px-6 pb-24">
        <div className="max-w-5xl mx-auto space-y-8 text-slate-300 leading-relaxed">

          <p>
            These Terms and Conditions govern your use of Verelios Labs services,
            including our website and our SMS and email communications programs.
            By using our services or opting into our communications, you agree to
            these Terms and our Privacy Policy.
          </p>

          <div>
            <h2 className="text-2xl font-semibold text-white mb-2">
              1. Program Description
            </h2>
            <p>
              Verelios Labs may send SMS and email messages to users who opt in.
              Messages may include promotional offers, service updates, appointment
              confirmations, and appointment reminders. Message frequency may vary.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-white mb-2">
              2. Consent to Receive Messages
            </h2>
            <p>
              By providing your phone number and opting in, you authorize Verelios Labs
              to send text messages to your mobile number. Consent is not a condition of purchase.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-white mb-2">
              3. Opt Out
            </h2>
            <p>
              You can cancel the SMS service at any time by replying <strong>STOP</strong> to any
              message you receive from us. After confirmation, you will no longer receive SMS
              messages unless you opt in again.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-white mb-2">
              4. Opt In Again
            </h2>
            <p>
              If you want to rejoin after opting out, you can opt in again using the same
              method you used to enroll originally.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-white mb-2">
              5. Help and Support
            </h2>
            <p>
              If you experience issues with the messaging program, you may reply
              with <strong>HELP</strong> for assistance or contact us directly at
              <span className="text-blue-400"> contact@verelios.com</span>.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-white mb-2">
              6. Message Frequency and Rates
            </h2>
            <p>
              Message and data rates may apply. Message frequency may vary, but you
              can expect no more than 4 messages per month. Contact your wireless
              provider for details.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-white mb-2">
              7. Carrier Disclaimer
            </h2>
            <p>
              Carriers are not liable for delayed or undelivered messages.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-white mb-2">
              8. Privacy
            </h2>
            <p>
              Your use of the messaging program is governed by our Privacy Policy.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-white mb-2">
              9. Changes to Terms
            </h2>
            <p>
              We may update these Terms from time to time. Updates will be posted
              with a revised effective date.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-white mb-2">
              10. Contact
            </h2>
            <p>
              Verelios Labs<br />
              Phone: +91 8299522798<br />
              Email:{" "}
              <a
                href="mailto:contact@verelios.com"
                className="text-blue-400 hover:underline"
              >
                contact@verelios.com
              </a>
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-white mb-2">
              11. Governing Law
            </h2>
            <p>
              These Terms and Conditions are governed by the laws of India, and any
              disputes shall fall under the jurisdiction of Indian courts.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-white mb-2">
              12. Limitation of Liability
            </h2>
            <p>
              Verelios Labs shall not be liable for any indirect, incidental,
              special, or consequential damages arising from the use of our services.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-white mb-2">
              13. Acceptance of Terms
            </h2>
            <p>
              By accessing our website or opting into our communications, you
              acknowledge that you have read, understood, and agreed to these Terms
              and Conditions.
            </p>
          </div>

        </div>
      </section>

      <Footer />
    </main>
  );
}
