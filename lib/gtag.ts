export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_ID;

type GtagEventParams = Record<string, string | number | boolean | undefined>;

export function pageview(url: string) {
  if (!GA_MEASUREMENT_ID || typeof window === "undefined" || !window.gtag) {
    return;
  }

  window.gtag("config", GA_MEASUREMENT_ID, {
    page_path: url,
  });
}

export function event(action: string, params: GtagEventParams = {}) {
  if (!GA_MEASUREMENT_ID || typeof window === "undefined" || !window.gtag) {
    return;
  }

  window.gtag("event", action, params);
}
