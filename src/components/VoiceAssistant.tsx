"use client";

import { MessageCircle } from "lucide-react";
import React, { useEffect } from "react";

export default function VoiceAssistant() {
  useEffect(() => {
    // Load the VAPI widget script
    const script = document.createElement("script");
    script.src =
      "https://cdn.jsdelivr.net/gh/VapiAI/html-script-tag@latest/dist/assets/index.js";
    script.defer = true;
    document.body.appendChild(script);

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <>
      {React.createElement("vapi-widget", {
        "assistant-id": "70603f51-b394-4220-b268-d406f6e5b8bc",
        "public-key": "3f316145-e21e-4681-9bf0-7479538e1e33",
        mode: "hybrid",
        "voice-show-transcript": "true",
        theme: "light",
        size: "compact",
        "accent-color": "#FFD400",
        "button-base-color": "#0B0B0B",
        "button-accent-color": "#FFFFFF",
        "main-label": "Parlez avec C-CONNECT",
        "start-button-text": "Démarrer",
        "end-button-text": "Terminer l'appel",
        "cta-title": "Talk with Us",
        title: "Talk with Us",
      })}

      {/* Fallback button in case VAPI doesn't load */}
      <div className="fixed bottom-6 right-6 z-50">
        <button className="bg-[#0B0B0B] text-white px-4 py-3 rounded-2xl shadow-xl hover:scale-105 hover:-translate-y-1 hover:shadow-2xl transition-all duration-300 flex items-center gap-2">
          <MessageCircle className="w-5 h-5" />
          <span className="text-sm font-medium">Discuter avec nous</span>
        </button>
      </div>
    </>
  );
}
