import { TextInput, Text, View, StyleSheet } from "react-native";
import { useState } from "react";
import TextComp from "./TextComp";
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
      <TextInput
        placeholder={props.Placeholder}
        keyboardType={props.Keyboard}
        placeholderTextColor={isFocused ? "#009BDF" : "gray"}
        style={[styles.Input, { borderColor: isFocused ? "#009BDF" : "gray" }]}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onChangeText={(val) => {
          props.Func(val);
        }}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: { top: 20 },
  Input: {
    width: 360,
    marginTop: 15,
    borderBottomWidth: 1,
    height: 50,
    paddingLeft: 20,
  },
});
export default TextInputArea;
