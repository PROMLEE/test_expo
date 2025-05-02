// 예시 컴포넌트 파일: components/MyQRCode.tsx

import React from "react";
import { View, StyleSheet, Text } from "react-native";
import QRCode from "react-native-qrcode-svg"; // 라이브러리에서 QRCode 컴포넌트 가져오기

interface MyQRCodeProps {
  value: string; // QR 코드로 만들 값 (URL 등)
  size?: number; // QR 코드 크기 (선택적)
}

const MyQRCode: React.FC<MyQRCodeProps> = ({ value, size = 128 }) => {
  let logoFromFile = require("../assets/logo.png");
  if (!value) {
    // value 값이 없을 경우 에러 처리 또는 대체 UI 표시
    return (
      <View style={styles.container}>
        <Text>QR 코드를 생성할 값이 없습니다.</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <QRCode
        value={value} // QR 코드로 변환할 문자열 전달
        size={size} // QR 코드의 가로, 세로 크기 (기본값 128)
        logo={logoFromFile}
        logoSize={40}
        logoBackgroundColor="transparent"
        ecl="H"
        // --- 추가 옵션들 ---
        // color="black" // QR 코드 색상 (기본값 black)
        // backgroundColor="white" // 배경색 (기본값 white)
        // quietZone={10} // QR 코드 주변의 여백 크기
      />
      <Text style={styles.valueText}>데이터: {value}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  valueText: {
    marginTop: 10,
    fontSize: 12,
    color: "#666",
  },
});

export default MyQRCode;
