import { useMemo } from "react";
import i18n from "./i18n";
import { useLanguage } from "../context/LanguageContext";

/**
 * Reads a translation subtree and recomputes it when the language changes.
 *
 * `i18n.t()` reads a mutable global (`i18n.locale`), so the active language is
 * a real dependency that the linter cannot see. Every page used to spell this
 * out with its own `useMemo(..., [language])` and its own lint warning; the
 * exception now lives here once.
 */
export const useTranslated = <T,>(key: string): T => {
  const { language } = useLanguage();
  // `language` is the real trigger: `key` alone would return stale copy after
  // a language switch, because i18n.t reads the mutable global locale.
  // eslint-disable-next-line react-hooks/exhaustive-deps
  return useMemo(() => i18n.t(key) as T, [key, language]);
};

/** Same, for keys that hold an array. */
export const useTranslatedList = <T,>(key: string): T[] => {
  const value = useTranslated<unknown>(key);
  return Array.isArray(value) ? (value as T[]) : [];
};
