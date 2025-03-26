import React, { useRef } from "react";
import { Text, StyleSheet, View, Button } from "react-native";
import BottomSheet from "@gorhom/bottom-sheet";
import CustomBottomSheet from "@/components/ui/CustomBottomSheet";

const App = () => {
  // ref
  const bottomSheetRef = useRef<BottomSheet>(null);

  // renders
  return (
    <View style={styles.container}>
      <Button title="expand" onPress={() => bottomSheetRef.current?.expand()} />
      <CustomBottomSheet
        component={
          <View style={styles.contentContainer}>
            <Text>Awesome 🎉</Text>
            <Button
              title="close"
              onPress={() => bottomSheetRef.current?.close()}
            />
          </View>
        }
        bottomSheetModalRef={bottomSheetRef}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  contentContainer: {
    flex: 1,
    padding: 36,
    alignItems: "center",
  },
});

export default App;
