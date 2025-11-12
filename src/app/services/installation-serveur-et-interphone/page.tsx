import {
  FileText,
  Phone,
  Server,
  Settings,
  Shield,
  Wrench,
} from "lucide-react";
import Link from "next/link";

export default function InstallationServeurInterphone() {
  const features = [
    { icon: Server, text: "Serveurs haute performance" },
    { icon: Phone, text: "Interphone IP moderne" },
    { icon: Settings, text: "Configuration sécurisée" },
    { icon: Wrench, text: "Formation incluse" },
    { icon: Shield, text: "Maintenance et support" },
  ];

  const prestations = [
    "Installation serveurs physiques et virtuels",
    "Configuration systèmes IP et réseau",
    "Intégrations solutions interphone",
    "Support technique permanent",
    "Mises à jour et documentation",
  ];

  const faqs = [
    {
      question: "Quels types de serveurs installez-vous ?",
      answer:
        "Nous installons différents types de serveurs : serveurs dédiés, NAS, serveurs web, serveurs de base de données, solutions de messagerie et serveurs virtualisés selon vos besoins spécifiques.",
    },
    {
      question: "L’interphone IP est-il compatible avec les anciens systèmes ?",
      answer:
        "Oui, nos solutions IP peuvent être déployées progressivement pour l’intégration avec les systèmes existants tout en assurant une migration fluide vers la téléphonie et la vidéo IP de dernière génération.",
    },
    {
      question: "Proposez-vous une formation après installation ?",
      answer:
        "Absolument ! Nous incluons une formation complète pour vos équipes sur l’utilisation et la gestion des systèmes installés, ainsi qu’une assistance dédiée post-installation.",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section
        className="relative pt-20 pb-16 bg-cover bg-center"
        style={{
          backgroundImage:
            "linear-gradient(rgba(11,11,11,0.7), rgba(255,212,0,0.2)), url('/images/services/installation-serveur-et-interphone.jpg')",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Installation <span className="text-[#FFD400]">Serveur</span> et{" "}
              <span className="text-[#FFD400]">Interphone</span>
            </h1>
            <p className="text-xl text-white/90 leading-relaxed">
              Installation et configuration professionnelles de serveurs haute
              performance et systèmes d’interphonie modernes. Nos experts
              assurent une mise en place optimale de votre infrastructure
              serveur et de vos solutions de communication IP pour une
              efficacité maximale.
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
                Solutions serveur et interphone
              </h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Nous proposons des solutions complètes d’installation de
                serveurs et d’interphones adaptés à vos besoins. De la
                conception à la mise en service, notre équipe technique assure
                une installation professionnelle avec configuration optimisée et
                sécurité de vos locaux.
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
                Nos prestations
              </h3>
              <ul className="space-y-3">
                {prestations.map((item, i) => (
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
            Prêt pour une installation{" "}
            <span className="text-[#FFD400]">professionnelle</span> ?
          </h2>
          <p className="text-xl text-white/80 mb-8">
            Contactez-nous pour étudier votre projet d’installation
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
