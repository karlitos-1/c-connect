import {
  Activity,
  FileText,
  Home,
  Lightbulb,
  Phone,
  Shield,
  Zap,
} from "lucide-react";
import Link from "next/link";

export default function InstallationCapteurMouvement() {
  const features = [
    { icon: Activity, text: "Détection précise et fiable" },
    { icon: Home, text: "Intégration domotique" },
    { icon: Lightbulb, text: "Alertes automatisées" },
    { icon: Zap, text: "Économie d’énergie" },
    { icon: Shield, text: "Sécurité renforcée" },
  ];

  const applications = [
    "Sécurité périmétrique et intrusion",
    "Automatisation éclairage",
    "Contrôle chauffage/climatisation",
    "Gestion d’accès automatique",
    "Surveillance zones sensibles",
    "Économie d’énergie intelligente",
  ];

  const faqs = [
    {
      question: "Les capteurs de mouvement fonctionnent-ils avec les animaux ?",
      answer:
        "Oui, nos capteurs sont dotés de technologies de filtrage pour ignorer les animaux de moins de 25 kg tout en détectant efficacement les intrusions humaines.",
    },
    {
      question: "Quelle est la portée de détection des capteurs ?",
      answer:
        "Nos capteurs ont une portée de détection jusqu’à 12 mètres avec un angle de 110°. Pour l’extérieur, nous proposons des modèles allant jusqu’à 20 mètres.",
    },
    {
      question: "Les capteurs peuvent-ils être intégrés à la domotique ?",
      answer:
        "Absolument ! Nos capteurs sont compatibles avec les principaux systèmes domotiques (Z-Wave, Zigbee) pour l’automatisation de l’éclairage, chauffage et sécurité.",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section
        className="relative pt-20 pb-16 bg-cover bg-center"
        style={{
          backgroundImage:
            "linear-gradient(rgba(11,11,11,0.7), rgba(255,212,0,0.2)), url('/images/services/installation-capteur-de-mouvement.jpg')",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Installation{" "}
              <span className="text-[#FFD400]">Capteur de mouvement</span>
            </h1>
            <p className="text-xl text-white/90 leading-relaxed">
              Détecteurs de mouvement intelligents pour sécurité et
              automatisation optimale. Installation professionnelle de capteurs
              PIR haute précision avec intégration domotique, alertes
              personnalisées et gestion énergétique pour une protection et un
              confort maximum.
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
                Détection intelligente
              </h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Nos capteurs de mouvement offrent une détection précise et
                fiable pour le confort et l’automatisation de vos espaces.
                Installation professionnelle avec configuration personnalisée
                pour répondre à vos besoins spécifiques en matière de sécurité
                et d’économie d’énergie.
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
                Applications possibles
              </h3>
              <ul className="space-y-3">
                {applications.map((item, i) => (
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
            Optimisez votre sécurité avec nos{" "}
            <span className="text-[#FFD400]">capteurs</span>
          </h2>
          <p className="text-xl text-white/80 mb-8">
            Installation et configuration par nos experts
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
