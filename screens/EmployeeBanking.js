import React, { useState } from "react";
import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
} from "react-native";
import image from "../assets/BackgroundImage/backgroundImage.png";
import { globalStyles } from "../styles";
import { TopComp } from "../components/TopComp.js";
import barImage from "../assets/AccountTypeSelection/screenBar.png";
import Button from "../components/Button";
import OTPVerification from "../components/OTPVerification";
const EmployeeBanking = () => {
  const arr = [
    { heading: "EB-ID", text: "Enter the EB-ID", placeholder: "EB-ID" },
    {
      heading: "Employee Number",
      text: "Enter the Employee Number",
      placeholder: "Employee Number",
    },
    {
      heading: "Employee Name",
      text: "Enter the Employee Name",
      placeholder: "Employee Name",
    },
  ];

  const [selectedInputIndex, setSelectedInputIndex] = useState(null);

  const handleInputFocus = (index) => {
    setSelectedInputIndex(index);
  };

  return (
    <ImageBackground source={image} style={globalStyles.backgroundImage}>
      <TopComp
        heading={"AccountType"}
        secondHeading={"Employee Conventional/Islamic Details"}
        barImage={barImage}
      />
      <View style={styles.textDiv}>
        <Text style={styles.text}>Employee Details</Text>
      </View>
      <View style={styles.lowerDiv}>
        <ScrollView>
          <View style={{ alignItems: "center", paddingHorizontal: "10%" }}>
            {arr.map((item, index) => {
              const isInputSelected = selectedInputIndex === index;

              return (
                <View style={styles.lowerInnerDiv} key={`input-${index}`}>
                  <View style={styles.heading}>
                    <Text style={styles.headingText}>{item.heading}</Text>
                  </View>
                  <Text style={styles.lowerDivText}>{item.text}</Text>
                  <TextInput
                    placeholder={item.placeholder}
                    placeholderTextColor={
                      isInputSelected ? "#009BDF" : "#BCBCBC"
                    }
                    style={[
                      styles.input,
                      {
                        borderColor: isInputSelected ? "#009BDF" : "#BCBCBC",
                        color: isInputSelected ? "#009BDF" : "#000000", // Change text color for selected input
                      },
                    ]}
                    onFocus={() => handleInputFocus(index)}
                  />
                </View>
              );
            })}
            <OTPVerification
              text="Enter the OTP sent to Email Address"
              type="EmployeeBanking"
            />
          </View>
        </ScrollView>
      </View>
      <View style={globalStyles.btn}>
        <Button Text={"Next"} />
      </View>
    </ImageBackground>
  );
};
const styles = StyleSheet.create({
  textDiv: {
    backgroundColor: "#FFF",
    width: 360,
    height: 37,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 21,
    ...Platform.select({
      ios: {
        shadowColor: "#0083CB",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
      },
      android: {
        shadowColor: "#0083CB",
        elevation: 5,
        borderBottomWidth: 4, // Add a bottom border
        borderBottomColor: "transparent", // Color of the bottom border
      },
    }),
  },
  text: {
    color: "#009BDF",
    fontWeight: "500",
    fontSize: 14,
    textAlign: "center",
  },
  lowerDiv: {
    width: 360,
    height: 409,
    backgroundColor: "#FFF",
    marginTop: 13,

    ...Platform.select({
      ios: {
        shadowColor: "#0083CB",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
      },
      android: {
        shadowColor: "#0083CB",
        elevation: 5,
        borderBottomWidth: 4, // Add a bottom border
        borderBottomColor: "transparent", // Color of the bottom border
      },
    }),
    alignItems: "center",
  },
  lowerInnerDiv: {
    width: 282,
    height: 107,
    marginTop: 20,
  },
  heading: {
    height: 37,
    backgroundColor: "#EBF8FF",
    alignItems: "center",
    justifyContent: "center",
  },
  headingText: {
    fontWeight: "500",
    color: "#009BDF",
    fontSize: 14,
  },
  lowerDivText: {
    fontWeight: "500",
    fontSize: 12,
    color: "#697D95",
    marginTop: 10,
  },
  input: {
    borderBottomWidth: 1,
    height: 50,
    paddingLeft: 20,
  },
});
export default EmployeeBanking;
