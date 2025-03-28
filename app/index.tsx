import React from "react";
import "@/localization";
import { View, Text, Button } from "react-native";
import { useTranslation } from "react-i18next";
import AsyncStorage from "@react-native-async-storage/async-storage";

const App = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = async (language: "en" | "ko" | "ar") => {
    i18n.changeLanguage(language);
    await AsyncStorage.setItem("@app_language", language);
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        gap: 20,
      }}
    >
      <Text>{t("welcome")}</Text>
      <Button title="English" onPress={() => changeLanguage("en")} />
      <Button title="Korean" onPress={() => changeLanguage("ko")} />
      <Button title="Arabic" onPress={() => changeLanguage("ar")} />
    </View>
  );
};

export default App;
