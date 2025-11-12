import { Mail, Phone } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#0B0B0B] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <span className="font-bold text-lg md:text-xl  text-white tracking-tight">
                C-CONNECT
              </span>
            </div>
            <p className="text-gray-300 text-sm mb-4">
              Solutions techniques, réseaux et sécurité pour entreprises.
              Connecter. Sécuriser. Optimiser.
            </p>
            <div className="flex space-x-4">
              <a
                href="mailto:info@c-connect.site"
                className="text-[#FFD400] hover:text-[#FFD400]/80 transition-colors"
              >
                <Mail className="w-5 h-5" />
              </a>
              <a
                href="tel:+24206940139"
                className="text-[#FFD400] hover:text-[#FFD400]/80 transition-colors"
              >
                <Phone className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Nos Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-[#FFD400]">
              Nos Services
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/services/administration-reseau-et-systeme"
                  className="text-gray-300 hover:text-[#FFD400] transition-colors text-sm"
                >
                  Administration Réseau et Système
                </Link>
              </li>
              <li>
                <Link
                  href="/services/installation-serveur-et-interphone"
                  className="text-gray-300 hover:text-[#FFD400] transition-colors text-sm"
                >
                  Installation Serveur et Interphone
                </Link>
              </li>
              <li>
                <Link
                  href="/services/installation-gps"
                  className="text-gray-300 hover:text-[#FFD400] transition-colors text-sm"
                >
                  Installation GPS
                </Link>
              </li>
              <li>
                <Link
                  href="/services/installation-camera-de-surveillance-ip"
                  className="text-gray-300 hover:text-[#FFD400] transition-colors text-sm"
                >
                  Installation Caméra de surveillance IP
                </Link>
              </li>
            </ul>
          </div>

          {/* Plus de Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-[#FFD400]">
              Plus de Services
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/services/installation-capteur-de-mouvement"
                  className="text-gray-300 hover:text-[#FFD400] transition-colors text-sm"
                >
                  Installation Capteur de mouvement
                </Link>
              </li>
              <li>
                <Link
                  href="/services/installation-systeme-windows"
                  className="text-gray-300 hover:text-[#FFD400] transition-colors text-sm"
                >
                  Installation Système Windows
                </Link>
              </li>
              <li>
                <Link
                  href="/services/installation-mikrotik-antenne-reseau"
                  className="text-gray-300 hover:text-[#FFD400] transition-colors text-sm"
                >
                  Installation MikroTik & antenne réseau
                </Link>
              </li>
              <li>
                <Link
                  href="/services/developpement-web"
                  className="text-gray-300 hover:text-[#FFD400] transition-colors text-sm"
                >
                  Développement Web
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-[#FFD400]">
              Contact
            </h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-[#FFD400]" />
                <a
                  href="tel:+24206940139"
                  className="text-gray-300 hover:text-[#FFD400] transition-colors text-sm"
                >
                  +242 06 940 13 92
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-[#FFD400]" />
                <a
                  href="mailto:info@c-connect.site"
                  className="text-gray-300 hover:text-[#FFD400] transition-colors text-sm"
                >
                  info@c-connect.site
                </a>
              </div>
              <Link href="/devis" className="inline-block">
                <button className="bg-[#FFD400] text-[#0B0B0B] px-4 py-2 rounded-lg font-semibold hover:bg-[#FFD400]/90 transition-all text-sm whitespace-nowrap">
                  Demander un devis
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2025 C-CONNECT. Tous droits réservés.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link
                href="/mentions-legales"
                className="text-gray-400 hover:text-[#FFD400] transition-colors text-sm"
              >
                Mentions légales
              </Link>
              <Link
                href="/confidentialite"
                className="text-gray-400 hover:text-[#FFD400] transition-colors text-sm"
              >
                Confidentialité
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
