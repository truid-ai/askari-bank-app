import { Image, StyleSheet, Text, View, Platform } from "react-native";

export const TopComp = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
        <View style={styles.iconContainer}>
          <Image
            source={require("../assets/RegistrationScreenImages/backArrow.png")}
            style={styles.iconImage}
          />
          <Text style={styles.topBarText}>{props.heading}</Text>
        </View>
        <View style={styles.logoContainer}>
          <Image
            source={require("../assets/Askaribank/askariBank.png")}
            style={styles.logoImage}
          />
        </View>
      </View>
      <View>
        <Image source={props.barImage} style={styles.screenBar} />
      </View>
      <View style={styles.midBar}>
        <Image
          source={require("../assets/RegistrationScreenImages/registrationScreenIcon.png")}
          style={styles.askariIcon}
        />
        <Text style={styles.midBarText}>{props.secondHeading}</Text>
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
    marginTop: "12%",
    width: 361,
    height: 51,
    borderRadius: 4,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  logoImage: {
    ...Platform.select({
      ios: {
        width: 138,
      },
      android: {
        width: 136,
      },
    }),
    height: 21.5,
  },
  logoContainer: {
    marginLeft: 10,
    marginRight: 10,
    justifyContent: "center",
  },
  iconContainer: {
    marginRight: "5%", // Add some right margin to the icon (adjust as needed)
    flexDirection: "row",
    alignItems: "center",
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
    width: 360,
    marginTop: "6%",
    ...Platform.select({
      ios: {
        height: 13.5,
      },
      android: {
        height: 13.8,
      },
    }),
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
    width: 361,
    height: 50,
    backgroundColor: "#EBF8FF",
    marginTop: "7%",
    alignItems: "center",
    borderRadius: 3,
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
    width: 279,
  },
});
