import { Image, StyleSheet, Text, View } from "react-native";
import feature1 from "../assets/AccountFeatures/feature1.png";
import feature2 from "../assets/AccountFeatures/feature2.png";
import feature3 from "../assets/AccountFeatures/feature3.png";
import feature4 from "../assets/AccountFeatures/feature4.png";

const AccountFeatures = () => {
  const arr = [
    { icon: feature1, title: "Feature 1" },
    { title: "Feature 2", icon: feature2 },
    { title: "Feature 3", icon: feature3 },
    { title: "Feature 4", icon: feature4 },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.featuresDiv}>
        {arr.map((item, index) => {
          return (
            <View key={index} style={styles.features}>
              <Image style={styles.icon} source={item.icon} />
              <Text style={styles.featureTitle}>{item.title}</Text>
            </View>
          );
        })}
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    width: 360,
    height: 158,
    borderRadius: 5,
    backgroundColor: "#FFFFFF",
    marginTop: 10,
    gap: 5,
    ...Platform.select({
      ios: {
        shadowColor: "#EBF8FF",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
      },
      android: {
        shadowColor: "#009BDF",
        elevation: 5,
        borderBottomWidth: 4, // Add a bottom border
        borderBottomColor: "transparent", // Color of the bottom border
      },
    }),
  },
  features: {
    width: 330,
    height: 28,
    backgroundColor: "#EBF8FF",
    borderRadius: 22,
    alignItems: "center",
    flexDirection: "row",
  },
  featuresDiv: {
    gap: 8,
    marginTop: 10,
  },
  icon: {
    width: 20,
    height: 18,
    marginLeft: 10,
  },
  featureTitle: {
    marginLeft: 10,
    fontWeight: "400",
    fontSize: 12,
    lineHeight: 14.52,
    color: "#098BDF",
  },
});
export default AccountFeatures;
