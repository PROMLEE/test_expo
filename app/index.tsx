// import React, { useRef, useState } from "react";
// import { Picker } from "@react-native-picker/picker";

// const App = () => {
//   const pickerRef = useRef<any>();
//   const [selected, setSelected] = useState<string>();

//   return (
//     <Picker
//       ref={pickerRef}
//       selectedValue={selected}
//       mode="dialog"
//       onValueChange={(itemValue) => setSelected(itemValue)}
//     >
//       <Picker.Item label="Java" value="java" />
//       <Picker.Item label="JavaScript" value="js" />
//       <Picker.Item label="Python" value="python" />
//       <Picker.Item label="C#" value="c#" />
//     </Picker>
//   );
// };

// export default App;

import React, { useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import { Dropdown } from "react-native-element-dropdown";

const data = [
  { label: "Java", value: "java" },
  { label: "JavaScript", value: "js" },
  { label: "Python", value: "python" },
  { label: "C#", value: "c#" },
];

const App = () => {
  const [value, setValue] = useState(null);

  return (
    <View style={styles.container}>
      <Dropdown
        style={styles.dropdown}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        data={data}
        labelField="label"
        valueField="value"
        placeholder="언어 선택"
        value={value}
        onChange={(item) => {
          setValue(item.value);
        }}
      />
      <Text>{value}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { padding: 16 },
  dropdown: {
    height: 50,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 12,
  },
  placeholderStyle: {
    fontSize: 16,
    color: "#999",
  },
  selectedTextStyle: {
    fontSize: 16,
    color: "#333",
  },
});

export default App;
