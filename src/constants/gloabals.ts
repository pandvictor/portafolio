import enData from '../../public/assets/translations/en.json';
import esData from '../../public/assets/translations/es.json';

export const translationsData = { es: esData, en: enData };
const basePath = (import.meta.env.BASE_URL || '/').replace(/\/$/, '');
export const publicPath = `${basePath}/assets`;
export const version = '2.0.0';
