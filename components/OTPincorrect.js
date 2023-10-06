import {
  Modal,
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";
import OTPIncorrectGif from "../assets/RegistrationScreenImages/OTPincorrect/otpIncorrectGif.gif";

import Button from "./Button";
import { globalStyles } from "../styles";

const OTPincorrect = (props) => {
  return (
    <View style={styles.container}>
      <Image source={OTPIncorrectGif} style={styles.gif} />
      <View style={styles.textLayout}>
        <Text style={styles.OTPtext}>OTP is incorrect, Please try again.</Text>
      </View>
      <View style={globalStyles.btn}>
        <Button Text={"TRY AGAIN"} type={"ModalBtn"} func={props.func} />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    width: 342,
    height: 400,
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    alignItems: "center",
  },
  gif: {
    width: 174,
    height: 214,
    marginTop: 18,
    marginBottom: 10,
  },
  OTPtext: {
    fontWeight: "400",
    fontSize: 17,
    lineHeight: 21.78,
    textAlign: "center",
  },
  textLayout: {
    width: 276,
  },
  btn: {
    position: "absolute",
    bottom: 0,
    backgroundColor: "#009BDF",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 4,
    width: 308,
    height: 56,
    justifyContent: "center",
    marginBottom: 20,
  },
  btnText: {
    color: "white",
    fontSize: 15,
    fontWeight: "500",
    textAlign: "center",
  },
});
export default OTPincorrect;
