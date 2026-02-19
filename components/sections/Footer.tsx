import { Linkedin, Mail, Facebook, Instagram } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <Image
                src="/logo.png"
                alt="Verelios Logo"
                width={32}
                height={32}
                className="w-8 h-8 object-contain"
              />
              <span className="text-2xl font-bold">Verelios Labs</span>
            </div>

            <p className="text-slate-400 mb-4 max-w-md">
              Transforming ideas into exceptional digital experiences. We specialize in app and web development that drives business growth.
            </p>

            <div className="flex flex-wrap gap-4 items-center">
              <a
                href="https://www.linkedin.com/in/verelios-4a1483387/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-slate-800 hover:bg-blue-600 flex items-center justify-center transition-all duration-300 hover:scale-110"
              >
                <Linkedin className="w-5 h-5" />
              </a>

              <a
                href="https://www.facebook.com/profile.php?id=61585021269687"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-slate-800 hover:bg-blue-600 flex items-center justify-center transition-all duration-300 hover:scale-110"
              >
                <Facebook className="w-5 h-5" />
              </a>

              <a
                href="https://www.instagram.com/verelioslabs/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-slate-800 hover:bg-blue-600 flex items-center justify-center transition-all duration-300 hover:scale-110"
              >
                <Instagram className="w-5 h-5" />
              </a>

              <a
                href="mailto:contact@verelios.com"
                className="w-10 h-10 rounded-full bg-slate-800 hover:bg-blue-600 flex items-center justify-center transition-all duration-300 hover:scale-110"
              >
                <Mail className="w-5 h-5" />
              </a>

              <span className="text-slate-400 text-sm">+91 8299522798</span>
              <span className="text-slate-400 text-sm">+91 8471094125</span>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Services</h3>
            <ul className="space-y-2 text-slate-400">
              <li><a href="#services" className="hover:text-blue-400">App Development</a></li>
              <li><a href="#services" className="hover:text-blue-400">Web Development</a></li>
              <li><a href="#services" className="hover:text-blue-400">Custom Software</a></li>
              <li><a href="#services" className="hover:text-blue-400">UI/UX Design</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Company</h3>
            <ul className="space-y-2 text-slate-400">
              <li><a href="#about" className="hover:text-blue-400">About Us</a></li>
              <li><a href="#portfolio" className="hover:text-blue-400">Portfolio</a></li>
              <li><a href="#contact" className="hover:text-blue-400">Contact</a></li>
              <li><a href="#" className="hover:text-blue-400">Careers</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-400 text-sm">
            © {currentYear} Verelios Labs. All rights reserved.
          </p>

          <div className="flex gap-6 text-sm text-slate-400">
            <Link href="/privacy-policy" className="hover:text-blue-400">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="hover:text-blue-400">
              Terms of Service
            </Link>
            <Link href="/cookie-policy" className="hover:text-blue-400">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
