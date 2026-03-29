import { useEffect } from "react";

export default function useSEO({ title, description, canonical, ogImage, type = "website" }) {
  useEffect(() => {
    const siteName = "Target Media Ads";
    const fullTitle = title ? `${title} | ${siteName}` : `${siteName} | Mobile Performance Network`;
    const baseUrl = "https://www.targetmedia-ads.com";
    const ogImg = ogImage || `${baseUrl}/og-image.jpg`;
    const canonicalUrl = canonical ? `${baseUrl}${canonical}` : baseUrl;

    document.title = fullTitle;

    const setMeta = (selector, value) => {
      let el = document.querySelector(selector);
      if (!el) {
        el = document.createElement("meta");
        if (selector.includes("property=")) {
          el.setAttribute("property", selector.match(/property="([^"]+)"/)[1]);
        } else {
          el.setAttribute("name", selector.match(/name="([^"]+)"/)[1]);
        }
        document.head.appendChild(el);
      }
      el.setAttribute("content", value);
    };

    const setLink = (rel, href) => {
      let el = document.querySelector(`link[rel="${rel}"]`);
      if (!el) {
        el = document.createElement("link");
        el.setAttribute("rel", rel);
        document.head.appendChild(el);
      }
      el.setAttribute("href", href);
    };

    if (description) {
      setMeta('meta[name="description"]', description);
      setMeta('meta[property="og:description"]', description);
      setMeta('meta[name="twitter:description"]', description);
    }

    setMeta('meta[property="og:title"]', fullTitle);
    setMeta('meta[name="twitter:title"]', fullTitle);
    setMeta('meta[property="og:url"]', canonicalUrl);
    setMeta('meta[name="twitter:url"]', canonicalUrl);
    setMeta('meta[property="og:type"]', type);
    setMeta('meta[property="og:image"]', ogImg);
    setMeta('meta[name="twitter:image"]', ogImg);

    setLink("canonical", canonicalUrl);
  }, [title, description, canonical, ogImage, type]);
}