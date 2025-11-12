import {
  FileText,
  HardDrive,
  Monitor,
  Phone,
  RefreshCcw,
  Shield,
  Wrench,
} from "lucide-react";
import Link from "next/link";

export default function InstallationSystemeWindows() {
  const features = [
    { icon: Monitor, text: "Windows 11 Pro certifié" },
    { icon: RefreshCcw, text: "Optimisation système" },
    { icon: HardDrive, text: "Migration de données" },
    { icon: Shield, text: "Sécurité renforcée" },
    { icon: Wrench, text: "Support post-installation" },
  ];

  const services = [
    "Installation Windows 11 Pro",
    "Configuration utilisateurs et réseaux",
    "Migration dossiers et paramètres",
    "Sécurisation des applications",
    "Optimisation des performances",
    "Formation utilisateur",
  ];

  const faqs = [
    {
      question: "Quelles versions de Windows installez-vous ?",
      answer:
        "Nous installons toutes les versions récentes de Windows : Windows 11 Pro, Windows 10 Pro, Windows Server 2012/2016. Nous recommandons Windows 11 Pro pour les nouveaux équipements.",
    },
    {
      question: "Mes données seront-elles conservées lors de l’installation ?",
      answer:
        "Oui, nous effectuons une sauvegarde complète avant l’installation et la migration des données, applications et configurations vers le nouveau système.",
    },
    {
      question: "Combien de temps prend une installation complète ?",
      answer:
        "Une installation standard prend entre 2 et 4 heures selon la configuration. Pour une migration complète avec transfert de données, comptez une demi-journée au maximum.",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section
        className="relative pt-20 pb-16 bg-cover bg-center"
        style={{
          backgroundImage:
            "linear-gradient(rgba(11,11,11,0.7), rgba(255,212,0,0.2)), url('/images/services/installation-systeme-windows.jpg')",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Installation{" "}
              <span className="text-[#FFD400]">Système Windows</span>
            </h1>
            <p className="text-xl text-white/90 leading-relaxed">
              Installation et configuration experte de systèmes d’exploitation
              Windows. Nos techniciens certifiés assurent une installation
              optimale de Windows 11 Pro avec migration de données, sécurisation
              avancée et optimisation des performances pour un système stable et
              performant.
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
                Installation Windows professionnelle
              </h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Notre service d’installation Windows est rapide, optimisé,
                sécurisé et performant. De l’installation propre à la migration
                des données, nos experts certifiés vous garantissent un système
                Windows stable et fluide parfaitement adapté à vos besoins
                professionnels.
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
                Services inclus
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
            Besoin d’une installation{" "}
            <span className="text-[#FFD400]">Windows</span> ?
          </h2>
          <p className="text-xl text-white/80 mb-8">
            Installation professionnelle et optimisation garantie
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
                <span>+242 06 940 1392</span>
              </button>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
