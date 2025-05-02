// 예시 화면 파일: app/generateQRScreen.tsx

import React from "react";
import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import MyQRCode from "../components/MyQRCode"; // 위에서 만든 QR 코드 컴포넌트

export default function GenerateQRScreen() {
  // 예시 딥링크 URL (실제 앱 스킴과 경로에 맞게 수정 필요)
  const deepLinkUrl =
    "myawesomeapp://products/detail?productId=777&source=qrcode";

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text style={styles.title}>상품 상세 페이지 딥링크 QR 코드</Text>
        <Text style={styles.description}>
          아래 QR 코드를 스캔하면 앱의 상품 상세 페이지(ID: 777)로 이동합니다.
        </Text>

        {/* MyQRCode 컴포넌트에 딥링크 URL 전달 */}
        <MyQRCode value={deepLinkUrl} size={200} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#fff",
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 15,
    textAlign: "center",
  },
  description: {
    fontSize: 14,
    color: "#555",
    textAlign: "center",
    marginBottom: 30,
  },
});
