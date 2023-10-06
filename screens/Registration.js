import {
  ImageBackground,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Dimensions,
} from "react-native";
import { useState } from "react";
import TextInputArea from "../components/TextInputArea.js";
import Button from "../components/Button.js";
import RegistrationModal from "./RegistrationModal.js";
import RegistrationHeadingBar from "../components/RegistrationHeadingBar.js";
import BarImage from "../assets/RegistrationScreenImages/registrationScreenBar.png";
import OTPVerification from "../components/OTPVerification.js";
import { TopComp } from "../components/TopComp.js";
import { globalStyles } from "../styles/index.js";

const screenWidth = Dimensions.get("window").width;
const Registration = () => {
  const pattern = /^0\d{3}-\d{7}$/;
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");

  const setNumber = (val) => {
    setPhoneNumber(val);
    console.log(phoneNumber);
  };
  const setMail = (val) => {
    setEmail(val);
    console.log(email);
  };

  return (
    <View style={styles.container}>
      <RegistrationModal />
      <ImageBackground
        source={require("../assets/BackgroundImage/backgroundImage.png")}
        style={styles.backgroundImage}
      >
        <ScrollView
          contentContainerStyle={styles.innerContainer}
          showsVerticalScrollIndicator={false}
        >
          <TopComp
            heading={"Registration"}
            secondHeading={"Registration"}
            barImage={BarImage}
          />
          <View>
            <RegistrationHeadingBar Title={"Mobile Number"} />

            <Text style={globalStyles.label}>Enter Mobile Number *</Text>

            <TextInputArea
              Placeholder={"0xxx-xxxxxxx"}
              Heading={"Enter Mobile Number"}
              Keyboard={"numeric"}
              Func={setNumber}
            />

            {pattern.test(phoneNumber) ? (
              <View style={styles.OTPVerificationContainer}>
                <OTPVerification text="Enter the OTP sent to Phone Number" />
              </View>
            ) : null}
          </View>
          <View>
            <RegistrationHeadingBar Title={"Email Address"} />
            <Text style={globalStyles.label}>Enter Email Address *</Text>
            <TextInputArea
              Placeholder={"sample@gmail.com"}
              Heading={"Enter Email Address"}
              Keyboard={"email-address"}
              Func={setMail}
            />

            {emailPattern.test(email) ? (
              <View style={styles.OTPVerificationContainer}>
                <OTPVerification text="Enter the OTP sent to Email Address" />
              </View>
            ) : null}
          </View>
          <View style={styles.nextButton}>
            <Button Text={"Next"} />
          </View>
        </ScrollView>
      </ImageBackground>
    </View>
  );
};
export default Registration;
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column", // Vertical layout
    justifyContent: "space-between",
    paddingHorizontal: 5,
  },

  backgroundImage: {
    resizeMode: "cover",
    width: "100%",
    height: "100%",
    alignItems: "center",
    flexGrow: 1,
  },
  OTPVerificationContainer: {
    width: screenWidth * 0.95,
  },
  label: { textAlign: "left", width: "100%", margin: 10 },
  nextButton: { position: "absolute", bottom: 14, width: "100%" },
  innerContainer: { paddingBottom: 100, flexGrow: 1, width: "95%" },
});
