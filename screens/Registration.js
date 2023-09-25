import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  KeyboardAvoidingView,
  ScrollView,
  View,
  Dimensions,
} from "react-native";
import { useEffect, useState } from "react";
import TextInputArea from "../components/TextInputArea.js";
import Button from "../components/Button.js";
import RegistrationModal from "./RegistrationModal.js";
import RegistrationHeadingBar from "../components/RegistrationHeadingBar.js";
import BarImage from "../assets/RegistrationScreenImages/registrationScreenBar.png";
import OTPVerification from "../components/OTPVerification.js";
import TopComp from "../components/TopComp.js";
import TextComp from "../components/TextComp.js";

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
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.innerContainer}>
            <TopComp
              Heading={"Registration"}
              SecondHeading={"Registration"}
              BarImage={BarImage}
            />
            <RegistrationHeadingBar Title={"Mobile Number"} />

            <TextComp Heading={"Enter Mobile Number" + " *"} />

            <TextInputArea
              Placeholder={"0xxx-xxxxxxx"}
              Heading={"Enter Mobile Number"}
              Keyboard={"numeric"}
              Func={setNumber}
            />

            {pattern.test(phoneNumber) ? (
              <OTPVerification Text={"Enter the OTP sent to Phone Number"} />
            ) : null}
            <RegistrationHeadingBar Title={"Email Address"} />
            <TextComp Heading={"Enter Email Address" + " *"} />
            <TextInputArea
              Placeholder={"sample@gmail.com"}
              Heading={"Enter Email Address"}
              Keyboard={"email-address"}
              Func={setMail}
            />
            {emailPattern.test(email) ? (
              <OTPVerification Text={"Enter the OTP sent to Email Address"} />
            ) : null}

            <View style={styles.nextButton}>
              <Button Text={"Next"} />
            </View>
          </View>
        </ScrollView>
      </ImageBackground>
    </View>
  );
};
export default Registration;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column", // Vertical layout
    justifyContent: "space-between",
  },

  backgroundImage: {
    resizeMode: "cover",
    width: "100%",
    height: "100%",
    alignItems: "center",
    flexGrow: 1,
  },

  nextButton: {},
  innerContainer: { alignItems: "center" },
});
