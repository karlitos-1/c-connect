import { Headphones, Lightbulb, Shield, Users } from "lucide-react";

export default function AProposPage() {
  const valeurs = [
    {
      icon: Shield,
      title: "Fiabilité",
      description:
        "Des solutions techniques éprouvées et un service client irréprochable.",
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description:
        "Adoption des dernières technologies pour des performances optimales.",
    },
    {
      icon: Users,
      title: "Expertise",
      description:
        "Une équipe de techniciens certifiés et expérimentés à votre service.",
    },
    {
      icon: Headphones,
      title: "Support 24/7",
      description:
        "Un accompagnement continu pour garantir la continuité de vos activités.",
    },
  ];

  const timeline = [
    {
      year: "2018",
      title: "Création de C-CONNECT",
      description:
        "Lancement de l'entreprise avec une vision claire : démocratiser l'accès aux technologies réseau.",
      position: "left",
    },
    {
      year: "2019",
      title: "Expansion des services",
      description:
        "Ajout des services de sécurité et surveillance IP pour répondre aux besoins croissants.",
      position: "right",
    },
    {
      year: "2021",
      title: "Certification MikroTik",
      description:
        "Obtention des certifications officielles pour les solutions réseau longue portée.",
      position: "left",
    },
    {
      year: "2023",
      title: "Support 24/7",
      description:
        "Mise en place d'un service de support technique disponible 24h/24 et 7j/7.",
      position: "right",
    },
  ];

  const stats = [
    { value: "24/7", label: "Support technique" },
    { value: "< 2h", label: "Temps de réponse" },
    { value: "100%", label: "Satisfaction client" },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section
        className="relative pt-32 pb-20 bg-cover bg-center"
        style={{
          backgroundImage:
            'linear-gradient(rgba(11, 11, 11, 0.8), rgba(255, 212, 0, 0.2)), url("https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920&h=800&fit=crop")',
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            À propos de <span className="text-[#FFD400]">C-CONNECT</span>
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Votre partenaire de confiance pour toutes vos solutions réseau,
            sécurité et technologie depuis 2018.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-[#0B0B0B] mb-6">
                Notre <span className="text-[#FFD400]">Mission</span>
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Chez C-CONNECT, notre mission est de fournir des solutions
                technologiques innovantes et fiables qui permettent à nos
                clients de se concentrer sur leur cœur de métier. Nous nous
                engageons à offrir un service d'excellence avec un support
                technique disponible 24h/24 et 7j/7.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Nous croyons que la technologie doit être un levier de
                croissance, pas un obstacle. C'est pourquoi nous mettons notre
                expertise au service de votre réussite.
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-[#0B0B0B] mb-6">
                Notre <span className="text-[#FFD400]">Vision</span>
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Devenir le leader régional des solutions réseau et sécurité en
                offrant des services innovants et un accompagnement
                personnalisé. Nous visons l'excellence dans chaque projet pour
                bâtir des relations durables avec nos clients.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Notre vision s'articule autour de trois piliers : innovation
                technologique, service client exceptionnel et croissance
                durable.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Valeurs */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0B0B0B] mb-4">
              Nos <span className="text-[#FFD400]">Valeurs</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Les principes qui guident notre action au quotidien
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {valeurs.map((valeur, index) => {
              const Icon = valeur.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow"
                >
                  <div className="w-16 h-16 bg-[#FFD400]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-[#FFD400]" />
                  </div>
                  <h3 className="text-xl font-semibold text-[#0B0B0B] mb-3">
                    {valeur.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {valeur.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0B0B0B] mb-4">
              Notre <span className="text-[#FFD400]">Histoire</span>
            </h2>
            <p className="text-xl text-gray-600">
              Un parcours marqué par l'innovation et la croissance
            </p>
          </div>
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-[#FFD400]"></div>

            {timeline.map((event, index) => (
              <div
                key={index}
                className={`relative flex items-center mb-12 ${
                  event.position === "left" ? "flex-row" : "flex-row-reverse"
                }`}
              >
                <div
                  className={`w-1/2 ${
                    event.position === "left"
                      ? "pr-8 text-right"
                      : "pl-8 text-left"
                  }`}
                >
                  <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
                    <div className="text-2xl font-bold text-[#FFD400] mb-2">
                      {event.year}
                    </div>
                    <h3 className="text-lg font-semibold text-[#0B0B0B] mb-3">
                      {event.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {event.description}
                    </p>
                  </div>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-[#FFD400] rounded-full border-4 border-white shadow-lg"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Engagement */}
      <section className="py-16 bg-[#0B0B0B]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Notre <span className="text-[#FFD400]">Engagement</span>
          </h2>
          <p className="text-xl text-white/80 mb-8">
            Support technique 24/7, intervention rapide et satisfaction client
            garantie
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold text-[#FFD400] mb-2">
                  {stat.value}
                </div>
                <div className="text-white/80">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
