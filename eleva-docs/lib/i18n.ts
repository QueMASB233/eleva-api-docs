import type { Locale } from "@/contexts/LocaleContext";

import en from "@/messages/en.json";
import es from "@/messages/es.json";

const messages: Record<Locale, Record<string, string>> = {
  en: flatten(en) as Record<string, string>,
  es: flatten(es) as Record<string, string>,
};

function flatten(obj: Record<string, unknown>, prefix = ""): Record<string, unknown> {
  const out: Record<string, unknown> = {};
  for (const [k, v] of Object.entries(obj)) {
    const key = prefix ? `${prefix}.${k}` : k;
    if (v !== null && typeof v === "object" && !Array.isArray(v)) {
      Object.assign(out, flatten(v as Record<string, unknown>, key));
    } else {
      out[key] = v;
    }
  }
  return out;
}

export function getTranslation(locale: Locale, key: string): string {
  const value = messages[locale]?.[key];
  return typeof value === "string" ? value : (messages.en?.[key] as string) ?? key;
}
