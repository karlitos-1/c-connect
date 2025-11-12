import {
  Building2,
  Camera,
  Code,
  Gauge,
  MapPin,
  Monitor,
  Server,
  Wifi,
  Wrench,
} from "lucide-react";
import Link from "next/link";

export default function Services() {
  const services = [
    {
      icon: Server,
      title: "Administration Réseau et Système",
      description:
        "Gestion complète de votre infrastructure réseau et système informatique pour une performance optimale.",
      features: [
        "Monitoring 24/7",
        "Maintenance préventive",
        "Support technique",
        "Optimisation performance",
      ],
      href: "/services/administration-reseau-et-systeme",
      slug: "administration-reseau-et-systeme",
    },
    {
      icon: Building2,
      title: "Installation Serveur et Interphone",
      description:
        "Installation et configuration professionnelle de serveurs et systèmes d'interphonie modernes.",
      features: [
        "Serveurs haute performance",
        "Interphonie IP",
        "Configuration sécurisée",
        "Formation utilisateur",
      ],
      href: "/services/installation-serveur-et-interphone",
      slug: "installation-serveur-et-interphone",
    },
    {
      icon: MapPin,
      title: "Installation GPS",
      description:
        "Systèmes de géolocalisation avancés pour véhicules automobiles et motocycles.",
      features: [
        "Suivi temps réel",
        "Alertes géofencing",
        "Historique trajets",
        "Application mobile",
      ],
      href: "/services/installation-gps",
      slug: "installation-gps",
    },
    {
      icon: Camera,
      title: "Installation Caméra de surveillance IP",
      description:
        "Solutions de vidéosurveillance IP haute définition pour sécurité maximale.",
      features: [
        "Caméras 4K",
        "Vision nocturne",
        "Accès distant",
        "Stockage cloud",
      ],
      href: "/services/installation-camera-de-surveillance-ip",
      slug: "installation-camera-de-surveillance-ip",
    },
    {
      icon: Gauge,
      title: "Installation Capteur de mouvement",
      description:
        "Détecteurs de mouvement intelligents pour sécurité et automatisation.",
      features: [
        "Détection précise",
        "Intégration domotique",
        "Alertes instantanées",
        "Économie d'énergie",
      ],
      href: "/services/installation-capteur-de-mouvement",
      slug: "installation-capteur-de-mouvement",
    },
    {
      icon: Monitor,
      title: "Installation Système Windows",
      description:
        "Installation et configuration experte de systèmes d'exploitation Windows.",
      features: [
        "Windows 11 Pro",
        "Optimisation système",
        "Sécurité renforcée",
        "Migration données",
      ],
      href: "/services/installation-systeme-windows",
      slug: "installation-systeme-windows",
    },
    // ✅ NOUVEAU BLOC AJOUTÉ ICI
    {
      icon: Wrench,
      title: "Maintenance Informatique",
      description:
        "Service complet de maintenance matérielle et logicielle pour assurer la continuité de vos opérations.",
      features: [
        "Diagnostic et réparation rapide",
        "Maintenance préventive",
        "Nettoyage système et antivirus",
        "Assistance à distance ou sur site",
      ],
      href: "/services/maintenance-informatique",
      slug: "maintenance-informatique",
    },
    {
      icon: Wifi,
      title: "Installation MikroTik & antenne réseau",
      description:
        "Solutions réseau sans fil longue portée de 1 à 10 kilomètres.",
      features: [
        "Portée 10km",
        "Haut débit",
        "Configuration avancée",
        "Monitoring réseau",
      ],
      href: "/services/installation-mikrotik-antenne-reseau",
      slug: "installation-mikrotik-antenne-reseau",
    },
    {
      icon: Code,
      title: "Développement Web",
      description:
        "Création de sites web et applications sur mesure adaptés à vos besoins.",
      features: [
        "Design responsive",
        "SEO optimisé",
        "E-commerce",
        "Maintenance incluse",
      ],
      href: "/services/developpement-web",
      slug: "developpement-web",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section
        className="relative pt-20 pb-16 bg-cover bg-center"
        style={{
          backgroundImage:
            "linear-gradient(rgba(11, 11, 11, 0.7), rgba(255, 212, 0, 0.2)), url('https://ext.same-assets.com/2339639548/835900000.false')",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Nos <span className="text-[#FFD400]">Services</span> Techniques
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Solutions complètes pour vos besoins en réseau, sécurité et
            technologie. Expertise professionnelle et support 24/7.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-14 h-14 bg-[#FFD400]/10 rounded-xl flex items-center justify-center mb-4">
                  <service.icon className="w-7 h-7 text-[#FFD400]" />
                </div>
                <h3 className="text-xl font-bold text-[#0B0B0B] mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  {service.description}
                </p>

                <ul className="space-y-1.5 mb-5">
                  {service.features.map((feature, i) => (
                    <li
                      key={i}
                      className="flex items-center text-gray-700 text-sm leading-snug"
                    >
                      <div className="w-1.5 h-1.5 bg-[#FFD400] rounded-full mr-2"></div>
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="flex gap-2">
                  <Link href={service.href} className="flex-1">
                    <button className="w-full bg-[#FFD400] text-[#0B0B0B] px-4 py-2.5 rounded-lg font-semibold hover:bg-[#FFD400]/90 transition-all text-sm">
                      Voir détails
                    </button>
                  </Link>
                  <Link href="/devis" className="flex-1">
                    <button className="w-full border-2 border-[#FFD400] text-[#FFD400] px-4 py-2.5 rounded-lg font-semibold hover:bg-[#FFD400] hover:text-[#0B0B0B] transition-all text-sm">
                      Devis gratuit
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#0B0B0B]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Besoin d'une solution{" "}
            <span className="text-[#FFD400]">sur mesure</span> ?
          </h2>
          <p className="text-lg text-white/80 mb-8">
            Contactez nos experts pour une consultation gratuite et un devis
            personnalisé
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <button className="bg-[#FFD400] text-[#0B0B0B] px-8 py-3 rounded-lg font-semibold hover:bg-[#FFD400]/90 transition-all">
                Nous contacter
              </button>
            </Link>
            <a href="tel:+24206940139">
              <button className="border-2 border-[#FFD400] text-[#FFD400] px-8 py-3 rounded-lg font-semibold hover:bg-[#FFD400] hover:text-[#0B0B0B] transition-all">
                +242 06 940 13 92
              </button>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
