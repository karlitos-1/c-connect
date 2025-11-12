import {
  AlertCircle,
  Clock,
  FileText,
  MapPin,
  Phone,
  Smartphone,
} from "lucide-react";
import Link from "next/link";

export default function InstallationGPS() {
  const features = [
    { icon: MapPin, text: "Suivi temps réel précis" },
    { icon: AlertCircle, text: "Alertes géofencing" },
    { icon: Clock, text: "Historique des trajets" },
    { icon: Smartphone, text: "Application mobile" },
    { icon: AlertCircle, text: "Alertes anti-vol" },
  ];

  const faqs = [
    {
      question: "Le système GPS fonctionne-t-il sur tous les véhicules ?",
      answer:
        "Oui, nos systèmes GPS sont compatibles avec tous types de véhicules : voitures, motos, camions, bus et véhicules utilitaires. L'installation s'adapte à chaque modèle.",
    },
    {
      question: "Quelle est la précision du suivi GPS ?",
      answer:
        "Nos systèmes offrent une précision de localisation de 3 à 5 mètres en conditions normales, avec mise à jour en temps réel toutes les 10 secondes pour un suivi optimal.",
    },
    {
      question: "Puis-je suivre plusieurs véhicules simultanément ?",
      answer:
        "Absolument ! Notre plateforme permet de gérer et suivre une flotte complète de véhicules depuis une interface unique, avec alertes personnalisées pour chaque véhicule.",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section
        className="relative pt-20 pb-16 bg-cover bg-center"
        style={{
          backgroundImage:
            "linear-gradient(rgba(11, 11, 11, 0.7), rgba(255, 212, 0, 0.2)), url('/images/services/installation-gps.jpg')",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Installation <span className="text-[#FFD400]">GPS</span> Véhicules
            </h1>
            <p className="text-xl text-white/90 leading-relaxed">
              Systèmes de géolocalisation avancés pour véhicules automobiles et
              motocycles. Installation professionnelle de trackers GPS haute
              précision avec suivi en temps réel, alertes personnalisées et
              application mobile pour une sécurité et gestion optimales de votre
              flotte.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-[#0B0B0B] mb-6">
                Géolocalisation professionnelle
              </h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Nos solutions GPS offrent un suivi précis et fiable de vos
                véhicules avec des fonctionnalités avancées de sécurité et de
                gestion. Installation discrète et professionnelle par nos
                techniciens certifiés pour une protection optimale contre le vol
                et une gestion efficace de votre flotte.
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

            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-[#0B0B0B] mb-6">
                Fonctionnalités incluses
              </h3>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-700">
                  <div className="w-2 h-2 bg-[#FFD400] rounded-full mr-3"></div>
                  Localisation en temps réel
                </li>
                <li className="flex items-center text-gray-700">
                  <div className="w-2 h-2 bg-[#FFD400] rounded-full mr-3"></div>
                  Alertes de mouvement et vitesse
                </li>
                <li className="flex items-center text-gray-700">
                  <div className="w-2 h-2 bg-[#FFD400] rounded-full mr-3"></div>
                  Zones géographiques personnalisées
                </li>
                <li className="flex items-center text-gray-700">
                  <div className="w-2 h-2 bg-[#FFD400] rounded-full mr-3"></div>
                  Historique détaillé des trajets
                </li>
                <li className="flex items-center text-gray-700">
                  <div className="w-2 h-2 bg-[#FFD400] rounded-full mr-3"></div>
                  Application mobile iOS/Android
                </li>
                <li className="flex items-center text-gray-700">
                  <div className="w-2 h-2 bg-[#FFD400] rounded-full mr-3"></div>
                  Rapports de conduite et consommation
                </li>
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
      <section className="py-16 bg-[#0B0B0B]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Sécurisez vos véhicules avec notre{" "}
            <span className="text-[#FFD400]">GPS</span>
          </h2>
          <p className="text-xl text-white/80 mb-8">
            Installation rapide et discrète par nos experts
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
