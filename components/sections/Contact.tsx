'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { ArrowRight, Phone, ChevronDown, Mail } from 'lucide-react';
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';
import Link from 'next/link';

const countryCodes = [
  { code: '+91', flag: '🇮🇳', country: 'IN' },
  { code: '+1', flag: '🇺🇸', country: 'US' },
  { code: '+44', flag: '🇬🇧', country: 'GB' },
  { code: '+61', flag: '🇦🇺', country: 'AU' },
  { code: '+86', flag: '🇨🇳', country: 'CN' },
  { code: '+81', flag: '🇯🇵', country: 'JP' },
  { code: '+49', flag: '🇩🇪', country: 'DE' },
  { code: '+33', flag: '🇫🇷', country: 'FR' },
  { code: '+39', flag: '🇮🇹', country: 'IT' },
  { code: '+34', flag: '🇪🇸', country: 'ES' },
  { code: '+7', flag: '🇷🇺', country: 'RU' },
  { code: '+82', flag: '🇰🇷', country: 'KR' },
  { code: '+971', flag: '🇦🇪', country: 'AE' },
  { code: '+966', flag: '🇸🇦', country: 'SA' },
  { code: '+65', flag: '🇸🇬', country: 'SG' },
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
  const { toast } = useToast();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

  // ✅ DEBUG LINE
      console.log(
    "PHONE SENT 👉",
    `${selectedCountry.code} ${formData.phone}`
  );


    try {
      const payload = {
        name: formData.name,
        email: formData.email,
        phone: `${selectedCountry.code} ${formData.phone}`,
        message: formData.message,
        source: 'Verelios Website - Contact Us',
        date: new Date().toISOString(),
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
              <span className="text-lg">🇮🇳</span>
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

            <Button
              size="lg"
              className="bg-[#FF5733] hover:bg-[#FF6B47] text-white px-8 py-6"
            >
              Book a Meeting
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
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
  value={formData.phone}
  onChange={handleChange}
  placeholder="Contact Number"
  className="
    h-12
    pl-[7.5rem] sm:pl-[8.5rem]
    bg-white
    text-gray-900
    placeholder:text-gray-400
    border border-gray-300
    focus:border-[#FF5733]
    focus:ring-[#FF5733]
  "
/>
              </div>

             <Textarea
  name="message"
  value={formData.message}
  onChange={handleChange}
  placeholder="Project Description"
  rows={5}
  required
  className="
    resize-none
    bg-white
    text-gray-900
    placeholder:text-gray-400
    border border-gray-300
    focus:border-[#FF5733]
    focus:ring-[#FF5733]
  "
/>

              {/* CONSENTS */}
           
<div className="space-y-4 text-sm text-slate-700">

  {/* Marketing Consent */}
  <label className="flex items-start gap-4 p-3 rounded-md border border-gray-200 cursor-pointer hover:border-[#FF5733] hover:bg-[#FFF5F2] transition">
    <input
      type="checkbox"
      required
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
                disabled={isSubmitting}
                className="w-full py-6 bg-[#FFE5E0] hover:bg-[#FFD4CC] text-gray-800"
              >
                {isSubmitting ? 'Submitting…' : 'Enquire Now'}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
