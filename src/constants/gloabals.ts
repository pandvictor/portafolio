import enData from '../../public/assets/translations/en.json';
import esData from '../../public/assets/translations/es.json';
import itData from '../../public/assets/translations/it.json';

export const translationsData = { en: enData, es: esData, it: itData };

/** Every language the site ships, in the order the switcher shows them. */
export const LANGUAGES = [
  { code: "en", label: "English", flag: "en.svg" },
  { code: "es", label: "Español", flag: "es.svg" },
  { code: "it", label: "Italiano", flag: "it.svg" },
] as const;

export type LanguageCode = (typeof LANGUAGES)[number]["code"];
const basePath = (import.meta.env.BASE_URL || '/').replace(/\/$/, '');
export const publicPath = `${basePath}/assets`;
export const version = '2.0.0';

/** The site root, honouring the deployment base path. */
export const homePath = `${basePath}/`.replace(/\/{2,}/g, "/");

/** Every "Download CV" affordance points at the printable resume. */
export const printResumePath = `${basePath}/printResume`.replace(/\/{2,}/g, "/");
