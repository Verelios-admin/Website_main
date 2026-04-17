'use client';

import { MessageCircle } from 'lucide-react';

export function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/918471094125?text=Hi%20Verelios%20Labs!%20I%27m%20interested%20in%20your%20web%2Fapp%20development%20services."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-20 right-6 z-50 flex items-center gap-2 bg-[#25D366] hover:bg-[#20BD5A] text-white px-4 py-3 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 group"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="w-6 h-6" />
      <span className="hidden sm:inline text-sm font-medium">Chat with us</span>
    </a>
  );
}

export default WhatsAppButton;
