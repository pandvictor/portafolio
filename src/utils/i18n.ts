
import { I18n } from 'i18n-js';
import { translationsData } from '../constants/gloabals';

const i18n = new I18n();

i18n.translations = translationsData;

i18n.defaultLocale = "en";
i18n.locale = "en";

export default i18n;
