import {
  Modal,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import RegistrationHeadingBar from "./RegistrationHeadingBar";
import TextComp from "./TextComp";
import { useEffect, useState } from "react";
import OTPIncorrectComp from "./OTPincorrect";

const OTPVerification = (props) => {
  const [totalSeconds, setTotalSeconds] = useState(120); // Initial total seconds (2 minutes)
  const [formattedTime, setFormattedTime] = useState("00:00");
  const [OTPincorrect, setOTPincorrect] = useState(false);
  const [resendCheck, setResendCheck] = useState(true);
  const toggleModal = () => {
    setOTPincorrect(false);
  };
  const onResend = () => {
    setTotalSeconds(120);
    setResendCheck(true);
  };
  useEffect(() => {
    const interval = setInterval(() => {
      // Decrease the total seconds by 1
      if (totalSeconds >= 0) {
        setTotalSeconds((prevTotalSeconds) => prevTotalSeconds - 1);

        // Calculate minutes and seconds
        const minutes = Math.floor(totalSeconds / 60);
        const seconds = totalSeconds % 60;

        // Format the time as "mm:ss"
        const formattedMinutes = minutes.toString().padStart(2, "0");
        const formattedSeconds = seconds.toString().padStart(2, "0");
        setFormattedTime(`${formattedMinutes}:${formattedSeconds}`);

        // Check if the timer has reached 0 seconds
        if (totalSeconds === 0) {
          clearInterval(interval); // Stop the interval when the timer reaches 0
        }
      } else {
        setResendCheck(false);
      }
    }, 1000); // Update every 1000 milliseconds (1 second)

    // Cleanup the interval when the component unmounts
    return () => clearInterval(interval);
  }, [totalSeconds]);
  const OTPcode = (count) => {
    const components = [];

    for (let i = 0; i < count; i++) {
      components.push(
        <View key={i} style={styles.verificationBox}>
          <TextInput style={styles.OTPcode} keyboardType="numeric" />
        </View>
      );
    }

    return components;
  };

  return (
    <View style={styles.otpContainer}>
      <Modal
        animationType="slide" // You can change the animation type as needed
        transparent={true}
        visible={OTPincorrect}
      >
        <OTPIncorrectComp Func={toggleModal} />
      </Modal>

      <View style={styles.otpTitleBar}>
        <RegistrationHeadingBar Title={"OTP Verification"} />
      </View>
      <View style={styles.otpInnerText}>
        <View>
          <TextComp Heading={props.Text} />
        </View>
        <TouchableOpacity>
          <Text style={styles.touchableText}>Edit</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.verificationBoxDiv}>{OTPcode(4)}</View>
      <View style={styles.timer}>
        <TextComp Heading={formattedTime} />
      </View>
      <View style={styles.bottomDiv}>
        <View style={styles.bottomDivText}>
          <View style={styles.resendDiv}>
            <TextComp Heading={"Didn't receive code ? "} />
            <TouchableOpacity onPress={onResend} disabled={resendCheck}>
              <Text
                style={[
                  styles.touchableText,
                  resendCheck ? { color: "#BCBCBC" } : { color: "#009BDF" },
                ]}
              >
                Re-send
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.verifyBtn}>
          <TouchableOpacity>
            <Text
              style={styles.buttonText}
              onPress={() => {
                setOTPincorrect(true);
              }}
            >
              Verify
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  otpTitleBar: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  otpContainer: {
    width: 385,
    height: 263,
    borderRadius: 8,
    backgroundColor: "#FFFFFF",
    marginTop: 8,
    ...Platform.select({
      ios: {
        shadowColor: "#EBF8FF",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
      },
      android: {
        shadowColor: "#009BDF",
        elevation: 8,
        borderBottomWidth: 4, // Add a bottom border
        borderBottomColor: "transparent", // Color of the bottom border
      },
    }),
  },
  otpInnerText: {
    flexDirection: "row",

    marginLeft: 12,
    marginTop: 10,
    justifyContent: "space-between",
    alignItems: "center",
  },
  touchableText: {
    fontWeight: "500",
    color: "#009BDF",
    fontSize: 13,
    lineHeight: 15.3,
    marginTop: 2.5,
    marginRight: 13.5,
  },
  verificationBox: {
    borderColor: "#009BDF",
    borderWidth: 1,
    width: 76,
    height: 66,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  OTPcode: {
    borderColor: "#009BDF",
    borderBottomWidth: 1,
    color: "#009BDF",
    fontSize: 21,
    fontWeight: "500",
    textAlign: "center",
  },
  verificationBoxDiv: {
    marginLeft: 12,
    marginTop: 18,
    gap: 18.3,
    flexDirection: "row",
  },
  timer: {
    marginLeft: 12,
    marginTop: 10,
  },
  bottomDiv: {
    marginLeft: 12,
    marginBottom: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 20,
    marginRight: 13.5,
  },
  bottomDivText: {
    flexDirection: "row",
  },
  verifyBtn: {
    backgroundColor: "#009BDF",
    borderRadius: 5,
    width: 129,
    height: 38,
    justifyContent: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "center",
  },
  resendDiv: {
    flexDirection: "row",
  },
});
export default OTPVerification;
