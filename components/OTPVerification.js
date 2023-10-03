import {
  Modal,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import RegistrationHeadingBar from "./RegistrationHeadingBar";
import { useEffect, useState } from "react";
import OTPIncorrectComp from "./OTPincorrect";
import { globalStyles } from "../styles";

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
        <View
          key={i}
          style={[
            props.type == "EmployeeBanking"
              ? { width: 61, height: 53 }
              : { width: 76, height: 66 },
            styles.verificationBox,
          ]}
        >
          <TextInput style={styles.OTPcode} keyboardType="numeric" />
        </View>
      );
    }

    return components;
  };

  return (
    <View style={styles.otpContainer}>
      <View style={styles.otpTitleBar}>
        <RegistrationHeadingBar Title={"OTP Verification"} />
      </View>
      <View style={styles.otpInnerText}>
        <Text style={styles.otpLabel}>{props.text}</Text>
        <TouchableOpacity>
          <Text style={styles.touchableText}>Edit</Text>
        </TouchableOpacity>
      </View>
      <View style={[styles.verificationBoxDiv]}>{OTPcode(4)}</View>
      <View style={styles.timer}>
        <Text>{formattedTime}</Text>
      </View>
      <View style={styles.bottomDiv}>
        <View style={styles.resendDiv}>
          <Text style={[globalStyles.label, { flex: 3 }]}>
            Didn't receive code ?
          </Text>
          <TouchableOpacity
            style={{ flex: 2 }}
            onPress={onResend}
            disabled={resendCheck}
          >
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
      <Modal
        animationType="slide" // You can change the animation type as needed
        transparent={true}
        visible={OTPincorrect}
      >
        <OTPIncorrectComp Func={toggleModal} />
      </Modal>
    </View>
  );
};
const styles = StyleSheet.create({
  otpTitleBar: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  otpLabel: {
    fontSize: 12,
    color: "#697d95",
  },
  otpContainer: {
    borderRadius: 8,
    backgroundColor: "#FFFFFF",
    marginTop: 8,
    gap: 10,
    alignItems: "center",
    maxWidth: "100%",
    width: "100%",
    marginBottom: 50,
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
    justifyContent: "space-between",
    width: "100%",
  },
  touchableText: {
    color: "#009BDF",
    fontSize: 12,
  },
  verificationBox: {
    borderColor: "#009BDF",
    borderWidth: 1,
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
    flexDirection: "row",
    gap: "15%",
  },
  timer: {
    display: "flex",
    width: "100%",
    textAlign: "left",
  },
  bottomDiv: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
  },
  bottomDivText: {
    flexDirection: "row",
  },
  verifyBtn: {
    backgroundColor: "#009BDF",
    borderRadius: 5,
    width: 100,
    height: 38,
    justifyContent: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "center",
  },
  resendDiv: {},
  label: { fontWeight: "500", fontSize: 12, color: "#697D95" },
});
export default OTPVerification;
