import {
  Clock,
  FileText,
  Headset,
  Phone,
  Shield,
  Wrench,
  Zap,
} from "lucide-react";
import Link from "next/link";

export default function AdministrationReseauEtSysteme() {
  const features = [
    { icon: Shield, text: "Sécurité renforcée" },
    { icon: Clock, text: "Surveillance 24/7" },
    { icon: Wrench, text: "Maintenance préventive" },
    { icon: Zap, text: "Optimisation performance" },
    { icon: Headset, text: "Support technique expert" },
  ];

  const services = [
    "Monitoring réseau en temps réel",
    "Gestion des serveurs et équipements",
    "Sauvegardes automatisées",
    "Mise à jour sécurisée des systèmes",
    "Support technique 24/7",
    "Rapports de performance mensuels",
  ];

  const faqs = [
    {
      question: "Qu'inclut l'administration réseau et système ?",
      answer:
        "Notre service inclut la surveillance 24/7, la maintenance préventive, la gestion des sauvegardes, l'optimisation des performances et le support technique complet de votre infrastructure.",
    },
    {
      question: "Quel est le temps de réponse en cas de problème ?",
      answer:
        "Nous garantissons un temps de réponse de moins de 2 heures pour les incidents critiques et moins de 4 heures pour les problèmes non-critiques, 24h/24 et 7j/7.",
    },
    {
      question: "Proposez-vous des contrats de maintenance ?",
      answer:
        "Oui, nous proposons des contrats de maintenance adaptés à vos besoins avec différents niveaux de service : Essentiel, Pro et Entreprise.",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section
        className="relative pt-20 pb-16 bg-cover bg-center"
        style={{
          backgroundImage:
            "linear-gradient(rgba(11, 11, 11, 0.7), rgba(255, 212, 0, 0.2)), url('images/services/administration-reseau-et-systeme.jpg')",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Administration{" "}
              <span className="text-[#FFD400]">Réseau et Système</span>
            </h1>
            <p className="text-xl text-white/90 leading-relaxed">
              Gestion complète et professionnelle de votre infrastructure réseau
              et système informatique. Notre équipe d'experts assure une
              surveillance continue, une maintenance préventive et un support
              technique de qualité pour garantir la performance optimale de vos
              systèmes critiques.
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
                Pourquoi choisir notre service ?
              </h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Notre service d'administration réseau et système vous garantit
                une infrastructure stable, sécurisée et performante. Nous
                prenons en charge la gestion complète de vos équipements réseau,
                serveurs et systèmes pour vous permettre de vous concentrer sur
                votre cœur de métier.
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
                Services inclus
              </h3>
              <ul className="space-y-3">
                {services.map((service, index) => (
                  <li key={index} className="flex items-center text-gray-700">
                    <div className="w-2 h-2 bg-[#FFD400] rounded-full mr-3"></div>
                    {service}
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
      <section className="py-16 bg-[#0B0B0B]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Besoin d'une administration réseau{" "}
            <span className="text-[#FFD400]">professionnelle</span> ?
          </h2>
          <p className="text-xl text-white/80 mb-8">
            Contactez-nous pour un audit gratuit de votre infrastructure
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/devis">
              <button className="bg-[#FFD400] text-[#0B0B0B] px-8 py-4 rounded-xl text-lg font-semibold hover:bg-[#FFD400]/90 transition-all inline-flex items-center space-x-2">
                <FileText className="w-5 h-5" />
                <span>Obtenir un devis</span>
              </button>
            </Link>
            <a href="tel:+24206940139">
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
