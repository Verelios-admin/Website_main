'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { ArrowRight, Phone, ChevronDown, Mail } from 'lucide-react';
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';
import Link from 'next/link';

const countryCodes = [
  { code: '+91', flag: '\u{1F1EE}\u{1F1F3}', country: 'IN' },
  { code: '+1', flag: '\u{1F1FA}\u{1F1F8}', country: 'US' },
  { code: '+44', flag: '\u{1F1EC}\u{1F1E7}', country: 'GB' },
  { code: '+61', flag: '\u{1F1E6}\u{1F1FA}', country: 'AU' },
  { code: '+86', flag: '\u{1F1E8}\u{1F1F3}', country: 'CN' },
  { code: '+81', flag: '\u{1F1EF}\u{1F1F5}', country: 'JP' },
  { code: '+49', flag: '\u{1F1E9}\u{1F1EA}', country: 'DE' },
  { code: '+33', flag: '\u{1F1EB}\u{1F1F7}', country: 'FR' },
  { code: '+39', flag: '\u{1F1EE}\u{1F1F9}', country: 'IT' },
  { code: '+34', flag: '\u{1F1EA}\u{1F1F8}', country: 'ES' },
  { code: '+7', flag: '\u{1F1F7}\u{1F1FA}', country: 'RU' },
  { code: '+82', flag: '\u{1F1F0}\u{1F1F7}', country: 'KR' },
  { code: '+971', flag: '\u{1F1E6}\u{1F1EA}', country: 'AE' },
  { code: '+966', flag: '\u{1F1F8}\u{1F1E6}', country: 'SA' },
  { code: '+65', flag: '\u{1F1F8}\u{1F1EC}', country: 'SG' },
];

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [selectedCountry, setSelectedCountry] = useState(countryCodes[0]);
  const [isCountryDropdownOpen, setIsCountryDropdownOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [marketingConsent, setMarketingConsent] = useState(true);
  const [nonMarketingConsent, setNonMarketingConsent] = useState(true);
  const { toast } = useToast();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Check if all required fields are filled
  const isFormValid =
    formData.name.trim() !== '' &&
    formData.email.trim() !== '' &&
    formData.phone.trim() !== '' &&
    formData.message.trim() !== '';

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isFormValid) return;
    setIsSubmitting(true);

    try {
      // Send phone with country code as plain text
      const fullPhone = `${selectedCountry.code} ${formData.phone}`;

      const payload = {
        name: formData.name,
        email: formData.email,
        phone: fullPhone,
        message: formData.message,
        source: 'Verelios Website - Contact Us',
        date: new Date().toISOString(),
        marketingConsent: marketingConsent,
        nonMarketingConsent: nonMarketingConsent,
      };

      await fetch('https://hook.us2.make.com/wv8ueoroa8mwfgk3gn6v2da68hcsd35x', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      toast({
        title: 'Message Sent!',
        description: "We'll get back to you as soon as possible.",
      });

      setFormData({ name: '', email: '', phone: '', message: '' });
      setMarketingConsent(true);
      setNonMarketingConsent(true);
    } catch {
      toast({
        title: 'Something went wrong',
        description: 'Please try again later.',
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative py-0 overflow-x-hidden bg-gradient-to-br from-slate-900 to-slate-800"
    >
      {/* TOP CONTACT BAR */}
      <div className="bg-slate-900 border-b border-gray-800">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-center gap-6 py-3 text-white text-sm">
            <div className="flex items-center gap-2">
              <span className="text-lg">{'\u{1F1EE}\u{1F1F3}'}</span>
              <Phone className="w-4 h-4" />
              <span>+91 8299522798, +91 8471094125</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4" />
              <span>contact@verelios.com</span>
            </div>
          </div>
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto items-start">

          {/* LEFT CONTENT */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl font-bold text-white uppercase mb-3">
                Contact Us
              </h2>
              <div className="w-16 h-1 bg-[#FF5733]" />
            </div>

            <h3 className="text-4xl md:text-5xl font-bold text-white leading-tight">
              Want to do a <span className="text-[#FF5733]">Project</span> with us?
            </h3>

            <p className="text-gray-400 text-lg">
              Get in touch with our team to discuss your next project.
            </p>

            <a
              href="https://wa.me/918471094125?text=Hi%20Verelios%20Labs!%20I%27d%20like%20to%20book%20a%20meeting%20to%20discuss%20my%20project."
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="lg"
                className="bg-[#FF5733] hover:bg-[#FF6B47] text-white px-8 py-6"
              >
                Book a Meeting
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </a>
          </div>

          {/* FORM CARD */}
          <div className="bg-white rounded-lg p-8 shadow-xl relative z-20">
            <form onSubmit={handleSubmit} className="space-y-6">
              <Input
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Name"
                required
                className="h-12 bg-white text-gray-900 placeholder:text-gray-400 border border-gray-300 focus:border-[#FF5733] focus:ring-[#FF5733]"
              />

              <Input
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                required
                className="h-12 bg-white text-gray-900 placeholder:text-gray-400 border border-gray-300 focus:border-[#FF5733] focus:ring-[#FF5733]"
              />

              {/* PHONE */}
              <div className="relative">
                <div className="absolute left-3 top-1/2 -translate-y-1/2 z-10">
                  <button
                    type="button"
                    onClick={() =>
                      setIsCountryDropdownOpen(!isCountryDropdownOpen)
                    }
                    className="flex items-center gap-2 px-2 py-1 border border-gray-300 rounded bg-white text-gray-900"
                  >
                    <span>{selectedCountry.flag}</span>
                    <span className="text-sm">{selectedCountry.code}</span>
                    <ChevronDown className="w-4 h-4" />
                  </button>

                  {isCountryDropdownOpen && (
                    <>
                      <div
                        className="fixed inset-0 z-10"
                        onClick={() => setIsCountryDropdownOpen(false)}
                      />
                      <div className="absolute top-full left-0 mt-1 w-56 sm:w-64 bg-white border rounded shadow-lg z-20 max-h-60 overflow-y-auto">
                        {countryCodes.map((c) => (
                          <button
                            key={c.code}
                            type="button"
                            onClick={() => {
                              setSelectedCountry(c);
                              setIsCountryDropdownOpen(false);
                            }}
                            className="w-full flex items-center gap-3 px-4 py-2 hover:bg-gray-100 text-gray-900"
                          >
                            <span>{c.flag}</span>
                            <span>{c.code}</span>
                            <span className="ml-auto text-xs text-gray-400">
                              {c.country}
                            </span>
                          </button>
                        ))}
                      </div>
                    </>
                  )}
                </div>

                <Input
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Contact Number"
                  required
                  className="h-12 pl-[7.5rem] sm:pl-[8.5rem] bg-white text-gray-900 placeholder:text-gray-400 border border-gray-300 focus:border-[#FF5733] focus:ring-[#FF5733]"
                />
              </div>

              <Textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Project Description"
                rows={5}
                required
                className="resize-none bg-white text-gray-900 placeholder:text-gray-400 border border-gray-300 focus:border-[#FF5733] focus:ring-[#FF5733]"
              />

              {/* CONSENTS */}
              <div className="space-y-4 text-sm text-slate-700">
                {/* Marketing Consent */}
                <label className="flex items-start gap-4 p-3 rounded-md border border-gray-200 cursor-pointer hover:border-[#FF5733] hover:bg-[#FFF5F2] transition">
                  <input
                    type="checkbox"
                    checked={marketingConsent}
                    onChange={(e) => setMarketingConsent(e.target.checked)}
                    className="mt-1 accent-[#FF5733] scale-110"
                  />
                  <span className="leading-relaxed">
                    I consent to receive <strong>marketing text messages</strong> from
                    Verelios Labs. Reply <strong>STOP</strong> to opt out.
                  </span>
                </label>

                {/* Non-Marketing Consent */}
                <label className="flex items-start gap-4 p-3 rounded-md border border-gray-200 cursor-pointer hover:border-[#FF5733] hover:bg-[#FFF5F2] transition">
                  <input
                    type="checkbox"
                    checked={nonMarketingConsent}
                    onChange={(e) => setNonMarketingConsent(e.target.checked)}
                    className="mt-1 accent-[#FF5733] scale-110"
                  />
                  <span className="leading-relaxed">
                    I consent to receive <strong>non-marketing messages</strong> such as
                    updates & reminders.
                  </span>
                </label>
              </div>

              <Button
                type="submit"
                disabled={isSubmitting || !isFormValid}
                className={`w-full py-6 transition-all duration-300 ${
                  isFormValid
                    ? 'bg-[#FF5733] hover:bg-[#FF6B47] text-white shadow-lg hover:shadow-xl hover:scale-[1.02]'
                    : 'bg-[#FFE5E0] text-gray-400 cursor-not-allowed'
                }`}
              >
                {isSubmitting ? 'Submitting\u2026' : 'Enquire Now'}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
