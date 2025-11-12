import {
  Activity,
  ArrowRight,
  Camera,
  Code,
  FileText,
  MapPin,
  Monitor,
  Phone,
  Server,
  Wifi,
} from "lucide-react";
import Link from "next/link";

export default function Home() {
  const services = [
    {
      icon: Server,
      title: "Administration Réseau et Système",
      description:
        "Gestion complète de votre infrastructure réseau et système informatique.",
      href: "/services/administration-reseau-et-systeme",
    },
    {
      icon: Server,
      title: "Installation Serveur et Interphone",
      description:
        "Installation et configuration de serveurs et systèmes d'interphonie.",
      href: "/services/installation-serveur-et-interphone",
    },
    {
      icon: MapPin,
      title: "Installation GPS",
      description: "Systèmes de géolocalisation pour véhicules et motos.",
      href: "/services/installation-gps",
    },
    {
      icon: Camera,
      title: "Installation Caméra de surveillance IP",
      description: "Solutions de vidéosurveillance IP haute définition.",
      href: "/services/installation-camera-de-surveillance-ip",
    },
    {
      icon: Activity,
      title: "Installation Capteur de mouvement",
      description: "Détecteurs de mouvement pour sécurité optimale.",
      href: "/services/installation-capteur-de-mouvement",
    },
    {
      icon: Monitor,
      title: "Installation Système Windows",
      description:
        "Installation et configuration de systèmes d'exploitation Windows.",
      href: "/services/installation-systeme-windows",
    },
    {
      icon: Wifi,
      title: "Installation MikroTik & antenne réseau",
      description: "Solutions réseau longue portée de 1 à 10 km.",
      href: "/services/installation-mikrotik-antenne-reseau",
    },
    {
      icon: Code,
      title: "Développement Web",
      description: "Création de sites web et applications sur mesure.",
      href: "/services/developpement-web",
    },
  ];

  const stats = [
    { value: "500+", label: "Projets réalisés" },
    { value: "24/7", label: "Support technique" },
    { value: "+10km", label: "Portée réseau" },
    { value: "100%", label: "Satisfaction client" },
  ];

  const testimonials = [
    {
      quote:
        "C-CONNECT a transformé notre infrastructure réseau. Service professionnel et réactif.",
      author: "Celestin BK.",
      company: "TechCorp SARL",
    },
    {
      quote:
        "Installation GPS impeccable sur toute notre flotte. Suivi en temps réel parfait.",
      author: "Ircel BV.",
      company: "Logistics Plus",
    },
    {
      quote:
        "Système de surveillance IP installé rapidement. Qualité d'image exceptionnelle.",
      author: "Fridolin CZ.",
      company: "Secure Business",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section
        className="relative pt-32 pb-20 bg-cover bg-center"
        style={{
          backgroundImage:
            'linear-gradient(rgba(11, 11, 11, 0.8), rgba(255, 212, 0, 0.2)), url("https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1920&h=1080&fit=crop")',
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Connecter. <span className="text-[#FFD400]">Sécuriser.</span>{" "}
            Optimiser.
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
            Solutions réseau & technologie pour entreprises. Expertise
            technique, sécurité avancée et support 24/7.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/devis">
              <button className="bg-[#FFD400] text-[#0B0B0B] px-8 py-4 rounded-xl text-lg font-semibold hover:bg-[#FFD400]/90 hover:scale-105 transition-all flex items-center justify-center gap-2">
                <FileText className="w-5 h-5" />
                Demander un devis gratuit
              </button>
            </Link>
            <a href="tel:+24206940139">
              <button className="border-2 border-white text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-white hover:text-[#0B0B0B] transition-all flex items-center justify-center gap-2">
                <Phone className="w-5 h-5" />
                +242 06 940 13 92
              </button>
            </a>
          </div>
          <div className="mt-8 flex items-center justify-center gap-6 text-white/80 text-sm">
            <span>✓ Intervention rapide</span>
            <span>✓ Devis gratuit</span>
            <span>✓ Support 24/7</span>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0B0B0B] mb-4">
              Nos <span className="text-[#FFD400]">Services</span> Techniques
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Solutions complètes pour vos besoins en réseau, sécurité et
              technologie
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Link
                  key={index}
                  href={service.href}
                  className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-all duration-300 hover:scale-105 border border-gray-100"
                >
                  <div className="w-12 h-12 bg-[#FFD400]/10 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-[#FFD400]" />
                  </div>
                  <h3 className="text-lg font-semibold text-[#0B0B0B] mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    {service.description}
                  </p>
                  <div className="flex items-center text-[#FFD400] font-medium text-sm">
                    En savoir plus <ArrowRight className="w-4 h-4 ml-2" />
                  </div>
                </Link>
              );
            })}
          </div>

          <div className="text-center mt-12">
            <Link href="/services">
              <button className="border-2 border-[#FFD400] text-[#FFD400] px-8 py-4 rounded-xl text-lg font-semibold hover:bg-[#FFD400] hover:text-[#0B0B0B] transition-all">
                Voir tous nos services
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-[#0B0B0B]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-[#FFD400] mb-2">
                  {stat.value}
                </div>
                <div className="text-white/80">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0B0B0B] mb-4">
              Ce que disent nos <span className="text-[#FFD400]">clients</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-[#FFD400] text-xl">
                      ★
                    </span>
                  ))}
                </div>
                <p className="text-gray-600 italic mb-6">
                  "{testimonial.quote}"
                </p>
                <div>
                  <div className="font-semibold text-[#0B0B0B]">
                    {testimonial.author}
                  </div>
                  <div className="text-gray-500 text-sm">
                    {testimonial.company}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#FFD400]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0B0B0B] mb-6">
            Prêt à optimiser votre infrastructure ?
          </h2>
          <p className="text-xl text-[#0B0B0B]/80 mb-8">
            Contactez-nous dès aujourd'hui pour un devis personnalisé et gratuit
          </p>
          <Link href="/devis">
            <button className="bg-[#0B0B0B] text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-[#0B0B0B]/90 hover:scale-105 transition-all">
              Obtenir un devis
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
}
