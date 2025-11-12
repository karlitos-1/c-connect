import {
  Camera,
  Cloud,
  Eye,
  FileText,
  Phone,
  Shield,
  Smartphone,
} from "lucide-react";
import Link from "next/link";

export default function InstallationCameraSurveillanceIP() {
  const features = [
    { icon: Camera, text: "Caméras 4K Ultra HD" },
    { icon: Eye, text: "Vision nocturne avancée" },
    { icon: Smartphone, text: "Accès distant mobile" },
    { icon: Cloud, text: "Stockage cloud sécurisé" },
    { icon: Shield, text: "Alertes intelligentes" },
  ];

  const specifications = [
    "Résolution Ultra HD (jusqu’à 8MP/4K)",
    "Vision nocturne infrarouge jusqu’à 30 mètres",
    "Détection de mouvement intelligente",
    "Enregistrement en continu ou programmé",
    "Application mobile dédiée iOS/Android",
    "Stockage local et cloud sécurisé",
  ];

  const faqs = [
    {
      question: "Quelle est la qualité d’image des caméras IP ?",
      answer:
        "Nos caméras IP offrent une résolution de 4K Ultra HD, avec vision nocturne jusqu’à 30 mètres. La qualité d’image reste nette même en conditions de faible luminosité.",
    },
    {
      question: "Puis-je accéder aux caméras depuis mon smartphone ?",
      answer:
        "Oui, vous pouvez consulter les flux vidéo en direct et les enregistrements via notre application mobile sécurisée. Vous pouvez également recevoir des alertes en temps réel en cas de détection.",
    },
    {
      question: "Combien de temps dure un enregistrement ?",
      answer:
        "La durée de conservation dépend du volume configuré et du type de stockage. Il est possible d’enregistrer en continu plusieurs jours ou semaines selon la capacité du disque dur ou du cloud.",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section
        className="relative pt-20 pb-16 bg-cover bg-center"
        style={{
          backgroundImage:
            "linear-gradient(rgba(11,11,11,0.7), rgba(255,212,0,0.2)), url('/images/services/installation-camera-de-surveillance-ip.jpg')",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Installation{" "}
              <span className="text-[#FFD400]">Caméra de surveillance IP</span>
            </h1>
            <p className="text-xl text-white/90 leading-relaxed">
              Solutions de vidéosurveillance IP haute définition pour une
              sécurité maximale. Installation professionnelle de systèmes de
              surveillance modernes avec caméras 4K, vision nocturne, accès
              distant et stockage cloud pour protéger efficacement vos biens et
              locaux.
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
                Surveillance IP professionnelle
              </h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Nos solutions de vidéosurveillance IP offrent une protection
                complète avec des caméras haute résolution, des fonctionnalités
                avancées et un accès distant sécurisé. Chaque installation est
                personnalisée selon vos besoins spécifiques pour assurer la
                sécurité optimale de vos locaux.
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
                Caractéristiques techniques
              </h3>
              <ul className="space-y-3">
                {specifications.map((item, i) => (
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
            Sécurisez vos locaux avec nos{" "}
            <span className="text-[#FFD400]">caméras IP</span>
          </h2>
          <p className="text-xl text-white/80 mb-8">
            Installation professionnelle et configuration personnalisée
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
