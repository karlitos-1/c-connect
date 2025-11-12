import { Check } from "lucide-react";
import Link from "next/link";

export default function ForfaitsPage() {
  const forfaits = [
    {
      name: "Essentiel",
      description: "Parfait pour les petites entreprises",
      price: "150 000",
      currency: "FCFA/mois",
      features: [
        "Administration réseau basique",
        "Support technique 8h-17h",
        "Maintenance préventive mensuelle",
        "Installation système Windows",
        "Configuration réseau simple",
      ],
      highlighted: false,
    },
    {
      name: "Pro",
      description: "Idéal pour les entreprises en croissance",
      price: "350 000",
      currency: "FCFA/mois",
      features: [
        "Administration réseau avancée",
        "Support technique 24/7",
        "Maintenance préventive hebdomadaire",
        "Installation serveur",
        "Installation interphone",
        "Système de surveillance IP",
        "Configuration MikroTik",
        "Sauvegarde automatique",
      ],
      highlighted: true,
      badge: "Plus populaire",
    },
    {
      name: "Entreprise",
      description: "Solution complète pour grandes entreprises",
      price: "Sur mesure",
      currency: "",
      features: [
        "Infrastructure réseau complète",
        "Support dédié 24/7/365",
        "Maintenance préventive continue",
        "Tous nos services inclus",
        "Développement web personnalisé",
        "Formation équipe technique",
        "Audit sécurité trimestriel",
      ],
      highlighted: false,
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-[#0B0B0B] via-[#0B0B0B] to-gray-900">
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B0B0B]/80 to-[#0B0B0B]/60"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-12">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Forfaits & <span className="text-[#FFD400]">Tarifs</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Choisissez la solution qui correspond à vos besoins. Des forfaits
            flexibles pour accompagner votre croissance.
          </p>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="relative py-20">
        <div className="absolute inset-0 bg-white/80"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0B0B0B] mb-4">
              Comparez nos offres
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Des solutions adaptées à chaque taille d'entreprise, avec un
              support technique de qualité.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {forfaits.map((forfait, index) => (
              <div
                key={index}
                className={`relative bg-white rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:scale-105 ${
                  forfait.highlighted
                    ? "border-2 border-[#FFD400] ring-2 ring-[#FFD400]/20"
                    : "border-2 border-gray-200"
                }`}
              >
                {forfait.badge && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-[#FFD400] text-[#0B0B0B] px-4 py-2 rounded-full text-sm font-bold">
                      {forfait.badge}
                    </span>
                  </div>
                )}

                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-[#0B0B0B] mb-2">
                    {forfait.name}
                  </h3>
                  <p className="text-gray-600 mb-4">{forfait.description}</p>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-[#0B0B0B]">
                      {forfait.price}
                    </span>
                    {forfait.currency && (
                      <span className="text-gray-600 ml-2">
                        {forfait.currency}
                      </span>
                    )}
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {forfait.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start space-x-3">
                      <Check className="w-5 h-5 text-[#FFD400] flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link href="/devis" className="block">
                  <button
                    className={`w-full px-6 py-3 rounded-lg font-semibold transition-all ${
                      forfait.highlighted
                        ? "bg-[#FFD400] text-[#0B0B0B] hover:bg-[#FFD400]/90 hover:scale-105"
                        : "border-2 border-[#FFD400] text-[#FFD400] hover:bg-[#FFD400] hover:text-[#0B0B0B]"
                    }`}
                  >
                    {forfait.name === "Entreprise"
                      ? "Nous contacter"
                      : "Choisir ce forfait"}
                  </button>
                </Link>
              </div>
            ))}
          </div>

          {/* Custom Solution */}
          <div className="mt-16 text-center">
            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-[#0B0B0B] mb-4">
                Besoin d'une solution personnalisée ?
              </h3>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                Nos experts analysent vos besoins spécifiques et créent une
                solution sur mesure pour votre entreprise.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <button className="bg-[#0B0B0B] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#0B0B0B]/90 transition-all">
                    Nous appeler
                  </button>
                </Link>
                <Link href="/devis">
                  <button className="bg-[#FFD400] text-[#0B0B0B] px-6 py-3 rounded-lg font-semibold hover:bg-[#FFD400]/90 transition-all">
                    Demander un devis
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
