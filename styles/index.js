import { StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({
  label: { textAlign: "left", width: "100%", margin: 10 },
  btn: {
    position: "absolute",
    bottom: 0,
    marginBottom: "5%",
  },
  backgroundImage: {
    resizeMode: "cover",
    width: "100%",
    height: "100%",
    alignItems: "center",
    flexGrow: 1,
  },
});
