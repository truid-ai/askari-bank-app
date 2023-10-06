import { Dimensions, StyleSheet } from "react-native";
const screenWidth = Dimensions.get("window").width;

export const globalStyles = StyleSheet.create({
  label: { textAlign: "left", width: "100%" },
  btn: {
    position: "absolute",
    bottom: 0,
    marginBottom: "5%",
    width: screenWidth * 0.95,
  },
  backgroundImage: {
    height: "100%",
    alignItems: "center",
  },
});
