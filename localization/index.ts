import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import * as Localization from "expo-localization";
import AsyncStorage from "@react-native-async-storage/async-storage";
import translationEn from "./locales/en-US/translations.json";
import translationKo from "./locales/ko-KR/translations.json";
import translationAr from "./locales/ar-SA/translations.json";

const resources = {
  en: { translation: translationEn },
  ko: { translation: translationKo },
  ar: { translation: translationAr },
};

const LANGUAGE_KEY = "@app_language";

const initI18n = async () => {
  try {
    const savedLanguage = await AsyncStorage.getItem(LANGUAGE_KEY);
    let selectedLanguage = savedLanguage;

    if (!selectedLanguage) {
      const deviceLocales = Localization.getLocales();
      const deviceLocale = deviceLocales[0]?.languageTag || "en-US";
      const languageCode = deviceLocale.split("-")[0];

      if (languageCode in resources) {
        selectedLanguage = languageCode;
      } else {
        selectedLanguage = "en";
      }
    }

    await i18n.use(initReactI18next).init({
      resources,
      lng: selectedLanguage,
      fallbackLng: {
        "en-*": ["en"],
        "ko-*": ["ko"],
        "ar-*": ["ar"],
        default: ["en"],
      },
      interpolation: {
        escapeValue: false,
      },
      react: {
        useSuspense: false,
      },
    });

    if (!savedLanguage) {
      await AsyncStorage.setItem(LANGUAGE_KEY, selectedLanguage);
    }
  } catch (error) {
    await i18n.use(initReactI18next).init({
      resources,
      lng: "en",
      fallbackLng: "en",
      interpolation: {
        escapeValue: false,
      },
      react: {
        useSuspense: false,
      },
    });
  }
};

initI18n();

export default i18n;
