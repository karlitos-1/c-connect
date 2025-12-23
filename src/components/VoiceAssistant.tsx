"use client";

import { useEffect } from "react";

export default function VoiceAssistant() {
  useEffect(() => {
    if (typeof document === "undefined") return;

    // Évite de charger le script plusieurs fois
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

  // Rien à afficher : Tawk.to gère sa propre bulle
  return null;
}
