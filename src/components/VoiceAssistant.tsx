"use client";

import React, { useEffect } from "react";
import { MessageCircle } from "lucide-react";

declare global {
  interface Window {
    Tawk_API?: {
      toggle: () => void;
    };
  }
}

export default function VoiceAssistant() {
  useEffect(() => {
    // Éviter de charger le script plusieurs fois
    if (document.getElementById("tawk-script")) return;

    const script = document.createElement("script");
    script.id = "tawk-script";
    script.src = "https://embed.tawk.to/694a7323d49119197b53b520/1jd5d3gmm";
    script.async = true;
    script.charset = "UTF-8";
    script.setAttribute("crossorigin", "*");

    document.body.appendChild(script);

    return () => {
      script.remove();
    };
  }, []);

  const openChat = () => {
    window.Tawk_API?.toggle();
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <button
        onClick={openChat}
        className="bg-[#0B0B0B] text-white px-4 py-3 rounded-2xl shadow-xl hover:scale-105 hover:-translate-y-1 hover:shadow-2xl transition-all duration-300 flex items-center gap-2"
      >
        <MessageCircle className="w-5 h-5" />
        <span className="text-sm font-medium">Discuter avec nous</span>
      </button>
    </div>
  );
}
