import { StyleSheet, Text, View } from "react-native";
const RegistrationHeadingbar = (props) => {
  return (
    <View style={styles.detsBar}>
      <Text style={styles.detsText}>{props.Title}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  detsBar: {
    backgroundColor: "#EBF8FF",
    width: 361,
    height: 37,
    borderRadius: 2,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
  },
  detsText: {
    fontWeight: "500",
    fontSize: 14,
    color: "#009BDF",
  },
});
export default RegistrationHeadingbar;
