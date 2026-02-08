import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToHash() {
  const { hash } = useLocation();

  useEffect(() => {
    if (!hash) return;

    const element = document.querySelector(hash);
    if (element) {
      // Delay ensures DOM is fully rendered
      setTimeout(() => {
        element.scrollIntoView({ behavior: "smooth" });
      }, 0);
    }
  }, [hash]);

  return null;
}
