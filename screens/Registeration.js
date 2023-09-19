import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Modal,
  KeyboardAvoidingView,
  ScrollView,
} from "react-native";
import { useState } from "react";
import TextInputArea from "../components/TextInputArea.js";
import Button from "../components/Button";
import RegisterationModal from "./RegisterationModal";
import RegisterationHeadingBar from "../components/RegisterationHeadingBar.js";

const Registeration = () => {
  const [phoneNumber, setPhoneNumber] = useState(null);

  return (
    <View style={styles.container}>
      <RegisterationModal />

      <ImageBackground
        source={require("../assets/RegisterationScreenImages/registerationScreenBackground.png")}
        style={styles.backgroundImage}
      >
        <View style={styles.topBar}>
          <View style={styles.iconContainer}>
            <Image
              source={require("../assets/RegisterationScreenImages/backArrow.png")}
              style={styles.iconImage}
            />
            <Text style={styles.topBarText}>Registeration</Text>
          </View>
          <View style={styles.logoContainer}>
            <Image
              source={require("../assets/RegisterationScreenImages/registerationScreenLogo.png")}
              style={styles.logoImage}
            />
          </View>
        </View>
        <View>
          <Image
            source={require("../assets/RegisterationScreenImages/registerationScreenBar.png")}
            style={styles.screenBar}
          />
        </View>
        <View style={styles.midBar}>
          <Image
            source={require("../assets/RegisterationScreenImages/registerationScreenIcon.png")}
            style={styles.askariIcon}
          />
          <Text style={styles.midBarText}>Registeration</Text>
        </View>
        <RegisterationHeadingBar Title={"Mobile Number"} />
        <TextInputArea
          Placeholder={"      +92-xxx-xxxxxxx"}
          Heading={"Enter Mobile Number"}
          Keyboard={"numeric"}
        />
        {phoneNumber ? (
          <View>
            <RegisterationHeadingBar Title={"OTP Verification"} />
          </View>
        ) : null}
        <RegisterationHeadingBar Title={"Email Address"} />
        <TextInputArea
          Placeholder={"      sample@gmail.com"}
          Heading={"Enter Email Address"}
          Keyboard={"email-address"}
        />

        <View style={styles.nextButton}>
          <Button Text={"Next"} />
        </View>
      </ImageBackground>
    </View>
  );
};
export default Registeration;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column", // Vertical layout
    justifyContent: "space-between",
  },
  topBar: {
    backgroundColor: "#009BDF",
    marginTop: 52,
    width: 368,
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
  },
  midBar: {
    flexDirection: "row",
    width: 361,
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

  nextButton: {
    position: "absolute",
    bottom: 0,
    marginBottom: 10,
  },
});
