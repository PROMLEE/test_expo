import React, { useReducer } from "react";
import { StyleSheet, Pressable, Text } from "react-native";
import { MotiView } from "moti";
import { Skeleton } from "moti/skeleton";

const Spacer = ({ height = 16 }) => <MotiView style={{ height }} />;

export default function HelloWorld() {
  const [dark, toggle] = useReducer((s) => !s, true);

  const colorMode = dark ? "dark" : "light";

  return (
    <Pressable onPress={toggle} style={styles.container}>
      <MotiView
        transition={{
          type: "timing",
        }}
        style={[styles.container, styles.padded]}
        animate={{ backgroundColor: dark ? "#000000" : "#ffffff" }}
      >
        <Skeleton
          colorMode={colorMode}
          radius="round"
          height={75}
          width={75}
          show={colorMode === "dark"}
        >
          <Text>Hello</Text>
        </Skeleton>
        <Spacer />
        <Skeleton colorMode={colorMode} width={250} />
        <Spacer height={8} />
        <Skeleton colorMode={colorMode} width={"100%"} />
        <Spacer height={8} />
        <Skeleton colorMode={colorMode} width={"100%"} />
      </MotiView>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  padded: {
    padding: 16,
  },
});
