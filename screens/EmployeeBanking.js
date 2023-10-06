import React, { useState } from "react";
import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
  Dimensions,
} from "react-native";
import image from "../assets/BackgroundImage/backgroundImage.png";
import { globalStyles } from "../styles";
import { TopComp } from "../components/TopComp.js";
import barImage from "../assets/AccountTypeSelection/screenBar.png";
import Button from "../components/Button";
import OTPVerification from "../components/OTPVerification";
const screenWidth = Dimensions.get("window").width;

const EmployeeBanking = () => {
  const [employeeId, setEmployeeId] = useState("");
  const [employeeAccountType, setEmployeeAccountType] = useState("");
  const [employeeNumber, setEmployeeNumber] = useState("");
  const [employeeName, setEmployeeName] = useState("");
  const [OTPCheck, setOTPCheck] = useState(false);
  const arr = [
    {
      key: "ebId",
      heading: "EB-ID",
      text: "Enter the EB-ID",
      placeholder: "EB-ID",
      setValue: setEmployeeId,
    },
    {
      key: "employeeAccountType",
      heading: "Employee Account Type",
      type: ["Islamic", "Conventional"],
      setValue: setEmployeeAccountType,
    },
    {
      key: "employeeNumber",
      heading: "Employee Number",
      text: "Enter the Employee Number",
      placeholder: "Employee Number",
      setValue: setEmployeeNumber,
    },
    {
      key: "employeeName",
      heading: "Employee Name",
      text: "Enter the Employee Name",
      placeholder: "Employee Name",
      setValue: setEmployeeName,
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
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            alignItems: "center",
            paddingBottom: 100,
          }}
        >
          {arr.map((item, index) => {
            const isInputSelected = selectedInputIndex === index;

            return (
              <View style={styles.lowerInnerDiv} key={`input-${index}`}>
                <View style={styles.heading}>
                  <Text style={styles.headingText}>{item.heading}</Text>
                </View>
                {item.key === "employeeAccountType" ? (
                  <View style={styles.typeDiv}>
                    {item.type.map((type, index) => (
                      <View style={styles.type} key={"type" + index}>
                        <Text style={styles.typeText}>{type}</Text>
                      </View>
                    ))}
                  </View>
                ) : (
                  <View>
                    <Text style={styles.lowerDivText}>{item.text}</Text>
                    <TextInput
                      placeholder={item.placeholder}
                      placeholderTextColor={
                        isInputSelected ? "#009BDF" : "#BCBCBC"
                      }
                      onChangeText={(val) => {
                        item.setValue(val);
                      }}
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
                )}
              </View>
            );
          })}
          {employeeId != "" && employeeName != "" && employeeNumber != "" ? (
            <View style={{ width: screenWidth * 0.95, padding: 10 }}>
              <OTPVerification
                text="Enter the OTP sent to Email Address"
                type="EmployeeBanking"
              />
            </View>
          ) : null}
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
    width: screenWidth * 0.95,
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
    width: screenWidth * 0.95,
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
    width: screenWidth * 0.85,
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
  typeDiv: {
    paddingVertical: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
  },
  type: {
    width: "47%",
    height: 60,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
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
  typeText: {
    color: "#009BDF",
    fontSize: 13,
    fontWeight: "400",
  },
});
export default EmployeeBanking;
