import Icon from "react-native-vector-icons/FontAwesome";
import { View, Text, StyleSheet } from "react-native";

export const Disclaimer = (props) => {
  return (
    <View style={styles.disclaimerDiv}>
      <Icon name="exclamation-circle" color={props.iconColor} size={14} />
      <Text style={[styles.alertText, { color: props.textColor }]}>
        {props.text}
      </Text>
    </View>
  );
};
const styles = StyleSheet.create({
  disclaimerDiv: {
    width: 361,
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
  alertText: {
    fontWeight: "100",
    fontSize: 14,
  },
});
