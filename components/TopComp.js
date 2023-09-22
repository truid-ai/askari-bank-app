import { Image, StyleSheet, Text, View } from "react-native";

const TopComp = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
        <View style={styles.iconContainer}>
          <Image
            source={require("../assets/RegistrationScreenImages/backArrow.png")}
            style={styles.iconImage}
          />
          <Text style={styles.topBarText}>{props.Heading}</Text>
        </View>
        <View style={styles.logoContainer}>
          <Image
            source={require("../assets/Askaribank/askariBank.png")}
            style={styles.logoImage}
          />
        </View>
      </View>
      <View>
        <Image source={props.BarImage} style={styles.screenBar} />
      </View>
      <View style={styles.midBar}>
        <Image
          source={require("../assets/RegistrationScreenImages/registrationScreenIcon.png")}
          style={styles.askariIcon}
        />
        <Text style={styles.midBarText}>{props.SecondHeading}</Text>
      </View>
    </View>
  );
};
styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
  topBar: {
    backgroundColor: "#009BDF",
    marginTop: 52,
    width: 369.2,
    height: 51,
    borderRadius: 4,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  logoImage: {
    width: 136,
    height: 21.5,
  },
  logoContainer: {
    marginLeft: 10,
    marginRight: 10,
  },
  iconContainer: {
    marginRight: 10, // Add some right margin to the icon (adjust as needed)
    flexDirection: "row",
  },
  iconImage: {
    width: 24,
    height: 24,
    marginLeft: 10,
  },
  topBarText: {
    color: "#FFF",
    fontWeight: "600",
    fontSize: 15,
    marginLeft: 5,
  },
  screenBar: {
    width: 369.2,
    height: 14.3,
    marginTop: 30,
  },
  backgroundImage: {
    resizeMode: "cover",
    width: "100%",
    height: "100%",
    alignItems: "center",
    flexGrow: 1,
  },
  midBar: {
    flexDirection: "row",
    width: 369.2,
    height: 45.4,
    backgroundColor: "#EBF8FF",
    marginTop: 26.7,
    alignItems: "center",
  },
  askariIcon: {
    width: 21,
    height: 25.4,
    marginLeft: 6,
  },
  midBarText: {
    color: "#009BDF",
    fontWeight: "500",
    lineHeight: 18.15,
    fontSize: 15,
    marginLeft: 7,
  },
});
export default TopComp;
