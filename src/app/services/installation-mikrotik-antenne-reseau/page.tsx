import {
  Activity,
  FileText,
  Phone,
  Radio,
  Settings,
  Shield,
  Wifi,
} from "lucide-react";
import Link from "next/link";

export default function InstallationMikroTikAntenneReseau() {
  const features = [
    { icon: Radio, text: "Portée jusqu’à 10 km" },
    { icon: Wifi, text: "Haut débit garanti" },
    { icon: Settings, text: "Configuration avancée" },
    { icon: Activity, text: "Monitoring réseau" },
    { icon: Shield, text: "Sécurité WPA2" },
  ];

  const services = [
    "Équipements MikroTik professionnels",
    "Antennes directionnelles haut gain",
    "Configuration réseau & sécurité",
    "Sécurisation Wi-Fi et VPN",
    "Surveillance réseau en temps réel",
    "Support technique spécialisé",
  ];

  const faqs = [
    {
      question: "Quelle est la portée maximale des antennes MikroTik ?",
      answer:
        "Les solutions MikroTik permettent d’atteindre de 1 à 10 kilomètres selon les modèles d’antennes et les conditions environnementales. Nous effectuons une étude sur place pour chaque projet.",
    },
    {
      question: "Le débit est-il maintenu sur les longues distances ?",
      answer:
        "Oui, nos équipements MikroTik maintiennent un débit stable à longue distance grâce à l’utilisation d’antennes hautes performances et à une technologie MIMO pour une transmission fiable.",
    },
    {
      question: "Proposez-vous la surveillance du réseau ?",
      answer:
        "Absolument ! Nous incluons des configurations d’outils de monitoring réseau pour surveiller les performances, la disponibilité et diagnostiquer les pannes plus facilement.",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section
        className="relative pt-20 pb-16 bg-cover bg-center"
        style={{
          backgroundImage:
            "linear-gradient(rgba(11,11,11,0.7), rgba(255,212,0,0.2)), url('/images/services/installation-mikrotik-et-antenne-reseau.jpg')",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Installation{" "}
              <span className="text-[#FFD400]">MikroTik & antenne réseau</span>
            </h1>
            <p className="text-xl text-white/90 leading-relaxed">
              Solutions réseau stables à longue portée de 1 à 10 kilomètres avec
              équipements MikroTik. Installation professionnelle d’antennes
              directionnelles haute performance avec configuration avancée pour
              des liaisons réseau fiables et sécurisées sur de grandes
              distances.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left column */}
            <div>
              <h2 className="text-3xl font-bold text-[#0B0B0B] mb-6">
                Réseau longue portée MikroTik
              </h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Nos solutions MikroTik offrent des performances exceptionnelles
                pour les liaisons réseau longue distance avec des équipements
                directionnels et configurations avancées pour des connexions
                stables et sécurisées jusqu’à 10 kilomètres selon le terrain.
              </p>
              <div className="space-y-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-[#FFD400]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <feature.icon className="w-5 h-5 text-[#FFD400]" />
                    </div>
                    <span className="text-[#0B0B0B] font-medium">
                      {feature.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right column */}
            <div className="bg-gray-50 rounded-2xl p-8 shadow-sm">
              <h3 className="text-2xl font-bold text-[#0B0B0B] mb-6">
                Équipements et services
              </h3>
              <ul className="space-y-3">
                {services.map((item, i) => (
                  <li key={i} className="flex items-center text-gray-700">
                    <div className="w-2 h-2 bg-[#FFD400] rounded-full mr-3"></div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#0B0B0B] text-center mb-12">
            Questions <span className="text-[#FFD400]">fréquentes</span>
          </h2>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-lg font-semibold text-[#0B0B0B] mb-3">
                  {faq.question}
                </h3>
                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#0B0B0B] text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Étendez votre réseau avec{" "}
            <span className="text-[#FFD400]">MikroTik</span>
          </h2>
          <p className="text-xl text-white/80 mb-8">
            Installation et configuration par nos experts certifiés
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/devis">
              <button className="bg-[#FFD400] text-[#0B0B0B] px-8 py-4 rounded-xl text-lg font-semibold hover:bg-[#FFD400]/90 transition-all inline-flex items-center space-x-2">
                <FileText className="w-5 h-5" />
                <span>Obtenir un devis</span>
              </button>
            </Link>
            <a href="tel:+242069401392">
              <button className="border-2 border-[#FFD400] text-[#FFD400] px-8 py-4 rounded-xl text-lg font-semibold hover:bg-[#FFD400] hover:text-[#0B0B0B] transition-all inline-flex items-center space-x-2">
                <Phone className="w-5 h-5" />
                <span>+242 06 940 13 92</span>
              </button>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
