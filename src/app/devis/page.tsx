"use client";

import { Clock, Send, Shield, Users } from "lucide-react";
import { useState } from "react";

export default function DevisPage() {
  const [formData, setFormData] = useState({
    prenom: "",
    nom: "",
    entreprise: "",
    email: "",
    telephone: "",
    ville: "",
    service: "",
    description: "",
    date: "",
    rgpd: false,
  });

  const services = [
    "Administration Réseau et Système",
    "Installation Serveur et Interphone",
    "Installation GPS (voiture & moto)",
    "Installation Caméra de surveillance IP",
    "Installation Capteur de mouvement",
    "Installation Système d'exploitation Windows",
    "Installation MikroTik & antenne réseau (1-10 km)",
    "Développement Web",
    "Maintenance Informatique",
    "Autres",
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.rgpd) {
      alert("Veuillez accepter la politique de confidentialité");
      return;
    }
    console.log("Devis submitted:", formData);
    alert(
      "Votre demande de devis a été envoyée avec succès ! Nous vous répondrons sous 24h."
    );
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section
        className="relative pt-32 pb-20 bg-cover bg-center"
        style={{
          backgroundImage:
            'linear-gradient(rgba(11, 11, 11, 0.8), rgba(255, 212, 0, 0.2)), url("https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1920&h=600&fit=crop")',
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Demande de <span className="text-[#FFD400]">Devis Gratuit</span>
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Obtenez un devis personnalisé pour vos projets techniques. Réponse
            garantie sous 24h.
          </p>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-[#0B0B0B] mb-4">
                Formulaire de demande de devis
              </h2>
              <p className="text-gray-600">
                Remplissez ce formulaire pour recevoir un devis détaillé et
                personnalisé
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="prenom"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Prénom *
                  </label>
                  <input
                    type="text"
                    id="prenom"
                    required
                    value={formData.prenom}
                    onChange={(e) =>
                      setFormData({ ...formData, prenom: e.target.value })
                    }
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FFD400] focus:border-transparent"
                    placeholder="Votre prénom"
                  />
                </div>
                <div>
                  <label
                    htmlFor="nom"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Nom *
                  </label>
                  <input
                    type="text"
                    id="nom"
                    required
                    value={formData.nom}
                    onChange={(e) =>
                      setFormData({ ...formData, nom: e.target.value })
                    }
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FFD400] focus:border-transparent"
                    placeholder="Votre nom"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="entreprise"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Entreprise
                </label>
                <input
                  type="text"
                  id="entreprise"
                  value={formData.entreprise}
                  onChange={(e) =>
                    setFormData({ ...formData, entreprise: e.target.value })
                  }
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FFD400] focus:border-transparent"
                  placeholder="Nom de votre entreprise"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FFD400] focus:border-transparent"
                    placeholder="votre@email.com"
                  />
                </div>
                <div>
                  <label
                    htmlFor="telephone"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Téléphone *
                  </label>
                  <input
                    type="tel"
                    id="telephone"
                    required
                    value={formData.telephone}
                    onChange={(e) =>
                      setFormData({ ...formData, telephone: e.target.value })
                    }
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FFD400] focus:border-transparent"
                    placeholder="+242 XX XXX XX XX"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="ville"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Ville / Quartier *
                </label>
                <input
                  type="text"
                  id="ville"
                  required
                  value={formData.ville}
                  onChange={(e) =>
                    setFormData({ ...formData, ville: e.target.value })
                  }
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FFD400] focus:border-transparent"
                  placeholder="Votre ville ou quartier"
                />
              </div>

              <div>
                <label
                  htmlFor="service"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Service souhaité *
                </label>
                <select
                  id="service"
                  required
                  value={formData.service}
                  onChange={(e) =>
                    setFormData({ ...formData, service: e.target.value })
                  }
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FFD400] focus:border-transparent"
                >
                  <option value="">Sélectionnez un service</option>
                  {services.map((service, index) => (
                    <option key={index} value={service}>
                      {service}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label
                  htmlFor="description"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Description du projet *
                </label>
                <textarea
                  id="description"
                  required
                  value={formData.description}
                  onChange={(e) =>
                    setFormData({ ...formData, description: e.target.value })
                  }
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FFD400] focus:border-transparent resize-none"
                  placeholder="Décrivez votre projet, vos besoins spécifiques, le nombre d'équipements souhaités... (500 caractères max)"
                  maxLength={500}
                ></textarea>
                <p className="text-xs text-gray-500 mt-1">
                  Maximum 500 caractères
                </p>
              </div>

              <div>
                <label
                  htmlFor="date"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Date souhaitée d'intervention
                </label>
                <input
                  type="date"
                  id="date"
                  value={formData.date}
                  onChange={(e) =>
                    setFormData({ ...formData, date: e.target.value })
                  }
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FFD400] focus:border-transparent"
                />
              </div>

              <div>
                <label
                  htmlFor="fichiers"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Fichiers / Photos (optionnel)
                </label>
                <div className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm text-gray-500">
                  Non collectables - Veuillez envoyer vos fichiers par email à
                  contact@c-connect.site
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <input
                  type="checkbox"
                  id="rgpd"
                  required
                  checked={formData.rgpd}
                  onChange={(e) =>
                    setFormData({ ...formData, rgpd: e.target.checked })
                  }
                  className="mt-1 w-4 h-4 text-[#FFD400] border-gray-300 rounded focus:ring-[#FFD400]"
                />
                <label htmlFor="rgpd" className="text-sm text-gray-600">
                  J'accepte que mes données personnelles soient utilisées pour
                  traiter ma demande de devis. Ces données ne seront pas
                  transmises à des tiers et seront supprimées après traitement
                  de la demande. *
                </label>
              </div>

              <div className="pt-4">
                <button
                  type="submit"
                  className="w-full bg-[#FFD400] text-[#0B0B0B] px-8 py-4 rounded-xl text-lg font-semibold hover:bg-[#FFD400]/90 transition-all flex items-center justify-center gap-2"
                >
                  <Send className="w-5 h-5" />
                  Envoyer la demande de devis
                </button>
              </div>
            </form>
          </div>

          {/* Benefits */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-[#FFD400]/5 rounded-xl border border-[#FFD400]/20">
              <div className="w-12 h-12 bg-[#FFD400] rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-6 h-6 text-[#0B0B0B]" />
              </div>
              <h3 className="font-semibold text-[#0B0B0B] mb-2">
                Réponse rapide
              </h3>
              <p className="text-sm text-gray-600">
                Devis personnalisé sous 24h
              </p>
            </div>
            <div className="text-center p-6 bg-[#FFD400]/5 rounded-xl border border-[#FFD400]/20">
              <div className="w-12 h-12 bg-[#FFD400] rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-6 h-6 text-[#0B0B0B]" />
              </div>
              <h3 className="font-semibold text-[#0B0B0B] mb-2">
                Sans engagement
              </h3>
              <p className="text-sm text-gray-600">
                Devis gratuit et sans obligation
              </p>
            </div>
            <div className="text-center p-6 bg-[#FFD400]/5 rounded-xl border border-[#FFD400]/20">
              <div className="w-12 h-12 bg-[#FFD400] rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-6 h-6 text-[#0B0B0B]" />
              </div>
              <h3 className="font-semibold text-[#0B0B0B] mb-2">Expertise</h3>
              <p className="text-sm text-gray-600">
                Conseils d'experts techniques
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
