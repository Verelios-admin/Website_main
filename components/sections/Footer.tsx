import { Linkedin, Mail, Facebook, Instagram } from 'lucide-react';
import Image from 'next/image';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <Image
                src="/logo.png"
                alt="Verelios Logo"
                width={32}
                height={32}
                className="w-8 h-8 object-contain"
              />
              <span className="text-2xl font-bold">Verelios</span>
            </div>
            <p className="text-slate-400 mb-4 max-w-md">
              Transforming ideas into exceptional digital experiences. We specialize in app and web development that drives business growth.
            </p>
           <div className="flex gap-4">
  {/* LinkedIn */}
  <a
    href="https://www.linkedin.com/in/verelios-4a1483387/"
    target="_blank"
    rel="noopener noreferrer"
    className="w-10 h-10 rounded-full bg-slate-800 hover:bg-blue-600 flex items-center justify-center transition-all duration-300 hover:scale-110"
    aria-label="LinkedIn"
  >
    <Linkedin className="w-5 h-5" />
  </a>

  {/* Facebook */}
  <a
    href="https://www.facebook.com/profile.php?id=61585021269687"
    target="_blank"
    rel="noopener noreferrer"
    className="w-10 h-10 rounded-full bg-slate-800 hover:bg-blue-600 flex items-center justify-center transition-all duration-300 hover:scale-110"
    aria-label="Facebook"
  >
    <Facebook className="w-5 h-5" />
  </a>

  {/* Instagram */}
  <a
    href="https://www.instagram.com/verelioslabs/"
    target="_blank"
    rel="noopener noreferrer"
    className="w-10 h-10 rounded-full bg-slate-800 hover:bg-blue-600 flex items-center justify-center transition-all duration-300 hover:scale-110"
    aria-label="Instagram"
  >
    <Instagram className="w-5 h-5" />
  </a>

  {/* Email */}
  <a
    href="mailto:contact@verelios.com"
    className="w-10 h-10 rounded-full bg-slate-800 hover:bg-blue-600 flex items-center justify-center transition-all duration-300 hover:scale-110"
    aria-label="Email"
  >
    <Mail className="w-5 h-5" />
  </a>

  {/* Phone Numbers */}
  <div className="flex items-center justify-center transition-all duration-300 hover:scale-110">
    <p>+91 8299522798</p>
  </div>
  <div className="flex items-center justify-center transition-all duration-300 hover:scale-110">
    <p>+91 8471094125</p>
  </div>
</div>

          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Services</h3>
            <ul className="space-y-2 text-slate-400">
              <li>
                <a href="#services" className="hover:text-blue-400 transition-colors">
                  App Development
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-blue-400 transition-colors">
                  Web Development
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-blue-400 transition-colors">
                  Custom Software
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-blue-400 transition-colors">
                  UI/UX Design
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Company</h3>
            <ul className="space-y-2 text-slate-400">
              <li>
                <a href="#about" className="hover:text-blue-400 transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#portfolio" className="hover:text-blue-400 transition-colors">
                  Portfolio
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-blue-400 transition-colors">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400 transition-colors">
                  Careers
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-400 text-sm">
            © {currentYear} Verelios. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-slate-400">
            <a href="https://docs.google.com/document/d/1kjYlAlZLLMBcAPWCrznlURVYzi3iHweQ_RJX409sao0/edit?usp=sharing" className="hover:text-blue-400 transition-colors">
              Privacy Policy
            </a>
            <a href="https://docs.google.com/document/d/1r5-iIcTzly3mp_1P9wp2Hf0FtbrAQg2JgR3BWjb0rSU/edit?usp=sharing" className="hover:text-blue-400 transition-colors">
              Terms of Service
            </a>
            <a href="https://docs.google.com/document/d/1r5-iIcTzly3mp_1P9wp2Hf0FtbrAQg2JgR3BWjb0rSU/edit?usp=sharing" className="hover:text-blue-400 transition-colors">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
