import {
  FileText,
  Phone,
  Search,
  ShoppingCart,
  Smartphone,
  Wrench,
  Zap,
} from "lucide-react";
import Link from "next/link";

export default function DeveloppementWeb() {
  const features = [
    { icon: Smartphone, text: "Design responsive" },
    { icon: Search, text: "SEO optimisé" },
    { icon: ShoppingCart, text: "E-commerce intégré" },
    { icon: Wrench, text: "Maintenance incluse" },
    { icon: Zap, text: "Performance optimale" },
  ];

  const faqs = [
    {
      question: "Quels types de sites web développez-vous ?",
      answer:
        "Nous développons tous types de sites : sites vitrine, e-commerce, applications web, portails d'entreprise, blogs et sites sur mesure selon vos besoins spécifiques.",
    },
    {
      question: "Le site sera-t-il optimisé pour mobile ?",
      answer:
        "Absolument ! Tous nos sites sont développés en responsive design et optimisés pour tous les appareils : smartphones, tablettes et ordinateurs avec une expérience utilisateur parfaite.",
    },
    {
      question: "Proposez-vous la maintenance après livraison ?",
      answer:
        "Oui, nous incluons 3 mois de maintenance gratuite puis proposons des contrats de maintenance avec mises à jour, sauvegardes et support technique continu.",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section
        className="relative pt-20 pb-16 bg-cover bg-center"
        style={{
          backgroundImage:
            "linear-gradient(rgba(11, 11, 11, 0.7), rgba(255, 212, 0, 0.2)), url('https://ext.same-assets.com/2339639548/485393206.false')",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              <span className="text-[#FFD400]">Développement Web</span> sur
              mesure
            </h1>
            <p className="text-xl text-white/90 leading-relaxed">
              Création de sites web et applications sur mesure adaptés à vos
              besoins professionnels. Nos développeurs experts conçoivent des
              solutions web modernes, responsives et optimisées pour offrir une
              expérience utilisateur exceptionnelle et booster votre présence en
              ligne.
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
                Solutions web professionnelles
              </h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Notre équipe de développeurs crée des sites web modernes et
                performants adaptés à vos objectifs business. De la conception à
                la mise en ligne, nous vous accompagnons pour développer une
                présence web forte et efficace qui convertit vos visiteurs en
                clients.
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
                Technologies utilisées
              </h3>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-700">
                  <div className="w-2 h-2 bg-[#FFD400] rounded-full mr-3"></div>
                  HTML5, CSS3, JavaScript moderne
                </li>
                <li className="flex items-center text-gray-700">
                  <div className="w-2 h-2 bg-[#FFD400] rounded-full mr-3"></div>
                  React, Vue.js, Angular
                </li>
                <li className="flex items-center text-gray-700">
                  <div className="w-2 h-2 bg-[#FFD400] rounded-full mr-3"></div>
                  WordPress, Drupal, CMS custom
                </li>
                <li className="flex items-center text-gray-700">
                  <div className="w-2 h-2 bg-[#FFD400] rounded-full mr-3"></div>
                  E-commerce WooCommerce, Shopify
                </li>
                <li className="flex items-center text-gray-700">
                  <div className="w-2 h-2 bg-[#FFD400] rounded-full mr-3"></div>
                  Optimisation SEO et performance
                </li>
                <li className="flex items-center text-gray-700">
                  <div className="w-2 h-2 bg-[#FFD400] rounded-full mr-3"></div>
                  Hébergement et nom de domaine
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
            Prêt à lancer votre{" "}
            <span className="text-[#FFD400]">projet web</span> ?
          </h2>
          <p className="text-xl text-white/80 mb-8">
            Discutons de vos besoins et créons ensemble votre site web
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
