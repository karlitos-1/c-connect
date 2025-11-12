"use client";

import { Clock, Mail, MapPin, MessageCircle, Phone, Send } from "lucide-react";
import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    prenom: "",
    nom: "",
    email: "",
    telephone: "",
    sujet: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
    alert(
      "Merci pour votre message ! Nous vous répondrons dans les plus brefs délais."
    );
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section
        className="relative pt-32 pb-20 bg-cover bg-center"
        style={{
          backgroundImage:
            'linear-gradient(rgba(11, 11, 11, 0.8), rgba(255, 212, 0, 0.2)), url("https://images.unsplash.com/photo-1556761175-4b46a572b786?w=1920&h=600&fit=crop")',
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            <span className="text-[#FFD400]">Contactez</span> nos experts
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Notre équipe technique est disponible 24/7 pour répondre à vos
            questions et vous accompagner dans vos projets.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
              <h2 className="text-2xl font-bold text-[#0B0B0B] mb-6">
                Envoyez-nous un message
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                    Téléphone
                  </label>
                  <input
                    type="tel"
                    id="telephone"
                    value={formData.telephone}
                    onChange={(e) =>
                      setFormData({ ...formData, telephone: e.target.value })
                    }
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FFD400] focus:border-transparent"
                    placeholder="+242 XX XXX XX XX"
                  />
                </div>

                <div>
                  <label
                    htmlFor="sujet"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Sujet *
                  </label>
                  <input
                    type="text"
                    id="sujet"
                    required
                    value={formData.sujet}
                    onChange={(e) =>
                      setFormData({ ...formData, sujet: e.target.value })
                    }
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FFD400] focus:border-transparent"
                    placeholder="Objet de votre demande"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Message *
                  </label>
                  <textarea
                    id="message"
                    required
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FFD400] focus:border-transparent resize-none"
                    placeholder="Décrivez votre projet ou votre demande... (500 caractères max)"
                    maxLength={500}
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#FFD400] text-[#0B0B0B] px-6 py-4 rounded-lg font-semibold hover:bg-[#FFD400]/90 transition-all flex items-center justify-center gap-2"
                >
                  <Send className="w-5 h-5" />
                  Envoyer le message
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-[#0B0B0B] mb-6">
                  Informations de contact
                </h2>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-[#FFD400]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-[#FFD400]" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#0B0B0B] mb-1">
                        Téléphone
                      </h3>
                      <a
                        href="tel:+24206940139"
                        className="text-gray-600 hover:text-[#FFD400] transition-colors"
                      >
                        +242 06 940 13 92
                      </a>
                      <p className="text-sm text-gray-500 mt-1">
                        Disponible 24/7
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-[#FFD400]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-[#FFD400]" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#0B0B0B] mb-1">
                        Email
                      </h3>
                      <a
                        href="mailto:info@c-connect.site"
                        className="text-gray-600 hover:text-[#FFD400] transition-colors"
                      >
                        info@c-connect.site
                      </a>
                      <p className="text-sm text-gray-500 mt-1">
                        Réponse sous 24h
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-[#FFD400]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-[#FFD400]" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#0B0B0B] mb-1">
                        Localisation
                      </h3>
                      <p className="text-gray-600">Pointe-Noire</p>
                      <p className="text-gray-600">République du Congo</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-[#FFD400]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-[#FFD400]" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#0B0B0B] mb-1">
                        Horaires
                      </h3>
                      <p className="text-gray-600">Support technique : 24/7</p>
                      <p className="text-gray-600">Interventions : 7j/7</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="bg-[#FFD400]/5 rounded-xl p-6 border border-[#FFD400]/20">
                <h3 className="text-lg font-semibold text-[#0B0B0B] mb-4">
                  Actions rapides
                </h3>
                <div className="space-y-3">
                  <a
                    href="tel:+24206940139"
                    className="flex items-center justify-between p-3 bg-white rounded-lg hover:shadow-md transition-shadow border border-gray-100"
                  >
                    <div className="flex items-center space-x-3">
                      <Phone className="w-5 h-5 text-[#FFD400]" />
                      <span className="font-medium text-[#0B0B0B]">
                        Appeler maintenant
                      </span>
                    </div>
                  </a>
                  <a
                    href="mailto:info@c-connect.site"
                    className="flex items-center justify-between p-3 bg-white rounded-lg hover:shadow-md transition-shadow border border-gray-100"
                  >
                    <div className="flex items-center space-x-3">
                      <Mail className="w-5 h-5 text-[#FFD400]" />
                      <span className="font-medium text-[#0B0B0B]">
                        Envoyer un email
                      </span>
                    </div>
                  </a>
                  <button className="w-full flex items-center justify-between p-3 bg-white rounded-lg hover:shadow-md transition-shadow border border-gray-100">
                    <div className="flex items-center space-x-3">
                      <MessageCircle className="w-5 h-5 text-[#FFD400]" />
                      <span className="font-medium text-[#0B0B0B]">
                        Chat vocal
                      </span>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-[#0B0B0B] mb-4">
              Notre <span className="text-[#FFD400]">zone d'intervention</span>
            </h2>
            <p className="text-gray-600">
              Nous intervenons dans toute la région de Pointe-Noire et ses
              environs
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
