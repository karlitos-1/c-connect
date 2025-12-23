"use client";

import React, { useEffect } from "react";
import { MessageCircle } from "lucide-react";

export default function VoiceAssistant() {
  useEffect(() => {
    // Charger le script de Tawk.to
    const script = document.createElement("script");
    script.src = "https://embed.tawk.to/694a7323d49119197b53b520/1jd5d3gmm";
    script.async = true;
    script.charset = "UTF-8";
    script.setAttribute("crossorigin", "*");
    
    const firstScript = document.getElementsByTagName("script")[0];
    firstScript.parentNode.insertBefore(script, firstScript);

    return () => {
      // Nettoyer le script Tawk.to si le composant est démonté
      if (script && document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <>
      {/* Fallback button in case Tawk.to doesn't load */}
      <div className="fixed bottom-6 right-6 z-50">
        <button className="bg-[#0B0B0B] text-white px-4 py-3 rounded-2xl shadow-xl hover:scale-105 hover:-translate-y-1 hover:shadow-2xl transition-all duration-300 flex items-center gap-2">
          <MessageCircle className="w-5 h-5" />
          <span className="text-sm font-medium">Discuter avec nous</span>
        </button>
      </div>
    </>
  );
}
