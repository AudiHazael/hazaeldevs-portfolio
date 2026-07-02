"use client";

import { useEffect, useRef } from "react";

export default function GiscusComments() {
  const ref = useRef(null);

  useEffect(() => {
    if (!ref.current || ref.current.hasChildNodes()) return;

    const script = document.createElement("script");
    script.src = "https://giscus.app/client.js";
    script.setAttribute("data-repo", "AudiHazael/hazaeldevs-portfolio");
    script.setAttribute("data-repo-id", "R_kgDOOs358A");
    script.setAttribute("data-category", "Announcements");
    script.setAttribute("data-category-id", "DIC_kwDOOs358M4DARJQ");
    script.setAttribute("data-mapping", "pathname");
    script.setAttribute("data-strict", "0");
    script.setAttribute("data-reactions-enabled", "1");
    script.setAttribute("data-emit-metadata", "0");
    script.setAttribute("data-input-position", "top");
    script.setAttribute("data-theme", "transparent_dark");
    script.setAttribute("data-lang", "en");
    script.setAttribute("data-loading", "lazy");
    script.crossOrigin = "anonymous";
    script.async = true;

    ref.current.appendChild(script);
  }, []);

  return (
    <div className="mt-12 pt-10 border-t border-zinc-800">
      <h3 className="text-lg font-bold text-zinc-50 mb-6">Comments</h3>
      <div ref={ref} />
    </div>
  );
}
