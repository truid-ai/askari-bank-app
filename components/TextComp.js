import { StyleSheet, Text, View } from "react-native";

const TextComp = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.enterText}>{props.Heading}</Text>
    </View>
  );
};
styles = StyleSheet.create({
  enterText: {
    fontSize: 13,
    fontWeight: "400",
    width: 365,
    marginTop: 0,
    textAlign: "left",
  },
});
export default TextComp;
