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

export default function MaintenanceInformatique() {
  const features = [
    { icon: Wrench, text: "Maintenance préventive et curative" },
    { icon: Monitor, text: "Optimisation des performances système" },
    { icon: Shield, text: "Protection antivirus et sécurité réseau" },
    { icon: RefreshCcw, text: "Mises à jour logicielles et correctifs" },
    { icon: HardDrive, text: "Sauvegarde et récupération de données" },
  ];

  const services = [
    "Diagnostic complet matériel et logiciel",
    "Nettoyage, optimisation et suppression de virus",
    "Réinstallation système et pilotes",
    "Maintenance réseau et serveurs",
    "Surveillance proactive et rapports d’état",
    "Assistance à distance et sur site",
  ];

  const faqs = [
    {
      question:
        "Quelle est la différence entre maintenance préventive et curative ?",
      answer:
        "La maintenance préventive vise à éviter les pannes en anticipant les problèmes, tandis que la maintenance curative intervient après une panne pour réparer ou restaurer le système.",
    },
    {
      question: "Proposez-vous des contrats de maintenance mensuels ?",
      answer:
        "Oui, nous proposons des contrats de maintenance régulière pour particuliers et entreprises, incluant le suivi, les mises à jour, et une assistance prioritaire en cas de problème.",
    },
    {
      question: "Puis-je bénéficier d'une assistance à distance ?",
      answer:
        "Absolument. Nos techniciens peuvent intervenir rapidement à distance pour diagnostiquer et résoudre la plupart des problèmes logiciels sans déplacement.",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section
        className="relative pt-20 pb-16 bg-cover bg-center"
        style={{
          backgroundImage:
            "linear-gradient(rgba(11,11,11,0.7), rgba(255,212,0,0.2)), url('/images/services/maintenance.jpg')",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Maintenance <span className="text-[#FFD400]">informatique</span>
            </h1>
            <p className="text-xl text-white/90 leading-relaxed">
              Service professionnel de maintenance informatique pour
              particuliers et entreprises. Nous assurons la prévention, la
              réparation et l’optimisation de vos postes, serveurs et réseaux
              pour garantir fiabilité, sécurité et performance au quotidien.
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
                Maintenance informatique professionnelle
              </h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Nos techniciens certifiés assurent la maintenance complète de
                votre infrastructure informatique. Nous intervenons sur les
                postes, serveurs, périphériques et réseaux pour garantir une
                stabilité maximale et réduire les temps d’arrêt. Chaque
                intervention est documentée et accompagnée de recommandations
                personnalisées.
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
            Besoin d’une{" "}
            <span className="text-[#FFD400]">maintenance informatique</span> ?
          </h2>
          <p className="text-xl text-white/80 mb-8">
            Intervention rapide, optimisation et sécurité assurées
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
