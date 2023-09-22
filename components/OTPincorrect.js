import { Modal, View, Text, StyleSheet, Image } from "react-native";
import OTPIncorrectGif from "../assets/RegistrationScreenImages/OTPincorrect/otpIncorrectGif.gif";
import ModalButton from "./ModalButton";

const OTPincorrect = (props) => {
  return (
    <View style={styles.container}>
      <Image source={OTPIncorrectGif} style={styles.gif} />
      <View style={styles.textLayout}>
        <Text style={styles.OTPtext}>OTP is incorrect, Please try again.</Text>
      </View>

      <ModalButton style={styles.btn} Title={"Try Again"} Func={props.Func} />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    width: 342,
    height: 382,
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    alignItems: "center",
    top: 241,
    left: 19,
  },
  gif: {
    width: 174,
    height: 214,
    marginTop: 18,
  },
  OTPtext: {
    fontWeight: "400",
    fontSize: 18.8,
    lineHeight: 21.78,
    textAlign: "center",
  },
  textLayout: {
    width: 276,
    height: 44,
  },
});
export default OTPincorrect;
