'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { ArrowRight, Phone, ChevronDown, Mail } from 'lucide-react';
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';

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

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setIsSubmitting(true);

  try {
    const payload = {
      name: formData.name,
      email: formData.email,
phone: `PHONE_${selectedCountry.code.replace('+','')}_${formData.phone}`,

      message: formData.message,
      source: "Verelios Website - Contact Us",
      date: new Date().toISOString(),
    };

    await fetch("https://hook.us2.make.com/wv8ueoroa8mwfgk3gn6v2da68hcsd35x", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    // ✅ ALWAYS show success
    toast({
      title: "Message Sent!",
      description: "We'll get back to you as soon as possible.",
    });

    setFormData({ name: "", email: "", phone: "", message: "" });
  } catch {
    toast({
      title: "Something went wrong",
      description: "Please try again later.",
      variant: "destructive",
    });
  } finally {
    setIsSubmitting(false);
  }
};


  
    // await new Promise((resolve) => setTimeout(resolve, 1500));



  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-0 bg-gradient-to-br from-slate-900 to-slate-800">
      {/* Top Bar with Phone Numbers */}
      <div className="bg-slate-900 border-b border-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center gap-8 py-3 flex-wrap">
          
            <div className="flex items-center gap-2 text-white text-sm">
              <span className="text-lg">🇮🇳</span>
              <Phone className="w-4 h-4" />
              <span>+91 8299522798 </span>
              <span>, +91 8471094125</span>
            </div>
            <div className="flex items-center gap-2 text-white text-sm">
              <span className="text-lg">mail</span>
              <Mail className="w-4 h-4" />
              <span>contact@verelios.com</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Contact Section */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto items-start">
          {/* Left Section - Contact Info and CTA */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl font-bold text-white uppercase mb-3">
                CONTACT US
              </h2>
              <div className="w-16 h-1 bg-[#FF5733] mb-8"></div>
            </div>

            <div className="space-y-6">
              <h3 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                Want to do a{' '}
                <span className="text-[#FF5733]">Project</span> with us? Let's
                talk!
              </h3>

              <p className="text-gray-400 text-lg">
                Get in touch with our team to discuss your next project. We're
                here to help bring your ideas to life.
              </p>
            </div>

            <Button
              className="bg-[#FF5733] hover:bg-[#FF6B47] text-white px-8 py-6 text-lg rounded-lg transition-all duration-300 hover:scale-105 group"
              size="lg"
            >
              Book a Meeting with our Founders
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          {/* Right Section - Contact Form */}
          <div className="bg-white rounded-lg p-8 shadow-xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Name"
                  required
                  className="bg-white border-gray-300 text-gray-900 placeholder:text-gray-500 focus:border-[#FF5733] focus:ring-[#FF5733] h-12"
                />
              </div>

              <div>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email address"
                  required
                  className="bg-white border-gray-300 text-gray-900 placeholder:text-gray-500 focus:border-[#FF5733] focus:ring-[#FF5733] h-12"
                />
              </div>

              <div>
                <div className="relative">
                  <div className="absolute left-3 top-1/2 -translate-y-1/2 z-10">
                    <div className="relative">
                      <button
                        type="button"
                        onClick={() => setIsCountryDropdownOpen(!isCountryDropdownOpen)}
                        className="flex items-center gap-2 px-2 py-1 rounded border border-gray-300 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#FF5733] focus:border-[#FF5733]"
                      >
                        <span className="text-lg">{selectedCountry.flag}</span>
                        <span className="text-gray-700 text-sm font-medium">{selectedCountry.code}</span>
                        <ChevronDown className="w-4 h-4 text-gray-400" />
                      </button>
                      
                      {isCountryDropdownOpen && (
                        <>
                          <div 
                            className="fixed inset-0 z-10" 
                            onClick={() => setIsCountryDropdownOpen(false)}
                          ></div>
                          <div className="absolute top-full left-0 mt-1 w-64 bg-white border border-gray-300 rounded-lg shadow-lg z-20 max-h-60 overflow-y-auto">
                            {countryCodes.map((country) => (
                              <button
                                key={country.code}
                                type="button"
                                onClick={() => {
                                  setSelectedCountry(country);
                                  setIsCountryDropdownOpen(false);
                                }}
                                className={`w-full flex items-center gap-3 px-4 py-2 text-left hover:bg-gray-100 transition-colors ${
                                  selectedCountry.code === country.code ? 'bg-[#FFE5E0]' : ''
                                }`}
                              >
                                <span className="text-xl">{country.flag}</span>
                                <span className="text-gray-700 text-sm font-medium">{country.code}</span>
                                <span className="text-gray-500 text-xs ml-auto">{country.country}</span>
                              </button>
                            ))}
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Contact Number"
                    className="bg-white border-gray-300 text-gray-900 placeholder:text-gray-500 focus:border-[#FF5733] focus:ring-[#FF5733] h-12 pl-28"
                  />
                </div>
              </div>

              <div>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Project Description"
                  required
                  rows={5}
                  className="bg-white border-gray-300 text-gray-900 placeholder:text-gray-500 focus:border-[#FF5733] focus:ring-[#FF5733] resize-none"
                />
              </div>


              <div className="mt-4 text-sm text-slate-300">
  {/* Marketing Consent */}
  <label className="group flex items-start gap-3 mb-3 cursor-pointer rounded-md p-2 transition peer-checked:bg-blue-500/10">
    <input
      type="checkbox"
      required
      className="peer mt-1 h-4 w-4 rounded border-slate-500 text-blue-600 focus:ring-blue-500"
    />

    <span className="leading-relaxed transition peer-checked:text-blue-300">
      I consent to receive <strong>marketing text messages</strong> from
      <strong> Verelios Labs</strong> at the phone number provided. Frequency may
      vary. Message & data rates may apply. Text <strong>HELP</strong> for
      assistance, reply <strong>STOP</strong> to opt out.
    </span>
  </label>

  {/* Non-Marketing Consent */}
  <label className="group flex items-start gap-3 mb-2 cursor-pointer rounded-md p-2 transition peer-checked:bg-blue-500/10">
    <input
      type="checkbox"
      className="peer mt-1 h-4 w-4 rounded border-slate-500 text-blue-600 focus:ring-blue-500"
    />

    <span className="leading-relaxed transition peer-checked:text-blue-300">
      I consent to receive <strong>non-marketing text messages</strong> from
      <strong> Verelios Labs</strong> regarding order updates, appointment
      reminders, and service notifications. Message & data rates may apply.
    </span>
  </label>

  {/* Links */}
  <p className="mt-2 text-xs text-slate-400">
    By continuing, you agree to our{" "}
    <a
      href="https://docs.google.com/document/d/1r5-iIcTzly3mp_1P9wp2Hf0FtbrAQg2JgR3BWjb0rSU/edit?usp=drive_link"
      target="_blank"
      rel="noopener noreferrer"
      className="text-blue-400 underline hover:text-blue-300"
    >
      Terms of Service
    </a>{" "}
    and{" "}
    <a
      href="https://docs.google.com/document/d/1kjYlAlZLLMBcAPWCrznlURVYzi3iHweQ_RJX409sao0/edit?usp=drive_link"
      target="_blank"
      rel="noopener noreferrer"
      className="text-blue-400 underline hover:text-blue-300"
    >
      Privacy Policy
    </a>.
  </p>
</div>







              <Button
                type="submit"
                className="w-full bg-[#FFE5E0] hover:bg-[#FFD4CC] text-gray-800 font-medium py-6 rounded-lg transition-all duration-300 disabled:opacity-50"
                size="lg"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Submitting...' : 'Enquire Now'}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
