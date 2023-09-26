import { StyleSheet, Text, View } from "react-native";

export const TextComp = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.enterText}>{props.text}</Text>
    </View>
  );
};
styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    textAlign: "left",
    width: "100%",
    flex: 1,
  },
  enterText: {
    fontSize: 13,
    fontWeight: "400",
    marginTop: "3%",
  },
});
