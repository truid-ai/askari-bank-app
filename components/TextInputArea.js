import { TextInput, Text, View, StyleSheet } from "react-native";
import { useState } from "react";
const TextInputArea = (props) => {
  const [isFocused, setIsFocused] = useState(false);
  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.enterText}>{props.Heading} *</Text>
      </View>
      <TextInput
        placeholder={props.Placeholder}
        keyboardType={props.Keyboard}
        placeholderTextColor={isFocused ? "#009BDF" : "gray"}
        style={[styles.Input, { borderColor: isFocused ? "#009BDF" : "gray" }]}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    width: 360,
    top: 20,
  },
  enterText: {
    fontSize: 13,
    fontWeight: "400",
  },
  Input: {
    width: 360,
    marginTop: 25,
    borderBottomWidth: 1,
    height: 50,
  },
});
export default TextInputArea;
