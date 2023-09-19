import { StyleSheet, Text, View } from "react-native";
const RegisterationHeadingbar = (props) => {
  return (
    <View style={styles.detsBar}>
      <Text style={styles.detsText}>{props.Title}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  detsBar: {
    backgroundColor: "#EBF8FF",
    width: 360,
    height: 37,
    borderRadius: 2,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 24,
  },
  detsText: {
    fontWeight: "500",
    fontSize: 14,
    color: "#009BDF",
  },
});
export default RegisterationHeadingbar;
