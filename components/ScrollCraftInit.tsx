"use client";

import { useEffect } from "react";
import { ScrollCraft } from "@/lib/scrollcraft";

export default function ScrollCraftInit() {
  useEffect(() => {
    if (!ScrollCraft || typeof window === "undefined") return;

    // Small timeout to ensure initial layout has computed
    const timer = setTimeout(() => {
      const instance = ScrollCraft.mount(document.body);
      return () => {
        if (instance && typeof instance.destroy === "function") {
          instance.destroy();
        }
      };
    }, 50);

    return () => clearTimeout(timer);
  }, []);

  return <div data-sc-progress aria-hidden="true" className="sc-progress-bar" />;
}
